import {types} from '../types';

const initStateUser = {
  name: 'Camilo',
  lastName: 'Franco',
  phoneNumber: 123123123,
};

export const userReducer = (state = initStateUser, action: any) => {
  switch (action.type) {
    case types.user.loadInformation:
      return action.payload;
    default:
      return state;
  }
};
