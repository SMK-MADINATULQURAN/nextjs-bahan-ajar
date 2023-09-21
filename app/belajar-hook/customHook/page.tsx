"use client"; // gunakan use client karena ada onChange pda komponen
import { ChangeEvent, useState } from "react";
import Button from "@/component/Button";
import InputText from "@/component/InputText";
import Select from "@/component/Select";
import Label from "@/component/Label";

interface Value {
  title: string;
  author: string;
  year: number | string;
}

const Home = () => {
  const [values, setValues] = useState<any>({
    title: "",
    author: "",
    year: "",
  });

  const [isError, setIsError] = useState({});

  const handleChange = (event: ChangeEvent<any>) => {
    setValues((preValues: any) => {
      return {
        ...preValues,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleError = () => {
    for (var key in values) {

      console.log('va', !!values[key])
      if (!!values[key] === false) {
        setIsError((state) => {

          console.log('leue', key)
          return {
            ...state,
            [key]: true,
          };
        });
      }
      console.log("key", key); // Menambahkan objek buku baru ke dalam array.
    }
  };

  const handleSubmit = (e: ChangeEvent<any>) => {
    handleError();
    e.preventDefault();

    

    // alert(JSON.stringify(values));
  };

  console.log('is', isError)

  return (
    <main className="space-y-5">
      {JSON.stringify(isError)}
      <h1 className="text-red-500 font-bold">Latihan Form</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <section>
          <Label htmlFor="author" isRequired title="Penulis" />
          <InputText
            placeholder="Nama Penulis buku"
            id="author"
            isError={isError.author}
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
            isError={isError.title}
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
            isError={isError.year}
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
