import { useQuery } from "@tanstack/react-query";

import { generateAIResponse } from "@/services/mock-ai";

import type { InboxItem } from "@/types/inbox";

export function useAIQuery(item?: InboxItem) {
  return useQuery({
    queryKey: ["ai-result", item?.id],

    enabled: !!item,

    retry: 1,

    staleTime: Infinity,

    queryFn: async ({ signal }) => {
      if (!item) {
        throw new Error("No item selected");
      }

      return generateAIResponse(item, signal);
    },
  });
}
