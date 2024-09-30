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
    restore: (state) => {
      try {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

        state.breedIds = favorites;
      } catch (e) {
        throw new Error('Failed to restore favorites from localStorage.');
      }
    },
    add: (state, action: PayloadAction<number>) => {
      const breed = state.breedIds.find((breedId) => breedId === action.payload);

      if (!breed) {
        state.breedIds.push(action.payload);
      }

      localStorage.setItem('favorites', JSON.stringify(state.breedIds));
    },
    remove: (state, action: PayloadAction<number>) => {
      state.breedIds = state.breedIds.filter((breedId) => breedId !== action.payload);

      localStorage.setItem('favorites', JSON.stringify(state.breedIds));
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;

export const { restore, add, remove } = favoritesSlice.actions;
