import axios from "axios";
import { clienteAxios } from "../Helpers/clienteAxios";
import Swal from "sweetalert2"
import withReactContent from 'sweetalert2-react-content'


export const useRegistrarPerro = async (form) => {
    const { data } = await clienteAxios.post("perro/registrarPerro", form);

    if (data) {
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            title: <p>"Registro exitoso!"</p>,
            text: 'Tu perrito ha sido registrado!',
            icon: 'success',
        })
    }

    return data;

}