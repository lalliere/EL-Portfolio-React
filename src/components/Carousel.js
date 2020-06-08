import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import Logo from '../images/react-logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    fontWeight: "bold",
    textAlign: "left",
    color: "#F1BCBC",
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));


const tileData = [
    {
        img: "https://cdn.worldvectorlogo.com/logos/javascript.svg",
        title: "JS Logo",
    },
    {
        img: "https://www.gomyitguy.com/wp-content/uploads/2014/09/mysql-logo.jpg",
        title: "MySQL Logo",
    },
    {
        img: "https://xebialabs.com/wp-content/uploads/files/tool-chest/mongodb.jpg",
        title: "Mongo DB Logo",
    },
    {
        img: "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg",
        title: "Node.js Logo",
    },
    {
        img:  Logo ,
        title: "React Logo",
    },
];
 

export default function Carousel() {
  const classes = useStyles();

  return (
    <div>
        <Typography className={classes.title} variant="h2" component="h1" gutterBottom>
            My Programming Languages
        </Typography>
        <div className={classes.root}>
          <GridList className={classes.gridList} cols={2.5}>
              {tileData.map((tile) => (
              <GridListTile key={tile.img} className={classes.gridListTile} >
                  <img src={tile.img} alt={tile.title} />
              </GridListTile>
              ))}
          </GridList>
        </div>
    </div>
  );
}
