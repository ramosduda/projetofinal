import "./sair.style.css"
import { useNavigate } from "react-router-dom/dist";

export function Sair() {
    const navigate = useNavigate();

    function sair() {
        navigate("/")
    }

    function voltar() {
        navigate(-1)
    }

    return (
        <div className="sair-screen">
            <section>
                DESEJA SAIR?
                <button onClick={sair}>SIM</button>
                <button onClick={voltar}>VOLTAR</button>
            </section>
        </div>
    )

}