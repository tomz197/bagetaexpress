import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { user } from "./user";
import { store } from "../store/store";
import { relations } from "drizzle-orm";

export const employee = mysqlTable("employee", {
  userId: varchar("user_id", { length: 255 }).notNull().primaryKey(),
  storeId: int("store_id").notNull(),
});

export const employeeRelations = relations(employee, ({ one }) => ({
  user: one(user, {
    fields: [employee.userId],
    references: [user.id],
  }),
  store: one(store, {
    fields: [employee.storeId],
    references: [store.id],
  }),
}));
