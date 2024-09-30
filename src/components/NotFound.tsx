import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Container from './Container';

function NotFound({ entity = 'Page' }: { entity?: 'Page' | 'Breed' | 'Breeds' | 'Favorites' }) {
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
