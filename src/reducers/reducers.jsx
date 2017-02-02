//pure function that takes in state and works on crud
export var reservationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RESERVATION':

      break;
    default:
      return state;
  }
}
// an auth reducer to fill the data we need after auth has occured
export var authReducer = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {uid: action.uid};
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
}

//use this to set relevant propertyData
export var propertyReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
