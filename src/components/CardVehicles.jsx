import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const CardVehicles = ({ model, name, id, vehicleclass }) => {

  const { store, dispatch } = useGlobalReducer();
  
    const handleFavorities = () => {
      if (store.favorities.includes(name)) {
        return alert("este favorito ya existe");
      }
      dispatch({ type: "add_favorites", name });
    };
  return (
    <>
      <div className=" card m-4 bg-transparent p-2 " style={{ width: "18rem" }}>
        <img
          src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/vehicles/${id}.jpg`}
          className="card-vehicles-img-top rounded-pill"
          alt="..."
        />
        <div className="card-body border border-top-0  rounded-5 rounded-top-0 ">
          <h2 className="card-title text-danger text-center font-monospace">{name}</h2>
          <h2 className=" text-warning">{model}</h2>
          <p className="card-parraf text-danger">{vehicleclass}</p>
          <p className="card-p text-danger"></p>
          <button onClick={handleFavorities} className="btn btn-danger m-1">
            <i className="fa-solid fa-heart fa-beat"></i>
          </button>
          <button className="btn btn-danger">
            <Link to={`/vehicles/${id}`}>
              <i className="fa-solid fa-image fa-beat"></i>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardVehicles;
