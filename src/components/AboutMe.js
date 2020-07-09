import React from 'react';
import Typography from '@material-ui/core/Typography';
import Headshot from '../images/headshot3.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        fontWeight: "bold",
        textAlign: "left",
        color: "#916C80",
        fontStyle: "italic",
    },
    space: {
        margin: "30px",
    },
    paper: {
        fontSize: "16pt",
        // fontWeight: "medium",
        color: "#4E878C",
        display: 'flex',
        flexWrap: 'wrap',
        padding: "10px 16px 10px 16px",
        width: "100%",
        margin: "0",
    }
}));

export default function AboutMe() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography className={classes.title} variant="h2" component="h1">
                        About Me
                    </Typography>
                </Grid>
                <Grid item xs={6} md={6}>
                    <img
                        src={Headshot}
                        alt="Emily Lallier Headshot"
                    >
                    </img>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography>
                        <Paper className={classes.paper} elevation={3}>
                            Full Stack Web Developer with a background in project management and a Lean Yellow Belt. Certified in Full Stack Development from the University of New Hampshire, where I gained real-world experience with HTML, CSS, JavaScript, Node.js, MySQL, React.js, and responsive and accessible web design. I have a passion for developing clean, easy to use web applications that result in a positive end-user experience. I am dedicated to continuously learning and improving myself and my code. I stay organized in fast-paced situations and rely on logic to persevere when code isn't working how I planned. I adapt quickly and communicate effectively; this strength has come in handy more often than not when coding in teams. I am excited to employ Lean web design in order to build complex web applications that continually provide a cutting edge user experience.
                        </Paper>
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.space} />
                <Grid item xs={12}>
                    <Typography className={ classes.title } variant="h2" component="h1" gutterBottom>
                        My Projects
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}






