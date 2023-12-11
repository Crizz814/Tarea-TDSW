import axios from "axios";
import Swal from "sweetalert2"
import { clienteAxios } from "../Helpers/clienteAxios";
import withReactContent from 'sweetalert2-react-content'

const cliente = axios.create({
    baseURL: "http://localhost:8000/api/",
});

export const useRegistrarInteraccion = async (form) => {
    const { data } = await cliente.post("interaccion/registrarInteraccion", form);
    console.log(data.mensaje);
    if(data.mensaje === "It's a Match!"){
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            title: <p>"It's a Match!"</p>,
            text: 'Haz hecho match con este usuario!',
            icon: 'warning',
        })
    }
    return data;
}