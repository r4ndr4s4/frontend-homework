import MaterialCard from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
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
    <MaterialCard sx={{ maxWidth: 640 }}>
      <CardHeader
        title={breed.name}
        subheader={breed.breed_group}
        action={
          <IconButton aria-label="add to favorites" onClick={handleFavoriteChange}>
            <FavoriteIcon sx={{ color: isFavorite ? 'Red.Base' : 'inherit' }} />
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        sx={{ maxWidth: 640 }}
        image={`https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`}
        alt={breed.name}
      />

      <CardContent>
        {breed.bred_for && (
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Breed for: <strong>{breed.bred_for}</strong>.
          </Typography>
        )}

        {breed.life_span && (
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Life expectancy: <strong>{breed.life_span}</strong>.
          </Typography>
        )}

        {breed.weight.metric && (
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Average weight: <strong>{breed.weight.metric} kgs</strong>.
          </Typography>
        )}

        {breed.height.metric && (
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Average height: <strong>{breed.height.metric} cms</strong>.
          </Typography>
        )}

        {breed.temperament && (
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Temperament: <strong>{breed.temperament}</strong>.
          </Typography>
        )}
      </CardContent>
    </MaterialCard>
  );
}

export default Card;
