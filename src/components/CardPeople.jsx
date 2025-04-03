const CardPeople = ({birthday,name,gender}) => {

    return (
        <>
            <div className="card m-2" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h4 className="card-title">{birthday}</h4>
                        <p className="card-text">{gender}</p>
                        <button className="btn btn-danger">favorito</button>
                    </div>
            </div>
        </>
    )
};

export default CardPeople;


