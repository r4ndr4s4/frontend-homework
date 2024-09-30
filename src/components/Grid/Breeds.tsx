import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

import Container from '../Container';
import { Breed } from '@/utils/types';

function Breeds({
  rows,
  page,
  previous,
  next,
}: {
  rows: Breed[];
  page: number;
  previous: () => void;
  next: () => void;
}) {
  const navigate = useNavigate();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Breed name</th>
            <th>Breed group</th>
            <th>Life expectancy</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td width="70">
                <img src={`https://cdn2.thedogapi.com/images/${row.reference_image_id}.jpg`} width="50" height="50" />
              </td>
              <td width="300">{row.name}</td>
              <td width="200">{row.breed_group}</td>
              <td width="200">{row.life_span}</td>
              <td width="70">
                <IconButton aria-label="go to breed" onClick={() => navigate(`/breeds/${row.id}`)}>
                  <LaunchIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={previous}>Previous</button>
      {`${page + 1}. page`}
      <button onClick={next}>Next</button>
    </Container>
  );
}

export default Breeds;
