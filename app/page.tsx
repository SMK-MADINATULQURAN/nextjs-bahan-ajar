"use client";
import { useEffect, useState } from "react";
import InputText from "./component/InputText";
import Button from "./component/Button";

const Home = () => {
  let [count, setCount] = useState(0);
  let [text, setText] = useState("");
  let [change, setChange] = useState(false);
  useEffect(() => {
    setCount((c) => c + 1);
    console.log("useEffect berjalan");
  }, [text, change]);
  return (
    <>
      <div>{count}</div>
      <InputText
        value={text}
        id="text"
        name="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <Button
        title="ubah count"
        colorSchema="red"
        variant="solid"
        onClick={() => {
          setChange(!change);
        }}
      />
    </>
  );
};

export default Home;
