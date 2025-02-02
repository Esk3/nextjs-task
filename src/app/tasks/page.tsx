"use client"
import style from "./page.module.css";
import Body from "./Body";
import { listingData } from "@/lib/data/localstoreage";

export default function Page({ }) {
  const data = listingData().result;
  return <div className={style.main}>
    <h2>Pinned</h2>
    <hr />
    <Body data={data} />
  </div>
}

