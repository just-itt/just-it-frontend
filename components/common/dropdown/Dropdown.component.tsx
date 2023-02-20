import React, { useState } from "react";

import * as S from "./Dropdown.styled";

interface DropdownProps {
  initValue: string | null;
  placeholder: string;
}

const Dropdown = ({ initValue, placeholder }: DropdownProps) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [selectValue, setSelectValue] = useState(initValue ?? null);

  const handleClickDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  const handleSelectValue = (v: string) => () => {
    if (selectValue && v === selectValue) {
      setSelectValue(null);
    } else {
      setSelectValue(v);
    }

    setIsOpenDropdown(false);
  };

  return (
    <S.DropdownBtn>
      <S.SelectValue
        type="button"
        isSelected={!!selectValue}
        onClick={handleClickDropdown}
      >
        {selectValue ?? placeholder}
        <S.Arrow isopen={isOpenDropdown}>hihi</S.Arrow>
      </S.SelectValue>
      {isOpenDropdown && (
        <S.ListWrapper>
          <li>
            <S.List type="button" onClick={handleSelectValue("아침")}>
              아침 {selectValue === "아침" && "V"}
            </S.List>
          </li>
          <li>
            <S.List type="button" onClick={handleSelectValue("점심")}>
              점심 {selectValue === "점심" && "V"}
            </S.List>
          </li>
          <li>
            <S.List type="button" onClick={handleSelectValue("저녁")}>
              저녁 {selectValue === "저녁" && "V"}
            </S.List>
          </li>
        </S.ListWrapper>
      )}
    </S.DropdownBtn>
  );
};

export default Dropdown;
