import React from 'react';
import { Box, Grid, Typography } from "@material-ui/core";
import './Sobre.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActions } from '@mui/material';

function Sobre() {
    return (
        <div>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ padding: "20px" }} >
                <Grid item xs={3} style={{ padding: "10px" }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://i.imgur.com/mWqZ4fa.png"
                            alt=""
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" align="center">
                                HTML
                            </Typography>
                            <Typography variant="body2" color="textSecondary" align="center">
                                O HTML é o esqueleto, composto dos ossos que o sustenta
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={3} style={{ padding: "10px" }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://i.imgur.com/oG13oIi.jpg"
                            alt=""
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" align="center">
                                CSS
                            </Typography>
                            <Typography variant="body2" color="textSecondary" align="center">
                                O CSS é a pele, cabelo e roupas, criando o visual que realmente enxergamos quando olhamos para alguma pessoa
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={3} style={{ padding: "10px" }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://i.imgur.com/uCBBesS.jpg"
                            alt=""
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" align="center">
                                JS
                            </Typography>
                            <Typography variant="body2" color="textSecondary" align="center">
                                Javascript é o músculo, que dá movimento ao corpo
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Sobre
