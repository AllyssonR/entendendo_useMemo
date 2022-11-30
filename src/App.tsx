import { useState } from "react";
import { Users } from "./Components/Users";
import { FormEvent } from "react";
import { User } from "./types/user";
import "./styles/app.scss";
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
      <h1>UserDash</h1>

      <form onSubmit={handleSubmit}>
        <div className="header">
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          &nbsp;
          <button type="submit">Filtrar</button>
        </div>
      </form>
      <Users users={users} />
    </div>
  );
}
