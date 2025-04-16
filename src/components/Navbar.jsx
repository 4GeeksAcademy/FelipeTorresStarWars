import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();

  const handleDeleteFavorities = (name) => {
    
    dispatch({ type: "delete_favorities", name })
    ;
  };

  return (
    <nav className="navbar fixed-top  navbar-light bg-dark bg-gradient">
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand mb-0 h1 text-light">Star Wars</span>
        </Link>
        <div className="ml-auto">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button {store.favorities.length
              }
              
            </button>
            <ul className="dropdown-menu">
              {store.favorities.map((item, index) => (
                <li key={index}>
                  <a className="dropdown-item p-2" href="#">
                    {item}
                    <button onClick={() => handleDeleteFavorities(item)}>
                      <i className="m-2 fa-solid fa-trash fa-beat"></i>
                    </button>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

///<Favorites />///
