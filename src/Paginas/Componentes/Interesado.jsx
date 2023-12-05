import { useState } from "react";
import { usePerroQuery } from "../../queries/queryPerros";
import { Button, Card, CardContent, CardMedia, Container, Grid, List, ListItem } from "@mui/material";

export default function Interesado() {

    const {data: perros, isLoading, isError, error, refetch} = usePerroQuery();
    
    return (
        <Container>
            <Grid container spacing={1}>
                {perros?.map((perro) => (
                    <Grid item xs={3} md={3} key={perro.id}>
                        <Card>
                            {console.log(perro.url_imagen)}
                            <CardMedia sx={{ maxWidth: 200 }} component="img" image={perro.url_imagen} alt={perro.nombre} />
                            <CardContent>
                                Nombre : {perro.nombre} <br />
                                Descripción : {perro.descripcion} 
                            </CardContent>
                            <Button>
                                Elegir
                            </Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}