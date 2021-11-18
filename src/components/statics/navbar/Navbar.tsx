import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';
import fundo from '../../../assets/navbar.png'

function Navbar() {
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

    if (token != "") {
        navbarComponent =
            <AppBar position="static" className="fundo" >
                <Toolbar variant="dense">
                    <Box>
                        <img src="https://i.imgur.com/ubX6fHt.png" alt="" />
                    </Box>

                    <Box className='cursor' padding={1}>
                        <Typography variant="h5" className="color logo" >
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="center" ml="auto" paddingRight={5}>
                        <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className='cursor' paddingRight={5}>
                                <Typography variant="h6" className="color">
                                    home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/posts" className="text-decorator-none">
                            <Box mx={1} className='cursor' paddingRight={5}>
                                <Typography variant="h6" className="color">
                                    postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/temas" className="text-decorator-none">
                            <Box mx={1} className='cursor' paddingRight={5}>
                                <Typography variant="h6" className="color">
                                    temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/formularioTema" className="text-decorator-none">
                            <Box mx={1} className='cursor' paddingRight={5}>
                                <Typography variant="h6" className="color" >
                                    cadastrar tema
                                </Typography>
                            </Box>
                        </Link>
                        <Box mx={1} className='cursor' onClick={goLogout}>
                            <Typography variant="h6" className="color" >
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
        </>
    )
}

export default Navbar;