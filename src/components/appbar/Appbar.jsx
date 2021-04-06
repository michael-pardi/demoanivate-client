import React, {useState} from 'react';
import {AppBar, IconButton, makeStyles, Menu, MenuItem, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appbarColor: {
        backgroundColor: "#D62828",
        color: 'white'
    },
}));

export const Appbar = () => {
    let history = useHistory();
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        if (typeof event.target.dataset.path !== 'undefined') {
            history.push(event.target.dataset.path);
        }

        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbarColor}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                                onClick={handleClick}>
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose} data-path="/">Homepage</MenuItem>
                        <MenuItem onClick={handleClose} data-path="/posts">Posts</MenuItem>
                    </Menu>
                    <Typography variant="h6" className={classes.title}>
                        Demoanivate
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Appbar;