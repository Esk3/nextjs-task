"use client"
import { createListing } from "@/lib/data/localstoreage";
import { redirect } from "next/navigation";
import { useState } from "react"

export default function CreateForm({ }) {
  const [show, setShow] = useState(false)
  if (!show) return <button onClick={() => setShow(true)}>Create new</button>;
  return <div>
    <button onClick={() => {
      setShow(false);
    }}>Cancel</button>
    <form onSubmit={e => {
      e.preventDefault();
      createListing(e.target.info.value, "todoUser");
      redirect("/tasks");
    }}>
      <input type="text" name="info" placeholder="message" autoComplete="off" />
      <input type="submit" value="Submit" />
    </form>
  </div>
}
