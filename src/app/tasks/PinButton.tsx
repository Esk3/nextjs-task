"use client"

import { addPin, removePin } from "@/lib/data/localstoreage";
import { redirect } from "next/dist/client/components/navigation";

export default function PinButton({ listingId, pinned }: { listingId: number; pinned: boolean }) {
  if (pinned) return <button onClick={() => removePin(listingId)}>unpin</button>
  return <button onClick={() => {
    addPin(listingId);
    redirect("/tasks");
  }}>pin</button>
}

