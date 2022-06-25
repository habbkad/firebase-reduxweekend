export const addStudent = (student) => {
  return {
    type: "ADD_STUDENT",
    payload: student,
  };
};

export const userAuth = (auth) => {
  return {
    type: "USER_AUTH",
    payload: auth,
  };
};
