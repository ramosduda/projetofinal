import "./cadastro.style.css"
import { useNavigate } from "react-router-dom/dist";
import { useState } from "react";
import { cadastro } from "../../../api/usuario/cadastro.api";

export function Cadastro() {
    const [formInputs, setFormInputs] = useState({nome: "",data: "", email: "", senha: "",tipo: ""});
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
        try {
            await cadastro({
                nome: formInputs.nome,
                email: formInputs.email,
                senha: formInputs.senha,
                data: formInputs.data,
                tipo: formInputs.tipo
            })
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="cadastro-screen">
            <section>
                <form onSubmit={handleSubmit}>
                    <label>Nome</label>
                    <input
                    name="nome"
                    value={formInputs.nome}
                    type="text"
                    onChange={handleChange}
                    placeholder="NOME COMPLETO"
                    />
                    <label>Data de Nascimento</label>
                    <input
                    name="data"
                    value={formInputs.data}
                    type="date"
                    onChange={handleChange}
                    />
                    <label>Email</label>
                    <input
                    name="email"
                    value={formInputs.email}
                    type="text"
                    onChange={handleChange}
                    placeholder="EMAIL"
                    />
                    <label>Senha</label>
                    <input
                    name="senha"
                    value={formInputs.senha}
                    type="text"
                    onChange={handleChange}
                    placeholder="SENHA"
                    />
                    <label>Tipo de Conta</label>
                    <section>
                        <div>
                            <h3>Usuário</h3>
                            <input
                            name="tipo"
                            value={"USUARIO"}
                            className="radio-input"
                            type="radio"
                            onChange={handleChange} //opção//
                            />
                        </div>
                        <div>
                            <h3>Profissional</h3>
                            <input
                            name="tipo"
                            value={"PROFISSIONAL"}
                            className="radio-input"
                            type="radio"
                            onChange={handleChange}
                            />
                        </div>
                    </section>
                    
                    <button>Cadastrar</button>
                </form>
            </section>
        </div>
    )

}