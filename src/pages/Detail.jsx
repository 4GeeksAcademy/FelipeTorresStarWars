import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Detail = () => {
  const { store, dispatch } = useGlobalReducer();

  const [detail, setDetail] = useState({});

  const params = useParams();

  useEffect(() => {
    if (params.type.includes("planet")) {
      const planet = store.planets.find((item) => item.uid == params.id);

      setDetail(planet);
    }
    if (params.type.includes("character")) {
      const people = store.people.find((item) => item.uid == params.id);

      setDetail(people);
    }
    if(params.type.includes("vehicle")){
      const vehicle = store.vehicles.find((item)=> item.uid == params.id)
      

      setDetail(vehicle)}


  }, []);
  console.log(detail);

  return (
    <div
      className=" container card mb-3 bg-transparent"
      style={{ maxWidth: "540px" }}
    >
      <div className="row g-0 d-flex  justify-content-center m-5 border border-top-0  rounded-5 rounded-top-0">
        <div className="col-md-4  ">
          <img
            src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/${params.type}/${params.id}.jpg`}
            className="img-fluid  rounded-circle"
            alt="..."
          />
        </div>
        <div className="text-info bg-transparent text-center m-4 ">
        {Object.keys(detail).map(detailKey=>(
          <li key={detailKey} >{detailKey} :  { detail[detailKey]}</li>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
