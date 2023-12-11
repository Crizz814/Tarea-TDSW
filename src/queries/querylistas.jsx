import axios from "axios";
import { useQuery } from "react-query";
import { clienteAxios } from "../Helpers/clienteAxios";

export const useListasQuery = (id, lista) => {
    console.log(id, lista);
    if(lista === "rechazados"){
        return useQuery(['ListasQuery', id], () => fetchRechazados(id), {
        retry: 0,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        keepPreviousData: false,
        enabled: true,
        });
    }
    else if(lista === "aceptados"){
        return useQuery(['ListasQuery', id], () => fetchAceptados(id), {
        retry: 0,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        keepPreviousData: false,
        enabled: true,
        });
    }
};

const fetchRechazados = async (id) => {
    const { data } = await clienteAxios.get(`interaccion/verRechazados?id=${id}`);
    console.log(data);
    return data.perros;
};

const fetchAceptados = async (id) => {
    const { data } = await clienteAxios.get(`interaccion/verAceptados?id=${id}`);
    console.log(data.perros);
    return data.perros;
};