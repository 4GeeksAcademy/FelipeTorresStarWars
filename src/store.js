export const initialStore=()=>{
  return{
    people:[],
    planets:[],
    vehicles:[]
  };
};

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_people':

    return {
      ...store, 
      people:
    }

      
    default:
      throw Error('Unknown action.');
  } ;
};

