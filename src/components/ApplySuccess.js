import React from 'react'
import style from '../styles/login.module.css'
import NavBar from './Navbar'

const ApplySuccess = () => {
    return (
        <>
            <NavBar/>
            <div className={style.applySuccess}>
                <div>
                    <h1>Job Application Successful</h1>
                </div>
            </div>
        </>
    )
}

export default ApplySuccess
