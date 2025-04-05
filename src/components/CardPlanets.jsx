const CardPlanets = ({ name, id, climate,}) => {

    return (
        <>
            <div className="card m-2 bg-transparent" style={{ width: "18rem" }}>
                <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${id}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body border  border-top-0 rounded-bottom ">
                    <h1 className="card-title text-danger">{name}name</h1>
                    <h2 className="card-title text-warning">{climate}climate</h2>
                    <p className="card-title text-danger">orbit</p>
                    <p className="card-title text-danger">population</p>
                    <button className="btn btn-danger">favorite</button>
                </div>
            </div>
        </>

    )
};

export default CardPlanets;