import { useState } from "react";
import { Users } from "./Components/Users";
import { FormEvent } from "react";
import { User } from "./types/user";
import "./styles/app.scss";
import "./styles/global.scss";
export function App() {
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const response = await fetch(`http://localhost:3333/users?q=${filter}`);
    const data = await response.json();
    setUsers(data);
  }

  return (
    <div className="mainPage">
      <div className="header">
        <h1>UserDash</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        &nbsp;
        <button type="submit">Filtrar</button>
      </form>
      <Users users={users} />
    </div>
  );
}
