import {
  setPriorityFilter,
  setSearch,
  setStatusFilter,
} from "@/store/slices/filter-slice";

import { useAppDispatch, useAppSelector } from "@/store/hooks";

export function InboxFilters() {
  const dispatch = useAppDispatch();

  const { search, status, priority } = useAppSelector((state) => state.filters);

  return (
    <div className="flex flex-col gap-3 border-b border-slate-800 p-4">
      <input
        type="text"
        placeholder="Search messages..."
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="rounded border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-blue-500"
      />

      <div className="flex gap-2">
        <select
          value={status}
          onChange={(e) => dispatch(setStatusFilter(e.target.value))}
          className="flex-1 rounded border border-slate-700 bg-slate-900 px-3 py-2 text-sm"
        >
          <option value="All">All Status</option>

          <option value="New">New</option>

          <option value="In Progress">In Progress</option>

          <option value="Done">Done</option>
        </select>

        <select
          value={priority}
          onChange={(e) => dispatch(setPriorityFilter(e.target.value))}
          className="flex-1 rounded border border-slate-700 bg-slate-900 px-3 py-2 text-sm"
        >
          <option value="All">All Priority</option>

          <option value="P1">P1</option>

          <option value="P2">P2</option>

          <option value="P3">P3</option>
        </select>
      </div>
    </div>
  );
}
