import axios from "axios";

const DeleteServices = () => {

    const hanldeDelete = () => {
        const API = axios.create({
            baseURL: `{import.meta.env.VITE_BASE_URL}`,
            withCredentials: true
        })
    }

}

export default DeleteServices;