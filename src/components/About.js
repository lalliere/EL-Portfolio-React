import React from 'react';
import Typography from '@material-ui/core/Typography';
import Headshot from '../images/headshot3.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        fontWeight: "bold",
        color: "#8CAAA8",
        fontStyle: "italic",   
    },
    space: {
        margin: "30px",
    },
    contact: {
        display: 'flex',
        padding: "20px 0 10px 20px",
    },
    bio: {
        fontSize: "16pt",
        color: "#916C80 ",
        display: 'flex',
        flexWrap: 'wrap',
        padding: "20px",
        width: "100%",
        margin: "0",
    },
    chips: {
        color: "#916C80",
        fontWeight: "bold",
        marginLeft: "8%",
        marginTop: "15px",
        display: 'flex',    
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
          },
    },
    icon: {
        color: "#4D536E ",
    },
    
}));

export default function AboutContact() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container > 
                <Grid item xs={12} className={classes.space} />
                <Grid item xs={12} sm={12} md={5} lg={5} >
                    <img
                        src={Headshot}
                        alt="Emily Lallier Headshot"
                        height="85%"
                        align="center"
                        className={classes.image}
                    >
                    </img>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7}>
                    <Typography>
                        <Paper className={classes.bio} elevation={5}>
                            Full Stack Web Developer with a background in project management and a Lean Yellow Belt. Certified in Full Stack Development from the University of New Hampshire, where I gained real-world experience with HTML, CSS, JavaScript, Node.js, MySQL, React.js, and responsive and accessible web design. I have a passion for developing clean, easy to use web applications that result in a positive end-user experience. I am dedicated to continuously learning and improving myself and my code. I stay organized in fast-paced situations and rely on logic to persevere when code isn't working how I planned. I adapt quickly and communicate effectively; this strength has come in handy more often than not when coding in teams. I am excited to employ Lean web design in order to build complex web applications that continually provide a cutting edge user experience.
                        </Paper>
                    </Typography>
                </Grid>                             
            </Grid>
        </div>
    )
}