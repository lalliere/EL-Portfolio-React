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
        color: "#916C80",
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
        color: "#4E878C",
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
        color: "#A1C5E6",
    }
}));

export default function AboutMe() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container> 
                <Grid item xs={12} className={classes.space} />
                <Grid item xs={12} sm={12} md={5} lg={5}>
                    <img
                        src={Headshot}
                        alt="Emily Lallier Headshot"
                        height="85%"
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
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography>
                        <Paper className={classes.contact} elevation={5}>
                            <Grid container alignItems="center" justify="space-evenly">
                                <Grid container xs={12} md={12} xl={12}>
                                    <Typography className={classes.title} variant="h3" component="h3">
                                        Contact Me:
                                    </Typography>
                                    <Chip
                                        variant="outlined"
                                        size="medium"
                                        alt="Link to Emily's GitHub Repository"
                                        label="GitHub"
                                        component="a"
                                        target="_blank"
                                        href="https://github.com/lalliere"
                                        rel="noopener noreferrer"
                                        icon={<GitHubIcon className={classes.icon}/>}
                                        className={classes.chips}
                                        clickable
                                    />
                                    <Chip
                                        variant="outlined"
                                        size="medium"
                                        alt="Link to Emily's LinkedIn Profile"
                                        label="LinkedIn"
                                        component="a"
                                        target="_blank"
                                        href="https://www.linkedin.com/in/emilylallier"
                                        rel="noopener noreferrer"
                                        icon={<LinkedInIcon className={classes.icon} />}
                                        className={classes.chips}
                                        clickable
                                    />
                                    <Chip
                                        variant="outlined"
                                        size="medium"
                                        alt="Link to Emily's Resume"
                                        label="Resume"
                                        component="a"
                                        target="_blank"
                                        href="https://bit.ly/emilylallierresume"
                                        rel="noopener noreferrer"
                                        icon={<DescriptionIcon className={classes.icon} />}
                                        className={classes.chips}
                                        clickable
                                    />
                                    <Chip
                                        variant="outlined"
                                        size="medium"
                                        alt="Link to Send Emily an Email"
                                        label="Email"
                                        component="a"
                                        target="_blank"
                                        href="mailto:lallieremily@gmail.com"
                                        rel="noopener noreferrer"
                                        icon={<AlternateEmailIcon className={classes.icon} />}
                                        className={classes.chips    }
                                        clickable
                                    />                                    
                                </Grid>
                            </Grid>
                        
                        </Paper>
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.space} />
            </Grid>
        </div>
    )
}