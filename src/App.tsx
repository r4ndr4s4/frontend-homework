import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import Routing from './routes/Routing';
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />

      <Menu />

      <Routing />
    </BrowserRouter>
  );
}

export default App;
