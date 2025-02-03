"use client"
import { removePin } from "@/lib/data/localstoreage";
import { useState } from "react";
import style from "./pin.module.css";
import { useRouter } from "next/navigation";

export default function Pin({ listing }: { listing: { id: number, info: string } }) {
  const router = useRouter();
  const [deleted, setDeleted] = useState(false);
  if (deleted) return <div><button onClick={() => {
    setDeleted(false);
    router.refresh();
    console.log("here")
  }} className={style.undo}>Undo</button></div >
  return <div className={style.pin}>
    {listing.info}
    <button onClick={() => {
      setDeleted(true);
      removePin(listing.id);
      router.refresh();
    }}>unpin</button>
  </div>
}
