import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button,Card,CardContent,CardActions,CardMedia,Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '200px',
    maxWidth: '400px',
    margin: 'auto',
    marginTop:'10px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '150px',
  },
  
}));

export default function MediaControlCard(props) {
  const { title, poster, history, imdbID } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root} >
      <CardMedia
        className={classes.cover}
        image={poster }
        title={title }
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h2" variant="h6">
            {title}
          </Typography>
          <Typography component="h5" variant="h5">
            { imdbID }
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Favorite
        </Button>
        <Button size="small" color="primary" onClick={()=>history.push(`/${imdbID}`) }>
          Details
        </Button>
      </CardActions>
      </div>
    </Card>
  );
}

