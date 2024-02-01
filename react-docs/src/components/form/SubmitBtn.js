function SubmitBtn({onSubmit,onClick}){
    return <button className="btn btn-primary" style={{height: 50 + 'px', marginTop: 21 + 'px'}} onClick={onClick} onSubmit={onSubmit} type="submit">Concluir</button>
}

export default SubmitBtn