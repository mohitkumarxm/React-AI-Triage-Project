import { useInboxQuery } from "@/features/inbox/use-inbox-query";
import { InboxFilters } from "@/components/inbox/inbox-filters";
import { InboxBulkActions } from "@/components/inbox/inbox-bulk-actions";
import { AppLayout } from "@/components/layout/app-layout";
import { SidebarLayout } from "@/components/layout/sidebar-layout";
import { DetailLayout } from "@/components/layout/detail-layout";
import { InboxToolbar } from "@/components/inbox/inbox-toolbar";
import { InboxList } from "@/components/inbox/inbox-list";
import { DetailPlaceholder } from "@/components/detail/detail-placeholder";
import { useAppSelector } from "@/store/hooks";
import { useMemo } from "react";

function App() {
  const { data, isLoading, error } = useInboxQuery();
  const filters = useAppSelector((state) => state.filters);
  const filteredItems = useMemo(() => {
    if (!data) return [];

    return data.filter((item) => {
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
  }, [data, filters]);
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
          <DetailPlaceholder />
        </DetailLayout>
      }
    />
  );
}

export default App;
