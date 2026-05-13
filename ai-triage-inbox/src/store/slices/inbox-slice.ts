import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { MessageStatus } from "@/types/inbox";

type UndoState = {
  ids: string[];

  previousStatuses: Record<string, MessageStatus>;
} | null;

type InboxState = {
  selectedIds: string[];

  selectedItemId: string | null;

  itemStatuses: Record<string, MessageStatus>;

  undoState: UndoState;
};

const initialState: InboxState = {
  selectedIds: [],

  selectedItemId: null,

  itemStatuses: {},

  undoState: null,
};

const inboxSlice = createSlice({
  name: "inbox",

  initialState,

  reducers: {
    toggleSelectedId: (state, action: PayloadAction<string>) => {
      const exists = state.selectedIds.includes(action.payload);

      if (exists) {
        state.selectedIds = state.selectedIds.filter(
          (id) => id !== action.payload,
        );
      } else {
        state.selectedIds.push(action.payload);
      }
    },

    clearSelectedIds: (state) => {
      state.selectedIds = [];
    },

    setSelectedItemId: (state, action: PayloadAction<string | null>) => {
      state.selectedItemId = action.payload;
    },

    bulkUpdateStatus: (state, action: PayloadAction<MessageStatus>) => {
      const previousStatuses: Record<string, MessageStatus> = {};

      state.selectedIds.forEach((id) => {
        previousStatuses[id] = state.itemStatuses[id] ?? "New";

        state.itemStatuses[id] = action.payload;
      });

      state.undoState = {
        ids: [...state.selectedIds],
        previousStatuses,
      };
    },

    undoBulkUpdate: (state) => {
      if (!state.undoState) {
        return;
      }

      state.undoState.ids.forEach((id) => {
        const previousStatus = state.undoState?.previousStatuses[id];

        if (previousStatus) {
          state.itemStatuses[id] = previousStatus;
        }
      });

      state.undoState = null;
    },
  },
});

export const {
  toggleSelectedId,
  clearSelectedIds,
  setSelectedItemId,
  bulkUpdateStatus,
  undoBulkUpdate,
} = inboxSlice.actions;

export default inboxSlice.reducer;
