import { useParams } from "react-router-dom";

const Detail = () => {

    const params = useParams();
     
  return (
    <div className=" container card mb-3 bg-transparent" style={{maxWidth: "540px"}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/${params.type}/${params.id}.jpg`} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            {/*<h5 className="card-title">{name}</h5>*/}
            <p className="card-text">
              
            </p>
            <p className="card-text">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
