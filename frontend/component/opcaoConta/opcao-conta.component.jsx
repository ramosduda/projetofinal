import "./opcao-conta.style.css"

export function OpcaoConta({tipo, texto, escolherTipo}) {
    if(tipo===texto) {
        return (
            <label style={{backgroundColor: '#4d753b'}} onClick={()=>escolherTipo(texto)}>
                <div className="bola-branca"></div>
                {texto}
            </label>
        )
    } else {
        return (
            <label onClick={()=>escolherTipo(texto)}>
                <div className="bola-branca"></div>
                {texto}
            </label>
        )
    }
}