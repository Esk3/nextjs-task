"use client"
import { RefObject, useRef, useState } from "react";

export default function Assinged({ }) {
  const myRef: RefObject<HTMLDialogElement | null> = useRef(null);
  return <div>
    <ul>
      <li>p1</li>
    </ul>
    <button onClick={() => myRef.current?.toggleAttribute("open")}>Edit</button>
    <Edit ref={myRef} />
  </div>
}


function Edit({ ref }: { ref: RefObject<HTMLDialogElement | null> }) {
  const [people, setPeople] = useState([{ name: "person1", added: true }, { name: "person2", added: false }]);
  const [search, setSearch] = useState("");
  return <dialog ref={ref}>
    <CurrentAdded people={people} setPeople={setPeople} />
    <input type="text" onChange={e => setSearch(e.target.value)} placeholder="search" />
    <Addable people={people} search={search} setPeople={setPeople} />
    <form method="dialog"><input type="submit" value="close" /></form>
  </dialog>;
}

function CurrentAdded({ people, setPeople }: { people: Person[] }) {
  return <ul>
    {people.filter(person => person.added).map(person => {
      return <li key={person.name}>{person.name} <button onClick={() => setPeople(people.map(p => p.name == person.name ? { ...p, added: false } : p))}>Remove</button></li>
    })}
  </ul>
}
function Addable({ people, search, setPeople }: { people: Person[], search: string }) {
  search = search.toLowerCase();
  return <ul>
    {people.filter(person => !person.added).filter(person => person.name.toLowerCase().includes(search)).map(person => {
      return <li key={person.name}>{person.name}: <button onClick={() => setPeople(people.map(p => p.name == person.name ? { ...p, added: true } : p))}>Add</button></li>
    })}
  </ul>
}

interface Person {
  name: string,
  added: boolean,
};
