import axios from "axios";

const cliente = axios.create({
    baseURL: "http://localhost:8000/api/",
});

export const useRegistrarPerro = async (form) => {
    const { data } = await cliente.post("perro/registrarPerro", form);
    return data;
}