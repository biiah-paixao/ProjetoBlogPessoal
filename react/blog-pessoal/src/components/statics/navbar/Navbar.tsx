import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar position="static" style={{ backgroundColor: "white" }}>
                <Toolbar variant="dense">
                    <Box>
                        <img src="https://i.imgur.com/ubX6fHt.png" alt="" />
                    </Box>
                    <Box className='cursor'>
                        <Typography variant="h5" color="black" style={{ padding: "10px" }}>
                            BlogPessoal
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" ml="auto" paddingRight={5}>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="black" paddingRight={5}>
                                home
                            </Typography>
                        </Box>
                        <Link to='/sobre' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="black" paddingRight={5}>
                                    sobre
                                </Typography>
                            </Box>
                        </Link>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="black" paddingRight={5}>
                                contato
                            </Typography>
                        </Box>

                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="black">
                                    sign-in / login
                                </Typography>
                            </Box>
                        </Link>
                    </Box>


                </Toolbar>
            </AppBar>


            {/*<AppBar position="static" style={{ backgroundColor: "#270C54" }}>
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

                        <Link to='/sobre' className='text-decorator-none'>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                sobre
                            </Typography>
                        </Box>
                        </Link>

                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                contato
                            </Typography>
                        </Box>

            */}
        </>
    )
}

export default Navbar;
/* Comentário do seu código */