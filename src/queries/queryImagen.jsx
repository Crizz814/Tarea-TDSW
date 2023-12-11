import { useQuery } from "react-query";
import axios from "axios";

export function useBuscarImagenQuery() {
    return useQuery(
      'buscarImagenQuery', buscarImagenQuery, {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      keepPreviousData: false,
      enabled: true,
    });
}

export const buscarImagenQuery = async () => { 
  let url= `https://dog.ceo/api/breeds/image/random`;

  const { data } = await axios.get(url);

  let imagen = data.message;
  
  console.log(imagen);
  return imagen;
};


