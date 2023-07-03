import type {
  GetCustomTagsServerModel,
  PostCustomTagQueryModel,
  TagsServerModel,
} from "types";
import ax from "./axios";

export const getGetTags = async (): Promise<TagsServerModel> => {
  const { data } = await ax.get("/tags");

  return data;
};

export const getCustomTags = async (): Promise<GetCustomTagsServerModel> => {
  const { data } = await ax.get("/tags/custom");

  return data;
};

export const postCustomTag = async (req: PostCustomTagQueryModel) => {
  const { data } = await ax.post("/tags/custom", req.body);

  return data;
};
