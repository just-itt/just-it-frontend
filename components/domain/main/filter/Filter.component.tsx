import React, { useState } from "react";
import { useRouter } from "next/router";

import { ArrowLongIcon } from "@icons/index";
import * as S from "./Filter.styled";

const FILTERS = [
  { key: "해장", label: "얼큰한 해장이 필요 🍏" },
  { key: "한식", label: "한식 🍚" },
  { key: "비오는날", label: "비오는 날 ☔️" },
  { key: "패스트푸드", label: "패스트푸드 🍔" },
  { key: "연인과함께하기좋은", label: "연인과함께하기좋은 👩‍❤️‍👨" },
  { key: "일식", label: "일식 🍣" },
  { key: "해장", label: "얼큰한 해장이 필요 🍏" },
  { key: "한식", label: "한식 🍚" },
  { key: "비오는날", label: "비오는 날 ☔️" },
  { key: "패스트푸드", label: "패스트푸드 🍔" },
  { key: "연인과함께하기좋은", label: "연인과함께하기좋은 👩‍❤️‍👨" },
  { key: "일식", label: "일식 🍣" },
  { key: "해장", label: "얼큰한 해장이 필요 🍏" },
  { key: "한식", label: "한식 🍚" },
  { key: "비오는날", label: "비오는 날 ☔️" },
  { key: "패스트푸드", label: "패스트푸드 🍔" },
  { key: "연인과함께하기좋은", label: "연인과함께하기좋은 👩‍❤️‍👨" },
  { key: "일식", label: "일식 🍣" },
  { key: "해장", label: "얼큰한 해장이 필요 🍏" },
  { key: "한식", label: "한식 🍚" },
  { key: "비오는날", label: "비오는 날 ☔️" },
  { key: "패스트푸드", label: "패스트푸드 🍔" },
  { key: "연인과함께하기좋은", label: "연인과함께하기좋은 👩‍❤️‍👨" },
  { key: "일식", label: "일식 🍣" },
];

const Filter = () => {
  const { push, query } = useRouter();

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const isSelect = (key: string) => !!query.filter?.includes(key);

  const handleClickFilter = (key: string) => () =>
    isSelect(key)
      ? push({ query: {} })
      : push({ query: { ...query, filter: key } });

  const handleOpenFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <S.Filter>
      <S.FilterWrapper isFilterOpen={isFilterOpen}>
        {FILTERS.map(item => (
          <li key={item.key}>
            <S.FilterItem
              isSelect={isSelect(item.key)}
              onClick={handleClickFilter(item.key)}
            >
              {item.label}
            </S.FilterItem>
          </li>
        ))}
      </S.FilterWrapper>
      <S.OpenBtn
        type="button"
        isFilterOpen={isFilterOpen}
        onClick={handleOpenFilter}
      >
        <ArrowLongIcon />
      </S.OpenBtn>
    </S.Filter>
  );
};

export default Filter;
