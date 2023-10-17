import { useState } from "react";
import { Button, CardActionArea, Divider, LinearProgress, List, ListItem, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { useBuscarInfoQuery } from "../../queries/query";
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Perritos(){

    const [aceptados, setAceptados] = useState([]);
    const [rechazados, setRechazados] = useState([]);
    const {data: perro, isLoading: cargandoPerrito, refetch, isRefetching: recargandoPerrito} = useBuscarInfoQuery();
    const aspectRatio = perro?.imagen.height / perro?.imagen.width;
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };

function perritoRandom(){
    console.log(perro);
    refetch();
}

function aceptarPerrito(item){
    setExpanded(false);
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
    setExpanded(false);
    if(aceptados.includes(item)){
        setAceptados(aceptados.filter((perro) => perro !== item));
        setRechazados([item, ...rechazados]);
    } else {
        setRechazados([item, ...rechazados]);
        refetch();
    }
}


return (
    <>
    <Grid container style={{backgroundColor: '#212d45', width: '100%' }}>
    <h1 style={{width: '100%', textAlign: 'center', margin: '0px 0px 10px'}}>Tinder de Perritos</h1>
    <h2 style={{width: '33%', textAlign: 'center', margin: '0px 0px 10px'}}>Perro Candidato</h2>
    <h2 style={{width: '33%', textAlign: 'center', margin: '0px 0px 10px'}}>Aceptados</h2>
    <h2 style={{width: '33%', textAlign: 'center', margin: '0px 0px 10px'}}>Rechazados</h2>
    </Grid>
    <Grid container spacing={2} sx={{ width: '100%', minHeight: '88vh', backgroundColor: '#d5d5d5', margin: '0px'}}>        <Grid item md={4} xs={12} style={{ overflow: 'auto' }}>
            <Stack spacing={{md:2}} divider={<Divider orientation="horizontal" flexItem />}>
            {recargandoPerrito || cargandoPerrito ? <LinearProgress/> :
            <Card sx={{ minWidth: '100%' }}>
                <CardActionArea style={ {width: '100%', aspectRatio }}>
                    <CardMedia
                        component="img"
                        image={perro?.imagen}
                        style={ {width: '100%' }}
                    /> 
                </CardActionArea>
                <Typography gutterBottom variant="h5" component="div">
                nombre: {perro?.nombre}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                descripcion: {perro?.descripcion}
                </Typography>
                <Button disabled={recargandoPerrito} style={{backgroundColor: 'red', color: 'white', width: '50%'}} variant='outlined' centerRipple onClick={()=> rechazarPerrito(perro)}>rechazar</Button>
                <Button disabled={recargandoPerrito}  style={{backgroundColor: 'green', color: 'white', width: '50%'}} variant='outlined' centerRipple onClick={()=> aceptarPerrito(perro)}>aceptar</Button>
                </Card>}
            </Stack>
        </Grid>
        <Grid item md={4} xs={6} >
        <List style={{ maxHeight: '90vh', overflow: 'auto' }}>
            {aceptados.map((item, index) => (
                <>
                <ListItem key={index}>
                    <Card sx={{ minWidth: '100%' }}>
                        <CardActionArea style={ {width: '100%', aspectRatio }}>
                            <CardMedia
                                component="img"
                                image={item?.imagen}
                            />
                        </CardActionArea>
                        {console.log(item.verDescripcion)}
                        <Accordion expanded={expanded === item.nombre} onChange={handleChange(item.nombre)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                >
                                <Typography sx={{ width: '75%', flexShrink: 0 }}>
                                    {item.nombre}
                                </Typography>
                                <Typography sx={{ color: 'text.secondary'}}>ver descripcion</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {item.descripcion}
                                </Typography>
                            </AccordionDetails>
                        </Accordion> 
                        <Button disabled={recargandoPerrito} style={{backgroundColor: 'red', color: 'white', width: '100%'}} variant='outlined' fullWidth centerRipple onClick={()=> rechazarPerrito(item)}>Arrepentirse</Button>
                    </Card>
                </ListItem>
                </>
            ))}
        </List>
        </Grid>
        <Grid item md={4} xs={6} >
        <List style={{ maxHeight: '90vh', overflow: 'auto' }}>
            {rechazados.map((item, index) => (
                <>
                <ListItem key={index}>
                    <Card sx={{ minWidth: '100%' }}>
                        <CardActionArea style={ {width: '100%', aspectRatio }}>
                            <CardMedia
                                component="img"
                                image={item?.imagen}
                            /> 
                        </CardActionArea>
                        <Accordion expanded={expanded === item.nombre} onChange={handleChange(item.nombre)}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            >
                            <Typography sx={{ width: '75%', flexShrink: 0 }}>
                                {item.nombre}
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>ver descripcion</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                {item.descripcion}
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Button disabled={recargandoPerrito} style={{backgroundColor: 'green', color: 'white', width: '100%'}} variant='outlined' fullWidth centerRipple onClick={()=> aceptarPerrito(item)}>Arrepentirse</Button>
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