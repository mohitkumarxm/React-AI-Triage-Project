import { useMemo } from "react";

import { useInboxQuery } from "@/features/inbox/use-inbox-query";

import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";

import { useAppSelector } from "@/store/hooks";

import type { InboxItem } from "@/types/inbox";

import { AppLayout } from "@/components/layout/app-layout";
import { SidebarLayout } from "@/components/layout/sidebar-layout";
import { DetailLayout } from "@/components/layout/detail-layout";

import { InboxToolbar } from "@/components/inbox/inbox-toolbar";
import { InboxList } from "@/components/inbox/inbox-list";
import { InboxFilters } from "@/components/inbox/inbox-filters";
import { InboxBulkActions } from "@/components/inbox/inbox-bulk-actions";

import { MessageDetail } from "@/components/detail/message-detail";
import { DetailPlaceholder } from "@/components/detail/detail-placeholder";

function App() {
  const { data, isLoading, error } = useInboxQuery();

  const filters = useAppSelector((state) => state.filters);

  const selectedItemId = useAppSelector((state) => state.inbox.selectedItemId);

  const itemStatuses = useAppSelector((state) => state.inbox.itemStatuses);

  /**
   * Merge optimistic status updates
   */
  const mergedItems: InboxItem[] = useMemo(() => {
    if (!data) return [];

    return data.map((item) => ({
      ...item,

      status: itemStatuses[item.id] ?? item.status,
    }));
  }, [data, itemStatuses]);

  /**
   * Filtering
   */
  const filteredItems = useMemo(() => {
    return mergedItems.filter((item) => {
      const matchesSearch =
        item.subject.toLowerCase().includes(filters.search.toLowerCase()) ||
        item.body.toLowerCase().includes(filters.search.toLowerCase()) ||
        item.sender.name.toLowerCase().includes(filters.search.toLowerCase());

      const matchesStatus =
        filters.status === "All" || item.status === filters.status;

      const matchesPriority =
        filters.priority === "All" || item.priority === filters.priority;

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [mergedItems, filters]);

  /**
   * Selected Item
   */
  const selectedItem = useMemo(() => {
    return mergedItems.find((item) => item.id === selectedItemId);
  }, [mergedItems, selectedItemId]);

  /**
   * Keyboard Navigation
   */
  useKeyboardNavigation({
    items: filteredItems,
    selectedItemId,
  });

  return (
    <AppLayout
      sidebar={
        <SidebarLayout>
          <InboxToolbar />

          {isLoading && (
            <div className="p-4 text-slate-400">Loading inbox...</div>
          )}

          {error && (
            <div className="p-4 text-red-400">Failed to load inbox.</div>
          )}

          {data && (
            <>
              <InboxFilters />

              <InboxBulkActions />

              <InboxList items={filteredItems} />
            </>
          )}
        </SidebarLayout>
      }
      detail={
        <DetailLayout>
          {selectedItem ? (
            <MessageDetail item={selectedItem} />
          ) : (
            <DetailPlaceholder />
          )}
        </DetailLayout>
      }
    />
  );
}

export default App;
