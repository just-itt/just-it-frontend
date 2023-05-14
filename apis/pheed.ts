import { ax } from "apis";

import type {
  GetMyPheedsServerModel,
  GetPheedDetailQueryModel,
  PostPheedQueryModel,
} from "types";

export const postPheed = async (req: PostPheedQueryModel) => {
  const res = await ax.post("/posts", req);

  return res;
};

export const getPheedDetail = async (req: GetPheedDetailQueryModel) => {
  const res = await ax.get(`/posts/${req.id}`);

  return res;
};

export const getMyPheeds = async () => {
  const { data } = await ax.get<GetMyPheedsServerModel>("/posts/me");

  return data;
};
