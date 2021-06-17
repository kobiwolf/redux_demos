const create = (name) => {
  return {
    type: 'NEW_USER',
    payload: name,
  };
};
export default { create };
