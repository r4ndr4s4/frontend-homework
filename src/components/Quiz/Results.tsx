import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Results() {
  return (
    <Card sx={{ maxWidth: 640 }}>
      <CardMedia sx={{ width: 640, height: 480 }} image="/Emma.jpg" title="Emma" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          This is Emma, my dog. She is a 10-month-old medium-sized poodle.
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          She is very friendly and loves to play with other dogs. She doesn't shed much and is hypoallergenic. She is a
          great choice for families with children. She doesn't bark much and is very easy to train.
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          However, she needs regular grooming and exercise. Still, 10/10 would recommend poodles.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Results;
