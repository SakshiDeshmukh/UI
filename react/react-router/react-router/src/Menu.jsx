import React from "react";
import { Link } from "react-router-dom";
export class Menu extends React.Component{
    render(){
        return(
            <div>
               <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/aboutus' >About Us</Link></li>
                    <li><Link to='/user/12' >User</Link></li>
               </ul> 
            </div>
        )
    }
}
/*import React,{Component} from 'react'

import { Link } from 'react-router-dom'

class Menu extends Component{
render(){
return(
    <div>
        <ul>
            <li>
            <Link to='/home'>Home</Link>
            </li>
            <li>
            <Link to='aboutus'>AboutUs</Link>
            </li>
        </ul>
       
    </div>
)
}
}
export default Menu;*/