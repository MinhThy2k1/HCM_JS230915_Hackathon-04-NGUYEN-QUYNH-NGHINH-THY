import axios from "axios";
const prefix = "todo";

export default {
    create: async (data: { name: string }) => {
        return await axios.post(`${import.meta.env.VITE_SV_API_URL}/${prefix}`, data)
    },
    edit: async (id: number) => {
        return await axios.patch(`${import.meta.env.VITE_SV_API_URL}/${prefix}/${id}`,)
    },
    findAll: async () => {
        return await axios.get(`${import.meta.env.VITE_SV_API_URL}/${prefix}`)
    },
    delete: async (id: number) => {
        return await axios.delete(`${import.meta.env.VITE_SV_API_URL}/${prefix}/${id}`)
    }

}