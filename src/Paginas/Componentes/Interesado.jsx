import { useEffect, useState } from "react";
import { usePerroQuery } from "../../queries/queryPerros";
import { Button, Card, CardContent, CardMedia, Container, Grid, LinearProgress, List, ListItem } from "@mui/material";
import {Candidato} from "../Componentes/Candidato.jsx";
import { Link } from "react-router-dom";

export default function Interesado() {

    const {data: perros, isLoading, isError, error, refetch} = usePerroQuery();

    useEffect(() => {
        refetch();
    }, []);


    let aspectRatio = perros?.map(perro => {
        if (perro?.url_imagen.height && perro?.url_imagen.width) {
            return perro.url_imagen.height / perro.url_imagen.width;
        } else {
            return 1; // Valor por defecto en caso de que height o width no estén disponibles
        }
    });

    if (isLoading) {
        return (
            <>
                <p>Cargando lista de perros...</p>
                <LinearProgress />
            </>
        );
    }

    return (
        <>
            <Grid container justifyContent="center" style={{backgroundColor: '#212d45', width: '100%'}}>
                <Link to={'/'} style={{position: 'absolute', left: '0'}}>
                    <Button style={{backgroundColor: 'yellow', color: 'black', margin: '23px 20px'}} variant='outlined'>
                        Volver
                    </Button>
                </Link>
                <h1 style={{width: '100%', textAlign: 'center', margin: '10px 0px 20px', color: 'white'}}>Selecciona a tu Perro Interesado</h1>
            </Grid>
            <Grid container spacing={1} style={{padding: '20px'}}>
                {perros?.map((perro) => (
                    <Grid item xs={3} md={3} key={perro.id} alignItems="center" >
                        <Card>
                            <CardMedia sx={{ aspectRatio }} md={{aspectRatio}} component="img" image={perro.url_imagen} alt={perro.nombre} />
                            <CardContent>
                                <h5 style={{margin: '0px'}}>Nombre:</h5> <p style={{margin: '0px', marginBottom: '10px'}}>{perro.nombre}</p> 
                                <h5 style={{margin: '0px'}}>Descripción:</h5> <p style={{margin: '0px'}}>{perro.descripcion}</p>
                            </CardContent>
                            <Link to={`/Candidato/${perro.id}`} >
                                <Button style={{backgroundColor: '#212d45', color: 'white', margin: '0px 0px 20px 20px'}} variant='outlined'>
                                    Elegir
                                </Button>
                            </Link>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}