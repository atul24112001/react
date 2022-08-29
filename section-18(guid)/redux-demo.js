const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === "Add"){
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === "Sub"){
        return {
            counter: state.counter - 1
        }
    }

    return state;
}

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({type: "Add"})
store.dispatch({type: "Sub"})
