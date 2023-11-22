import "./perfil.style.css"
import { Titulo } from "../component"
import icon from "../assets/icon-usuario.svg"
import { visualizarUsuario } from "../api/usuario/visualizar-usuario.api";
import { alterarUsuario } from "../api/usuario/alterar-usuario.api"
import { useEffect, useState } from "react";
import useGlobalUser from "../context/global-user.context"; 

export function perfil() {
    const [formInputs, setFormInputs] = useState({nome: "",data: "", descricao: ""});
    const [user] = useGlobalUser();

    useEffect(()=> {
      setInputsPadroes()
    },[])

    async function setInputsPadroes() {
      const usuario = await visualizarUsuario({id: user.id});
      setFormInputs({
        nome: usuario.nome,
        data: usuario.data,
        descricao: usuario.descricao
      })
    }

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
          await alterarUsuario({
            id: user.id,
            nome: formInputs.nome,
            data: formInputs.data,
            descricao: formInputs.descricao
          })
      } catch (error) {
          console.log(error)
      }
  }

    return (
        <div className="perfil-screen">
            <Titulo/>
            <img src={icon} alt="ícone do usuário" />
            
            <form onSubmit={handleSubmit}>
                <input
                name="nome"
                value={formInputs.nome}
                type="text"
                onChange={handleChange}
                placeholder="Nome"
                />
                <input
                name="data"
                value={formInputs.data}
                type="date"
                onChange={handleChange}
                placeholder="Data de Nascimento"
                />
                <input
                name="descricao"
                value={formInputs.descricao}
                type="text"
                onChange={handleChange}
                placeholder="Faça sua Descrição"
                className="descricao-input"
                />
                <button>Alterar Perfil</button>
                </form>
        </div>
    )
}