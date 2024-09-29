import { Box, Paper, styled } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { ReactNode } from 'react';

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function Container({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Item>{children}</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Container;
