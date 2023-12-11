import { Button, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useBuscarImagenQuery } from '../../queries/queryImagen';
import { useForm } from 'react-hook-form';
import { usePerrito } from '../../Context/PerritoContext';
import { Link } from 'react-router-dom';

function Registro() {

    const {data: imagen, isLoading: cargandoImagen, refetch, isRefetching: recargandoImagen} = useBuscarImagenQuery();

    const {register, handleSubmit, reset} = useForm();

    const { registrarPerro } = usePerrito();

    const onSubmit = (data) => {
        data = {...data, imagen: imagen};
        console.log(data);
        registrarPerro(data);
        reset();
        refetch();
    }

  return (
    <Grid container justifyContent="center" style={{position: 'absolute', width: '100%', top: '0vh'}}>
        
        <Grid style={{backgroundColor: 'white', width: '2000px', height:'705px', paddingBottom: '10px'}}>
            <h1 style={{width: '100%', textAlign: 'center', margin: '0px 0px 0px', backgroundColor:"#212d45", padding: '10px 0px 20px 0px', color: 'white'}}>
            <Link to={'/'} >
                <Button style={{backgroundColor: 'white', color: "#212d45", margin: '20px'}} variant='contained'>
                    Volver
                </Button>
            </Link>
                Registro de Perritos
            </h1>
            <form id="caja" onSubmit={handleSubmit(onSubmit)}>
                <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
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
                        color={"#212d45"}
                        gutterBottom
                        >
                            Imagen de Perrito
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img style={ {width: '400px'}} src={imagen} alt="imagen" onError={refetch}/>
                    </Grid>
                    <Button style={{margin: '10px'}} color="primary" variant="contained" onClick={refetch}>Refrescar Imagen</Button>
                    <Divider />
                    <Button
                        id="terminar_registro"
                        color="success"
                        size="large"
                        variant="contained"
                        margin="dense"
                        type="submit"
                    >
                        Terminar Registro
                    </Button>
                </Grid>
            </form>
        </Grid>
    </Grid>
  );
}

export default Registro;
