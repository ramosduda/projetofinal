import { axiosInstance } from "../axios-instance.api";

export async function visualizarUsuario({id}) {
  const response = await axiosInstance.get(`/usuarios/${id}`);

  return response.data;
}
