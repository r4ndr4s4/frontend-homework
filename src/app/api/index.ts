import axios from 'axios';

import { Breed } from '../../utils/types';
import { update as updateBreeds } from '@/features/breedsSlice';
import { AppDispatch } from '@/app/store';

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const fetchBreeds = async (limit: number, page: number, dispatch: AppDispatch): Promise<Breed[]> => {
  const { data } = await axios.get(`${API_BASE_URL}/breeds?limit=${limit}&page=${page}`);

  dispatch(updateBreeds({ data, limit, page }));

  return data;
};

export const fetchBreed = async (breedId: number): Promise<Breed> => {
  const { data } = await axios.get(`${API_BASE_URL}/breeds/${breedId}`);

  return data;
};
