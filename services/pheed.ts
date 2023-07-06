import { useMutation, useQuery } from "@tanstack/react-query";

import {
  deletePheed,
  deletePheedBookmark,
  deletePheedReply,
  editPheed,
  getPheedDetail,
  getPheeds,
  postPheed,
  postPheedBookmark,
  postPheedReply,
} from "apis";
import type {
  DeleteBookmarkQueryModel,
  DeletePheedQueryModel,
  DeletePheedReplyQueryModel,
  GetPheedDetailQueryModel,
  GetPheedsQueryModel,
  PatchPheedQueryModel,
  PostBookmarkQueryModel,
  PostPheedQueryModel,
  PostPheedReplyQueryModel,
} from "types";

export const pheedKeys = {
  all: ["pheed"] as const,
  pheeds: () => [...pheedKeys.all, "pheed"] as const,
  pheed: (req: GetPheedsQueryModel) =>
    [...pheedKeys.pheeds(), req.query.search_word] as const,
  pheedDetails: () => [...pheedKeys.all, "pheedDetail"] as const,
  pheedDetail: (id: GetPheedDetailQueryModel) =>
    [...pheedKeys.pheedDetails(), id] as const,
};

export const useGetPheeds = (req: GetPheedsQueryModel, enabled?: boolean) => {
  return useQuery({
    queryKey: pheedKeys.pheed(req),
    queryFn: () => getPheeds(req),
    enabled,
  });
};

export const usePostPheed = () => {
  return useMutation({
    mutationFn: (req: PostPheedQueryModel) => postPheed(req),
  });
};

export const useEditPheed = () => {
  return useMutation({
    mutationFn: (req: PatchPheedQueryModel) => editPheed(req),
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

export const usePostPheedReply = () => {
  return useMutation({
    mutationFn: (req: PostPheedReplyQueryModel) => postPheedReply(req),
  });
};

export const useDeletePheedReply = () => {
  return useMutation({
    mutationFn: (req: DeletePheedReplyQueryModel) => deletePheedReply(req),
  });
};
