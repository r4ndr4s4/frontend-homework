import MaterialCard from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Breed as BreedType } from '@/utils/types';

function Card({
  breed,
  isFavorite,
  handleFavoriteChange,
}: {
  breed: BreedType;
  isFavorite: boolean;
  handleFavoriteChange: () => void;
}) {
  return (
    <MaterialCard>
      <CardHeader title={breed.name} subheader={breed.breed_group} />
      <CardMedia
        component="img"
        image={`https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`}
        alt={breed.name}
      />

      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {breed.bred_for}. {breed.life_span}. {breed.weight.metric} kgs, {breed.height.metric} cms. {breed.temperament}
          .
        </Typography>
      </CardContent>

      <CardActions>
        <IconButton aria-label="add to favorites" onClick={handleFavoriteChange}>
          <FavoriteIcon sx={{ color: isFavorite ? 'Red.Base' : 'inherit' }} />
        </IconButton>
      </CardActions>
    </MaterialCard>
  );
}

export default Card;
