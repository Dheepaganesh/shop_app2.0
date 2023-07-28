const { type } = require("@testing-library/user-event/dist/type");

const BuyCake = "BUY_CAKE";

function buyCake() {
  return {
    type: BuyCake,
    info: "First Redux Action",
  };
}

const initialState = {
  no_buys: 10,
};

const reduce = (state = initialState, action) => {
  switch (action.type) {
    case BuyCake:
      return {
        ...state,
        no_buys: state.no_buys + 1,
      };

    default:
      return state;
  }
};
