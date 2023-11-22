import { useNavigate } from "react-router-dom/dist";
import { useState } from "react";
import "./adicionarNota.style.css"
import { adicionarNota } from "../api/nota/adicionar-nota.api"
import useGlobalUser from "../context/global-user.context"; 

export function AdicionarNota() {
    const [formInputs, setFormInputs] = useState({nota: "", data: ""});
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
        try {
            await adicionarNota({
                id: user.id,
                descricao: formInputs.nota,
                dataNota: formInputs.data
            })
            navigate("/lista-notas")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="adicionar-nota-screen">
            <div>
                <h1>Adicionar Nota</h1>
                <form onSubmit={handleSubmit}>
                    <input
                    name="nota"
                    value={formInputs.nota}
                    type="text"
                    onChange={handleChange}
                    placeholder="Escreva uma nota"
                    />
                    <input
                    name="data"
                    value={formInputs.data}
                    type="date"
                    onChange={handleChange}
                    />
                    <button>Adicionar</button>
                </form>
            </div>
        </div>
    )
}