"use client";
import { useEffect, useRef, useState } from "react";
import Button from "@/component/Button";
import useClosure from "@/hook/useDisclosure";
import InputText from "@/component/InputText";
import useDebounce from "@/hook/useDebounce";
import useDislosure from "@/hook/useDisclosure";

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const { debouncedValue } = useDebounce(keyword, 1000);
  const { isOpen, onOpen, onClose } = useDislosure();

  return (
    <section className="h-screen w-screen space-y-5">
      <Button onClick={onOpen} colorSchema="blue" title="open" />
      <Button onClick={onClose} colorSchema="red" title="closed" />
      <InputText
        placeholder="ketika"
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />

      {debouncedValue}

      {isOpen ? <p>Open</p> : <p>Close</p>}
    </section>
  );
};

export default Home;
