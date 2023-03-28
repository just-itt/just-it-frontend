import React, { useState } from "react";

import * as S from "./DropdownBtn.styled";

interface DropdownBtnProps {
  btnRender: React.ReactNode;
  dropdownItems: { label: string; value: string }[];
}

const DropdownBtn = ({ btnRender, dropdownItems }: DropdownBtnProps) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleClickDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  return (
    <S.DropdownBtnWrapper type="button" onClick={handleClickDropdown}>
      {btnRender}
      {isOpenDropdown && (
        <S.DropdownWrapper>
          {dropdownItems.map(({ label, value }, i) => (
            <S.DropdownItem key={i}>{label}</S.DropdownItem>
          ))}
        </S.DropdownWrapper>
      )}
    </S.DropdownBtnWrapper>
  );
};

export default DropdownBtn;
