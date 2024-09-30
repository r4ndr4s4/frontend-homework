import { Typography, Button } from '@mui/material';

import Container from './Container';

function Error({ error }: { error: Error }) {
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Error happened!
      </Typography>

      <Typography>{error.message}</Typography>

      <Button variant="text" onClick={() => (location.href = '/')}>
        Reset application
      </Button>
    </Container>
  );
}

export default Error;
