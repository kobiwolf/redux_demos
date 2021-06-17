const blogReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'NEW_USER':
      return (state.users = state.users ? state.users.push(payload) : [payload]);
    default:
      return state;
  }
};
const obj = { blogReducer };
export default obj;
