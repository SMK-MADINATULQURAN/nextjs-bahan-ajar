"use client";
import { useState } from "react";
import Button from "../component/Button";
import InputText from "../component/InputText";
import Label from "../component/Label";

// import Note from "./component/Note";

// type Identitas = {
//   nama: string;
//   sekolah: string;
//   umur: number | null;
//   alamat?: string;
// };

// type Hasil = {
//   mata_pelajaran: string;
//   nilai: number | null;
// };

// const Home = () => {
//   let [message, setMessage] = useState("hello"); //string
//   let [count, setCount] = useState(0); // number
//   let [isLogin, setIsLogin] = useState(false); //boolean
//   let [profile, setProfile] = useState<Identitas>({
//     nama: "hilmi",
//     sekolah: "smk mq",
//     umur: 20,
//   }); //object

//   let bilangan = [1, 2, 3, 4, 5, 6, 7, 8];

//   let [hasil, setHasil] = useState<Hasil[]>([
//     {
//       mata_pelajaran: "matematika",
//       nilai: 80,
//     },
//   ]); //array
//   return (
//     <main className="space-y-5">
//       {hasil.map((item, index) => (
//         <section key={index}>
//           <h5>Nama Mata pelajaran : {hasil[index].mata_pelajaran} </h5>
//           <h5>Nilai : {item.nilai} </h5>
//         </section>
//       ))}

//       <Button
//         width="full"
//         title="tambah"
//         colorSchema="red"
//         variant="solid"
//         onClick={() => {
//           setHasil((prevState) => {
//             return [...prevState, { mata_pelajaran: "fisika", nilai: 100 }];
//           });
//         }}
//       />

//       <Button
//         width="full"
//         title="kurang"
//         colorSchema="blue"
//         variant="solid"
//         onClick={() => {
//           setHasil((prevState) => {
//             prevState.pop();
//             return [...prevState];
//           });
//         }}
//       />

//       {bilangan.map((item, index) => (
//         <h1 key={index}>{item}</h1>
//       ))}

//       <h1 className="text-red-500 font-bold text-2xl">
//         Nama adalah {profile.nama}, sekolah di {profile.sekolah} dan berumur{" "}
//         {profile.umur} dan rumah di {profile.alamat || "-"}
//       </h1>
//       <div className="grid grid-cols-2 gap-5">
//         <Button
//           width="full"
//           title="tambah alamat"
//           colorSchema="red"
//           variant="solid"
//           onClick={() => {
//             setProfile((prevState) => {
//               return {
//                 ...prevState,
//                 nama: "Hilmi Muhammad",
//                 alamat: "Bekasi",
//               };
//             });
//           }}
//         />
//         <Button
//           width="full"
//           title="kembali ke default"
//           colorSchema="blue"
//           variant="solid"
//           onClick={() => {
//             setProfile((prevProfile) => {
//               return {
//                 nama: "hilmi",
//                 sekolah: "smk mq",
//                 umur: 20,
//               };
//             });
//           }}
//         />
//       </div>

//       <h1 className="text-red-500 font-bold text-2xl">
//         {isLogin ? "Sudah login" : "belum login"}
//       </h1>
//       <Button
//         title="logout"
//         colorSchema="red"
//         variant="solid"
//         onClick={() => {
//           setIsLogin(false);
//         }}
//       />
//       <Button
//         title="login"
//         colorSchema="blue"
//         variant="solid"
//         onClick={() => {
//           setIsLogin(true);
//         }}
//       />

//       <Button
//         title={isLogin ? "sign out" : "sign in"}
//         colorSchema={isLogin ? "red" : "blue"}
//         variant="solid"
//         onClick={() => {
//           setIsLogin(!isLogin);
//         }}
//       />

//       <h1 className="text-red-500 font-bold text-2xl">{count}</h1>
//       <Button
//         title="tambah"
//         colorSchema="red"
//         variant="solid"
//         onClick={() => {
//           setCount((prevCount) => {
//             console.log("state saat ini", prevCount);
//             return prevCount + 1;
//           });
//         }}
//       />
//       <Button
//         isDisabled={count === 0 ? true : false}
//         // isDisabled={count === 0}
//         title="kurang"
//         colorSchema="blue"
//         variant="solid"
//         onClick={() => {
//           setCount((prevCount) => prevCount - 1);
//         }}
//       />

//       <h1 className="text-red-500 font-bold text-2xl">{message}</h1>
//       <Button
//         title="ihsan"
//         colorSchema="red"
//         variant="solid"
//         onClick={() => {
//           setMessage("Hello ihsan");
//         }}
//       />
//       <Button
//         title="hilmi"
//         colorSchema="blue"
//         variant="solid"
//         onClick={() => {
//           setMessage("Hello hilmi");
//         }}
//       />
//     </main>
//   );
// };

// export default Home;

type Hasil = {
  mata_pelajaran: string;
  nilai: number | null;
};

const Home = () => {
  let [mapel, setMapel] = useState("");
  let [nilai, setNilai] = useState(0);
  let [hasil, setHasil] = useState<Hasil[]>([
    {
      mata_pelajaran: "matematika",
      nilai: 80,
    },
  ]);
  return (
    <section>
      {hasil.map((item, index) => (
        <section className="border rounded-lg shadow-lg p-5 mb-5" key={index}>
          <h5>Nama Mata pelajaran : {hasil[index].mata_pelajaran} </h5>
          <h5>Nilai : {item.nilai} </h5>
          <Button
          isDisabled={hasil.length === 1}
          title='hapus'
          colorSchema="red"
            onClick={() => {
              setHasil((prevState) => {
                prevState.splice(index, 1);
                return [...prevState];
              });
            }}
            
          >
            Hapus
          </Button>
        </section>
      ))}

      <section className="">
        <Button
          isDisabled={mapel === "fisika"}
          colorSchema="red"
          title="fisika"
          onClick={() => {
            setMapel("fisika");
          }}
        />
        <Button
          isDisabled={mapel === "kimia"}
          colorSchema="blue"
          title="kimia"
          onClick={() => {
            setMapel("kimia");
          }}
        />
        <Button
          isDisabled={mapel === "biologi"}
          colorSchema="green"
          title="biologi"
          onClick={() => {
            setMapel("biologi");
          }}
        />
      </section>

      <section className="mt-5">
        <Button
          isDisabled={nilai === 70}
          colorSchema="green"
          variant="outline"
          title="70"
          onClick={() => {
            setNilai(70);
          }}
        />
        <Button
          isDisabled={nilai === 80}
          colorSchema="red"
          title="80"
          variant="outline"
          onClick={() => {
            setNilai(80);
          }}
        />
        <Button
          isDisabled={nilai === 90}
          colorSchema="blue"
          title="90"
          variant="outline"
          onClick={() => {
            setNilai(90);
          }}
        />
        <Button
          isDisabled={nilai === 100}
          colorSchema="red"
          variant="outline"
          title="100"
          onClick={() => {
            setNilai(100);
          }}
        />
      </section>

      <section className="mt-5">
        <Button
          colorSchema="red"
          isDisabled={mapel === "" || nilai === 0}
          title="simpan"
          onClick={() => {
            setHasil((prevState) => {
              return [...prevState, { mata_pelajaran: mapel, nilai: nilai }];
            });

            setMapel("");
            setNilai(0);
          }}
        />
      </section>
    </section>
  );
};

export default Home;
