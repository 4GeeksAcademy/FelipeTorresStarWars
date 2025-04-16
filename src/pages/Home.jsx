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

    dispatch({ type: "add_people", people: allPeople });

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

    dispatch({ type: "add_planets", planets: allPlanets });

    setListPlanets(allPlanets);
  };

  const [listVehicles, setListVehicles] = useState([]);

  const handelListVehicles = async () => {
    const allVehicles = [];
    const resultsVehicles = await getServices.getVehicles();
    for (let k = 4; k < resultsVehicles.length; k++) {
      const id = resultsVehicles[k].uid;
      const vehicle = await getServices.getPropiertiesVehicles(id);
      allVehicles.push({ ...vehicle, uid: id });
    }

    dispatch({ type: "add_vehicles", vehicles: allVehicles });

    setListVehicles(allVehicles);
  };

  useEffect(() => {
    handelListPeople();
    handelListPlanets();
    handelListVehicles();
  }, []);

  return (
    <div>
      <div className="container text-center overflow   fs-1 ">
        <h1 className="title-page m-5">¡QUE LA FUERZA TE ACOMPAÑE!</h1>
        <div className="card-group ">
          <div className="row">
            <h2 className="title-characters  text-center">CHARACTTRES</h2>
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

            <div>
              <div className="card-group ">
                <div className="row text-center">
                  <h2 className="title-planets fs-1 text-center">PLANETS</h2>
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
                </div>
                <div className="card-group ">
                  <div className="row">
                    <h2 className="title-vehicles fs-1 text-center">
                      VEHICLES
                    </h2>
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
