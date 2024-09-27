import { Typography, Stack, Container } from '@mui/material';

const Home = () => {
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Stack gap={1} my={2}>
        <Typography textAlign="center" variant="h1">
          Hello World!
        </Typography>
      </Stack>
    </Container>
  );
};

export default Home;
