import {useState,useEffect} from "react";

//designing custom hooks//

function useCurrencyInfo(currency){
    const [data,setData]=useState({})
useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((e)=>e.json())
    .then((e)=>setData(e[currency]))//taking accese of the key in the object here by square brackets
},[currency])
return data
}

export default useCurrencyInfo;