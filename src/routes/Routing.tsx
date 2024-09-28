import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home/Home';
import Breeds from '@/components/Breeds';
import Breed from '@/components/Breed';
import Favorites from '@/components/Favorites';
import NotFound from '@/components/NotFound';

const Routing = () => {
  return (
    <Routes>
      <Route index element={<Home />} />

      <Route path="breeds">
        <Route index element={<Breeds />} />

        <Route path=":breed" element={<Breed />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>

      <Route path="*" element={<NotFound entity="Page" />} />
    </Routes>
  );
};

export default Routing;
