import { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import Avatar from '@mui/material/Avatar';
import img from '../../images/film-poster-placeholder.png';
import { Link } from "react-router";
import Rating from "@mui/material/Rating";


export default function MovieCard({ movie, action }) {

  const { favorites, addToFavorites } = useContext(MoviesContext);

  if (favorites.find((id) => id === movie.id)) {
    movie.favorite = true;
  } else {
    movie.favorite = false
  }

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    addToFavorites(movie);
  };
  
  return (
    <Card
    sx={{ 
    maxWidth: 350, 
    borderRadius: "50px", 
    borderStyle: "groove",
    transition: "transform .5s", 
    "&:hover": { transform: "scale(1.05)" },
    backgroundColor: "#4f160c",
    borderColor: "#3f3b3b",
    
  }}>
      <CardHeader
        avatar={
          movie.favorite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p" sx={{fontFamily: "Times, Times New Roman, serif", color: "#dbcd9f"}}>
            {movie.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid size={{xs: 6}}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid size={{ xs: 6 }}>
            <Rating
              name="read-only"
              value={movie.vote_average / 2}
              precision={0.5}
              readOnly
              size="big"
              sx={{ color: "#f8ce37" }}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        
        {action(movie)}
        
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
        
      </CardActions>
    </Card>
  );
}