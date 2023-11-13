import { ChangeEvent, useMemo, useState } from "react";
interface Item {
  id: number;
}

const useCheckbox = ({ data }: { data: any }) => {
  const [payload, setPayload] = useState<number[]>([]);
  const checked = useMemo(() => {
    if (!data) {
      return { isAllCheced: false };
    }
    const isAllChecked = data.data.every((n: Item) => payload.includes(n.id));
    const selected = data.data.filter((n: Item) => payload.includes(n.id));

    return {
      isAllChecked: !!selected.length && isAllChecked,
      isIndeterminate: !!selected.length && !isAllChecked,
    };
  }, [payload, data]);

  const handleCheckHeader = () => {
    if (checked.isAllChecked || checked.isIndeterminate) {
      setPayload([]);
    } else {
      setPayload((state) => {
        if (!data) {
          return [];
        }
        const selected = Array.from(
          new Set([...state, ...data?.data?.map((n: Item) => Number(n.id))])
        );
        return [...selected];
      });
    }
  };

  const handleCheckItem = (e: ChangeEvent<any>, id: number) => {
    if (e.target.checked) {
      setPayload((state) => [...state, id]);
    } else {
      const filtered = payload.filter((n) => n !== id);
      setPayload(filtered);
    }
  };

  return { checked, payload, handleCheckHeader, handleCheckItem };
};

export default useCheckbox;
