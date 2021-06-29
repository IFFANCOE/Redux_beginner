import React from "react";
import User from "./User";
import { connect } from "react-redux";

//------------------------------- One State----------------------

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD":
//       state += action.payload;
//       break;

//     case "SUB":
//       state -= action.payload;
//       break;
//       default:
//   }
//   return state
// }
// //createStore(reducer, state)
// const store = createStore(reducer, 25000);
// // แสดงผล update ค่า state ดูว่า state ที่เราต้องการเป็นค่าอะไร
// store.subscribe(() =>{
//   console.log("Updata Store:",store.getState());
// })
// //เปลี่ยนค่าใน state
// store.dispatch({
//   type:"ADD",
//   payload:500
// })

// store.dispatch({
//   type:"SUB",
//   payload : 5000
// })
//------------------------------- multiple State----------------------
// import { createStore, combineReducers } from 'redux'; //combineReducers ทำให้ Reducers หลาย ๆ ตัว ใส่ไปใน store

// state 2 ตัว
// const initialState = {
//   num: 25000,
//   arr: []
// }

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD":
//       //--------------แบบไม่ย่อ------------------
//       // state = {
//       //   //สนใจ state ที่เป็น num
//       //   salary: state.num += action.payload,
//       //   //สนใจ state ที่เป็น array
//       //   value: state.arr 
//       // }
//       //----------------------------------------
//       //ยุปให้เรียกใช้ทีเดียว แบบย่อ
//       state = {
//           //แสดง obj ทุกตัว
//         ...state ,
//         // สร้างแอคทีบิว เก็บค่า num ที่เปลี่ยนแปลง
//         salary:state.num += action.payload,
//         // เก็บ salary ใน array
//         // ...state.arr ต่ำแหน่งแรกของ array ซึ่งเก็บ action.payload ไว้
//         array :[...state.arr,action.payload],
//       }
//       break;

//     case "SUB":
//       state = {
//         ...state,
//       salary:state.num -= action.payload,
//       array :[...state.arr,action.payload],
//     }
//       break;
//     default:
//   }
//   return state
// }

// const store = createStore(reducer);

// store.subscribe(() => {
//   console.log("Updata Store:", store.getState());
// })

// store.dispatch({
//   type: "ADD",
//   payload: 5000
// })

// store.dispatch({
//   type: "SUB",
//   payload: 10000
// })

//------------------------App.js------------------------------------

const App =(props) => {
  return (
    <div>
    <User  username = {props.user.name} />
    </div>

  );
}
  //นำ state ออกมาเป็น props
const mapStatetoProps = (state) => {
  return {
    emp: state.emp,
    user: state.user,
  }
  
}

export default connect(mapStatetoProps)(App);


