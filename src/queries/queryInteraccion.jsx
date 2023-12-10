import axios from "axios";
import Swal from "sweetalert2";
import { clienteAxios } from "../Helpers/clienteAxios";

export const useRegistrarInteraccion = async (form) => {
    const { data } = await clienteAxios.post("interaccion/registrarInteraccion", form);
    console.log(data);
    if(data === "It's a Match!"){
        Swal.fire("It's a Match!");
    }
    return data;
};

