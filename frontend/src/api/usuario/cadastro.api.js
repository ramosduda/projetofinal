import { axiosInstance } from "../axios-instance.api"

export async function cadastroApi({ nome,email,senha,data,tipo }) {
  await axiosInstance.post(
    "/usuarios",
    {
        nome,
        email,
        senha,
        data,
        tipo
    },
    {}
  );
}
