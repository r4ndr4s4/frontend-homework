import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useParams } from 'react-router-dom';

import dogs from '@/assets/dogs.json';
import NotFound from '../NotFound';

function Breed() {
  const { breed } = useParams();

  const dog = dogs.find((dog) => dog.id === Number(breed));

  if (!dog) {
    return <NotFound entity="Breed" />;
  }

  return (
    <Card>
      <CardHeader title={dog.name} subheader={dog.breed_group} />
      <CardMedia component="img" height="250" image="https://placehold.co/250x250" alt={dog.name} />

      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {dog.bred_for}. {dog.life_span}. {dog.weight.metric} kgs, {dog.height.metric} cms. {dog.temperament}.
        </Typography>
      </CardContent>

      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Breed;
