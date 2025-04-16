export const initialStore = () => {
  return {
    people: [],
    planets: [],
    vehicles: [],
    favorities: [],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "add_people":
      return {
        ...store,
        people: [...action.people],
      };

    case "add_planets":
      return {
        ...store,
        planets: [...action.planets],
      };

    case "add_vehicles":
      return {
        ...store,
        vehicles: [...action.vehicles],
      };

    case "add_favorites":
      return {
        ...store,
        favorities: [...store.favorities, action.name],
      };

    case "delete_favorities":
      return {
        ...store,
        favorities: store.favorities.filter(
          (t) => t !== action.name
        ),
      };

    default:
      throw Error("Unknown action.");
  }
}


