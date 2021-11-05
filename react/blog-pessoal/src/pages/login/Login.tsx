import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import React ,{ ChangeEvent, useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';

function Login() {
    let history= useHistory();
    const [token, setToken] = useLocalStorage('token');
    const[userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        if(token != ''){
            history.push('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try{
            await login('/usuarios/logar', userLogin, setToken)
            alert('Usuário logado com sucesso!');

        }catch(error){
            alert('Dados do usuário inconsistentes. Erro ao logar!')
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={12} sm={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" color="primary" gutterBottom component='h3' align='center' className='textos'>Entrar</Typography>
                        <TextField
                          value={userLogin.usuario}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                          id="usuario"
                          label="usuário"
                          variant='outlined'
                          name='usuario'
                          margin='normal'
                          fullWidth

                        />

                        <TextField
                          value={userLogin.senha}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                          id="senha"
                          label="senha"
                          variant='outlined'
                          name='senha'
                          margin='normal'
                          type='password'
                          fullWidth
                        />

                        <Box marginTop={2} textAlign='center'>
                            
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                            
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align='center' color="initial">
                                Não tem uma conta?
                            </Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant="subtitle1" gutterBottom align='center' className='textos' color="initial">
                                Cadastre-se
                            </Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>

            <Grid xs={12} sm={6} className='imagem'>

            </Grid>
        </Grid>
    )
}

export default Login
