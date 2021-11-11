import { Box, Button, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import TabPostagem from "../../components/postagens/tabPostagem/TabPostagem";
import Sobre from "../sobre/Sobre";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

import './Home.css';
import { Link } from "react-router-dom";

function Home() {

    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == '') {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history.push("/login")
        }

    }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6} >
                    <Box paddingLeft={10} paddingRight={20} >
                        <Typography variant="h2" gutterBottom color="textPrimary" component="h3" className='titulo'>Olá, Seja</Typography>
                        <Typography variant="h2" gutterBottom color="textPrimary" component="h3" className='titulo'>bem-vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5"  className='titulo'>Compartilhe e adquira dicas e ideias sobre programação</Typography>
                    </Box>
                    <Box display="flex" justifyContent="flex-start" paddingLeft={10}>
                        <Box marginRight={1} paddingBottom={20}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/posts" className="text-decorator-none">
                            <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} style={{ height:"100vh"}}>
                </Grid>
                <Grid xs={12} className='postagens'>
                    <Sobre />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;