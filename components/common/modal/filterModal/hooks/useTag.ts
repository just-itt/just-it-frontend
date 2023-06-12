import { useState, useEffect } from "react";

import { useGetCustomTags, useGetTags, usePostCustomTag } from "@service/index";
import { useModal } from "@hooks/index";

const useTag = () => {
  const { data: tags } = useGetTags();
  const { data: customTags } = useGetCustomTags();
  const { mutate: postCustomTagMutate } = usePostCustomTag();

  const { handleCloseModal } = useModal();

  const [selectTags, setSelectTags] = useState<string[]>([]);

  const handleClickTag = (tagId: number) => () => {
    setSelectTags(
      selectTags.includes(`${tagId}`)
        ? selectTags.filter(selectTagId => selectTagId !== `${tagId}`)
        : [...selectTags, `${tagId}`],
    );
  };

  const handleSaveFilter = () => {
    postCustomTagMutate(
      {
        body: {
          title: "오늘의 추천 메뉴",
          tag_options: selectTags.map(tag => +tag),
        },
      },
      {
        onSuccess: () => {
          alert("커스텀 필터가 저장되었습니다.");
          handleCloseModal();
        },
      },
    );
  };

  useEffect(() => {
    if (!customTags) return;

    setSelectTags(customTags.tag_options.map(tag => `${tag.id}`));
  }, [customTags]);

  return {
    tags,
    selectTags,
    handleClickTag,
    handleCloseModal,
    handleSaveFilter,
  };
};

export default useTag;
