"use client"

import { addPin, removePin } from "@/lib/data/localstoreage";
import { useRouter } from "next/navigation";

export default function PinButton({ listingId, pinned }: { listingId: number; pinned: boolean }) {
  const router = useRouter();
  if (pinned) return <button onClick={() => removePin(listingId)}>unpin</button>
  return <button onClick={() => {
    addPin(listingId);
    router.refresh();
  }}>pin</button>
}

