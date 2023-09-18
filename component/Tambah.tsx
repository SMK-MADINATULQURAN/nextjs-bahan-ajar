"use client";
import { Dispatch, SetStateAction } from "react";
import Button from "./Button";
import { Duru_Sans } from "next/font/google";

interface TambahProps {
  count: number;
  setCount: Dispatch<SetStateAction<any>>;
}

const Tambah: React.FC<TambahProps> = ({ count, setCount }) => {
  return (
    <section className="border shadow-lg">
      <h1>{count}</h1>
      <Button
        onClick={() => {
          setCount((c: number) => c + 1);
        }}
        colorSchema="blue"
        title="Tambah"
      />
    </section>
  );
};

export default Tambah;



