import axios from "axios";
import { useQuery } from "react-query";

export const useRandomQuery = (id) => {
  return useQuery(['RandomQuery', id], () => fetchRandomPerro(id), {
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    keepPreviousData: false,
    enabled: true,
  });
};

const fetchRandomPerro = async (id) => {
  
  const cliente = axios.create({
    baseURL: "http://localhost:8000/api/",
  });
  console.log("useRandomQuery: ", id);
  const { data } = await cliente.get(`interaccion/candidato?id=${id}`);
  
  return data.perro;
};
