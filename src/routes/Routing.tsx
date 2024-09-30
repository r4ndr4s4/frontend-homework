import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home';
import BreedsPage from '@/pages/Breeds';
import BreedPage from '@/pages/Breed';
import FavoritesPage from '@/pages/Favorites';
import NotFound from '@/components/NotFound';

function Routing() {
  return (
    <Routes>
      <Route index element={<Home />} />

      <Route path="breeds">
        <Route index element={<BreedsPage />} />

        <Route path=":breedId" element={<BreedPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Routing;
