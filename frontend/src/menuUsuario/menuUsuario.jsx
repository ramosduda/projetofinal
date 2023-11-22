import "./menuUsuario.style.css"
import { Titulo } from "../component"
import { Link } from "react-router-dom";

export function MenuUsuario() {
    return (
        <div className="menu-screen">
            <Titulo />
            <section>
                <Link to={"/perfil"}><button>Perfil</button></Link>
                <Link to={"/lista-notas"}><button>Bloco de Notas</button></Link>
                <Link to={"/lista-profissionais"}><button>Profissional</button></Link>
                <Link to={"/sair"}><button>Sair</button></Link>
            </section>
        </div>
    )
}