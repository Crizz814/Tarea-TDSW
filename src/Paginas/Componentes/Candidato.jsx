import { Button, Card, CardActionArea, CardMedia, Container, Divider, Grid, LinearProgress, Stack, Typography } from "@mui/material";
import { useRandomQuery } from "../../queries/queryRandom";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useInteraccion } from '../../Context/InteraccionContext';

export function Candidato ({params}) {

    const {interesado} = useParams();
    //console.log("interesado: ",interesado);
    
    const {data: perro, isLoading, isError, error, refetch, isRefetching: recargandoPerro} = useRandomQuery(interesado);
    //console.log("candidato: ", perro);

    //const {register, handleSubmit} = useForm();

    // const { registrarInteraccion } = useInteraccion(); // AQUI ME TIRA ERROOOOOOOR

    /*const onSubmit = (data) => {
        data = {...data, id_perro_interesado: interesado};
        data = {...data, id_perro_candidato: perro.id};
        data = {...data, preferencia: interaccion};
        console.log(data);
        registrarInteraccion(data);
    }*/

    let aspectRatio;
    if (perro?.url_imagen.height && perro?.url_imagen.width) {
      aspectRatio = perro.url_imagen.height / perro.url_imagen.width;
    } else {
      aspectRatio = 1; // Valor por defecto en caso de que height o width no estén disponibles
    }

    if (isLoading) {
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
    }

    return (
        <>

        <Container>
        <Grid item md={4} xs={12} style={{ overflow: 'auto' }}>
            <Stack spacing={{md:2}} divider={<Divider orientation="horizontal" flexItem />}>
                <Card sx={{ minWidth: '100%' }}>
                    <CardActionArea style={ {width: '100%', aspectRatio }}>
                        <CardMedia
                            component="img"
                            image={perro?.url_imagen}
                            style={ {width: '100%' }}
                        /> 
                    </CardActionArea>
                    <Typography gutterBottom variant="h5" component="div">
                    nombre: {perro?.nombre}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div">
                    descripcion: {perro?.descripcion}
                    </Typography>
                    <Button variant='contained' fullWidth onClick={refetch}>Refrescar Perro</Button>
                    <Button disabled={recargandoPerro} style={{backgroundColor: 'red', color: 'white', width: '50%'}} variant='outlined' centerRipple onClick={()=>agregarInteraccion("R")}>rechazar</Button>
                    <Button disabled={recargandoPerro} style={{backgroundColor: 'green', color: 'white', width: '50%'}} variant='outlined' centerRipple onClick={()=>agregarInteraccion("A")}>aceptar</Button>
                </Card>
            </Stack>
        </Grid>
        </Container>

        </>
    )

}
