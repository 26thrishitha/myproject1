import React from "react";
function Func(){
    const arr=["apple","banana","cherry"];

    return (
        <ul>{
            arr.map((fruits,index)=> (
                <li key={index}> {fruits}
                </li>
            ))}

        </ul>
    )
}

export default Func;