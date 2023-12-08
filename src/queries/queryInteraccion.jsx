import axios from "axios";

const cliente = axios.create({
    baseURL: "http://localhost:8000/api/",
});

export const useRegistrarInteraccion = async (form) => {
    const { data } = await cliente.post("interaccion/registrarInteraccion", form);
    console.log(data);
    if(data === "It's a Match!"){
        alert(data);
    }
    return data;
}