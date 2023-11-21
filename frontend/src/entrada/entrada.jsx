import "./entrada.style.css"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Titulo } from "../../component"
import useGlobalUser from "../../../context/global-user.context";

export function Entrada() {
    const [, setGlobalUser] = useGlobalUser();

    useEffect(()=> {
        setGlobalUser({id: null, tipo: null})
    },[])

    return (
        <div className="entrada-screen">
            <Titulo/>
            <section>
                <div className="entrada-texto">
                    CUIDAR DA SUA SAÚDE NÃO É UMA 
                    TAREFA, É UM ESTILO DE VIDA!
                </div>
                <div className="entrada-botoes">
                    <Link to={"/cadastro"}><button>Cadastre-se</button></Link>
                    <Link to={"/entrar"}><button>Entrar</button></Link>
                </div>
            </section>
        </div>
    )
}