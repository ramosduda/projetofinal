import "./cadastrarEstabelecimento.style.css";
import { useNavigate } from "react-router-dom/dist"; 
import { useState } from "react";
import useGlobalUser from "../../../context/global-user.context"; 
import { adicionarEstabelecimento } from "../../../api/estabelecimento/cadastrar-estabelecimento.api";

export function CadastrarEstabelecimento() {
    const [formInputs, setFormInputs] = useState({nome: "",area: "", telefone: "", local: ""});
    const [user] = useGlobalUser();
    const navigate = useNavigate();

    function handleChange(event) {
        const { name, value } = event.target;
        setFormInputs((oldFormInputs) => ({
          ...oldFormInputs,
          [name]: value,
        }));
      }

    async function handleSubmit(event) {
        event.preventDefault();
        await adicionarEstabelecimento({
            id: user.id,
            nome: formInputs.nome,
            areaDeAtuacao: formInputs.area,
            telefone: formInputs.telefone,
            localizacao: formInputs.local
        })
        navigate("/menu-profissional")
    }

    return (
        <div className="cadastrar-estabelecimento">
            <section>
                <div className="bola-cinza"></div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome
                        <input
                        name="nome"
                        value={formInputs.nome}
                        type="text"
                        onChange={handleChange}
                        />
                    </label>
                    <label>
                        Área de Atuação
                        <input
                        name="area"
                        value={formInputs.area}
                        type="text"
                        onChange={handleChange}
                        />
                    </label>
                    <label>
                        Telefone
                        <input
                        name="telefone"
                        value={formInputs.telefone}
                        type="text"
                        onChange={handleChange}
                        />
                    </label>
                    <label>
                        Localização
                        <input
                        name="local"
                        value={formInputs.local}
                        type="text"
                        onChange={handleChange}
                        />
                    </label>
                    <button>Enviar</button>
                </form>
            </section>
        </div>
    )

}