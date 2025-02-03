"use client"
import { useState } from "react";
import style from "./priority.module.css";

export default function Priority() {
  const options = ["low", "medium", "high"];
  const [current, setCurrent] = useState(1)
  return <div className={style.main}>
    <p>{options[current]} priority</p>
    <button onClick={() => setCurrent(Math.min(current + 1, options.length - 1))}>+</button>
    <button onClick={() => setCurrent(Math.max(current - 1, 0))}>-</button>
  </div>
}

