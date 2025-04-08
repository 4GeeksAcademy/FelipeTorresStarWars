import { useEffect, useState } from "react";
import CardPeople from "../components/CardPeople.jsx";
import CardPlanets from "../components/CardPlanets.jsx";
import CardVehicles from "../components/CardVehicles.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import getServices from "../service/getServices.js";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const [listpeople, setListPeople] = useState([]);

  const handelListPeople = async () => {
    const allPeople = [];
    const resultsPeople = await getServices.getPeople();
    for (let i = 0; i < resultsPeople.length; i++) {
      const id = resultsPeople[i].uid;
      const chararter = await getServices.getPropiertiesPeople(id);
      allPeople.push({ ...chararter, uid: id });
    }
    setListPeople(allPeople);
  };

  const [listPlanets, setListPlanets] = useState([]);

  const handelListPlanets = async () => {
    const allPlanets = [];
    const resultsPlanets = await getServices.getPlanets();
    for (let j = 1; j < resultsPlanets.length; j++) {
      const id = resultsPlanets[j].uid;
      const planett = await getServices.getPropiertiesPlanets(id);
      allPlanets.push({ ...planett, uid: id });
    }
    setListPlanets(allPlanets);
  };

  const [listVehicles, setListVehicles] = useState([]);

  const handelListVehicles = async () => {
    const allVehicles = [];
    const resultsVehicles = await getServices.getVehicles();
    for (let k = 0; k < resultsVehicles.length; k++) {
      const id = resultsVehicles[k].uid;
      const vehicle = await getServices.getPropiertiesVehicles(id);
      allVehicles.push({ ...vehicle, uid: id });
    }
    setListVehicles(allVehicles);
  };

  useEffect(() => {
    handelListPeople();
    handelListPlanets();
    handelListVehicles();
  }, []);

  return (
    <div>
      <div className="container text-center mt-5 ">
        <h1>STAR WARS</h1>
        <div className="card-group  overflow-hidden">
          <div className="row">
            <h2>Charactres</h2>
            {listpeople.map((people) => {
              return (
                <CardPeople
                  key={people.uid}
                  name={people.name}
                  birthday={people.birth_year}
                  gender={people.gender}
                  id={people.uid}
                />
              );
            })}
            ;
            <div>
              <div className="card-group  overflow-hidden">
                <div className="row">
                  <h2>Planets</h2>
                  {listPlanets.map((planet) => {
                    return (
                      <CardPlanets
                        key={planet.uid}
                        name={planet.name}
                        id={planet.uid}
                        population={planet.population}
                      />
                    );
                  })}
                  ;
                </div>
                <div className="card-group  overflow-hidden">
                  <div className="row">
                    <h2>Vehicles</h2>
                    {listVehicles.map((vehicle) => {
                      return (
                        <CardVehicles
                          key={vehicle.uid}
                          name={vehicle.name}
                          model={vehicle.model}
                          vehicleclass={vehicle.vehicleclass}
                          id={vehicle.uid}
                        />
                      );
                    })}
                    ;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
