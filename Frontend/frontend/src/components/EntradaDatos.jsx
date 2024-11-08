const EntradaDatos = (props) => {
    const valueOnChange = (evt) => {
        props.setValor(evt.target.value)
    }

    return <div className="mb-3">
        <label htmlFor="txt_value" className="form-label">
            { props.label }
        </label>
        <input
            type={ props.tipo === "entrada" ? "text" : "password" } 
            className="form-control"
            onChange={ valueOnChange }
            value={ props.valor }/>
    </div>
}

export default EntradaDatos