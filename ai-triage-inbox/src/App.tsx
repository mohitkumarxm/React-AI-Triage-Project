import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { setSelectedItemId } from "@/store/slices/inbox-slice";

function App() {
  const dispatch = useAppDispatch();

  const selectedItemId = useAppSelector((state) => state.inbox.selectedItemId);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">AI Triage Inbox</h1>

      <button
        className="rounded bg-blue-600 px-4 py-2"
        onClick={() => dispatch(setSelectedItemId("itm_001"))}
      >
        Select Item
      </button>

      <p>{selectedItemId}</p>
    </div>
  );
}

export default App;
