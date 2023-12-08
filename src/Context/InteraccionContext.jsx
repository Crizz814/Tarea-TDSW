import React, {  createContext, useContext,useState, useMemo, useEffect } from "react";
import { useMutation } from "react-query";
import { useRegistrarInteraccion } from "../queries/queryInteraccion";

const InteraccionContext = createContext();

const InteraccionProvider = (props) => {

    const [interaccion, setInteraccion] = useState(null);

    const {mutate, isLoading: cargando, isError: error, isSuccess: exito} = useMutation(useRegistrarInteraccion);
    
    const registrarInteraccion = (form) => {
        mutate(form);
    }
    
    const value = useMemo(() => {
        return {
            interaccion,
            setInteraccion,
            registrarInteraccion,
            cargando,
        };
    }, [interaccion, setInteraccion, registrarInteraccion, cargando]);

    return <InteraccionContext.Provider
    value={value}
    {...props}
    />;

};

const useInteraccion = () => {
    return useContext(InteraccionContext);
}

export { InteraccionProvider, useInteraccion };