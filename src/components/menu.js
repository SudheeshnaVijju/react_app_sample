// import {Link} from 'react-router-dom';
// function Menu(){
//     return (

//         <div>
//         <Link to="/">CompA</Link>
//         <Link to="/compb">CompB</Link>
//         <Link to="/compc">ClassCompC</Link>
//         <Link to="/imgcompo">image</Link>
//         </div>
//     )
// }
// export default Menu;
import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <Link to="/">CompA</Link>
      <Link to="/compb">CompB</Link>
      <Link to="/compc">ClassCompC</Link>
      <Link to="/imgcompo">image</Link>
    </div>
  );
}

export default Menu;
