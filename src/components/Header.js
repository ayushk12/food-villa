import React from "react";
import Logo from "../assets/image.png"

export const Title=()=>{
    <a href="/">
        <img className="logo"
        alt="logo"
        src={Logo}

        />
    </a>
}
const Header=()=>{
    return (
       <>
       <div className='header'>
            <Title />
            <div className='nav-items'>

        <ul>
            <li>
                Home

            </li>
            <li>
                About
                
            </li>
            <li>
                Contact
                
            </li>
            <li>
                Cart
                
            </li>
        </ul>
            </div>
       </div>

       </> 
    )
}

export default Header;