"use client";

import { useFormik, Form, FormikProvider, getIn } from "formik";

import * as yup from "yup";
import { ProfileUpdatePayload } from "@/app/auth/interface";
import InputText from "@/components/InputText";
import Label from "@/components/Label";
import Button from "@/components/Button";
import useAuthModule from "@/app/auth/lib";
import Image from "next/image";
import useUploadFile from "@/hook/useUploadFile";

export const registerSchema = yup.object().shape({
  nama: yup
    .string()
    .nullable()
    .default("")

    .required("Wajib isi"),
  avatar: yup.string().nullable().default("").required("Wajib isi"),
});

const UpdateProfile = () => {
  const { useUpdateProfile, useProfile } = useAuthModule();
  const { data, isFetching } = useProfile();
  const { mutate, isLoading } = useUpdateProfile();

  const formik = useFormik<ProfileUpdatePayload>({
    initialValues: {
      nama: data?.data?.nama || "",
      avatar: data?.data?.avatar || "",
      file: undefined,
      id : data?.data?.id || 0
    },
    validationSchema: registerSchema,
    enableReinitialize: true,
    onSubmit: (values) => {

        
        mutate(values);
    },
  });

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    setFieldValue,
  } = formik;
  console.log("data", data);

  console.log('file', values.file)
  if (isFetching) {
    return <div>Loading ...</div>;
  }
  return (
    <section>
      {JSON.stringify(values)}
      
      <div className="flex items-center justify-center w-full">
        <h1 className="text-3xl text-blue-400">Update Profile</h1>
      </div>
      <FormikProvider value={formik}>
        <Form className="space-y-5" onSubmit={handleSubmit}>
          <section>
            <Image
              src={values.avatar}
              width={200}
              height={200}
              alt="Picture of the author"
            />
          </section>
          <section>
            <Label htmlFor="nama" title="Nama" />
            <InputText
              value={values.nama}
              placeholder="ihsan "
              id="nama"
              name="nama"
              onChange={handleChange}
              onBlur={handleBlur}
              isError={getIn(errors, "nama")}
              messageError={getIn(errors, "nama")}
            />
          </section>
          <section className="w-full">
            {/* {/* <Label htmlFor="password" title="Password" /> */}
            <label htmlFor="file" className="bg-blue-400 w-[200px] h-full p-5">
              Upload {values?.file?.name || ""}
            </label>

            <input
           
              type="file"
              id="file"
              className="hidden"
              
              onChange={(event: any) => {
                const file = event.target.files[0];

                if(file.type !== 'image/jpeg') {
                    return alert('type tidak sesauai')
                }

                let reader = new FileReader();
                reader.onloadend = () => {
                  setFieldValue(`avatar`, reader.result);
                };
                reader.readAsDataURL(file);
                setFieldValue('file', file)
              }}
            />
          </section>
          <section>
            <Button
              height="lg"
              title="Update"
              colorSchema="blue"
              isLoading={isLoading}
              isDisabled={isLoading}
            />
          </section>
        </Form>
      </FormikProvider>
    </section>
  );
};

export default UpdateProfile;
