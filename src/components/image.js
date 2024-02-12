import img7 from './img7.jpg'
import img9 from './img9.jpg'
const Image=()=>{
    return (
        <>
        <h1>this is img component</h1>
        <img alt="" src={img7} style={{height:'200px' , width:'300px'}}/><br />
        <img alt="" src={img9} style={{height:'200px' , width:'300px'}}/><br />            
        <img alt="" src="img5.jpg" style={{height:'200px' , width:'300px'}}/>
        </>
    )
}
export default Image