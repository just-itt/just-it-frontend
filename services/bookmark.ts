import { useQuery } from "@tanstack/react-query";
import { getBookmarks } from "apis";

export const bookmarkKeys = {
  all: ["bookmark"] as const,
  bookmarks: ["bookmarks"] as const,
};

export const useGetBookmarks = () => {
  return useQuery({
    queryKey: bookmarkKeys.bookmarks,
    queryFn: () => getBookmarks(),
  });
};
