import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home';
import Breeds from '@/components/DataGrid/Breeds';
import Breed from '@/components/Card/Breed';
import Favorites from '@/components/DataGrid/Favorites';
import NotFound from '@/components/NotFound';

function Routing() {
  return (
    <Routes>
      <Route index element={<Home />} />

      <Route path="breeds">
        <Route index element={<Breeds />} />

        <Route path=":breedId" element={<Breed />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Routing;
