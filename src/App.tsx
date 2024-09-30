import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { useEffect } from 'react';

import Routing from './routes/Routing';
import Menu from './components/Menu';
import { useAppDispatch } from './app/store';
import { restore as restoreFavorites } from './features/favoritesSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(restoreFavorites());
  }, []);

  return (
    <BrowserRouter>
      <CssBaseline />

      <Menu />

      <Routing />
    </BrowserRouter>
  );
}

export default App;
