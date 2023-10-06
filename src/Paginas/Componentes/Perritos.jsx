
import * as React from 'react';
import { useBuscarInfoQuery } from "../../queries/query";
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Grid, LinearProgress } from '@mui/material';
import { QueryClient } from 'react-query';
import { perritoRandom } from '../../queries/query';


export default function Perritos(){

    //const [perrito, setPerrito] = useState("");
    //const [params, setParams] = useState({limit: 1});
    const {data: perro, isLoading: cargandoPerrito, isSuccess, refetch} = useBuscarInfoQuery();
/*
    useEffect(()=>{
        isSuccess&&setPerrito(perro)
    },[isSuccess]);
*/
function perritoRandom(){
    console.log(perro);
    refetch();

}
// TODO: libreria lorem ipsum descripcion perros
return (
    <>
    <Grid container>
        <Grid item md={4} xs={6}>
            {cargandoPerrito && <LinearProgress/>}
        <Card>
        <CardActionArea>
                <CardMedia
                    component="img"
                    image={perro}
                />
        </CardActionArea>
       
        <Button style={{backgroundColor: 'red', color: 'white', width: '50%'}} variant='outlined' centerRipple  >rechazar</Button>
        <Button style={{backgroundColor: 'green', color: 'white', width: '50%'}} variant='outlined' centerRipple  >aceptar bb</Button>
        <Button style={{backgroundColor: 'blue', color: 'white'}} variant='outlined' fullWidth centerRipple  onClick={()=> perritoRandom()}>random</Button>
      </Card>
        </Grid>
        <Grid item md={4} xs={6}></Grid>

        <Grid item md={4} xs={6}></Grid>
    </Grid>
    
    </>

  
  );
}
//<Button style={{backgroundColor: 'blue', color: 'white'}} variant='outlined' fullWidth centerRipple  onClick={()=> perritoRandom()}>random</Button>