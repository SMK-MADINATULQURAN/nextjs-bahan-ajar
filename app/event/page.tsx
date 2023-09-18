"use client"; // gunakan use client karena ada onChange pda komponen
import { useState } from "react";

import InputText from "../../component/InputText";
import { ChangeEvent } from "react";

const Home = () => {
  let [message, setMessage] = useState("hai"); // jika string, dengan data awal "hai"
  let [count, setCount] = useState(0); // jika number , dengan data awal 0

  let [payload, setPayload] = useState({
    name: "",
    password: "",
    email: "",
    alamat: "",
  });

  const handleChange = (event: ChangeEvent<any>) => {
    setPayload(() => {
      return {
        ...payload,
        [event.target.name]: event.target.value,
      };
    });
  };
  console.log("pay", payload);
  return (
    <main className="space-y-5 p-10">
      {JSON.stringify(payload)}
      <InputText
        id="name"
        name="name"
        placeholder="name"
        value={payload.name}
        onChange={(event) => {
          console.log("eve", event.target.value);
          setPayload(() => {
            return {
              ...payload,
              name: event.target.value,
            };
          });
        }}
      />
      <InputText
        id="name"
        placeholder="name"
        name="name"
        value={payload.name}
        onChange={handleChange}
      />
      <InputText
        id="password"
        placeholder="password"
        name="password"
        value={payload.password}
        onChange={handleChange}
      />
      <InputText
        id="email"
        placeholder="email"
        name="email"
        value={payload.email}
        onChange={(e: ChangeEvent) => {
          handleChange(e);
        }}
      />
      <InputText
        id="alamat"
        name="alamat"
        placeholder="alamat"
        value={payload.alamat}
        onChange={(e: ChangeEvent) => {
          handleChange(e);
        }}
      />
    </main>
  );
};

export default Home;
