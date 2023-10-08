import {createStore} from "redux";

// here we have Default  State of App
//1st argument expect a function not required but optional
const store=createStore((state={count:1})=>{
   return state
})




export  default  store