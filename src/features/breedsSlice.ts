import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Breed } from '@/utils/types';

interface BreedsState {
  breeds: Breed[];
  currentPage: number;
}

const initialState: BreedsState = {
  breeds: [],
  currentPage: 0,
};

const breedsSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {
    update: (
      state,
      action: PayloadAction<{
        data: Breed[];
        limit: number;
        page: number;
      }>,
    ) => {
      const {
        payload: { page, limit, data },
      } = action;

      const oldBreedsTo = state.breeds.slice(0, page * limit);
      const oldBreedsFrom = state.breeds.slice((page + 1) * limit, state.breeds.length);

      state.breeds = [...oldBreedsTo, ...data, ...oldBreedsFrom];
    },
    paginate: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const breedsReducer = breedsSlice.reducer;

export const { update, paginate } = breedsSlice.actions;
