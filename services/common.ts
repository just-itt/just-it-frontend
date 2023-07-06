import { useQuery, useMutation } from "@tanstack/react-query";

import { getCustomTags, getGetTags, getPheeds, postCustomTag } from "apis";
import { GetCustomPheedQueryModel, PostCustomTagQueryModel } from "types";

const commonKeys = {
  all: ["common"] as const,
  tags: ["tags"] as const,
  customTags: ["customTags"] as const,
  customPheeds: () => [...commonKeys.customTags, "customPheeds"] as const,
};

export const useGetTags = () => {
  return useQuery({ queryKey: commonKeys.tags, queryFn: () => getGetTags() });
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
