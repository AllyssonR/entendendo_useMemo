import { memo } from "react";
import { User as UserComponentprops } from "../types/user";
import "../styles/user.scss";
function UserComponent({
  id,
  name,
  email,
  birthdate,
  address,
  phone,
  image,
}: UserComponentprops) {
  return (
    <li className="card">
      <div className="perfil">
        <img src={image} alt="user_perfil" />
        <div className="userInfo">
          <h1>{name}</h1>
          <h2>{email}</h2>
          <h2>{phone}</h2>
        </div>
      </div>
      <div className="userLocation">
        <p>
          <span>Country</span>
          {address.country}
        </p>
        <p>
          <span>State</span>
          {address.state}
        </p>
        <p>
          <span>Street</span>
          {address.street},{address.number}
        </p>
      </div>
    </li>
  );
}

export const User = memo(UserComponent);
