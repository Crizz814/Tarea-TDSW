import React, {  createContext, useContext,useState, useMemo, useEffect } from "react";
import { useRegistrarPerro } from "../queries/queryRegistro";
import { useMutation } from "react-query";

const PerritoContext = createContext();

const PerritoProvider = (props) => {

    const [perro, setPerro] = useState(null);

    const {mutate, isLoading: cargando, isError: error, isSuccess: exito} = useMutation(useRegistrarPerro);
    const registrarPerro = (form) => {
        mutate(form);
    }
    
    const value = useMemo(() => {
        return {
            perro,
            setPerro,
            registrarPerro,
            cargando,
        };
    }, [perro, setPerro, registrarPerro, cargando]);

    return <PerritoContext.Provider
    value={value}
    {...props}
    />;

};

const usePerrito = () => {
    return useContext(PerritoContext);
}

export { PerritoProvider, usePerrito };