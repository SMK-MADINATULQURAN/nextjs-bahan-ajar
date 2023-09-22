import clsx from "clsx";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/20/solid";
interface ButtonActionProps {
  onClick: () => void;
}

export const DeleteButton: React.FC<
  ButtonActionProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ onClick, ...props }) => {
  return (
    <button type="button" onClick={onClick} {...props} className="text-red-500 h-6 w-6">
      <TrashIcon />
    </button>
  );
};

export const EditButton: React.FC<
  ButtonActionProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ onClick, ...props }) => {
  return (
    <button type="button" onClick={onClick} {...props} className="text-blue-500 h-6 w-6">
      <PencilSquareIcon />
    </button>
  );
};
