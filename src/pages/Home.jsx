
import { useEffect, useState } from "react";
import CardPeople from "../components/CardPeople.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import getServices from "../service/getServices.js";
import CardPlanets from "../components/CardPlanets.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const [listpeople, setListPeople] = useState([]);

	const handelListPeople = async () => {
			const allPeople = [];
		const resultsPeople = await getServices.getPeople();
		for(let i=0;i<resultsPeople.length;i++){
			const id = resultsPeople[i].uid;
			const chararter = await getServices.getPropierties(id);
			allPeople.push(chararter)
			 
			
		}
		setListPeople(allPeople);
	};

	const [listPlanets, setListPlanets] = useState([]);

	const handelListPlanets = async () => {
		const resultsPlanets = await getServices.getPlanets();
		setListPlanets(resultsPlanets);
	}

	useEffect(() => {
		handelListPeople();
		handelListPlanets();
	}, {})



	return (
		<>
			<div className="text-center mt-5">
				<h1>STAR WARS</h1>
				<div className="card-group  overflow-hidden">
					<div className="row">

						<h2>Charactres</h2>
						{
							listpeople.map(people => {
								return (
									<CardPeople
										key={people.id}
										name={people.name}
										birthday={people.birth_year}
										gender={people.gender} />
								);
							})
						};

						<div>
							<h2>Planets</h2>
							{
								listPlanets.map(Planet => {
									return (
										<CardPlanets
											key={Planet.id}
											name={Planet.name}
											uid={Planet.uid} />)
								})
							};
						</div>
					</div>
				</div>
			</div>
		</>
	);
}; 