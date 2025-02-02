import { listingData, } from "@/lib/data/memoryDb";
import style from "./page.module.css";
import Body from "./Body";

export default async function Page({ }) {
  const data = (await listingData()).result;
  return <div className={style.main}>
    <h2>Pinned</h2>
    <hr />
    <Body data={data} />
  </div>
}

