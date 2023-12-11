import { Link, useParams } from "react-router-dom";
import { useListasQuery } from "../../queries/querylistas";
import { Button, Card, CardContent, CardMedia, Container, Grid } from "@mui/material";
import { useEffect } from "react";

export  function Listas({params}) {
    const {interesado, lista} = useParams();
    //console.log(interesado, lista);

    const {data: perros, isLoading, isError, error, refetch, isRefetching: recargandoPerro} = useListasQuery(interesado, lista);

    useEffect(() => {
        refetch();
    }   , [lista]);

    let aspectRatio = perros?.map(perro => {
        if (perro?.url_imagen.height && perro?.url_imagen.width) {
            return perro.url_imagen.height / perro.url_imagen.width;
        } else {
            return 1; // Valor por defecto en caso de que height o width no estén disponibles
        }
    });

    return (
        <>
        <Link to={'../Interesado'} >
            <Button style={{backgroundColor: 'yellow', color: 'black'}} variant='outlined'>
                Volver a la lista de perros
            </Button>
        </Link>
        <Link to ={`/Candidato/${interesado}`}>
            <Button style={{backgroundColor: 'yellow', color: 'black'}} variant='outlined'>
                Volver al candidato
            </Button>
        </Link>
        <Link to={`/Candidato/${interesado}/${"rechazados"}`} >
            <Button style={{backgroundColor: 'yellow', color: 'black'}} variant='outlined'>
                Ver rechazados
            </Button>
        </Link>
            <Grid container spacing={1}>
                {perros?.map((perro) => (
                    <Grid item xs={3} md={3} key={perro.id}>
                        <Card>
                            <CardMedia sx={{ aspectRatio }} md={{aspectRatio}} component="img" image={perro.url_imagen} alt={perro.nombre} />
                            <CardContent>
                                Nombre : {perro.nombre} <br />
                                Descripción : {perro.descripcion}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}