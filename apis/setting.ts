import { ax } from "apis";

import type {
  PatchChangePasswordQueryModel,
  PatchNicknameQueryModel,
  PostProfileImageQueryModel,
} from "types";

export const patchNickname = async (req: PatchNicknameQueryModel) => {
  const res = await ax.patch("/members/me", req.body);

  return res;
};

export const postProfileImage = async (req: PostProfileImageQueryModel) => {
  const res = await ax.post("/members/me/profile-image", req);

  return res;
};

export const deleteProfileImage = async () => {
  const res = await ax.delete("/members/me/profile-image");

  return res;
};

export const deleteMember = async () => {
  const res = await ax.patch("/members/withdraw");

  return res;
};

export const patchChangePassword = async (
  req: PatchChangePasswordQueryModel,
) => {
  const res = await ax.patch("/members/me/pw", req.body);

  return res;
};
