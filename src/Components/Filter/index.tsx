import { FormEvent, useState } from "react";
import { User } from "../../types/user";
import "./styles.scss";

type Filterprops = {
  setUsers: (data:User[]) => void;
};  
const [filter, setFilter] = useState("");
export function Filter({ setUsers }: Filterprops) {
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const response = await fetch(`http://localhost:3333/users?q=${filter}`);
    const data = await response.json();
    setUsers(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={filter}
        placeholder='Pesquisar os usuarios'
        onChange={(e) => setFilter(e.target.value)}
      />
      &nbsp;
      <button type="submit">Filtrar</button>
    </form>
  );
}
