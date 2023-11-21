import { axiosInstance } from "../axios-instance.api"

export async function login({email,senha}) {
  const response = await axiosInstance.post(
    "/usuarios/login",
    {
        email,
        senha
    },
    {}
  );
  return response.data 
}