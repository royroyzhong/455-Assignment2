export const add = (amount) => {
  return {
    type: "ADD",
    payload: amount,
  };
};
export const search = (amount) => {
  return {
    type: "SEARCH",
    payload: amount,
  };
};
export const remove = (amount) => {
  return {
    type: "REMOVE",
    payload: amount,
  };
};
export const clearAll = (amount) => {
  return {
    type: "CLEARALL",
    payload: amount,
  };
};
