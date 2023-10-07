
/*
import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { QueryClient } from 'react-query';
import { perritoRandom } from '../../queries/query';
*/
import { useEffect, useState } from "react";
import { Button, CardActionArea, LinearProgress, List, ListItem, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { useBuscarInfoQuery } from "../../queries/query";
import Grid from '@mui/material/Unstable_Grid2';

export default function Perritos(){

    const [aceptados, setAceptados] = useState([]);
    const [rechazados, setRechazados] = useState([]);
    const {data: perro, isLoading: cargandoPerrito, refetch} = useBuscarInfoQuery();

function perritoRandom(){
    console.log(perro);
    refetch();
}

function aceptarPerrito(item){
    if(rechazados.includes(item)){
        setRechazados(rechazados.filter((perro) => perro !== item));
        setAceptados([item, ...aceptados]);
    } else {
        setAceptados([item, ...aceptados]);
        refetch();
    }
    console.log(aceptados);
}

function rechazarPerrito(item){
    if(aceptados.includes(item)){
        setAceptados(aceptados.filter((perro) => perro !== item));
        setRechazados([item, ...rechazados]);
    } else {
        setRechazados([item, ...rechazados]);
        refetch();
    }
    console.log(rechazados);
}

// TODO: libreria lorem ipsum descripcion perros
return (
    <>
    <Grid container spacing={1} sx={{ overflow: 'auto', width: '100%'}}>
        <Grid item md={4} xs={12} style={{ overflow: 'auto' }}>
            <h1>Perros</h1>
            {cargandoPerrito && <LinearProgress/>}
            <Card sx={{ minWidth: '100%' }}>
                <CardActionArea style={ {width: '100%', maxHeight: '400px' }}>
                    <CardMedia
                        component="img"
                        image={perro?.imagen}
                        style={ {width: '100%' }}
                    /> 
                </CardActionArea>
                <Typography gutterBottom variant="h5" component="div">
                {perro?.nombre}
                </Typography>
                <Button style={{backgroundColor: 'red', color: 'white', width: '50%'}} variant='outlined' centerRipple onClick={()=> rechazarPerrito(perro)}>rechazar</Button>
                <Button style={{backgroundColor: 'green', color: 'white', width: '50%'}} variant='outlined' centerRipple onClick={()=> aceptarPerrito(perro)}>aceptar</Button>
                <Button style={{backgroundColor: 'blue', color: 'white'}} variant='outlined' fullWidth centerRipple  onClick={()=> perritoRandom()}>random</Button>
            </Card>
        </Grid>
        <Grid item md={4} xs={12} >
        <h1>Aceptados</h1>
        <List style={{ maxHeight: '84vh', overflow: 'auto' }}>
            {aceptados.map((item, index) => (
                <>
                <ListItem key={index}>
                    <Card sx={{ minWidth: '100%' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={item?.imagen}
                            /> 
                        </CardActionArea>
                        <Typography gutterBottom variant="h5" component="div">
                        {item?.nombre}
                        </Typography>
                        <Button style={{backgroundColor: 'red', color: 'white', width: '50%'}} variant='outlined' centerRipple onClick={()=> rechazarPerrito(item)}>rechazar</Button>
                    </Card>
                </ListItem>   
                </>
            ))}
        </List>
        </Grid>
        <Grid item md={4} xs={12} >
            <h1>Rechazados</h1>
        <List style={{ maxHeight: '84vh', overflow: 'auto' }}>
            {rechazados.map((item, index) => (
                <>
                <ListItem key={index}>
                    <Card sx={{ minWidth: '100%' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={item?.imagen}
                            /> 
                        </CardActionArea>
                        <Typography gutterBottom variant="h5" component="div">
                        {item?.nombre}
                        </Typography>
                        <Button style={{backgroundColor: 'green', color: 'white', width: '50%'}} variant='outlined' centerRipple onClick={()=> aceptarPerrito(item)}>aceptar</Button>
                    </Card>
                </ListItem>   
                </>
            ))}
        </List>
        </Grid>
    </Grid>
    </>
  );
}
//<Button style={{backgroundColor: 'blue', color: 'white'}} variant='outlined' fullWidth centerRipple  onClick={()=> perritoRandom()}>random</Button>