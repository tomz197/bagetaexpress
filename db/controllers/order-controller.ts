"use server";

import { db } from "@/db";
import {
  customer,
  item,
  order,
  Order,
  orderItem,
  school,
  School,
  schoolStore,
  User,
  user,
} from "../schema";
import { eq, and, sql, or } from "drizzle-orm";
import { getDate } from "@/lib/utils";
import { cache } from "react";

async function getOrderByPin(
  pin: Order["pin"],
  schoolId?: School["id"],
  status: Order["status"] = "ordered",
): Promise<Order | null> {
  let orders: Order[];

  if (schoolId) {
    orders = (
      await db
        .select({ order })
        .from(order)
        .innerJoin(customer, eq(order.userId, customer.userId))
        .where(
          and(
            eq(order.pin, pin),
            eq(order.status, status),
            eq(customer.schoolId, schoolId),
          ),
        )
    ).map((row) => row.order);
  } else {
    orders = await db
      .select()
      .from(order)
      .where(and(eq(order.pin, pin), eq(order.status, status)));
  }

  return orders[0] ?? null;
}

const getActiveOrder = cache(
  async (userId: Order["userId"]): Promise<Order | null> => {
    const [found] = await db
      .select()
      .from(order)
      .where(
        and(
          eq(order.userId, userId),
          or(eq(order.status, "ordered"), eq(order.status, "unpicked")),
        ),
      )
      .limit(1);
    return found ?? null;
  },
);

async function updateOrderStatus(
  orderId: Order["id"],
  status: Order["status"],
): Promise<void> {
  await db
    .update(order)
    .set({
      status,
      updatedAt: new Date().toISOString(),
    })
    .where(eq(order.id, orderId));
}

async function getFirstOrderItemClose(orderId: Order["id"]): Promise<Date> {
  const items = await db
    .select({ orderClose: schoolStore.orderClose })
    .from(order)
    .innerJoin(customer, eq(order.userId, customer.userId))
    .innerJoin(school, eq(customer.schoolId, school.id))
    .innerJoin(schoolStore, eq(school.id, schoolStore.schoolId))
    .innerJoin(orderItem, eq(order.id, orderItem.orderId))
    .innerJoin(item, eq(orderItem.itemId, item.id))
    .where(eq(order.id, orderId))
    .orderBy(schoolStore.orderClose);

  if (items.length === 0) {
    return new Date();
  }

  return getDate(items[0].orderClose);
}

async function getOrdersBySchoolId(
  schoolId: School["id"],
  status: Order["status"],
): Promise<{ order: Order; user: User }[]> {
  const orders = await db
    .select({ order, user })
    .from(order)
    .innerJoin(customer, eq(order.userId, customer.userId))
    .innerJoin(user, eq(customer.userId, user.id))
    .where(and(eq(order.status, status), eq(customer.schoolId, schoolId)));
  return orders.map((row) => ({ order: row.order, user: row.user }));
}

async function blockUnpickedOrders(schoolId: School["id"]): Promise<void> {
  await db
    .update(order)
    .set({ status: "unpicked", updatedAt: new Date().toISOString() })
    .where(
      sql`status = "ordered" AND user_id IN (SELECT user_id FROM customer WHERE school_id = ${schoolId})`,
    );
}

export {
  getOrderByPin,
  getOrdersBySchoolId,
  updateOrderStatus,
  blockUnpickedOrders,
  getFirstOrderItemClose,
  getActiveOrder,
};
