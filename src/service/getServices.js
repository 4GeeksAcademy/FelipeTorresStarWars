const getServices = {

    getPeople: async () => {
        try {
            const people = localStorage.getItem('getPeople');
            if (people) {
                return JSON.parse(people)
            }
            const request = await fetch("https://www.swapi.tech/api/people/");
            const response = await request.json();
            localStorage.setItem('getPeople', JSON.stringify(response.results))
            return response.results;
        } catch (error) {
            console.log(error);
        }
    },
    getPropiertiesPeople: async (id) => {
        try {
            const detailPeople = JSON.parse(localStorage.getItem('detailPeople') || '[]');
            const character = detailPeople.find(item => item.uid == id)
            if (character) {
                return character.properties
            }
            const resquest = await fetch(`https://www.swapi.tech/api/people/${id}`);
            const response = await resquest.json();
            detailPeople.push(response.result)
            localStorage.setItem('detailPeople', JSON.stringify(detailPeople))
            return response.result.properties;
        } catch (error) {
            console.log(error);
        }
    },

    getPlanets: async () => {
        try {
            const planets = localStorage.getItem(`getPlanets`);
            if (planets) {
                return JSON.parse(planets)
            }
            const request = await fetch("https://www.swapi.tech/api/planets/");
            const response = await request.json();
            localStorage.setItem('getPlanets', JSON.stringify(response.results))
            return response.results
        } catch (error) {
            console.log(error);
        }
    },

    getPropiertiesPlanets: async (id) => {
        try {
            const detailPlanets = JSON.parse(localStorage.getItem(`detailPlanets`) || `[]`);
            const planet = detailPlanets.find(item => item.uid == id)
            if (planet) {
                return planet.properties;
            }
            const request = await fetch(`https://www.swapi.tech/api/planets/${id}`);
            const response = await request.json();
            detailPlanets.push(response.result)
            localStorage.setItem(`detailPlanets`, JSON.stringify(detailPlanets))
            return response.result.properties;
        } catch (error) {
            console.log(error);

        }

    },
    getVehicles: async () => {
        try {
            const vehicles = localStorage.getItem(`getVehicles`);
            if (vehicles) {
                return JSON.parse(vehicles)
            }
            const request = await fetch("https://www.swapi.tech/api/vehicles/");
            const response = await request.json();
            localStorage.setItem('getVehicles', JSON.stringify(response.results))
            return response.results;
        } catch (error) {
            console.log(error);
        }
    },
    getPropiertiesVehicles: async (id) => {
        try {
            const detailtVehicles = JSON.parse(localStorage.getItem(`detailtVehicles`) || `[]`);
            const vehicle = detailtVehicles.find(item => item.iud == id)
            if (vehicle) {
                return vehicle.properties;
            }
            const resquest = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
            const response = await resquest.json();
            detailtVehicles.push(response.result)
            localStorage.setItem(`detailVehicles`, JSON.stringify(detailtVehicles))
            return response.result.properties;
        } catch (error) {
            console.log(error);
        }
    }
};

export default getServices;


