import { createStore } from 'redux'

//Action generators, functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        //incrementBy: incrementBy is the same as below
        incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count = 0} = {}) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

//Reducers
// 1. Reducers are pure functions the output is only determined by the input
// 2. Never change state or action, do returns

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            //pass dynamic info to use either the passed incrementBy or default to 1
            //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: state.count = 0
            };
        default:
            return state;
    }
};

//action refers to the dispatch being done
const store = createStore(countReducer);

//lets you see every time the state changes, call unsub to stop
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

/*
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});
*/
store.dispatch(incrementCount({ incrementBy : 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({count: 101}))