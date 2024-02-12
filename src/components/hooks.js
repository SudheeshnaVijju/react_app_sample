import { useState } from "react";
function Hooks(){
    const [cnt,setCnt] = useState(0);
    const inc=()=>{
        setCnt(cnt+1);
    }
    function alt(e){
        let b=document.getElementsByTagName('button')[1];
        b.style.backgroundColor='red';
        // document.body.style.backgroundColor='red'
    }
    const alt2=()=>{
        let b=document.getElementsByTagName('button')[1];
        b.style.backgroundColor='yellow';
        }
    // const inc=()=>{
    //     (cnt++);
    //     <p>{cnt}</p>
    // }
    return(
        <body>
        <h1>hooks</h1>
        <p>{cnt}</p>
        <button onClick={inc}>increment by one
        </button>
        <button onMouseOver={alt} onMouseOut={alt2}>show alert</button>
        </body>
    )
}
export default Hooks