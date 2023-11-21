import "./login.style.css"
import { RodapeLinha } from "../../component/index"
import { useNavigate } from "react-router-dom/dist";
import { useState } from "react";
import useGlobalUser from "../../../context/global-user.context";
import { login } from "../../../api/usuario/login.api"

export function Login() {
    const [formInputs, setFormInputs] = useState({usuario: "",senha: ""});
    const navigate = useNavigate();
    const [globalUser,setGlobalUser] = useGlobalUser();

    function handleChange(event) {
        const { name, value } = event.target;
        setFormInputs((oldFormInputs) => ({
          ...oldFormInputs,
          [name]: value,
        }));
      }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const usuario = await login({email: formInputs.usuario, senha: formInputs.senha})
            console.log("USUARIO: "+usuario.tipoUsuario)
            setGlobalUser({id: usuario.id, tipo: usuario.tipoUsuario})
            if(usuario.tipoUsuario==="USUARIO") {
                navigate("/menu-usuario")
            }
            else {
                navigate("/menu-profissional")
            }
        } catch(error) {
            console.log(error)
            navigate("/")
        }
        
    }

    return (
        <div className="login-screen">
            <section>
                <header><h1>{globalUser.tipo}</h1></header>
                <form onSubmit={handleSubmit}>
                <input
                name="usuario"
                value={formInputs.usuario}
                type="text"
                onChange={handleChange}
                placeholder="Usuário"
                />
                <input
                name="senha"
                value={formInputs.senha}
                type="password"
                onChange={handleChange}
                placeholder="Senha"
                />
                <button>Enviar</button>
                </form>
            </section>
            <RodapeLinha/>
        </div>
    )

}