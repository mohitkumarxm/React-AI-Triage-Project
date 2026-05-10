import { useInboxQuery } from "@/features/inbox/use-inbox-query";

import { AppLayout } from "@/components/layout/app-layout";
import { SidebarLayout } from "@/components/layout/sidebar-layout";
import { DetailLayout } from "@/components/layout/detail-layout";

import { InboxToolbar } from "@/components/inbox/inbox-toolbar";
import { InboxList } from "@/components/inbox/inbox-list";

import { DetailPlaceholder } from "@/components/detail/detail-placeholder";

function App() {
  const { data, isLoading, error } = useInboxQuery();

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

          {data && <InboxList items={data} />}
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
