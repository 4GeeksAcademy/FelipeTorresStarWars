import { Link } from "react-router-dom";

const CardPeople = ({ birthday, name, id }) => {
  return (
    <>
      <div className="card m-2 bg-transparent" style={{ width: "10rem" }}>
        <img
          src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${id}.jpg`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body border border-top-0 rounded-bottom ">
          <h5 className="card-title text-danger">{name}</h5>
          <h4 className="card-title text-warning">{birthday}</h4>
          <button className="btn btn-danger m-1">
            <i class="fa-solid fa-heart fa-beat"></i>
          </button>
          <button className="btn btn-danger">
            <Link to={`/characters/${id}`}>
              <i class="fa-solid fa-image fa-beat"></i>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardPeople;
