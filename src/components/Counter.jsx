import React,{useState} from "react"

export const Counter=()=>{
    const [value,setValue]=useState(0);
    const numberIncrease=()=>{
      setValue(value+1) 
    }
    const numberDecrease=()=>{
        setValue(value-1) 
    }
    if(value === 0){
        alert("Inapropiate");
    }
    return(
        <div>
            
           <center>
            <h1>Counter App</h1>
            <table>
                <tr>
                    <td><button onClick={numberDecrease}>-</button> </td>
                    <td>{value}</td>
                    <td><button onClick={numberIncrease}>+</button> </td>
                </tr>
            </table>
            </center>
        </div>
    )
}