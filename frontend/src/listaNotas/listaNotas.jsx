import "./listaNotas.style.css"
import { Titulo, NotaBotao } from "../component"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import { listarNotas } from "../api/nota/listar-notas.api";
import useGlobalUser from "../context/global-user.context";

export function ListaNotas() {
    const [notas, setNotas] = useState([]);
    const [user] = useGlobalUser();
    const navigate = useNavigate();

    useEffect(()=> {
        getNotas()
    },[])

    async function getNotas() {
        const _notas = await listarNotas({id: user.id});
        setNotas(_notas)
    }

    function getDataFormatada(data) {
        return `${data.substring(8,10)}/${data.substring(5,7)}`
    }

    function handleAdicionarNota() {
        navigate("/adicionar-nota")
    }

    return (
        <div className="lista-notas-screen">
            <Titulo/>
            <section>
            {notas?
                notas.map(nota => {
                    return (<NotaBotao 
                        id={nota.id}
                        data={getDataFormatada(nota.dataNota)}/>)
                })
            :null}
            </section>
            <button className="add-nota" onClick={handleAdicionarNota}>Adicionar Nota</button>
        </div>
    )

}