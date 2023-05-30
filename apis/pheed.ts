import { ax } from "apis";

import type {
  DeletePheedQueryModel,
  GetMyPheedsServerModel,
  GetPheedDetailQueryModel,
  GetPheedDetailServerModel,
  GetPheedsServerModel,
  PostPheedQueryModel,
} from "types";

export const postPheed = async (req: PostPheedQueryModel) => {
  const res = await ax.post("/posts", req);

  return res;
};

export const deletePheed = async (req: DeletePheedQueryModel) => {
  const res = await ax.delete(`/posts/${req.id}`);

  return res;
};

export const getPheedDetail = async (req: GetPheedDetailQueryModel) => {
  const { data } = await ax.get<GetPheedDetailServerModel>(`/posts/${req.id}`);

  return data;
};

export const getMyPheeds = async () => {
  const { data } = await ax.get<GetMyPheedsServerModel>("/posts/me");

  return data;
};

export const getPheeds = async () => {
  const { data } = await ax.get<GetPheedsServerModel>("/posts");

  return data.items;
};
