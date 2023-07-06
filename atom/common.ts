import React from "react";
import { atom } from "recoil";

export const navAtom = atom({
  key: "navState",
  default: false,
});

export const modalAtom = atom<null | React.ReactNode>({
  key: "modalState",
  default: null,
});
