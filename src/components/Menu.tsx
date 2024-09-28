import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

function Menu() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <PetsIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dog app
          </Typography>

          <IconButton size="large" color="inherit" aria-label="menu" onClick={() => navigate('/')}>
            <HomeIcon />
          </IconButton>

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
