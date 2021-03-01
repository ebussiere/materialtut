import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card,CardContent,CardMedia,Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // height: '400px',
    width: '800px',
    justifyContent: 'space-around',
    margin:'10px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    minWidth: '200px',
    
  },
  
}));

export default function MovieDetails(props) {
  const { title, poster,genre,runtime,released,director,writer,actors,plot, awards,boxOffice,production } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={poster}
        title="Title"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Title: {title}            
          </Typography>
          <Typography component="h5" variant="body1">
            Genre: { genre }
          </Typography>
          <Typography component="h5" variant="body1">
            Runtime: { runtime }
          </Typography>
          <Typography component="h5" variant="body1">
            Released: { released }
          </Typography>
          <Typography component="h5" variant="body1">
            Director: { director }
          </Typography>
          <Typography component="h5" variant="body1">
            Writer: { writer }
          </Typography>
          <Typography component="h5" variant="body1">
            Cast: { actors }
          </Typography>
          <Typography component="h5" variant="body1">
            Plot: { plot }
          </Typography>
          <Typography component="h5" variant="body1">
            Awards: { awards }
          </Typography>
          <Typography component="h5" variant="body1">
            Box Office: { boxOffice }
          </Typography>
          <Typography component="h5" variant="body1">
            Production: { production }
          </Typography>
        </CardContent>
      </div>
      
    </Card>
  );
}






























// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector} from "react-redux";


// const MovieDetails = (props) => {
  
//   const movieList = useSelector(state => state.movieList)
//   const { term } = movieList;

//   return (
//   <h1>Test</h1>
    /*<Container>
       <Row noGutters>
      <CardDeck>
        <Card style={{ width: '50rem' }}>
          <Card.Img
            style={{
              backgroundImage: `url(${props.poster})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }
            } variant="top" height='270px' />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.plot}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Runtime: {props.runtime}</ListGroupItem>
            <ListGroupItem>Release Date: {props.released}</ListGroupItem>
            <ListGroupItem>Genre: {props.genre}</ListGroupItem>
            <ListGroupItem>Directed by: {props.director}</ListGroupItem>
            <ListGroupItem>Written by: {props.writer}</ListGroupItem>
            <ListGroupItem>Cast: {props.actors}</ListGroupItem>
            <ListGroupItem>Awards: {props.awards}</ListGroupItem>
            <ListGroupItem>Previous: {term}</ListGroupItem>
          </ListGroup>
            <Link to={`/${term}`}>
             <Button className="btn-sm mx-auto" variant="secondary"><p>Back</p></Button>
          </Link>
          </Card>
          </CardDeck>
      </Row> 
    </Container>*/
//   );
// };

// export default MovieDetails;
