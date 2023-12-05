import axios from "axios";
import { useQuery } from "react-query";

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
    const cliente = axios.create({
        baseURL: "http://localhost:8000/api/",
    });

    const { data } = await cliente.get("perro/listarPerros");
    console.log(data);
    return data.perros;
}