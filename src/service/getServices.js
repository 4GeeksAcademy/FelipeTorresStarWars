const getServices = {

    getPeople: async () => {
        try {
            const request = await fetch("https://www.swapi.tech/api/people/");
            const response = await request.json();
            return response.results;
        } catch (error) {
            console.log(error);
        }
    },

    getPropierties: async (id)=> {
        try {
            const resquest = await  fetch (`https://www.swapi.tech/api/people/${id}`);
            const response = await resquest.json();
            return response.result.propierties;

        } catch (error) {
            console.log(error);
        }
    },

    

    getPlanets: async () => {
        try {
            const request = await fetch("https://www.swapi.tech/api/planets/");
            const response = await request.json();
            return response.results;
        } catch (error) {
            console.log(error);
        }
    },

    getVehicles: async () => {
        try {
            const request = await fetch("https://www.swapi.tech/api/vehicles/");
            const response = await request.json();
            return response.results;
        } catch (error) {
            console.log(error);
        }
    }


};

export default getServices;