import { useMutation } from "@tanstack/react-query";

import { patchNickname, postProfileImage } from "apis";
import type {
  PatchNicknameQueryModel,
  PostProfileImageQueryModel,
} from "types";

export const usePatchNickname = () => {
  return useMutation({
    mutationFn: (req: PatchNicknameQueryModel) => patchNickname(req),
  });
};

export const usePostProfileImage = () => {
  return useMutation({
    mutationFn: (req: PostProfileImageQueryModel) => postProfileImage(req),
  });
};
