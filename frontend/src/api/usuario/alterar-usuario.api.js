import { axiosInstance } from "../axios-instance.api"

export async function alterarUsuario({ id,nome,data,descricao }) {
  const response = await axiosInstance.put(
    `/usuarios/${id}`,
    {
        nome,
        data,
        descricao
    },
    {}
  );
  return response.data
}
