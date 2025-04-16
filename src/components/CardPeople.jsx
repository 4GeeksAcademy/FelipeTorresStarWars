import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const CardPeople = ({ birthday, name, id }) => {
  const { store, dispatch } = useGlobalReducer();

  const handleFavorities = ()=>{
    if(store.favorities.includes(name)){
      return alert ("este favorito ya existe")
    }
    dispatch ({type:"add_favorites",name})
    
  };

  

  return (
    <>
      <div className="card m-4 bg-transparent p-1" style={{ width: "10rem" }}>
        <img
          src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${id}.jpg`}
          className="card-people-img-top rounded-5 p-2"
          alt="..."
        />
        <div className="card-body border  justify-content-center border-top-0  rounded-5 rounded-top-0">
          <h2 className="card-title text-danger font-monospace m-1">{name}</h2>
          <p className="card-title text-warning">{birthday}</p>
          <button onClick={handleFavorities} className="btn btn-danger m-1">
            <i className="fa-solid fa-heart fa-beat"></i>
          </button>
          <button className="btn btn-danger">
            <Link to={`/characters/${id}`}>
              <i className="fa-solid fa-image fa-beat"></i>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardPeople;
