import { ReactNode } from "react";
import clsx from "clsx";

type status = "warning" | "error" | "success";
interface SectionProps {
  title: string;
  children: ReactNode;
  status: status;
}

const Note: React.FC<SectionProps> = ({
  title,
  status,
  children,
  ...props
}) => {
  return (
    <section
      className={clsx(`mt-5 rounded-lg border-2  shadow-md px-2`, {
        "border-red-500": status === "error",
        "border-yellow-500": status === "warning",
        "border-green-500": status === "success",
      })}
    >
      <div
        className={clsx(`py-2 border-b-2`, {
          "border-red-500": status === "error",
          "border-yellow-500": status === "warning",
          "border-green-500": status === "success",
        })}
      >
        <h5
          className={clsx("font-bold", {
            "text-red-500": status === "error",
            "text-yellow-500": status === "warning",
            "text-green-500": status === "success",
          })}
        >
          {" "}
          {title}
        </h5>
      </div>
      <div {...props} className="py-3 ">
        {children}
      </div>
    </section>
  );
};

export default Note;
