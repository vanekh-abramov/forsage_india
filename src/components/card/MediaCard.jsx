import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./MediaCard.css";
import { Link } from "react-router-dom";

export default function MediaCard({ article, name, brend, image, link }) {
  return (
    <Card className='new' sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title='green iguana' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {article}
        </Typography>
        <Typography variant='body2' sx={{ color: "text.secondary" }}>
          {name}
        </Typography>
        <Button size='small'>{brend}</Button>
        <CardActions>
          <Link to={link}>
            <Button size='small'>Learn more</Button>
          </Link>
        </CardActions>
      </CardContent>
    </Card>
  );
}
