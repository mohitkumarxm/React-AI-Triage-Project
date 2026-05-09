import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type FilterState = {
  search: string;
  status: string;
  priority: string;
};

const initialState: FilterState = {
  search: "",
  status: "All",
  priority: "All",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },

    setStatusFilter: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },

    setPriorityFilter: (state, action: PayloadAction<string>) => {
      state.priority = action.payload;
    },
  },
});

export const { setSearch, setStatusFilter, setPriorityFilter } =
  filterSlice.actions;

export default filterSlice.reducer;
