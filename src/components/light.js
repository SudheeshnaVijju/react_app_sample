import { useState } from "react";
function Light(){
    const [light,wire]=useState(false)
    return(
        <>
        <button onClick={()=>wire(true)}>on</button>
        <button onClick={()=>wire(false)}>off</button>
        <br />
        {
            light===true ? <img src="buldon.jpeg" alt="" style={{height:"200px",width:"130px"}}/> : <img src="buldoff.jpg" alt="" style={{height:"200px",width:"130px"}}/>
        }
        </>
    )
}
export default Light