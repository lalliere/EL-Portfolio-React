import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import MenuIcon from '@material-ui/icons/Menu';
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
        textDecoration: "none",
        color: "#4D536E",
        '&:hover': {
            color: "#8CAAA8",
            borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
            borderColor: "#5BAthg",
            borderBottomWidth: 4
        },
    },
    menu: {
        color: "#E5DCE1",
        paddingTop: 0,

    },
}));

export default function NavBar() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
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
                            <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} className={ classes.menu }>
                                <MenuIcon  fontSize="large"/>
                            </Button>
                            <Menu
                                id="fade-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Fade}
                            >
                                <BrowserRouter>
                                    <Typography  variant="h6">
                                        <MenuItem onClick={handleClose}><AnchorLink className={ classes.links } href="#aboutme">About Me</AnchorLink></MenuItem>
                                        <MenuItem onClick={handleClose}><AnchorLink className={ classes.links } href="#contact">Contact</AnchorLink></MenuItem>
                                        <MenuItem onClick={handleClose}><AnchorLink className={ classes.links } href="#portfolio">Portfolio</AnchorLink></MenuItem>
                                        <MenuItem onClick={handleClose}><AnchorLink className={ classes.links } href="#languages">Languages</AnchorLink></MenuItem>
                                    </Typography>
                                </BrowserRouter>
                            </Menu>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}
