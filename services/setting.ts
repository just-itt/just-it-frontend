import { useMutation } from "@tanstack/react-query";

import {
  deleteMember,
  deleteProfileImage,
  patchNickname,
  postProfileImage,
} from "apis";
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

export const useDeleteProfileImage = () => {
  return useMutation({
    mutationFn: () => deleteProfileImage(),
  });
};

export const useDeleteMember = () => {
  return useMutation({
    mutationFn: () => deleteMember(),
  });
};
