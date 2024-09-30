import { Typography, Button, CssBaseline } from '@mui/material';

import Container from './Container';
import { AppThemeProvider } from '@/themes/AppThemeProvider';

function Error({ error }: { error: Error }) {
  return (
    <AppThemeProvider>
      <CssBaseline />

      <Container>
        <Typography variant="h1" gutterBottom>
          Error occurred!
        </Typography>

        <Typography>{error.message}</Typography>

        <Button variant="text" onClick={() => (location.href = '/')}>
          Reset application
        </Button>
      </Container>
    </AppThemeProvider>
  );
}

export default Error;
