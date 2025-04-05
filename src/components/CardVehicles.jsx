const CardVehicles = ({model, name,id,vehicleclass})=> {
    return(
        <>
        <div className="card m-2 bg-transparent" style={{ width: "18rem" }}>
                <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/vehicles/${id}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body border border-top-0 rounded-bottom">
                    <h1 className="card-title text-danger">{name}</h1>
                    <h2 className="card-title text-warning">{model}</h2>
                    <p className="card-parraf text-danger">{vehicleclass}</p>
                    <p className="card-p text-danger"></p>
                    <button className="btn btn-danger">favorite</button>
                </div>
            </div>
        </>
    )
};

export default CardVehicles;