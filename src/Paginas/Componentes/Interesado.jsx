import { useState } from "react";
import { usePerroQuery } from "../../queries/queryPerros";
import { Button, Card, CardContent, CardMedia, Container, Grid, LinearProgress, List, ListItem } from "@mui/material";
import {Candidato} from "../Componentes/Candidato.jsx";
import { Link } from "react-router-dom";

export default function Interesado() {

    const {data: perros, isLoading, isError, error, refetch} = usePerroQuery();

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

    const PerroInteresado = (perro) => {
        let interesado = perro.id;
        Candidato(interesado);
    }


    return (
        <Container>
            <Grid container spacing={1}>
                {perros?.map((perro) => (
                    <Grid item xs={3} md={3} key={perro.id}>
                        <Card>
                            <CardMedia sx={{ aspectRatio }} md={{aspectRatio}} component="img" image={perro.url_imagen} alt={perro.nombre} />
                            <CardContent>
                                Nombre : {perro.nombre} <br />
                                Descripción : {perro.descripcion}
                            </CardContent>
                            <Link to="/Candidato">
                                <Button onClick={()=> PerroInteresado(perro)} >
                                    Elegir
                                </Button>
                            </Link>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}