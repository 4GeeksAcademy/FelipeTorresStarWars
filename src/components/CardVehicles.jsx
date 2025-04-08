import { Link } from "react-router-dom";

const CardVehicles = ({ model, name, id, vehicleclass }) => {
  return (
    <>
      <div className=" card m-2 bg-transparent" style={{ width: "18rem" }}>
        <img
          src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/vehicles/${id}.jpg`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body border border-top-0 rounded-bottom ">
          <h1 className="card-title text-danger">{name}</h1>
          <h2 className="card-title text-warning">{model}</h2>
          <p className="card-parraf text-danger">{vehicleclass}</p>
          <p className="card-p text-danger"></p>
          <button className="btn btn-danger m-1">
            <i class="fa-solid fa-heart fa-beat"></i>
          </button>
          <button className="btn btn-danger">
            <Link to={`/vehicles/${id}`}>
              <i class="fa-solid fa-image fa-beat"></i>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardVehicles;
