import "./lista-profissionais.style.css"
import { FichaProfissional } from "../component"
import { useEffect, useState } from "react"
import { listarEstabelecimentos } from "../api/estabelecimento/listar-estabelecimentos.api";

export function ListaProfissionais() {
    const [estabelecimentos, setEstabelecimentos] = useState([]);

    useEffect(()=> {
        getEstabelecimentos()
    },[])

    async function getEstabelecimentos() {
        const _estabelecimentos = await listarEstabelecimentos();
        setEstabelecimentos(_estabelecimentos)
    }

    return (
        <div className="lista-profissionais-screen">
            {estabelecimentos?
                estabelecimentos.map(estabelecimento => {
                    return (<FichaProfissional 
                        nome={estabelecimento.nome}
                        atuacao={estabelecimento.areaDeAtuacao}
                        telefone={estabelecimento.telefone}/>)
                })
            :null}
        </div>
    )

}