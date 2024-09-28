import { Stack, Container } from '@mui/material';

import Breeds from '@/components/Breeds';
// import Breed from '@/components/Breed';
// import Favorites from '@/components/Favorites';

const Home = () => {
  return (
    <Container>
      <Stack>
        <Breeds />
      </Stack>
    </Container>
  );
};

export default Home;
