import { getOrdersByUserId } from "@/db/controllers/orderController";
import { getUser } from "@/lib/userUtils";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function CartLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await getUser();
  if (!user) {
    redirect("/");
  }

  return <>{children}</>;
}
