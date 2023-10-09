import { useQuery } from "react-query";
import axios from "axios";
import { loremIpsum } from "react-lorem-ipsum";
import { useEffect, useState } from "react";



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

  let url= `https://dog.ceo/api/breeds/image/random`;

  const { data } = await axios.get(url);
  //console.log(data.message);
  // let perro (generar nombre y desc random)
  let perro = {
    imagen: data.message,
    nombre: nombreRandom(),
    descripcion: loremIpsum(),
  }
  
  return perro;  
};

function nombreRandom(){
  let r = (Math.random() + 1).toString(36).substring(6);
  console.log("random", r);
  return r;
}


