import { Route, Routes } from "react-router-dom";
import Inicio from "./src/Paginas/Inicio";
import Perritos from "./src/Paginas/Componentes/Perritos";
import Registro from "./src/Paginas/Componentes/Registro";
import { PerritoProvider } from "./src/Context/PerritoContext";
import Interesado from "./src/Paginas/Componentes/Interesado";

const RouterApp = () => {
    return (
        <>
        <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route path="/Perritos" element={<Perritos />}/>
            <Route path="/Interesado" element={<Interesado />}/>
            <Route path="/Registro" element={
                <PerritoProvider>
                    <Registro />
                </PerritoProvider>}/>
        </Routes>
        </>
    );
};

export default RouterApp;