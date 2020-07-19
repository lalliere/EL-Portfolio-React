import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import CopyrightIcon from '@material-ui/icons/Copyright';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#3E517A',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height: 48,
    padding: 0,
    marginTop: "60px",
    color: 'white',
    paddingTop: "8px"
  },
  title: {
    fontSize: "20pt",
    fontWeight: "bold",
    fontStyle: "italic",
  }
  
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <BottomNavigation position="sticky" className={classes.root}>
        <Grid justify="center" alignItems="center" container>
          <Grid item>
            <Typography className={classes.title}>Copyright 2020 <CopyrightIcon /></Typography>
          </Grid>
        </Grid>
    </BottomNavigation>
  );
}
