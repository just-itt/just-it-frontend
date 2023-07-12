import React from "react";
import { atom } from "recoil";

export const navAtom = atom({
  key: "navState",
  default: false,
});

export const modalAtom = atom<React.ReactNode | null>({
  key: "modalState",
  default: null,
});
