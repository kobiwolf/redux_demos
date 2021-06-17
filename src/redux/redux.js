const { createStore, combineReducers } = require('redux');
const createUser = (name) => {
  return {
    type: 'NEW_USER',
    payload: { name },
  };
};

const deleteUser = (name) => {
  return {
    type: 'DELETE',
    payload: { name },
  };
};
const re1 = (names = [], action) => {
  const { type } = action;
  if (type === 'NEW_USER') return [...names, action.payload.name];
  return names;
};
const re2 = (names = [], { type, payload }) => {
  if (type === 'DELETE') return names.filter((namei) => namei !== payload.name);
  return names;
};
const store = createStore(combineReducers({ a: re1, b: re2 }));
export default store;
export { createUser, deleteUser };
