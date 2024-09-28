import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';
import { IconButton } from '@mui/material';
import styled from '@emotion/styled';

const StyledTypography = styled(Typography)`
  cursor: pointer;
`;

function Menu() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" color="inherit" aria-label="menu" onClick={() => navigate('/')}>
            <PetsIcon />
          </IconButton>

          <StyledTypography variant="h6" sx={{ flexGrow: 1 }} onClick={() => navigate('/')}>
            BreedBuddy
          </StyledTypography>

          <Button color="inherit" onClick={() => navigate('/breeds')}>
            Breeds
          </Button>

          <Button color="inherit" onClick={() => navigate('/breeds/favorites')}>
            Favorites
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Menu;
