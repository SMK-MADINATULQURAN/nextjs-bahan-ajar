import clsx from "clsx";

interface InputProps {
  isError?: boolean;
  messageError?: string;
  value: number | string;
}

const InputText: React.FC<
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ messageError = "Wajib di isi", isError = false, value, ...props }) => {
  return (
    <section>
      <input
        value={value}
        className={clsx(`w-full h-8 border  rounded px-2`, {
          "border-gray-700": isError === false,
          "border-red-500": isError === true,
        })}
        {...props}
      />
      {/* {true ? 'aksi jika benear' : 'jika salah'} */}

      {isError === true ? (
        <p className="text-red-500 text-sm">{messageError}</p>
      ) : (
        <></>
      )}
    </section>
  );
};

export default InputText;
