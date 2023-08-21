import clsx from "clsx";

type Variant = "solid" | "outline";
type ColorSchema = "blue" | "red" | "green";

interface ButtonProps {
  title: string;
  isDisabled?: boolean;
  variant?: Variant;
  colorSchema: ColorSchema;
  width?: string;
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ title, isDisabled, variant = "solid", width=24, colorSchema, ...props }) => {
  return (
    <button
      {...props}
      disabled={isDisabled}
      className={clsx(` h-8 rounded border  capitalize`, {
        "bg-blue-500 text-white": colorSchema === "blue" && variant === "solid",
        "border-blue-500 text-blue-500":
          colorSchema === "blue" && variant === "outline",
        "bg-red-500 text-white": colorSchema === "red" && variant === "solid",
        "border-red-500 text-red-500 ":
          colorSchema === "red" && variant === "outline",
        "bg-green-500 text-white":
          colorSchema === "green" && variant === "solid",
        "border-green-500 text-green-500":
          colorSchema === "green" && variant === "outline",
        "opacity-25": isDisabled,
        "w-full": width === "full",
        "w-24" : width === 24
      })}
    >
      {title}
    </button>
  );
};

export default Button;
