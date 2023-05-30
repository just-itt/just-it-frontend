import { useMutation, useQuery } from "@tanstack/react-query";

import {
  deletePheed,
  deletePheedBookmark,
  getPheedDetail,
  postPheed,
  postPheedBookmark,
} from "apis";
import type {
  DeleteBookmarkQueryModel,
  DeletePheedQueryModel,
  GetPheedDetailQueryModel,
  PostBookmarkQueryModel,
  PostPheedQueryModel,
} from "types";

const pheedKeys = {
  all: ["pheed"] as const,
  pheedDetails: () => [...pheedKeys.all, "pheedDetail"] as const,
  pheedDetail: (id: GetPheedDetailQueryModel) =>
    [...pheedKeys.pheedDetails(), id] as const,
};

export const usePostPheed = () => {
  return useMutation({
    mutationFn: (req: PostPheedQueryModel) => postPheed(req),
  });
};

export const useDeletePheed = () => {
  return useMutation({
    mutationFn: (req: DeletePheedQueryModel) => deletePheed(req),
  });
};

export const useGetPheedDetail = (req: GetPheedDetailQueryModel) => {
  return useQuery({
    queryKey: pheedKeys.pheedDetail(req),
    queryFn: () => getPheedDetail(req),
  });
};

export const usePostBookmark = () => {
  return useMutation({
    mutationFn: (req: PostBookmarkQueryModel) => postPheedBookmark(req),
  });
};

export const useDeleteBookmark = () => {
  return useMutation({
    mutationFn: (req: DeleteBookmarkQueryModel) => deletePheedBookmark(req),
  });
};
