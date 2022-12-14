import React from "react";
import { getItem } from "../services/LocalStorageFuncs";

export const Profile = (props) => {
  const user = getItem("usuario");

  const toProfileEdit = () => {
    const {
      history: { push },
    } = props;
    push("/profile/edit");
  };

  return (
    <div>
      <p>{` Name: ${user.name}`}</p>
      <p>{` CPF: ${user.cpf}`}</p>
      <p>{` Email: ${user.email}`}</p>
      <p>{` Saldo: R$ ${user.saldo}`}</p>
      <img src={user.img} alt="img-user" />
      <br />
      <br />
      <button onClick={toProfileEdit}>Edit Profile</button>
    </div>
  );
};

export default Profile;
