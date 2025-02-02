"use client"
import { removePin } from "@/lib/data/memoryDb";
import { useState } from "react";
import style from "./pin.module.css";
import { redirect } from "next/dist/client/components/navigation";

export default function Pin({ listing }: { listing: { id: number, info: string } }) {
  const [deleted, setDeleted] = useState(false);
  if (deleted) return <div><button onClick={() => setDeleted(false)} className={style.undo}>Undo</button></div>
  return <div className={style.pin}>
    {listing.info}
    <button onClick={() => {
      setDeleted(true);
      removePin(listing.id);
      redirect("/tasks");
    }}>unpin</button>
  </div>
}
