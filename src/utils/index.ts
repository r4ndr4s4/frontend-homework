import axios from 'axios';

import { Breed } from './types';
import { update } from '@/features/breedsSlice';
import { AppDispatch } from '@/app/store';

export const API_BASE_URL = import.meta.env.VITE_API_URL;

export const fetchBreeds = async (limit: number, page: number, dispatch: AppDispatch): Promise<Breed[]> => {
  const { data } = await axios.get(`${API_BASE_URL}/breeds?limit=${limit}&page=${page}`);

  dispatch(update({ data, limit, page }));

  return data;
};
