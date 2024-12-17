import React from "react";
const Counter = () => {
    let count = 0;
    const increment = () => {
        count++;
    };
    increment();
    increment();


    console.log(count);

   return(
    <div>
        <h2>ClassName="text-3xl">Count:{count}</h2>
        <button
        onClick={increment}
        className="border-2 "
export default Counter;.