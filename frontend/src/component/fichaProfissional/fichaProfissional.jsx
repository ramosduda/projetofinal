import useGlobalUser from "../../context/global-user.context";
import { Navigate } from "react-router-dom";

export function FichaProfissional({ Screen }) {
  const [user] = useGlobalUser();

  if (user.tipo==="USUARIO") {
    return <Screen />;
  }
  return <Navigate to={"/"} />;
}
