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


// 916C80, 8CAAA8
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        color: "#916C80",
        fontStyle: "italic",
        paddingBottom: "20px"
    },
    space: {
        margin: "30px",
    },
    paper: {
        display: 'flex',
        padding: "20px 0 10px 20px",
    },
    icons: {
        height: "35%",
        width: "35%",
        color: "#8CAAA8",
        marginLeft: "100px",
        marginRight: "-10px",
        marginBottom: "20px"
    },
}));

export default function AboutMe() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}> 
                <Grid item xs={12} className={classes.space} />
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <img
                        src={Headshot}
                        alt="Emily Lallier Headshot"
                    >
                    </img>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography>
                        <Paper className={classes.paper} elevation={5}>
                            <Grid container alignItems="center" justify="space-evenly">
                                <Grid item xs={12} md={12} xl={12}>
                                    <Typography className={classes.title} variant="h2" component="h1">
                                        Contact Me
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={6} xl={6}> 
                                    <a target="_blank" href="https://github.com/lalliere" rel="noopener noreferrer" alt="Link to Emily's GitHub Repository" label="GitHub" value="github"><GitHubIcon className={classes.icons} /></a>
                                </Grid>
                                <Grid item xs={12} md={6} xl={6}> 
                                    <a target="_blank" href="https://www.linkedin.com/in/emilylallier" rel="noopener noreferrer" alt="Link to Emily's LinkedIn Profile" label="LinkedIn" value="linkedin"><LinkedInIcon className={classes.icons} /></a>
                                </Grid>                          
                                <Grid item xs={12} md={6} xl={6}>
                                    <a target="_blank" href="https://docs.google.com/document/d/1hN2ca44sVRXDu0_XmmqLY2k66onsEktXDYZEJvfzwFU/edit?usp=sharing" rel="noopener noreferrer" alt="Link to Emily's Resume" label="Resume" value="resume"><DescriptionIcon className={classes.icons} /></a>
                                </Grid>
                                <Grid item xs={12} md={6} xl={6}> 
                                    <a target="_blank" href="mailto:lallieremily@gmail.com" rel="noopener noreferrer" alt="Link to Send Emily an Email" label="Email" value="email"><AlternateEmailIcon className={classes.icons} /></a>
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