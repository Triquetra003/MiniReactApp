import React from "react";
import data from "./data";

function solution(){
    const soln=[]

    for(let i=0;i<data.length;i++){
        soln.push(
            <div style={{border:"1px solid black",borderRadius:"5px",margin:"5%",padding:"2%"}}>
            <h3>{i+1}. {data[i].question}</h3>
            <p>{data[i].explanation}</p>
            </div>
    )
    }
    return(
        <>
        {soln}
        </>
    )
}

export default solution;