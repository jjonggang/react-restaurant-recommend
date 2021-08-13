import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './Restaurant.css'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  
  function Restaurant({id, name, image, detail,place,phone,address,time}) {
  
    const classes = useStyles();
  
    return (
      <Link
        to = {{
          // eslint-disable-next-line no-template-curly-in-string
          pathname: `/detail/${id}`,
          state: {
            id, 
            name, 
            image, 
            detail,
            place,
            phone,
            address,
            time
          },
        }}>
        <article>
          <Card className={classes.root} id = "cards" elevation = '0' variant="outlined">
              <div>
                {/* <img src = { image } alt = {name} /> */}
                <CardMedia 
                  id = "image"
                  className={classes.media}
                  image = {image}
                  title= {name}
                />
                <CardContent id = "contents">
                  <Typography gutterBottom variant="h5" component="h2">
                    {name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {detail}
                  </Typography>

                </CardContent>
              </div>
            </Card>
        </article>
      </Link>
    );
  }

  export default Restaurant;