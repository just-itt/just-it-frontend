import React from "react";
import { v4 as uuidv4 } from "uuid";

import * as S from "./CheckBox.styled";

const CheckBox = () => {
  const uuid = uuidv4();

  return (
    <>
      <S.Input type="checkbox" id={uuid} />
      <S.CheckBox htmlFor={uuid} className="checkbox" />
    </>
  );
};

export default CheckBox;
