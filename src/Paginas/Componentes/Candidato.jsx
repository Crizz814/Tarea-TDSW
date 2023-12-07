import { Button, Card, CardActionArea, CardMedia, Container, Divider, Grid, LinearProgress, Stack, Typography } from "@mui/material";
import { useRandomQuery } from "../../queries/queryRandom";



export function Candidato(interesado){

    console.log("interesado: ",interesado);


    const {data: perro, isLoading, isError, error, refetch} = useRandomQuery();
    //if (perro.id == interesado) refetch();
    console.log(perro?.id);
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
                    <Button variant="contained" onClick={refetch}>Siguiente</Button>
                </Card>
            </Stack>
        </Grid>
        </Container>

        </>
    )

}