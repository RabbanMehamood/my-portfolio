import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import './Navbar.css'; // Custom styles if any

function Navbar() {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My Portfolio
                </Typography>
                <Button color="inherit" onClick={() => navigateTo('/home')}>Home</Button>
                <Button color="inherit" onClick={() => navigateTo('/about')}>About</Button>
                <Button color="inherit" onClick={() => navigateTo('/contact')}>Contact</Button>
            </Toolbar>
        </AppBar>
    );
}

function navigateTo(path) {
    window.location.href = path;
}

export default Navbar;
