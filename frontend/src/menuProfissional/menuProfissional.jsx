import "./menu-profissional.style.css"
import { Titulo } from "../component"
import { Link } from "react-router-dom";

export function MenuProfissional() {

    return (

        <div className="menu-profissional">
            <Titulo/>
            <Link to={"/cadastrar-estabelecimento"}><button>ADICIONE SEU ESTABELECIMENTO</button></Link>
        </div>

    )

}