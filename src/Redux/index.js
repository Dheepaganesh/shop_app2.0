const redux = require("redux");

const { type } = require("@testing-library/user-event/dist/type");

const createStore = redux.createStore;

const BuyCake = "BUY_CAKE";
const BuyIce = "BUY_ICE";

function buyCake() {
  return {
    type: BuyCake,
    info: "First Redux Action",
  };
}

function buyIce() {
  return {
    type: BuyIce,
    info: "Second Redux Action",
  };
}

const initialState = {
  no_of_buys: 10,
  no_of_ice: 20,
};

console.log("Deepak");

const reduce = (state = initialState, action) => {
  switch (action.type) {
    case BuyCake:
      return {
        ...state,
        no_of_buys: state.no_of_buys + 1,
      };

    case BuyIce:
      return {
        ...state,
        no_of_ice: state.no_of_ice - 1,
      };

    default:
      return state;
  }
};

const store = createStore(reduce);

console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Update State", store.getState())
);

store?.dispatch(buyCake());
store?.dispatch(buyCake());
store?.dispatch(buyCake());
store?.dispatch(buyIce());
unsubscribe();

//Example

const SalaryIncrement = () => {
  return {
    type: "Increment",
    info: "Salary Increment",
  };
};

const Salarydecrement = () => {
  return {
    type: "Decrement",
    info: "Salary Decrement",
  };
};

const counter = (state = 10000, action) => {
  switch (action.type) {
    case "Increment":
      return state + 5000;
    case "Decrement":
      return state - 5000;
    default:
      return state;
  }
};

const st = createStore(counter);

st?.subscribe(() => console.log(st.getState()));

// st?.dispatch(SalaryIncrement());

st?.dispatch(Salarydecrement());
