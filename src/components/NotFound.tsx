import { Typography, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NotFound({ entity = 'Page' }: { entity?: 'Page' | 'Breed' }) {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        {entity} not found!
      </Typography>

      <Button variant="text" onClick={() => navigate('/')}>
        Back to Home
      </Button>
    </Container>
  );
}

export default NotFound;
