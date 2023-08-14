"use client"; // gunakan use client karena ada onChange pda komponen
import { ChangeEvent, useState } from "react";
import BelajarState from "./module/belajarState";
import Card from "./latihan/Card";
import Button from "./component/Button";
import InputText from "./component/InputText";
import Select from "./component/Select";
import Label from "./component/Label";

interface Value {
  title: string;
  author: string;
  year: number | string;
}

const Home = () => {
  const [values, setValues] = useState<Value>({
    title: "",
    author: "",
    year: "",
  });

  const handleChange = (event: ChangeEvent<any>) => {
    setValues((prevValues) => {
      return {
        ...prevValues,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (e: ChangeEvent<any>) => {
    e.preventDefault();

    alert(JSON.stringify(values));
  };

  return (
    <main className="space-y-5">
      {JSON.stringify(values)}
      <h1 className="text-red-500 font-bold">Latihan Form</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <section>
          <Label htmlFor="author" isRequired title="Penulis" />
          <InputText
            placeholder="Nama Penulis buku"
            id="author"
            name="author"
            value={values.author}
            onChange={handleChange}
          />
        </section>

        <section>
          <Label htmlFor="title" isRequired title="Judul Buku" />
          <InputText
            placeholder="Nama Judul buku"
            id="title"
            name="title"
            value={values.title}
            onChange={handleChange}
          />
        </section>
        <section>
          <Label htmlFor="year" title="Tahun Terbit" />
          <Select
            value={values.year}
            name="year"
            onChange={handleChange}
            isError
            id="year"
            options={[
              {
                value: 2020,
                label: "2020",
              },
              {
                value: 2021,
                label: "2021",
              },
              {
                value: 2022,
                label: "2022",
              },
              {
                value: 2023,
                label: "2023",
              },
            ]}
          />
        </section>
        <section>
          <Button type="submit" colorSchema="blue" title="Simpan" />
        </section>
      </form>
    </main>
  );
};

export default Home;
