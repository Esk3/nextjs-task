import Pin from "./Pin";
import style from "./pins.module.css";

export default function Pins({ data }: { data: { id: number, info: string }[] }) {
  return <ul className={style.pins}>
    {data.map(task => {
      return <li key={task.id} className={style.pin}><Pin listing={task} /></li>
    })}
  </ul>
}
