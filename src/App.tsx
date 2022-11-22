import { useEffect, useState } from "react";
import { Users } from "./Components/Users";
import { FormEvent } from "react";
import { api } from "./services/api";
import { User } from "./types/user";

export function App() {
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const response = api
      .get(`/users`)
      .then((response) => response.data)
      .then((data) => setUsers(data));
    //setUsers(data);
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
