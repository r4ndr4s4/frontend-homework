import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home/Home';
import Breeds from '@/components/Breeds';
import Breed from '@/components/Breed';
import Favorites from '@/components/Favorites';

const NoMatch = () => {
  return <p>Page not found!</p>;
};

const Routing = () => {
  return (
    <Routes>
      <Route index element={<Home />} />

      <Route path="breeds">
        <Route index element={<Breeds />} />

        <Route path=":breed" element={<Breed />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>

      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default Routing;
