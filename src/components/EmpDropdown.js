import React, { useState } from 'react'
import { EmpMenuItems } from './EmpMenuItems';
import { Link } from 'react-router-dom';
import '../styles/Dropdown.css'

const EmpDropdown = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)

    return (
        <>
            <ul onClick={handleClick}
            className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                {EmpMenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link 
                            className={item.cName} 
                            to={item.path} 
                            onClick={() => setClick(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    )
                })}    
            </ul>  
        </>
    )
}

export default EmpDropdown
