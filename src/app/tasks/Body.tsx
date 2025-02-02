"use client"
import Pins from "@/lib/components/listing/Pins";
import { Listings } from "@/lib/data/memoryDb";
import CreateForm from "./CreateForm";
import style from "./page.module.css";
import Details from "./Edit";
import ChangeCategory from "./ChangeCategory";
import Assinged from "./Assinged";
import Priority from "./Priority";
import PinButton from "./PinButton";

export default function Body({ data }: { data: Listings; }) {
  return <>
    <Pins data={data.listings.filter(task => task.pinned).map(task => { return { id: task.id, info: task.info }; })} />
    <CreateForm />
    <hr />
    <h2>Task</h2>
    <List data={data} />
  </>;
}

export function List({ data }: { data: Listings }) {
  return <ul>{data.listings.map(listing => {
    return <li key={listing.id} className={style.item}>
      <p>User: {listing.user}</p>
      <p className={style.info}>{listing.info}</p>
      <Priority />
      {data.categories[listing.categoryIndex].key === "finished" ? null :
        <Assinged />
      }
      <ChangeCategory categories={data.categories.map(category => category.key)} current={data.categories[listing.categoryIndex].key} />
      <Details />
      <PinButton listingId={listing.id} pinned={listing.pinned} />
    </li>

  })}</ul >
}
