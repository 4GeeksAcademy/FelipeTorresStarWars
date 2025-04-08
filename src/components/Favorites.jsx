import { useState } from "react";
import CardPeople from "./CardPeople";
import CardVehicles from "./CardVehicles";
import CardPlanets from "./CardPlanets";


const items = [
  <CardPeople/>,
  <CardPlanets />,
  <CardVehicles />
];
const Favorities =()=>{
  const [Favorities,setfavorities]= useState([]);

  const toggleFavorities = (item) => {
    if (Favorities.includes(item.CardPeople)){
      setfavorities(Favorities.filter(favId => favId !== item.CardPeople));
    }else {
      setfavorities([...Favorities,item.CardPeople]);
    }
  };

  return(
    <>
      <div>
        <h2>My Favorities</h2>
        <ul>
          {items.map(item=>(<li key={item.Id}>{item.CardPeople}{" "}<button onClick={()=> toggleFavorities(item)}>
            {Favorities.includes(item.i) ? "Add favorities" : "Delete favorities"}</button></li>))}
        </ul>

        <h2>My Favorities</h2>
        <ul>
          {items.filter(item=> Favorities.includes(item.id)).map(Favorities=> (<li key={Favorities.id}>{Fav.id}</li>))}
        </ul>
      </div>
    </>
  );


};

export default Favorities;

