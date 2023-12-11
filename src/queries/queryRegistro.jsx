import axios from "axios";
import { clienteAxios } from "../Helpers/clienteAxios";


export const useRegistrarPerro = async (form) => {
    const { data } = await clienteAxios.post("perro/registrarPerro", form);
    return data;
}