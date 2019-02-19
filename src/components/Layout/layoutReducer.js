import { LOYOUT_SUCCESS } from './../../helper/constants';

const loyout = (state = {}, action) => {
  switch (action.type) {
  case LOYOUT_SUCCESS:
    return {
      ...state,
      message: action.message
    };
  default:
    return state;
  }
};

export default loyout;
