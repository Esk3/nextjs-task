import Link from "next/link";

export default function SideBar() {
  return (
    <ul>
      <li>
        <Link href="/">
          Dashboard
        </Link>
      </li>
      <li>
        <Link href="/tasks">Tasks</Link>
      </li>
    </ul>
  )
}
