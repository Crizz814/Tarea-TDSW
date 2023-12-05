import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Inicio(){
    return (
        <>
            <h1>Bienvenido al Perro Tinder<br/></h1>
            <Link to={"/Perritos/"}>
                <Button>Perritos</Button>
            </Link>
            <Link to={"/Registro/"}>
                <Button>REgistro</Button>
            </Link>
        </>
    );
}
