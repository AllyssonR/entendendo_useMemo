import { memo } from "react";
import { User as UserComponentprops } from "../types/user";

function UserComponent({
  id,
  name,
  email,
  birthdate,
  address,
}: UserComponentprops) {
  return (
    <li>
      <>
        Id: {id} | Nome: {name} | E-mail: {email} | aniversario: {birthdate} |
        Endereço: {address}
      </>
    </li>
  );
}

export const User = memo(UserComponent);
