import { cleanEnv, url } from 'envalid';

const env = cleanEnv(import.meta.env, {
  VITE_API_URL: url({
    default: 'https://api.thedogapi.com/v1',
  }),
});

export default env;
