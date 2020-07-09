import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { BrowserRouter, Link } from "react-router-dom";

// de6161
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: '#916C80',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
    },
    menuButton: {
        marginLeft: theme.spacing(2),
        paddingTop: '0',
    },
    title: {
        flexGrow: 1,
        paddingBottom: '15px',
        fontSize: '24pt',
     
    },
    menuList: {
        color: '#005C97',
    },
}));

export default function NavBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div>
            <AppBar position="fixed" className={classes.root}> 
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Emily Lallier
                    </Typography>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <BrowserRouter>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <Typography  variant="h6">
                                <MenuItem className={classes.menuList} onClick={handleClose} component={Link} to="/about">About Me</MenuItem>
                                <MenuItem className={classes.menuList} onClick={handleClose} component={Link} to="/portfolio">My Work</MenuItem>
                                <MenuItem className={classes.menuList} onClick={handleClose} component={Link} to="/languages">Programming Languages</MenuItem>
                            </Typography>
                        </Menu> 
                    </BrowserRouter>
                </Toolbar>
            </AppBar>
        </div>
    );
}
