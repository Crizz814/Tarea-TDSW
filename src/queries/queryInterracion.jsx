import axios from "axios";

const cliente = axios.create({
    baseURL: "http://localhost:8000/api/",
});

export const useRegistrarInteraccion = async (form) => {
    const { data } = await cliente.post("interaccion/registrarInteraccion", form);
    return data;
}