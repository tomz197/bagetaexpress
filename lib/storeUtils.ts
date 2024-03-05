"use server";

import { updateSchoolStoreOrderClose } from "@/db/controllers/schoolController";
import { getUser } from "./userUtils";
import { revalidatePath, revalidateTag } from "next/cache";

async function updateOrderClose(schoolId: number, date: Date) {
  const user = await getUser();
  if (!user || !user.storeId) {
    throw new Error("Not logged in");
  }
  await updateSchoolStoreOrderClose(schoolId, user.storeId, date);
  revalidatePath("/auth/e/dashboard", "page");
}

function revalidateItems() {
  revalidateTag("items");
}

export { updateOrderClose, revalidateItems };
