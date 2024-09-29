import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Breed } from '@/utils/types';

interface BreedsState {
  breeds: Breed[];
}

const initialState: BreedsState = {
  breeds: [],
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
      const oldBreedsTo = state.breeds.slice(0, action.payload.page * action.payload.limit);
      const oldBreedsFrom = state.breeds.slice((action.payload.page + 1) * action.payload.limit, state.breeds.length);

      state.breeds = [...oldBreedsTo, ...action.payload.data, ...oldBreedsFrom];
    },
  },
});

export const breedsReducer = breedsSlice.reducer;

export const { update } = breedsSlice.actions;
