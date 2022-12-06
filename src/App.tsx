import { Users } from "./Components/Users";
import "./styles/global.scss";
import { Header } from "./Components/Header";
import { useState } from "react";
import { User } from "./types/user";
import { Filter } from "./Components/Filter";
export function App() {

  const [users, setUsers] = useState<User[]>([]);

  return (
    <div className="mainPage">
      <Header />
      <Filter setUsers={setUsers}/>

      
      <Users users={users} />
    </div>
  );
}
