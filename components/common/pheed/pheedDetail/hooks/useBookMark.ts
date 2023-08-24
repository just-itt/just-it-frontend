import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import {
  bookmarkKeys,
  useDeleteBookmark,
  usePostBookmark,
} from "@service/index";
import type { GetPheedDetailServerModel } from "types";

const useBookmark = (
  data: GetPheedDetailServerModel,
  refetchPheedDetail: () => void,
) => {
  const {
    query: { id },
  } = useRouter();

  const queryClient = useQueryClient();

  const { mutate: postBookmarkMutate } = usePostBookmark();
  const { mutate: deleteBookmarkMutate } = useDeleteBookmark();

  const handleClickBookmark = () => {
    const body = { id: id as string };

    if (data?.is_bookmark) {
      deleteBookmarkMutate(
        { body },
        {
          onSuccess: () => {
            refetchPheedDetail();
            queryClient.invalidateQueries(bookmarkKeys.bookmarks());
            toast.success("북마크가 해제되었습니다.");
          },
        },
      );
    } else {
      postBookmarkMutate(
        { body },
        {
          onSuccess: () => {
            refetchPheedDetail();
            queryClient.invalidateQueries(bookmarkKeys.bookmarks());
            toast.success("북마크에 추가되었습니다.");
          },
        },
      );
    }
  };

  return { handleClickBookmark };
};

export default useBookmark;
