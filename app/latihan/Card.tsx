import clsx from "clsx";
import { Dispatch, ReactNode, SetStateAction } from "react";
import Button from "../component/Button";

type Variant = "solid" | "outline";
type ColorSchema = "blue" | "red" | "green";

interface CardProps {
 
  tanggal: number;
  bulan: string;
  setTanggal: Dispatch<SetStateAction<number>>;
  setBulan: Dispatch<SetStateAction<string>>;

  //   children: ReactNode;
}

const Card: React.FC<CardProps> = ({ tanggal, bulan, setTanggal, setBulan }) => {
  return (
    <section className="border shadow-lg rounded-lg h-60 w-48">
      <section className="bg-red-500 text-white rounded-t-lg h-[20%] flex items-center justify-center">
        <h2>{bulan}</h2>
      </section>
      <section className="flex items-center justify-center h-[60%]   text-[120px]">
        {tanggal}
      </section>
      <section className="flex items-center justify-center h-[20%]">
        <Button onClick={()=> {
          setBulan('Agustus')
          setTanggal(0)
        }} title="Clear" colorSchema="red" variant="outline" />
      </section>
    </section>
  );
};

export default Card;
