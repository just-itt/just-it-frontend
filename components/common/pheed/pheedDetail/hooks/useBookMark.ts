import { useRouter } from "next/router";

import { useDeleteBookmark, usePostBookmark } from "@service/index";
import type { GetPheedDetailServerModel } from "types";

const useBookMark = (
  data: GetPheedDetailServerModel,
  refetchPheedDetail: () => void,
) => {
  const {
    query: { id },
  } = useRouter();

  const { mutate: postBookmarkMutate } = usePostBookmark();
  const { mutate: deleteBookmarkMutate } = useDeleteBookmark();

  const handleClickBookMark = () => {
    const body = { id: id as string };

    if (data?.is_bookmark) {
      deleteBookmarkMutate(
        { body },
        {
          onSuccess: () => {
            refetchPheedDetail();
            alert("북마크가 해제되었습니다.");
          },
        },
      );
    } else {
      postBookmarkMutate(
        { body },
        {
          onSuccess: () => {
            refetchPheedDetail();
            alert("북마크에 추가되었습니다.");
          },
        },
      );
    }
  };

  return { handleClickBookMark };
};

export default useBookMark;
