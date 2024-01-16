// storeReducer(initialState, action)
export default function storeReducer(state = [], action) {
  
    console.log(action)

    switch (action.type) {
        case 'REMOVE_FAV':
          return state.filter(f => f.email !== action.payload.f)
        case 'ADD_FAV':
          return [ ...state, action.payload ]
    
        default:
            break;
    }

    return state;
}