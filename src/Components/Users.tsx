import { User, UserProps } from "./User";
export function Users(users: UserProps[]) {
  return (
    <ul>
      {users.map((user) => (
        <User key={user.id} id={user.id} name={user.name} email={user.email} />
      ))}
    </ul>
  );
}
