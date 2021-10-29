import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <>

            <AppBar position="static" style={{ backgroundColor: "#270C54" }}>
                <Toolbar variant="dense">
                    <Box>
                        <img src="https://i.imgur.com/a5L3UYw.png" alt="" />
                    </Box>
                    <Box display="flex" justifyContent="center" style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit" style={{ padding: "10px" }}>
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" ml="auto" paddingRight="79px">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                sobre
                            </Typography>
                        </Box>

                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                contato
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                sign-in / login
                            </Typography>
                        </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
