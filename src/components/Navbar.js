import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "../index.css";
import DevDropdown from './DevDropdown';
import EmpDropdown from './EmpDropdown';
import { getToken } from "../utility/common"
import { useHistory } from 'react-router-dom';


const NavBar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [empDropdown, setEmpDropdown] = useState(false);
    const token = getToken();
  
    const history = useHistory();
  
    const logOut = () => {
      localStorage.clear();
      history.push("/");
    };

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        }else{
            setDropdown(true); 
       }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        }else{
            setDropdown(false);
        }
    }

    const onMouseEnterEmp = () => {
        if(window.innerWidth < 960) {
            setEmpDropdown(false);
        }else{
            setEmpDropdown(true); 
       }
    }

    const onMouseLeaveEmp = () => {
        if(window.innerWidth < 960) {
            setEmpDropdown(false);
        }else{
            setEmpDropdown(false); 
       }
    }
  
    return (
      <div className="navbar">
        <div className="logo">DevConnect</div>
        <div className="navLinks">
          <div className="navLinkItems">
              <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">About</Link>
                  </li>
                  {token ? (
                    <>
                      <Link to="/" onClick={logOut}>
                        Log out
                      </Link>
                    </>
                  ) : (
                    <>
                      <li onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                      >
                        <Link to="#">For Developers <i className="fas fa-caret-down"/></Link>
                        {dropdown && <DevDropdown />}
                      </li>
                      <li onMouseEnter={onMouseEnterEmp}
                        onMouseLeave={onMouseLeaveEmp}
                      >
                        <Link to="#">For Employers <i className="fas fa-caret-down"/></Link>
                        {empDropdown && <EmpDropdown />}
                      </li>
                    </>
                  )}
                  
                  <li>
                    <Link to="/users/jobs">View Jobs</Link>
                  </li>
              </ul>    
          </div>
        </div>
      </div>
    );
  };
  
  export default NavBar;