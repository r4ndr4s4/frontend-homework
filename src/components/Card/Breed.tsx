import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

import NotFound from '../NotFound';
import Container from '../Container';
import useBreed from '@/hooks/useBreed';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { add as addFavorite, remove as removeFavorite } from '@/features/favoritesSlice';
import Error from '../Error';

function Breed({ breedId }: { breedId: number }) {
  const { isPending, error, breed } = useBreed(breedId);

  const dispatch = useAppDispatch();

  const isFavorite = useAppSelector(({ favorites }) => favorites.breedIds.includes(breedId));

  if (isPending) {
    return 'Loading...';
  }

  if (error) {
    return <Error error={error} />;
  }

  if (!breed) {
    return <NotFound entity="Breed" />;
  }

  return (
    <Container>
      <Card>
        <CardHeader title={breed.name} subheader={breed.breed_group} />
        <CardMedia
          component="img"
          image={`https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`}
          alt={breed.name}
        />

        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {breed.bred_for}. {breed.life_span}. {breed.weight.metric} kgs, {breed.height.metric} cms.{' '}
            {breed.temperament}.
          </Typography>
        </CardContent>

        <CardActions>
          <IconButton
            aria-label="add to favorites"
            onClick={() => dispatch(isFavorite ? removeFavorite(breedId) : addFavorite(breedId))}
          >
            <FavoriteIcon sx={{ color: isFavorite ? 'Red.Base' : 'inherit' }} />
          </IconButton>
        </CardActions>
      </Card>
    </Container>
  );
}

export default Breed;
