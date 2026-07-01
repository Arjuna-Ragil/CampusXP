"use server";

import { serverFetch } from "@/lib/api/serverApi";
import { revalidatePath } from "next/cache";

export async function submitAchievement(formData: FormData) {
  const payload = {
    title: formData.get("title") as string,
    type: formData.get("type") as string,
    description: formData.get("description") as string,
    evidence_url: formData.get("evidence_url") as string,
  };

  await serverFetch("/students/achievements", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  revalidatePath("/student/submission");
}

export async function claimRewardAction(rewardId: string) {
  await serverFetch(`/students/rewards/${rewardId}/claim`, {
    method: "POST",
  });

  revalidatePath("/student/rewards");
}
