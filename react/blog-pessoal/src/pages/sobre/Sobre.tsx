import React from 'react'
import { Box, Grid, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import './Sobre.css';

function Sobre() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={10} className="subtitulo">
                    <Box>
                        <Typography variant="h4" gutterBottom color="textPrimary" align="center">Sobre</Typography>
                    </Box>
                </Grid>

            </Grid>


            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ textAlign: "justify" }}>

                <Grid item xs={3}>
                    <img src="https://i.imgur.com/UslbGsP.jpg" alt="" className="img" />
                </Grid>

                <Grid alignItems="center" item xs={6}>
                    <Typography color="textPrimary" style={{ margin: "50px" }}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                </Grid>

            </Grid>
        </>
    );

}

export default Sobre