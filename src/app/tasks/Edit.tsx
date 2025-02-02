"use client"

import { useState } from "react";
import style from "./page.module.css";

export default function Details() {
  const [value, setValue] = useState("");
  const [editing, setEditing] = useState(false)

  return <div className={style.details}>
    <button onClick={e => {
      e.currentTarget.parentNode?.querySelector("dialog")?.show();
    }}>Details</button>
    <dialog>
      {editing ?
        <textarea name="" id="" cols={30} rows={10} defaultValue={value} onChange={e => setValue(e.target.value)}></textarea>
        : <p>{value}</p>}
      {!editing ? <button onClick={() => setEditing(true)}>Edit</button> : <button onClick={() => {
        setEditing(false);
      }}>Save</button>}
      <form method="dialog">
        <button>OK</button>
      </form>
    </dialog>
  </div>
}
