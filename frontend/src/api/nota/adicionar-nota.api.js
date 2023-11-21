import { axiosInstance } from "../axios-instance.api"

export async function adicionarNota({ id,descricao,dataNota }) {
  await axiosInstance.post(
    `/notas/${id}`,
    {
      descricao,
      dataNota
    },
    {}
  );
}
