import axios from "axios";
import { useQuery } from "react-query";
import { clienteAxios } from "../Helpers/clienteAxios";

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
  

  console.log("useRandomQuery: ", id);
  const { data } = await clienteAxios.get(`interaccion/candidato?id=${id}`);
  
  return data.perro;
};
