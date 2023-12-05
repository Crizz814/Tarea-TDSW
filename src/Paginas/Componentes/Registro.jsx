import { Button, Container, Divider, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useBuscarImagenQuery } from '../../queries/queryImagen';

function Registro() {

  const {data: imagen, isLoading: cargandoImagen, refetch, isRefetching: recargandoImagen} = useBuscarImagenQuery();    
  const handleSubmit = (e) => {
    e.preventDefault();
    const {nombre, descripcion } = e.target.elements;
    // Aquí puedes realizar alguna acción con los datos del formulario
    console.log(nombre.value, descripcion.value);
  };

  return (
    <Container>
        <form id="caja" onSubmit={handleSubmit}>     
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
                    />
                </Grid>
                <Grid item>
                    <TextField
                        margin="dense"
                        label="Descripcion"
                        variant="outlined"
                        fullWidth
                        name="descripcion"
                    />
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
