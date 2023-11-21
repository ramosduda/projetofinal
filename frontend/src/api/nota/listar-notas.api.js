import { axiosInstance } from "../axios-instance.api";

export async function listarNotas({id}) {
  const response = await axiosInstance.get(`/notas/listar/${id}`);

  return response.data;
}
