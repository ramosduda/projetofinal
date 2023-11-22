import useGlobalUser from "../component/global-user.component";
import { Navigate } from "react-router-dom";

export function PrivateRouteUsuario({ Screen }) {
  const [user] = useGlobalUser();

  if (user.tipo==="USUARIO") {
    return <Screen />;
  }
  return <Navigate to={"/"} />;
}