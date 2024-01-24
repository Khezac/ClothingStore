function SubmitBtn({onSubmit,onClick}){
    return <button className="btn btn-primary" onClick={onClick} onSubmit={onSubmit} type="submit">Concluir</button>
}

export default SubmitBtn