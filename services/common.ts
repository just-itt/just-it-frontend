import { useQuery, useMutation } from "@tanstack/react-query";

import {
  getCustomTags,
  getGetCreatePheedTags,
  getPheeds,
  postCustomTag,
} from "apis";
import { GetCustomPheedQueryModel, PostCustomTagQueryModel } from "types";

export const commonKeys = {
  all: ["common"] as const,
  createPheedTag: ["createPheedTag"] as const,
  tags: ["tags"] as const,
  customTags: ["customTags"] as const,
  customPheeds: () => [...commonKeys.customTags, "customPheeds"] as const,
};

export const useGetCreatePheedTags = () => {
  return useQuery({
    queryKey: commonKeys.createPheedTag,
    queryFn: () => getGetCreatePheedTags(),
    cacheTime: Infinity,
    staleTime: Infinity,
  });
};

export const useGetTags = () => {
  return useQuery({
    queryKey: commonKeys.tags,
    queryFn: () => getGetCreatePheedTags(),
    select: data => data.flatMap(({ options }) => options),
    cacheTime: Infinity,
    staleTime: Infinity,
  });
};

export const useGetCustomTags = (enabled?: boolean) => {
  return useQuery({
    queryKey: commonKeys.customTags,
    queryFn: () => getCustomTags(),
    enabled,
  });
};

export const useGetCustomPheeds = (req: GetCustomPheedQueryModel) => {
  return useQuery({
    queryKey: commonKeys.customPheeds(),
    queryFn: () => getPheeds(req),
  });
};

export const usePostCustomTag = () => {
  return useMutation({
    mutationFn: (req: PostCustomTagQueryModel) => postCustomTag(req),
  });
};
