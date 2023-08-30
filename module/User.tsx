import { memo } from "react";
import Button from "../components/Button";

type UserProps = {
  users: string[];
  handleDelete: (index: number) => void;
};

// eslint-disable-next-line react/display-name
const User = memo(({ users, handleDelete }: UserProps) => {
  console.log("render komponen user");

  return users.map((user, index) => (
    <li className="flex items-center justify-between" key={index}>
      <h1 className="capitalize">{user}</h1>

      <Button
        title="Hapus"
        colorSchema="red"
        onClick={() => handleDelete(index)}
      />
    </li>
  ));
});

export default User;
