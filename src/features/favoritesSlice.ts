import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
  breedIds: number[];
}

const initialState: FavoritesState = {
  breedIds: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      const breed = state.breedIds.find((breedId) => breedId === action.payload);

      if (!breed) {
        state.breedIds.push(action.payload);
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.breedIds = state.breedIds.filter((breedId) => breedId !== action.payload);
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;

export const { add, remove } = favoritesSlice.actions;
