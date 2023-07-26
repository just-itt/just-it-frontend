import { useQuery } from "@tanstack/react-query";

import { getMyPheeds } from "apis";
import type { GetMyPheedsQueryModel } from "types";

export const myPheedKeys = {
  all: ["myPheed"] as const,
  myPheeds: () => [...myPheedKeys.all, "myPheed"] as const,
  myPheed: (req: GetMyPheedsQueryModel) =>
    [...myPheedKeys.myPheeds(), req] as const,
};

export const useGetMyPheeds = (req: GetMyPheedsQueryModel) => {
  return useQuery({
    queryKey: myPheedKeys.myPheed(req),
    queryFn: () => getMyPheeds(req),
  });
};
