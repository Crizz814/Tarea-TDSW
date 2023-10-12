
/*
import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { QueryClient } from 'react-query';
import { perritoRandom } from '../../queries/query';
*/
import { useEffect, useState } from "react";
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
/*
    function useImageAspectRatio(imageUrl) {
        const [aspectRatio, setAspectRatio] = useState(1);

        useEffect(() => {
          if (!imageUrl) {
            return;
          }
      
          let isValid = true;
          Image.getSize(imageUrl, (width, height) => {
            if (isValid) {
              setAspectRatio(width / height);
            }
          });
      
          return () => {
            isValid = false;
          };
        }, [imageUrl]);
      
        return aspectRatio;
      }
*/
    const [aceptados, setAceptados] = useState([]);
    const [rechazados, setRechazados] = useState([]);
    const {data: perro, isLoading: cargandoPerrito, refetch} = useBuscarInfoQuery();
    const aspectRatio = perro?.imagen.height / perro?.imagen.width;

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
/*
export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState<string | false>(false);
  
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };*/
//expanded={expanded === 'panel1'} onChange={handleChange('panel1')}

// TODO: libreria lorem ipsum descripcion perros
return (
    <>
    <Grid container spacing={2} sx={{ overflow: 'auto', width: '100%'}}>
        <Grid item md={4} xs={12} style={{ overflow: 'auto' }}>
            <Stack spacing={{md:2}} divider={<Divider orientation="horizontal" flexItem />}>
            <h1>Perros</h1>
            {cargandoPerrito && <LinearProgress/>}
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
                <Button style={{backgroundColor: 'red', color: 'white', width: '50%'}} variant='outlined' centerRipple onClick={()=> rechazarPerrito(perro)}>rechazar</Button>
                <Button style={{backgroundColor: 'green', color: 'white', width: '50%'}} variant='outlined' centerRipple onClick={()=> aceptarPerrito(perro)}>aceptar</Button>
                <Button style={{backgroundColor: 'blue', color: 'white'}} variant='outlined' fullWidth centerRipple  onClick={()=> perritoRandom()}>random</Button>
                </Card>
            </Stack>
        </Grid>
        <Grid item md={4} xs={12} >
        <h1>Aceptados</h1>
        <List style={{ maxHeight: '84vh', overflow: 'auto' }}>
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
                        <Accordion >
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
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
                        <CardActionArea style={ {width: '100%', aspectRatio }}>
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