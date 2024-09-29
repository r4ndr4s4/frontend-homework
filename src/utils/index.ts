import axios from 'axios';

import { Breed } from './types';

export const API_BASE_URL = import.meta.env.VITE_API_URL;

export const queryDefaults = {
  staleTime: 1000 * 60 * 5,
  gcTime: 1000 * 60 * 60,
};

export const fetchBreeds = async (limit: number, page: number): Promise<Breed[]> => {
  const { data } = await axios.get(`${API_BASE_URL}/breeds?limit=${limit}&page=${page}`);

  return data;
};
