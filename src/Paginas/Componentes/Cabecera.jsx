import { Grid } from "@mui/material";

export function Cabecera () {
    return (
        <Grid container justifyContent="center" style={{backgroundColor: '#212d45', width: '100%', height: '4vh'}}>
            <h1 style={{margin: '0px 0px 0px', padding: '10px 0px 20px 0px', color: 'white', fontSize: '30px'}}>Perro</h1>
            <div style={{textAlign: 'center' }}>
                <img src="/public/perros_enamorados.png" alt="perros enamorados" style={{ width: '70px', margin: '10px 0px 0px' }} />
            </div>
            <h1 style={{margin: '0px 0px 0px', padding: '10px 0px 20px 0px', color: 'white', fontSize: '30px'}}>Tinder</h1>
        </Grid>
    )
}