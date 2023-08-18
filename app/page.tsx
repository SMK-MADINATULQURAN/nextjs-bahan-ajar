"use client";
import { useState } from "react";
import Button from "./component/Button";
import InputText from "./component/InputText";
import Label from "./component/Label";

import Note from "./component/Note";

const Home = () => {
  let [message, setMessage] = useState("hello");
  let [count, setCount] = useState(0);
  let [isLogin, setIsLogin] = useState(false);
  return (
    <main className="space-y-5">
      <h1 className="text-red-500 font-bold text-2xl">
        {isLogin ? "Sudah login" : "belum login"}
      </h1>
      <Button
        title="logout"
        colorSchema="red"
        variant="solid"
        onClick={() => {
          setIsLogin(false);
        }}
      />
      <Button
        title="login"
        colorSchema="blue"
        variant="solid"
        onClick={() => {
          setIsLogin(true);
        }}
      />

      <Button
        title={isLogin ? "sign out" : "sign in"}
        colorSchema={isLogin ? "red" : "blue"}
        variant="solid"
        onClick={() => {
          setIsLogin(!isLogin);
        }}
      />

      <h1 className="text-red-500 font-bold text-2xl">{count}</h1>
      <Button
        title="tambah"
        colorSchema="red"
        variant="solid"
        onClick={() => {
          setCount((prevCount) => {
            console.log("state saat ini", prevCount);
            return prevCount + 1;
          });
        }}
      />
      <Button
        isDisabled={count === 0 ? true : false}
        // isDisabled={count === 0}
        title="kurang"
        colorSchema="blue"
        variant="solid"
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      />

      <h1 className="text-red-500 font-bold text-2xl">{message}</h1>
      <Button
        title="ihsan"
        colorSchema="red"
        variant="solid"
        onClick={() => {
          setMessage("Hello ihsan");
        }}
      />
      <Button
        title="hilmi"
        colorSchema="blue"
        variant="solid"
        onClick={() => {
          setMessage("Hello hilmi");
        }}
      />
    </main>
  );
};

export default Home;
