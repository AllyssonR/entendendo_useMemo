import { useState } from "react";
import { Users } from "./Components/Users";
import { FormEvent } from "react";
type UsersProps = {
  id: number;
  name: string;
  email: string;
};
export function App() {
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState<UsersProps[]>([]);
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const response = await fetch(`http://localhost:3333/users?q=${filter}`);
    const data = await response.json();
    setUsers(data);
  }
  return (
    <div>
      <h1>Usuarios</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        &nbsp;
        <button type="submit">Procurar</button>
      </form>
      <Users users={users} />
    </div>
  );
}
