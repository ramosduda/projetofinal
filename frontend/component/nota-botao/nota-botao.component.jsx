import "./nota-botao.style.css"
import { useNavigate } from "react-router-dom/dist"; 

export function NotaBotao({id, data}) {
    const navigate = useNavigate();

    function abrirNota() {
        navigate(`/nota/${id}`)
    }

    return (
        <button onClick={abrirNota} className="nota-botao">{data}</button>
    )
}