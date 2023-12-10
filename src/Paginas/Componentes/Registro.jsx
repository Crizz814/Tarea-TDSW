import { Button, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useBuscarImagenQuery } from '../../queries/queryImagen';
import { useForm } from 'react-hook-form';
import { usePerrito } from '../../Context/PerritoContext';
import { Link } from 'react-router-dom';

function Registro() {

    const {data: imagen, isLoading: cargandoImagen, refetch, isRefetching: recargandoImagen} = useBuscarImagenQuery();

    const {register, handleSubmit} = useForm();

    const { registrarPerro } = usePerrito();

    const onSubmit = (data) => {
        data = {...data, imagen: imagen};
        console.log(data);
        registrarPerro(data);
    }





  return (
    <Container>
        <Link to={'/'} >
            <Button style={{backgroundColor: 'yellow', color: 'black'}} variant='outlined'>Volver</Button>
        </Link>
        <h1 style={{width: '100%', textAlign: 'center', margin: '0px 0px 0px', backgroundColor:"#212d45" }}>Registro de Perritos</h1>
        <form id="caja" onSubmit={handleSubmit(onSubmit)}>
            <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{backgroundColor:"#d5d5d5"}}
            >
                <Grid item>
                    <TextField
                        margin="dense"
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        name="nombre"
                        {...register("nombre")}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        margin="dense"
                        label="Descripcion"
                        variant="outlined"
                        fullWidth
                        name="descripcion"
                        {...register("descripcion")}
                    />
                </Grid>
                <Grid item>
                    <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    >
                        Imagen de Perrito
                    </Typography>
                </Grid>
                <Grid item>
                    <img style={ {width: '400px'}} src={imagen} alt="imagen" onError={refetch}/>
                </Grid>
                <Button color="primary" variant="contained" onClick={refetch}>Refrescar Imagen</Button>
                <Divider />
                <Button
                    id="terminar_registro"
                    color="success"
                    size="large"
                    variant="contained"
                    type="submit"
                >
                    Terminar Registro
                </Button>
            </Grid>
        </form>
    </Container>
  );
}

export default Registro;
