import { Typography } from '@mui/material';

import Container from '@/components/Container';

function HomePage() {
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Hello World!
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Checkout the breeds loaded from The Dog API, add breeds to favorite and take a quiz to test your knowledge.
      </Typography>
    </Container>
  );
}

export default HomePage;
