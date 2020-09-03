export default (name, payload) => {
  switch (name) {
    case 'fetchContacts':
      return {
        type: 'FETCH_CONTACTS',
        payload,
      };
    case 'saveNewContact':
      return {
        type: 'SAVE_CONTACT',
        payload,
      };
    case 'deleteContacts':
      return {
        type: 'DELETE_CONTACTS',
        payload,
      };
    case 'editContact':
      return {
        type: 'EDIT_CONTACT',
        payload,
      };
    case 'addFavorities':
      return {
        type: 'ADD_FAVORITIES',
        payload,
      };
  }
};
