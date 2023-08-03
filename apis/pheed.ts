import { ax } from "apis";

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
  // TODO: filter tagOptions 타입 number로 수정했는데 string으로 넘어가서 백엔드 확인 필요
  // const filter = (tagOptions: string | string[]) => {
  //   if (typeof tagOptions !== "string") {
  //     return tagOptions.map(option => +option);
  //   }

  //   return +tagOptions;
  // };

  const { data } = await ax.get<GetPheedsServerModel>("/posts", {
    // params: {
    //   ...req.query,
    //   ...(req.query.tag_options && {
    //     tag_options: filter(req.query.tag_options),
    //   }),
    // },
    params: req.query,
  });

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
  const { data } = await ax.get<GetMyPheedsServerModel>("/posts/me", {
    params: req.query,
  });

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

  return data;
};
