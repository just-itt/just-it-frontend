import { atom } from "recoil";

export const userAtom = atom({
  key: "userState",
  default: { user: "" },
});

export const navAtom = atom({
  key: "navState",
  default: false,
});

export const modalAtom = atom({
  key: "modalState",
  default: false,
});
