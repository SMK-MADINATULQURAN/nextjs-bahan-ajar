import InputText from "@/components/InputText";
import Label from "@/components/Label";
import Select from "@/components/Select";
import { BookListFilter } from "../interface";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type FilterProps = {
  params: BookListFilter;
  setParams: Dispatch<SetStateAction<any>>;
};
export const option = [
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
];

const Filter: React.FC<FilterProps> = ({ params, setParams }) => {
  const handleChange = (e: ChangeEvent<any>) => {

    if(e.target.name === 'to_year'){
      if(Number(params.from_year) > e.target.value ){
        return alert(`Pilih sampai tahun lebih atau sama dengan tahun ${params.from_year}`)
      }
    }

    if(e.target.name === 'from_year'){
      if(e.target.value > Number(params.to_year)){
        setParams((prevParams: BookListFilter) => {
          return {
            ...prevParams,
            to_year : ""
          };
        });
      }
    }

   
    setParams((params: BookListFilter) => {
      return {
        ...params,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <section className="space-y-2">
      <section>
        <Label title="Title" htmlFor="title" />
        <InputText
          onChange={(e) => {
            setParams((prevParams: BookListFilter) => {
              return {
                ...prevParams,
                title: e.target.value,
              };
            });
          }}
          name="title"
          id="title"
          value={params.title}
        />
      </section>
      <section>
        <Label title="Author" htmlFor="author" />
        <InputText
          onChange={(e) => {
            setParams((prevParams: BookListFilter) => {
              return {
                ...prevParams,
                author: e.target.value,
              };
            });
          }}
          value={params.author}
          name="author"
          id="author"
        />
      </section>
      <section>
        <Label title="Dari Tahun" htmlFor="from_year" />
        <Select
        onChange={handleChange}
          options={option}
          value={params.from_year}
          name="from_year"
          id="from_year"
        />
      </section>
      <section>
        <Label title="Sampai Tahun" htmlFor="to_year" />
        <Select
        disabled={params.from_year === ""}
         onChange={handleChange}
          options={option}
          value={params.to_year}
          name="to_year"
          id="to_year"
        />
      </section>
    </section>
  );
};
export default Filter;
