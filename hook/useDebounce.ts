import { useEffect, useState } from "react";

const useDebounce = (keyword: string, delay: number) => {
  let [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(keyword);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  return {debouncedValue}
};

export default useDebounce;
