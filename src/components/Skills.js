import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    color: "#916C80 ",
  },
  title: {
    fontWeight: "bold",
    textAlign: "left",
    color: "#8CAAA8",
    fontStyle: "italic",
  },
}));

const skillsCol1 = ["HTML", "JavaScript", "JQuery", "AJAX"]
const skillsCol2 = ["Node.js", "React.js", "Express", "MySQL"]
const skillsCol3 = ["CSS", "Bootstrap", "Materialize", "Material-UI"]
const skillsCol4 = ["Heroku", "Problem Solving", "Project Management", "Communication"]
const skillsCol5 = ["Teamwork", "Leadership", "Time Management", "Organization"]

export default function Skills() {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.title} variant="h2" component="h1" gutterBottom>
        Technical and Soft Skills
      </Typography>
      <hr></hr>
      <Paper>
        <Grid container className={classes.root}>
          <Grid item xs={12} sm={6} md={2}>
            {skillsCol1.map(skillCol1 => (
              <List>
                <ListItem>
                  <Typography variant="h6">
                    {skillCol1}
                  </Typography>
                </ListItem>
              </List>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            {skillsCol2.map(skillCol2 => (
              <List>
                <ListItem>
                  <Typography variant="h6">
                    {skillCol2}
                  </Typography>
                </ListItem>
              </List>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            {skillsCol3.map(skillCol3 => (
              <List>
                <ListItem>
                  <Typography variant="h6">
                    {skillCol3}
                  </Typography>
                </ListItem>
              </List>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {skillsCol4.map(skillCol4 => (
              <List>
                <ListItem>
                  <Typography variant="h6">
                    {skillCol4}
                  </Typography>
                </ListItem>
              </List>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {skillsCol5.map(skillCol5 => (
              <List>
                <ListItem>
                  <Typography variant="h6">
                    {skillCol5}
                  </Typography>
                </ListItem>
              </List>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
