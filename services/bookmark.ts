import { useQuery } from "@tanstack/react-query";

import { getBookmarks } from "apis";
import type { GetBookmarkQueryModel } from "types";

export const bookmarkKeys = {
  all: ["bookmark"] as const,
  bookmarks: () => [...bookmarkKeys.all, "bookmark"] as const,
  bookmark: (req: GetBookmarkQueryModel) =>
    [...bookmarkKeys.bookmarks(), req] as const,
};

export const useGetBookmarks = (req: GetBookmarkQueryModel) => {
  return useQuery({
    queryKey: bookmarkKeys.bookmark(req),
    queryFn: () => getBookmarks(req),
  });
};
