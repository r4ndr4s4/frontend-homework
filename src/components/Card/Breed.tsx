import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useParams } from 'react-router-dom';

import NotFound from '../NotFound';
import Container from '../Container';
import useBreed from '@/hooks/useBreed';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { add, remove } from '@/features/favoritesSlice';

function Breed() {
  const { breedId } = useParams();
  const breedIdAsNumber = Number(breedId);

  const { isPending, error, breed } = useBreed(breedIdAsNumber);

  const dispatch = useAppDispatch();

  const isFavorite = useAppSelector(({ favorites }) => favorites.breedIds.includes(breedIdAsNumber));

  if (isPending) {
    return 'Loading...';
  }

  // TODO add error boundary
  if (error) {
    return 'An error has occurred: ' + error.message;
  }

  if (!breed) {
    return <NotFound entity="Breed" />;
  }

  return (
    <Container>
      <Card>
        <CardHeader title={breed.name} subheader={breed.breed_group} />
        <CardMedia component="img" height="250" image="https://placehold.co/250x250" alt={breed.name} />

        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {breed.bred_for}. {breed.life_span}. {breed.weight.metric} kgs, {breed.height.metric} cms.{' '}
            {breed.temperament}.
          </Typography>
        </CardContent>

        <CardActions>
          <IconButton
            aria-label="add to favorites"
            onClick={() => dispatch(isFavorite ? remove(breedIdAsNumber) : add(breedIdAsNumber))}
          >
            <FavoriteIcon sx={{ color: isFavorite ? 'Red.Base' : 'inherit' }} />
          </IconButton>
        </CardActions>
      </Card>
    </Container>
  );
}

export default Breed;
