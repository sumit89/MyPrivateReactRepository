console.clear();

// people dropping off a form (Action Creators)
const createPolicy = (name, amount) => {
  return { // Action (a form in our analogy)
    type: 'CREATE_POLICY',
    // payload: {
    //   name: name,
    //   amount: amount
    // }
    // ES 2015
    payload: {name, amount}
  };
};

// people dropping off a form (Action Creators)
const deletePolicy = (name) => {
  return { // Action (a form in our analogy)
    type: 'DELETE_POLICY',
    // payload: {
    //   name: name
    // }
    // ES 2015
    payload: {name}
  };
};

// people dropping off a form (Action Creators)
const createClaim = (name, amountOfMoneyToCollect) => {
  return { // Action (a form in our analogy)
    type: 'CREATE_CLAIM',
    // payload: {
    //   name: name,
    //   amountOfMoneyToCollect: amountOfMoneyToCollect
    // }
    // ES 2015
    payload: {name, amountOfMoneyToCollect}
  };
};

// const numbers = [1,2,3];
// [...numbers,4]


// reducer for claims history
const claimsHistory = (oldListOfClaims = [], action) => {
  if(action.type === 'CREATE_CLAIM') {
    // we care about this action (Form)
    // ES2015 syntax
    // ... add all records from oldListOfClaims into a brand new array
    // and add the new record action.payload into the array
    return [...oldListOfClaims, action.payload];
    // old syntax
    // oldListOf.push(action.payload);
    // but brand new array is not created and existing is modified
    // a reducers must always return a new object in redux
  }
  // we don't care this action
  return oldListOfClaims;
}

// reducer for accounting
const accounting = (bagOfMoney = 100, action) => {
  if(action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if(action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }
  // we don't care this action
  return bagOfMoney;
}

// reducer for policies
const policies = (listOfPolicies = [], action) => {
  if(action.type === 'CREATE_POLICY') {
    return[...listOfPolicies, action.payload.name];
  } else if(action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  return listOfPolicies;
}

//console.log(Redux);
const {createStore, combineReducers} = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);
//console.log(store);

//const action = createPolicy('sumit', 20);
//console.log(action);
//store.dispatch(action);

console.clear();
store.dispatch(createPolicy('sumit', 20));
store.dispatch(createPolicy('suman', 20));
store.dispatch(createPolicy('kumar', 20));
console.log(store.getState());
store.dispatch(createClaim('sumit', 80));
store.dispatch(createClaim('suman', 50));
console.log(store.getState());
store.dispatch(deletePolicy('kumar'));
console.log(store.getState());





