const initialState = {
  students: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return { students: action.payload };
    default:
      return state;
  }
};

export default Reducer;
