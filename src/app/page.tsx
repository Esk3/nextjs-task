import { dashboardData, DashResult } from "@/lib/data/memoryDb";
import Link from "next/link";
import style from "./page.module.css";
import Pins from "@/lib/components/listing/Pins";

export default async function Home() {
  const data = await dashboardData();
  return <div className={style.main}>
    <h1>Dashboard</h1>
    <h2>Pinned</h2>
    <Pins data={data.result.pins} />
    <h2>Overview</h2>
    <Counts categories={data.result.categories} categoryData={data.result.categoryData} />
    <HeaderList data={data.result} />
  </div>
}

function Counts({ categories, categoryData }: DashResult) {
  return <ul className={[style.overview, "flex-row"].join(" ")}>
    {categories.map(category => <li key={category} className={style.count}>{category}: {categoryData[category].count}</li>)}
  </ul>
}

function HeaderList({ data }: { data: DashResult }) {
  return <ul className={style["header-list"]}>{data.categories.map(category => {
    return <li key={category} className={style.header}> <details >
      <summary>{category}: {data.categoryData[category].count}</summary>
      <ul className={style["details-list"]}>{data.categoryData[category].data.map(data => {
        return <li key={data.info.slice(0, 10)}>
          <Link href={"/tasks#" + data.id}>{data.info.slice(0, 10) + (data.info.length > 10 ? "..." : "")}</Link>
        </li>
      })}</ul>
    </details>
    </li>
  })}</ul>;
}
