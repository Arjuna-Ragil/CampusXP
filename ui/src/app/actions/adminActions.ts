"use server";

import { serverFetch } from "@/lib/api/serverApi";
import { revalidatePath } from "next/cache";

export async function verifySubmissionAction(id: string, status: "APPROVED" | "REJECTED") {
  const points_awarded = status === "APPROVED" ? 50 : 0;
  await serverFetch(`/admin/submissions/${id}/verify`, {
    method: "PUT",
    body: JSON.stringify({ status, points_awarded }),
  });
  revalidatePath("/admin/verification");
}

export async function createRewardAction(formData: FormData) {
  const payload = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    point_cost: parseInt(formData.get("point_cost") as string),
    stock_quota: parseInt(formData.get("stock_quota") as string),
  };

  await serverFetch("/admin/rewards", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  revalidatePath("/admin/rewards");
}

export async function deleteRewardAction(id: string) {
  await serverFetch(`/admin/rewards/${id}`, {
    method: "DELETE",
  });
  revalidatePath("/admin/rewards");
}
