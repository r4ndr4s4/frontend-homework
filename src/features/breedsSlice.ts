import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Breed } from '@/utils/types';

const ITEMS_PER_PAGE = 25;

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
        page: number;
      }>,
    ) => {
      const oldBreedsTo = state.breeds.slice(0, action.payload.page * ITEMS_PER_PAGE);
      const oldBreedsFrom = state.breeds.slice((action.payload.page + 1) * ITEMS_PER_PAGE, state.breeds.length);

      state.breeds = [...oldBreedsTo, ...action.payload.data, ...oldBreedsFrom]; // TOD use splice
    },
    previous: (state) => {
      state.currentPage -= 1;
    },
    next: (state) => {
      state.currentPage += 1;
    },
  },
});

export const breedsReducer = breedsSlice.reducer;

export const { update, previous, next } = breedsSlice.actions;
