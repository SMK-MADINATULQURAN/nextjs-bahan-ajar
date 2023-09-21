"use client";
import Button from "@/component/Button";
import { useEffect, useState, useRef } from "react";

const BelajarHook = () => {
  const targetAbout = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    console.log("target about", targetAbout);

    targetAbout.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const mouseEnter = () => {
    console.log("target about", targetAbout);

    if (targetAbout.current) {
      const node = document.createElement("div");
      node.className = "text-white bg-red-500 p-2";
      const textnode = document.createTextNode("Selamat Datang");
      node.appendChild(textnode);
      targetAbout.current.appendChild(node);
    }
  };

  const onMouseLeave = () => {
    console.log("target about", targetAbout.current);
    const children = targetAbout.current?.getElementsByTagName("div");
    if (children) {
      // Convert HTMLCollection menjadi array untuk mempermudah pengulangan.
      const childrenArray = Array.from(children);

      // Hapus setiap elemen anak (div) dari elemen targetAbout.
      childrenArray.forEach((child) => {
        child.remove();
      });
    }
  };
  return (
    <>
      <nav className="h-[50px]">
        <Button colorSchema="blue" variant="solid" title="Home" />
        <Button colorSchema="red" variant="solid" title="Content" />
        <Button
          onClick={scrollToAbout}
          colorSchema="green"
          variant="solid"
          title="About"
        />
      </nav>
      <section className="h-[90%] overflow-auto">
        <div className="min-h-screen bg-red-500 flex items-center justify-center">
          <h1 className="text-white">Home </h1>
        </div>
        <div className="min-h-screen bg-blue-500 flex items-center justify-center">
          <h1 className="text-white">Content </h1>
        </div>
        <div
          onMouseLeave={onMouseLeave}
          onMouseEnter={mouseEnter}
          ref={targetAbout}
          className="min-h-screen bg-yellow-500 flex items-center justify-center"
        >
          <h1 className="text-white">About </h1>
        </div>
      </section>
    </>
  );
};

export default BelajarHook;
