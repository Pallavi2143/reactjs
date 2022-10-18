import { useState } from "react";

const F_counter=()=>{
    
    const [name,setName] = useState("shailesh")
    const [number,setNumber] = useState(0)
    
    const changename = ()=>{
        // alert(name)
        setName("sagar");
    }

    function increment(){
        setNumber(number + 1)
    }
    const decrement =()=>{
        setNumber(number - 1)
    }


    return(
        <>
             <center>
              <h1>{name}</h1>
              <h1>{number}</h1>
                <button className="btn btn-primary m-3 p-3" onClick={changename}>changename</button>
                <button className="btn btn-primary m-3 p-3" onClick={increment}>+</button>
                <button className="btn btn-primary m-3 p-3" onClick={decrement}>-</button>
            </center>
        </>
    )
}
export default F_counter;