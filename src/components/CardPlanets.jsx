import { Link } from "react-router-dom";

const CardPlanets = ({ name, id, population }) => {
  return (
    <>
      <div className="card m-2 bg-transparent" style={{ width: "18rem" }}>
        <img
          src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${id}.jpg`}
          className="card-img-top rounded-circle"
          alt="..."
        />
        <div className="card-body border  border-top-0  rounded-5 rounded-top-0 ">
          <h1 className="card-title text-warning">{name}</h1>
          <p className="card-title text-danger">{population}</p>
          <button className="btn btn-danger m-1">
            <i class="fa-solid fa-heart fa-beat"></i>
          </button>
          <button className="btn btn-danger">
            <Link to={`/planets/${id}`}>
              <i class="fa-solid fa-image fa-beat"></i>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardPlanets;
