import { useQuery, QueryClient } from "react-query";
import axios from "axios";


export function useBuscarInfoQuery() {
    return useQuery(
      'buscarInfoQuery', buscarInfoQuery, {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      keepPreviousData: false,
      enabled: true,
    });
  }

export const buscarInfoQuery = async () => { 

    let url3= `https://dog.ceo/api/breeds/image/random`;

    const { data } = await axios.get(url3);
    //console.log(data.message);
// let perro (generar nombre y desc random)
    return data.message;
    
};

export function perritoRandom(){
  QueryClient.refetchQueries('buscarInfoQuery');
}