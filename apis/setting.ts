import { ax } from "apis";

import type {
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
