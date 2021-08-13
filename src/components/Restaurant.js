import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HelpIcon from '@material-ui/icons/Help';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbUpOutlined from '@material-ui/icons/ThumbUpOutlined';
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
  
  function Restaurant({id, name, image, detail}) {
  
    const classes = useStyles();
  
    return (
     
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
                <CardContent className = "parent">
                  <div className = "child">
                    <Typography gutterBottom variant="h5" component="h2">
                      {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {detail}
                    </Typography>
                  </div>
                  <div className = "child" id = "likeButton">   
                    <div><Button variant="contained" color="primary" id="button1">{<ThumbUpOutlined/>}</Button></div>
                    <div>
                      <Link
                        to = {{
                          // eslint-disable-next-line no-template-curly-in-string
                          pathname: `/detail/${id}`,
                          state: {
                            id, 
                            name, 
                            image, 
                            detail
                          },
                        }}>
                        <Button variant="contained" color="primary" id="button2">{<HelpIcon/>}</Button>
                      </Link>                  
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
        </article>
    );
  }

  export default Restaurant;