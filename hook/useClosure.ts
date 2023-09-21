import { useState } from "react";

const useClosure = () => {
  let [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };


  return {isOpen, onOpen, onClose}
};


export default useClosure
