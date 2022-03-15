
const initialState = {
    

   
    listJoueurs: []
   

};

const appReducer = (state = initialState, action) => {

    switch (action.type) {

      

        case 'GET_LIST_JOUEURS':
            return {
                ...state,
                listJoueurs : action.payload,
            }
        
        default:
            return state;
    }
};

export default appReducer;

