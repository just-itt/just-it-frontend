import React from "react";

import DefaultInfo from "../defaultInfo/DefaultInfo.component";
import ChangePassword from "../changePassword/ChangePassword.component";
import Btns from "../buttons/Btns.component";
import * as S from "./SettingContainer.styled";

const SettingContainer = () => {
  return (
    <S.Setting>
      <div>
        <DefaultInfo />
        <ChangePassword />
        <Btns />
      </div>
    </S.Setting>
  );
};

export default SettingContainer;
