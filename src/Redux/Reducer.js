const initialState = {
  students: [],
  auth: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return { students: action.payload };
    case "USER_AUTH":
      return { auth: action.payload };
    default:
      return state;
  }
};

export default Reducer;
