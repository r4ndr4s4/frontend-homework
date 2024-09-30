import axios from 'axios';

import { Breed } from '../../utils/types';
import { update as updateBreeds } from '@/features/breedsSlice';
import { AppDispatch } from '@/app/store';
import env from '@/utils/env';

const API_BASE_URL = env.VITE_API_URL;

export const fetchBreeds = async (page: number, dispatch: AppDispatch): Promise<Breed[]> => {
  const { data } = await axios.get(`${API_BASE_URL}/breeds?limit=25&page=${page}`);

  dispatch(updateBreeds({ data, page }));

  return data;
};

export const fetchBreed = async (breedId: number): Promise<Breed> => {
  const { data } = await axios.get(`${API_BASE_URL}/breeds/${breedId}`);

  return data;
};
