import { Button, Card, CardMedia, Grid, List, ListItem } from "@mui/material";
import { Container } from '@mui/material/';
import { Link } from "react-router-dom";

export default function Inicio() {
    return (
        <>
        <Grid container alignItems="center" justify="center" style={{position: 'absolute', width: '100%', top: '15vh'}} >
            <div style={{ position: 'absolute', width: '100%', top: '-100px', textAlign: 'center' }}>
                <img src="/public/perros_enamorados.png" alt="perros enamorados" style={{ width: '400px', margin: '0 auto' }} />
            </div>
            <h1 style={{
                marginTop: '150px',
                textAlign: 'center', 
                width: '100%', 
                fontSize: '100px', 
                color: '#212d45'
            }}>
                Bienvenido al Perro Tinder<br/>
            </h1>
            <List style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                gap: '10px', 
                width: '100%'
                }}>
                <ListItem style={{width:'50%', textAlign: 'end', display: 'block'}}>
                    <Link to={"/Registro/"}>
                        <Button style={{
                            backgroundColor: 'white', 
                            color: '#212d45', 
                            fontSize: '30px', 
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.filter = 'brightness(0.9)')}
                        onMouseOut={(e) => (e.currentTarget.style.filter = 'brightness(1)')}
                        >
                            Registrar Nuevo<br/>Perro
                        </Button>
                    </Link>
                </ListItem>
                <ListItem style={{width:'50%'}}>
                    <Link to={"/Interesado/"}>
                        <Button style={{
                            backgroundColor: 'white', 
                            color: '#212d45', 
                            fontSize: '30px', 
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.filter = 'brightness(0.9)')}
                        onMouseOut={(e) => (e.currentTarget.style.filter = 'brightness(1)')}
                        >
                            Seleccionar Perro<br/>Interesado
                        </Button>
                    </Link>
                </ListItem>
            </List>
        </Grid>
        </>
    );
}
