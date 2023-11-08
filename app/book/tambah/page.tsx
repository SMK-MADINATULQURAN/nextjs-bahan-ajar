"use client";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import Label from "@/components/Label";
import Select from "@/components/Select";
import { useFormik, Form, FormikProvider } from "formik";
import * as yup from "yup";
import { BookCreatePayload } from "../interface";
import useBookModule from "../lib";
import Link from "next/link";
import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";



const createBookSchema = yup.object().shape({
  title: yup.string().nullable().default("").required("Wajib isi"),
  author: yup.string().nullable().default("").required("Wajib isi"),
  year: yup.number().nullable().default(undefined).required("Wajib pilih"),
});
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

const CreateBook = () => {
  const { useCreateBook } = useBookModule();
  const { mutate, isLoading } = useCreateBook();
  const formik = useFormik<BookCreatePayload>({
    // initialValues: {
    //   title: "",
    //   author: "",
    //   year: undefined,
    // },

    initialValues: createBookSchema.getDefault(),
    validationSchema: createBookSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      mutate(values, {
        onSuccess: () => {
          resetForm();
        },
      });
      console.log("submit berjalan", values);
    },
  });

  const {
    handleChange,
    handleSubmit,
    setFieldValue,
    handleBlur,
    values,
    errors,
    resetForm,
    setValues,
  } = formik;

  return (
    <section className="flex items-center  justify-center w-full h-full">
      <section className="w-1/2">
        <Link href={"/book"}>
          <span className="flex items-center">
            {" "}
            <ArrowLongLeftIcon className="h-5 w-5 mr-2" />
            Kembali
          </span>
        </Link>
        <h2 className="text-xl font-bold text-gray-500">Tambah Buku</h2>
        value : {JSON.stringify(values)}
        error : {JSON.stringify(errors)}
        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit} className="space-y-5">
            <section>
              <Label htmlFor="title" title="Title" />
              <InputText
                onBlur={handleBlur}
                onChange={(e) => {
                  setFieldValue("title", e.target.value);
                  if (e.target.value === "ihsan") {
                    setFieldValue("year", 2023);
                  }
                  if (e.target.value === "hilmi") {
                    setFieldValue("year", 2022);
                  }
                }}
                value={values.title}
                placeholder="Judul Buku"
                id="title"
                name="title"
                isError={!!errors.title}
                messageError={errors.title}
              />
            </section>
            <section>
              <Label htmlFor="author" title="Auhtor" />
              <InputText
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.author}
                placeholder="Penulis Buku"
                id="author"
                name="author"
                isError={!!errors.author}
                messageError={errors.author}
              />
            </section>
            <section>
              <Label htmlFor="year" title="Year" />
              <Select
                onChange={handleChange}
                value={values.year}
                id="year"
                name="year"
                options={option}
                isError={!!errors.year}
                messageError={errors.year}
              />
            </section>
            <section>
              <Button
                type="submit"
                height="md"
                title="Simpan"
                colorSchema="blue"
              />
              <Button
                type="button"
                onClick={() => {
                  resetForm();
                }}
                height="md"
                title="Cancel"
                colorSchema="red"
              />
            </section>
          </Form>
        </FormikProvider>
      </section>
    </section>
  );
};

export default CreateBook;
