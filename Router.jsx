import { Route, Routes } from "react-router-dom";
import Inicio from "./src/Paginas/Inicio";
import Perritos from "./src/Paginas/Componentes/Perritos";
import Registro from "./src/Paginas/Componentes/Registro";

const RouterApp = () => {
    return (
        <>
        <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route path="/Perritos" element={<Perritos />}/>
            <Route path="/Registro" element={<Registro />}/>
        </Routes>
        </>
    );
};

export default RouterApp;