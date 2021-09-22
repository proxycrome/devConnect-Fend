import React, {useState} from 'react';
import Navbar from './Navbar';
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import style from "../styles/login.module.css";
import { devLoginAsync } from '../redux/action/devLoginAction';

const DevLoginComponent = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        e.preventDefault();
        e.stopPropagation();
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        dispatch(devLoginAsync(loginData));
        
        setTimeout(() => {
        history.push("/users/jobs");
        }, 1000);
    }

    return (
        <>
            <Navbar />
            <section className={style.section}>
                <div className={style.form}>
                    <form onSubmit={handleSubmit}>
                        <h1 className={style.formTitle}>Log In as a Developer</h1>

                        <div>
                            <input
                                className={style.formInput}
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={loginData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                className={style.formInput}
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={loginData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className={style.formButton}>
                        Submit
                        </button>
                        <h4 className={style.formFooter}>
                        Don't have an account? <Link to="/register">Sign Up</Link>
                        </h4>
                    </form>
                </div>
            </section>
        </>
    )
}

export default DevLoginComponent;