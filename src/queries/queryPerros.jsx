import axios from "axios";
import { useQuery } from "react-query";
import { clienteAxios } from "../Helpers/clienteAxios";

export function usePerroQuery() {
  return useQuery('PerroQuery', PerroQuery, {
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    keepPreviousData: false,
    enabled: true
  });
}

export const PerroQuery = async () => {

    const { data } = await clienteAxios.get("perro/listarPerros");
    console.log(data);
    return data.perros;
}