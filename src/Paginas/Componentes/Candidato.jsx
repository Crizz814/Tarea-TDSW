import { Button, Card, CardActionArea, CardMedia, Container, Divider, Grid, LinearProgress, Stack, Typography } from "@mui/material";
import { useRandomQuery } from "../../queries/queryRandom";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useInteraccion } from '../../Context/InteraccionContext';
import { useEffect, useState } from "react";

export function Candidato ({params}) {

    const {interesado} = useParams();
    const [anterior, setAnterior] = useState(null);
    
    const {data: perro, isLoading, isError, error, refetch, isRefetching: recargandoPerro} = useRandomQuery(interesado);

    if(anterior !== null && anterior.id === perro?.id){
        refetch();
    }

    useEffect(() => {
        refetch();
    }, []);

    const { registrarInteraccion } = useInteraccion();
    
    let aspectRatio;
    if (perro?.url_imagen.height && perro?.url_imagen.width) {
      aspectRatio = perro.url_imagen.height / perro.url_imagen.width;
    } else {
      aspectRatio = 1; // Valor por defecto en caso de que height o width no estén disponibles
    }

    if (isLoading || recargandoPerro) {
        return (
            <>
                <p>Cargando perrito...</p>
                <LinearProgress />
            </>
        );
    }

    function agregarInteraccion(interaccion){
        const form = {id_perro_interesado: interesado, id_perro_candidato: perro.id, preferencia: interaccion};
        registrarInteraccion(form);
        setAnterior(perro);
        refetch();
    }

    return (
        <>
        <Grid container style={{position: 'absolute', width: '100%', top: '0vh'}}>
            <Grid item style={{}} alignItems="center" direction="column">
                <Link to={'../Interesado'} >
                    <Button style={{backgroundColor: 'yellow', color: 'black'}} variant='outlined'>
                        Volver
                    </Button>
                </Link>
                <Link to={`/Candidato/${interesado}/${"rechazados"}`} >
                    <Button style={{backgroundColor: 'yellow', color: 'black'}} variant='outlined'>
                        Ver rechazados
                    </Button>
                </Link>
                <Link to={`/Candidato/${interesado}/${"aceptados"}`} >
                    <Button style={{backgroundColor: 'yellow', color: 'black'}} variant='outlined'>
                        Ver aceptados
                    </Button>
                </Link>
            </Grid>
            {perro ? (
                <Grid item style={{ overflow: 'auto' }} alignItems="center">
                    <Stack spacing={{md:2}} divider={<Divider orientation="horizontal" flexItem />}>
                        <Card sx={{ minWidth: '100%' }}>
                            <CardActionArea style={ {width: '100%', aspectRatio }}>
                                <CardMedia
                                    component="img"
                                    image={perro?.url_imagen}
                                    sx={{ aspectRatio }} 
                                    md={{aspectRatio}}
                                /> 
                            </CardActionArea>
                            <Typography gutterBottom variant="h5" component="div">
                            nombre: {perro?.nombre}
                            </Typography>
                            <Typography gutterBottom variant="body1" component="div">
                            descripcion: {perro?.descripcion}
                            </Typography>
                            <Button disabled={recargandoPerro} style={{backgroundColor: 'red', color: 'white', width: '50%'}} variant='outlined' centerRipple onClick={()=>agregarInteraccion("R")}>rechazar</Button>
                            <Button disabled={recargandoPerro} style={{backgroundColor: 'green', color: 'white', width: '50%'}} variant='outlined' centerRipple onClick={()=>agregarInteraccion("A")}>aceptar</Button>
                        </Card>
                    </Stack>
                </Grid>
            ) : (
                <p>No hay más perros</p>
            )}
        </Grid>
        </>
    )

}
