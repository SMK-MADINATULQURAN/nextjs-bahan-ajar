"use client";
import { useEffect, useRef, useState } from "react";
import Button from "@/component/Button";
import useDislosure from "@/hook/useDisclosure";
import InputText from "@/component/InputText";
import useDebounce from "@/hook/useDebounce";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDislosure();
  let [keyword, setKeyword] = useState("");
  let { debouncedValue } = useDebounce(keyword, 500);
  return (
    <section className="h-screen w-screen space-y-5">
      <Button onClick={onOpen} colorSchema="blue" title="open" />
      <Button onClick={onClose} colorSchema="red" title="closed" />
      <InputText
        value={keyword}
        placeholder="nama"
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />
      debouncedValue : {debouncedValue}
      {isOpen ? <p>Open</p> : <p>Close</p>}
    </section>
  );
};

export default Home;
