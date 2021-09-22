import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "../styles/signup.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { empSignupAsync } from "../redux/action/empSignupAction";
import { useHistory } from "react-router-dom";

const EmpSignupComponent = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [signupData, setSignupData] = useState({
        companyName: "",
        email: "",
        linkedIn: "",
        website: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const handleFormChanges = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setSignupData({ ...signupData, [e.target.name]: e.target.value });
    };

    const validateInfo = (values) => {
        let errors = {};
        if (!values.companyName) {
            errors.companyName = "Company Name is required";
        }
        if (!values.email) {
            errors.email = "Email required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
        }
        if (!values.linkedIn) {
            errors.linkedIn = "LinkedIn profile link is required";
        }
        if (!values.website) {
            errors.website = "Website is required";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 6) {
            errors.password = "Password needs to be 6 characters or more";
        }

        if (!values.confirmPassword) {
            errors.confirmPassword = "Password is required";
        } else if (values.password !== values.confirmPassword) {
            errors.password = "Passwords do not match";
        }
        return errors;
    };

    const validateCP = () => {
        if (signupData.password === signupData.confirmPassword) {
          return {
            isMatch: true,
            cPassword: "match",
          };
        }
        return {
          isMatch: false,
          cPassword: "Password does not match",
        };
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
    
        const passwordMatch = validateCP();
        if (!passwordMatch.isMatch) {
          return setErrors(passwordMatch)
        }
        // dispatch(signupAsync(signupData));
    
        setTimeout(() => {
          history.push("/users/employer/s/jobs");
        }, 2000);
        
    
        const errors = validateInfo(signupData);
        if (Object.entries(errors).length === 0) {
          dispatch(empSignupAsync(signupData));
        }
        return setErrors(errors);
    };

    return (
        <>
        <Navbar />
        <section className={style.section}>
            <div
            className={`${style.form} ${
                Object.entries(errors).length ? style.lform : ""
            }`}
            >
                <form onSubmit={handleSubmit} error={errors}>
                    <h1 className={style.formTitle}>Employer's Sign Up </h1>
                    <div>
                        <input
                            className={style.formInput}
                            type="text"
                            name="companyName"
                            placeholder="Company Name"
                            value={signupData.companyName}
                            onChange={handleFormChanges}
                        />
                    </div>
                    {errors.companyName && <span>{errors.companyName}</span>}
                    <div>
                        <input
                            className={style.formInput}
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={signupData.email}
                            onChange={handleFormChanges}
                        />
                    </div>
                    {errors.email && <span>{errors.email}</span>}
                    <div>
                        <input
                            className={style.formInput}
                            type="text"
                            name="linkedIn"
                            placeholder="LinkedIn Profile"
                            value={signupData.linkedIn}
                            onChange={handleFormChanges}
                        />
                    </div>
                    {errors.linkedIn && <span>{errors.linkedIn}</span>}
                    <div>
                        <input
                            className={style.formInput}
                            type="text"
                            name="website"
                            placeholder="Website"
                            value={signupData.website}
                            onChange={handleFormChanges}
                        />
                    </div>
                    {errors.website && <span>{errors.website}</span>}
                    <div>
                        <input
                            className={style.formInput}
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={signupData.password}
                            onChange={handleFormChanges}
                        />
                    </div>
                    {errors.password && <span>{errors.password}</span>}
                    <div>
                        <input
                            className={style.formInput}
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            value={signupData.confirmPassword}
                            onChange={handleFormChanges}
                        />
                    </div>
                    {/* {errors.passwordMatch.cPassword && (
                    <span>{errors.passwordMatch.cPassword}</span>
                    )} */}
                    <button type="submit" className={style.formButton}>
                    Submit
                    </button>
                    <h4>
                    Already have an account? <Link to="/employer/login">Log In</Link>
                    </h4>
                </form>
            </div>
        </section>
        <Footer />
    </>
    )
}

export default EmpSignupComponent
