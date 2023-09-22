"use client";
import { useRef, useState } from "react";
import Button from "../components/Button";
import { useDisclosure } from "@/hook";


const Home = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <section className="h-screen w-screen space-y-5">
     <Button onClick={onOpen} colorSchema="blue" title="open" />
     <Button onClick={onClose} colorSchema="red" title="closed" />


     {isOpen ? <p>Open</p> : <p>Close</p>}
      
    </section>
  );
};

export default Home;
