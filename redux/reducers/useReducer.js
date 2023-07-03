
const initalState = {
  data: {},
  userData: {},
  token:null,
  isAuthenticated: false
};
const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'NEW_USER': {
      return {...state, data: action.payload}
    }
    case 'LOGIN' : {
      return {...state, isAuthenticated: true, userData: action.payload}
    }
    default:
      return state
  }
}


export default userReducer