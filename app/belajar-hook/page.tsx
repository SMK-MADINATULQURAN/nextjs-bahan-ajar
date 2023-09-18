"use client";
import { useEffect, useState, useRef } from "react";
import InputText from "../../component/InputText";
import Button from "../../component/Button";

const BelajarHook = () => {
  
  return (
    <section>
     

      <section className="h-[90%] overflow-auto">
        <div className="min-h-screen bg-red-500 flex items-center justify-center">
          <h1 className="text-white">Home </h1>
        </div>
        <div className="min-h-screen bg-blue-500 flex items-center justify-center">
          <h1 className="text-white">Content </h1>
        </div>
        <div className="min-h-screen bg-yellow-500 flex items-center justify-center">
          <h1 className="text-white">About </h1>
        </div>
      </section>
    </section>
  );
};

export default BelajarHook;
