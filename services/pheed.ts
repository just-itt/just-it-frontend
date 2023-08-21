import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

import {
  deletePheed,
  deletePheedBookmark,
  deletePheedReply,
  editPheed,
  getPheedDetail,
  getPheeds,
  getSuggestedPheed,
  patchPheedReply,
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
  PatchPheedReplyQueryModel,
  PostBookmarkQueryModel,
  PostPheedQueryModel,
  PostPheedReplyQueryModel,
} from "types";

export const pheedKeys = {
  all: ["pheed"] as const,
  suggestedPheeds: ["suggestedPheeds"] as const,
  pheeds: () => [...pheedKeys.all, "pheed"] as const,
  pheed: (req: GetPheedsQueryModel) => [...pheedKeys.pheeds(), req] as const,
  pheedDetails: () => [...pheedKeys.all, "pheedDetail"] as const,
  pheedDetail: (id: GetPheedDetailQueryModel) =>
    [...pheedKeys.pheedDetails(), id] as const,
};

export const useGetSuggestedPheeds = () => {
  return useQuery({
    queryKey: pheedKeys.suggestedPheeds,
    queryFn: () => getSuggestedPheed(),
  });
};

export const useGetPheeds = (req: GetPheedsQueryModel) => {
  return useInfiniteQuery({
    queryKey: pheedKeys.pheed(req),
    queryFn: ({ pageParam }) => getPheeds({ ...req, pageParam }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === 10 ? allPages.length * 10 : undefined,
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

export const usePatchPheedReply = () => {
  return useMutation({
    mutationFn: (req: PatchPheedReplyQueryModel) => patchPheedReply(req),
  });
};
