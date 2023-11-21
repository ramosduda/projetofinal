import { axiosInstance } from "../axios-instance.api"

export async function adicionarEstabelecimento({ id,nome,areaDeAtuacao,telefone,localizacao }) {
  await axiosInstance.post(
    `/estabelecimentos/${id}`,
    {
      nome,
      areaDeAtuacao,
      telefone,
      localizacao
    },
    {}
  );
}
