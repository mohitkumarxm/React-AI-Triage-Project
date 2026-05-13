import { useEffect } from "react";

import { useAppDispatch } from "@/store/hooks";

import { setSelectedItemId } from "@/store/slices/inbox-slice";

import type { InboxItem } from "@/types/inbox";

type Params = {
  items: InboxItem[];

  selectedItemId?: string | null;
};

export function useKeyboardNavigation({ items, selectedItemId }: Params) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const activeElement = document.activeElement;

      const isTyping =
        activeElement instanceof HTMLInputElement ||
        activeElement instanceof HTMLTextAreaElement ||
        activeElement instanceof HTMLSelectElement;

      if (isTyping) {
        return;
      }

      const currentIndex = items.findIndex(
        (item) => item.id === selectedItemId,
      );

      // NEXT
      if (e.key === "j") {
        e.preventDefault();

        const nextIndex =
          currentIndex < items.length - 1 ? currentIndex + 1 : 0;

        dispatch(setSelectedItemId(items[nextIndex]?.id));
      }

      // PREVIOUS
      if (e.key === "k") {
        e.preventDefault();

        const prevIndex =
          currentIndex > 0 ? currentIndex - 1 : items.length - 1;

        dispatch(setSelectedItemId(items[prevIndex]?.id));
      }

      // CLEAR
      if (e.key === "Escape") {
        dispatch(setSelectedItemId(null));
      }

      // SEARCH
      if (e.key === "/") {
        e.preventDefault();

        const searchInput = document.getElementById("search-input");

        if (searchInput) {
          (searchInput as HTMLInputElement).focus();
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [items, selectedItemId, dispatch]);
}
