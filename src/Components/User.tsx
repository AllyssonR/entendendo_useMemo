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
      Id: {id} | Nome:{name} | E-mail:{email} | Data de nascimento:{birthdate} |
      pais:{address.country} estado:{address.state} rua:{address.street}
    </li>
  );
}

export const User = memo(UserComponent);
