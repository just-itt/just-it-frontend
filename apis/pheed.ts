import { ax } from "apis";

import { makePheedFilterQuery } from "utils";
import type {
  DeletePheedQueryModel,
  DeletePheedReplyQueryModel,
  GetMyPheedsQueryModel,
  GetMyPheedsServerModel,
  GetPheedDetailQueryModel,
  GetPheedDetailServerModel,
  GetPheedsQueryModel,
  GetPheedsServerModel,
  GetSuggestedPheedsServerModel,
  PatchPheedQueryModel,
  PatchPheedReplyQueryModel,
  PostPheedQueryModel,
  PostPheedReplyQueryModel,
} from "types";

export const getPheeds = async (req: GetPheedsQueryModel) => {
  const { data } = await ax.get<GetPheedsServerModel>(
    `/posts${makePheedFilterQuery(req.query)}`,
    { params: { limit: 10, offset: req.pageParam } },
  );

  return data.items;
};

export const postPheed = async (req: PostPheedQueryModel) => {
  const res = await ax.post("/posts", req);

  return res;
};

export const editPheed = async (req: PatchPheedQueryModel) => {
  const res = await ax.patch(`/posts/${req.id}`, req.body);

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

export const getMyPheeds = async (req: GetMyPheedsQueryModel) => {
  const { data } = await ax.get<GetMyPheedsServerModel>(
    `/posts/me${makePheedFilterQuery(req.query)}`,
  );

  return data;
};

export const postPheedReply = async (req: PostPheedReplyQueryModel) => {
  const { data } = await ax.post(`/posts/${req.id}/replies`, req.body);

  return data;
};

export const deletePheedReply = async (req: DeletePheedReplyQueryModel) => {
  const { data } = await ax.delete(
    `/posts/${req.id}/replies/${req.body.reply_id}`,
  );

  return data;
};

export const patchPheedReply = async (req: PatchPheedReplyQueryModel) => {
  const { data } = await ax.patch(
    `/posts/${req.body.post_id}/replies/${req.body.reply_id}`,
    { content: req.body.content },
  );

  return data;
};

export const getSuggestedPheed = async () => {
  const { data } = await ax.get<GetSuggestedPheedsServerModel>("/posts/custom");

  return {
    ...data,
    items: data.items.sort(() => Math.random() - 0.5),
  };
};
