import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'; //combineReducers ทำให้ Reducers หลาย ๆ ตัว ใส่ไปใน store

// ------------------------------- multiple reducer----------------------
const initialState = {
  num: 25000,
  arr: []
}


const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":

      state = {
        ...state,
        salary: state.num += action.payload,
        array: [...state.arr, action.payload],
      }
      break;

    case "SUB":
      state = {
        ...state,
        salary: state.num -= action.payload,
        array: [...state.arr, action.payload],
      }
      break;
    default:
  }
  return state
}

const userReducer = (state = { name: "john",age: 15 , }, action) => {
  switch (action.type) {
    case "setName":
      state = {
        ...state,
        re_name: action.payload,
      }
      break;
    case "setAge":
      state = {
        ...state,
        re_age:action.payload,
      }
      console.log(state);
      break;
      default:
  }
  return state
}

// มี Reducer เดียว ใช้ store = createStore (Reducer)
// มีหลาย Reducer ใชฟังก์ชั่น store = createStore = (combineReducers ( {ReducerA ,ReducerB} ) ) ;
const store = createStore(combineReducers({ emp: employeeReducer, user: userReducer }));

store.subscribe(() => {
  console.log("Updata Store:", store.getState());
})


ReactDOM.render(
  <React.StrictMode>
     {/* Provider = นำ state มาใช้กับ component */}
    <Provider store = {store}>
      <App />
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



