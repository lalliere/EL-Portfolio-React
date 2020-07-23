import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import { BrowserRouter } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "../images/logoPinkCircleThick.png";

// de6161 916C80
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: '#916C80',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: '#E5DCE1',
        height: 52,
    },
    logo: {
        height: "4vw",
        paddingBottom: "5px"
    },
    title: {
        fontSize: '24pt',
    },
    links: {
        padding: theme.spacing(3),
        textDecoration: "none",
        color: "#ffffff",
        '&:hover': {
            color: "#E5DCE1",
            borderTop: "1px solid rgba(0, 0, 0, 0.42)",
            borderColor: "#5BAthg",
            borderTopWidth: 4
        },
        
    },
}));

export default function NavBar() {
    const classes = useStyles();
    
    return (
        <div>
            <AppBar position="fixed" className={classes.root}> 
                <Toolbar>
                    <Grid justify="space-between" alignItems="center" container spacing={4}>
                        <Grid item>
                            <img
                            src={Logo}
                            alt="Emily Lallier Logo"
                            className={classes.logo}
                            >
                            </img>
                        </Grid>
                        <Grid item>
                            <BrowserRouter>
                                <Typography  variant="h6">
                                    <AnchorLink className={ classes.links } href="#aboutme">About Me</AnchorLink>
                                    <AnchorLink className={ classes.links } href="#contact">Contact</AnchorLink>
                                    <AnchorLink className={ classes.links } href="#portfolio">Portfolio</AnchorLink>
                                    <AnchorLink className={ classes.links } href="#languages">Programming Languages</AnchorLink>
                                </Typography>
                            </BrowserRouter>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}
