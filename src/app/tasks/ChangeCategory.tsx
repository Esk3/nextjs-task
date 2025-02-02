"use client"

export default function ChangeCategory({ categories, current }: { categories: string[]; current: string; }) {
  return <select name="" defaultValue={current} onChange={e => console.log(e.target.value)}>
    {categories.map(category => {
      return <option value={category} key={category}> {category}</option>;
    })}
  </select>;
}

