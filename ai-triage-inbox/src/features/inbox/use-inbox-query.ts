import { useQuery } from "@tanstack/react-query";

import { fetchInboxItems } from "@/services/mock-api";

export function useInboxQuery() {
  return useQuery({
    queryKey: ["inbox-items"],

    queryFn: fetchInboxItems,

    retry: 1,

    staleTime: 1000 * 60 * 5,
  });
}
