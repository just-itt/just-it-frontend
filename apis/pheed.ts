import { ax } from "apis";

import type {
  DeletePheedBookmarkQueryModel,
  GetMyPheedsServerModel,
  GetPheedDetailQueryModel,
  GetPheedDetailServerModel,
  GetPheedsServerModel,
  PostPheedBookmarkQueryModel,
  PostPheedQueryModel,
} from "types";

export const postPheed = async (req: PostPheedQueryModel) => {
  const res = await ax.post("/posts", req);

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

export const postPheedBookmark = (req: PostPheedBookmarkQueryModel) => {
  return ax.post(`/posts/${req.body.id}/bookmarks`);
};

export const deletePheedBookmark = (req: DeletePheedBookmarkQueryModel) => {
  return ax.delete(`/posts/${req.body.id}/bookmarks`);
};
