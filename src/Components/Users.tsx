import { User } from "./User";
import { User as UserType } from "../types/user";
import'../styles/users.scss'
type UserProps = {
  users: UserType[];
};
export function Users({ users }: UserProps) {
  return (
    <ul>
      {users.map((user) => (
        <User
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          address={user.address}
          birthdate={user.birthdate}
        />
      ))}
    </ul>
  );
}
