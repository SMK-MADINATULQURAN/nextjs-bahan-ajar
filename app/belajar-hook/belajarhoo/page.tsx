"use client";
import { useRef, useState } from "react";
import Button from "@/component/Button";
import useClosure from "@/hook/useClosure";


const Home = () => {
  const {isOpen, onClose, onOpen} = useClosure()

  return (
    <section className="h-screen w-screen space-y-5">
     <Button onClick={onOpen} colorSchema="blue" title="open" />
     <Button onClick={onClose} colorSchema="red" title="closed" />


     {isOpen ? <p className="text-red-500 text-3xl">OK</p> : <p>Tidak Ok</p>}

    </section>
  );
};

export default Home;
