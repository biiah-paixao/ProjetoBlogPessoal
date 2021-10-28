import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';
import { red } from '@material-ui/core/colors';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="fundo">
                <Grid alignItems="center" item xs={5} >
                    <Box paddingX={15}>
                        <Typography variant="h3" gutterBottom component="h3" align="center" className="titulo">Programação</Typography>

                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B5", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <img src="https://i.imgur.com/8P1ChWX.png" alt="" className="img"/>
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;
