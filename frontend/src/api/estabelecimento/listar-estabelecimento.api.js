import { axiosInstance } from "../axios-instance.api";

export async function listarEstabelecimentos() {
  const response = await axiosInstance.get("/estabelecimentos");

  return response.data;
}
