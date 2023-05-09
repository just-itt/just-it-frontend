import { useState } from "react";

const useCreatePheedFilter = () => {
  const [content, setContent] = useState({ title: "", content: "" });
  const [selectFilter, setSelectFilter] = useState<number[]>([]);

  const handleClickFilter = (id: number) => () => {
    setSelectFilter([...selectFilter, id]);
  };

  const handleTitle = (e: any) => {
    setContent({ ...content, title: e.target.value });
  };

  const handleContent = (e: any) => {
    setContent({ ...content, content: e.target.value });
  };

  return {
    content,
    selectFilter,
    handleClickFilter,
    handleTitle,
    handleContent,
  };
};

export default useCreatePheedFilter;
