import axios from "axios";
import { useQuery } from "react-query";

export function useRandomQuery() {
  return useQuery('RandomQuery', RandomQuery, {
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    keepPreviousData: false,
    enabled: true
  });
}

export const RandomQuery = async () => {
    const cliente = axios.create({
        baseURL: "http://localhost:8000/api/",
    });

    const { data } = await cliente.get("perro/perroRandom");
    return data.perro;
}