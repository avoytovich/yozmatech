const generalReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_CONTACTS':
      return {
        ...state,
        contacts: action.payload,
      };
    case 'SAVE_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case 'DELETE_CONTACTS':
      return {
        ...state,
        contacts: state.contacts.filter(
          each => action.payload[0].id != each.id
        ),
      };
    case 'EDIT_CONTACT':
      return {
        ...state,
        contacts: [
          ...state.contacts.filter(each => each.id != action.payload.id),
          Object.assign({}, { ...action.payload }),
        ],
      };
    case 'ADD_FAVORITIES':
      return {
        ...state,
        contacts: state.contacts.filter(
          each => action.payload[0].id != each.id
        ),
        favorities: [
          ...state.favorities,
          ...state.contacts.filter(each => action.payload[0].id == each.id),
        ],
      };
    default:
      return state;
  }
};

export default generalReducer;
