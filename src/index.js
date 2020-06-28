import {createStore} from "redux";

const ADD = "add";
const MINUS = "minus";

const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const num = document.querySelector("#num");

num.innerText = 0;

const reducer = (count = 0, action) => {
    switch(action.type) {
        case ADD:
        return count+1;
            break;
        case MINUS:
        return count-1;
            break;
        default:
            return 0;
            break;
    }
};

const store = createStore(reducer);
console.log(store.getState());

const calAdd = () => {
    store.dispatch({type: ADD});
}

const calMinus = () => {
    store.dispatch({type: MINUS});
}

const updateCal = () => {
    num.innerText = store.getState();
}

add.addEventListener("click", calAdd);
minus.addEventListener("click", calMinus);
store.subscribe(updateCal);