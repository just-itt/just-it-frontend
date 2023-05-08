import { useState } from "react";

const useCreatePheedFilter = () => {
  const [selectFilter, setSelectFilter] = useState<number[]>([]);

  const handleClickFilter = (id: number) => () => {
    setSelectFilter([...selectFilter, id]);
  };

  return {
    selectFilter,
    handleClickFilter,
  };
};

export default useCreatePheedFilter;
