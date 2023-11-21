import { axiosInstance } from "../axios-instance.api";

export async function visualizarNota({id}) {
  const response = await axiosInstance.get(`/notas/${id}`);

  return response.data;
}