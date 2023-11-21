import { useEffect, useState } from "react";
import "./nota.style.css"
import { useParams } from "react-router-dom/";
import { visualizarNota } from "../../../api/nota/visualizar-nota.api";

export function Nota() {
    const { id } = useParams()
    const [nota, setNota] = useState({});

    useEffect(()=> {
        getNota()
    },[])

    async function getNota() {
        const _nota = await visualizarNota({id})
        setNota(_nota)
    }

    function getDataFormatada(data) {
        return `${data.substring(8,10)}/${data.substring(5,7)}`
    }

    function renderizarNota() {
        return nota.dataNota?(
            <>
            <h1>{getDataFormatada(nota.dataNota)}</h1>
            <p>{nota.descricao}</p>
            </>
        ) : null
    }

    return (
        <div className="nota-screen">
            <div>
                {nota?
                renderizarNota()
                :null}
            </div>
        </div>
    )
}