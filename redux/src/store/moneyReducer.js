const ADD_MONEY = "ADD_MONEY";
const GET_MONEY = "GET_MONEY";

const defaultState = {
  money: 0
}

export const moneyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MONEY:
      return {...state, money: state.money + action.payload}
    case GET_MONEY:
      return {...state, money: state.money - action.payload}
    default:
      return state;
  }
}

export const addMoneyAction = (payload) => ({ type: ADD_MONEY, payload });
export const getMoneyAction = (payload) => ({ type: GET_MONEY, payload });
