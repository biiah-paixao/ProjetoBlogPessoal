import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from  'react-toastify';

function Navbar() {
<<<<<<< HEAD
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
=======
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuario deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login')
    }

    var navbarComponent;

    if(token != ""){
        navbarComponent = <AppBar position="static">
        <Toolbar variant="dense">
            <Box className='cursor'>
                <Typography variant="h5" color="inherit">
                    BlogPessoal
                </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
                <Link to="/home" className="text-decorator-none">
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            home
                        </Typography>
>>>>>>> fc7e4375de165f2cd70ac437a990071b693ae016
                    </Box>
                </Link>
                <Link to="/posts" className="text-decorator-none">
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            postagens
                        </Typography>
                    </Box>
<<<<<<< HEAD

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
=======
                </Link>
                <Link to="/temas" className="text-decorator-none">
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            temas
                        </Typography>
                    </Box>
                </Link>
                <Link to="/formularioTema" className="text-decorator-none">
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            cadastrar tema
                        </Typography>
                    </Box>
                </Link>
                <Box mx={1} className='cursor' onClick={goLogout}>
                    <Typography variant="h6" color="inherit">
                        logout
                    </Typography>
                </Box>

            </Box>

        </Toolbar>
    </AppBar>
    }
    return (
        <>
            {navbarComponent}
>>>>>>> fc7e4375de165f2cd70ac437a990071b693ae016
        </>
    )
}

export default Navbar;