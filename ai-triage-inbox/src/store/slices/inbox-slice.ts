import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type InboxState = {
  selectedItemId: string | null;
  selectedIds: string[];
};

const initialState: InboxState = {
  selectedItemId: null,
  selectedIds: [],
};

const inboxSlice = createSlice({
  name: "inbox",
  initialState,
  reducers: {
    setSelectedItemId: (state, action: PayloadAction<string | null>) => {
      state.selectedItemId = action.payload;
    },

    toggleSelectedId: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      if (state.selectedIds.includes(id)) {
        state.selectedIds = state.selectedIds.filter((itemId) => itemId !== id);
      } else {
        state.selectedIds.push(id);
      }
    },

    clearSelectedIds: (state) => {
      state.selectedIds = [];
    },
  },
});

export const { setSelectedItemId, toggleSelectedId, clearSelectedIds } =
  inboxSlice.actions;

export default inboxSlice.reducer;
