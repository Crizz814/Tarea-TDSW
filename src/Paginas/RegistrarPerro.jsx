import React from "react";
import {
    Button,
    Card,
    CardActions,
    Container,
    Grid,
    Typography,
  } from "@mui/material";
  import { useForm } from "react-hook-form";

import { useBuscarInfoQuery } from "../queries/query";

export default function RegistrarPerro() {

    const {data: perro, isLoading: cargandoPerrito, refetch, isRefetching: recargandoPerrito} = useBuscarInfoQuery();
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          nombre: "",
          descripcion: "",
          imagen: "",
        },
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
        <Container>
        <Grid container style={{backgroundColor: '#212d45', width: '100%' }}>
            
        </Grid>
        </Container>
        </>
    )
}