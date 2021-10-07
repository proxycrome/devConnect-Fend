import React, {useState, useMemo} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import style from "../styles/signup.module.css";
import Navbar from './Navbar';
import Footer from './Footer';
import { jobApplyAsync } from '../redux/action/jobApplyAction';

const ApplyComponent = () => { 
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();

    const storageData = localStorage.getItem("userList");
    const userData = JSON.parse(storageData);
    const [userState] = userData.data.filter((user) => user._id === id);
    

    const [appData, setAppData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        resume: ""
    });

    const handleFormChanges = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setAppData({ ...appData, [e.target.name]: e.target.value });
    };

    const {applyJob} = useSelector(state => state);


    useMemo(() => {
        if(applyJob.isAuthenticated) {
            history.push('/success');
        } 
    }, [applyJob, history])
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
    
        dispatch(jobApplyAsync(appData));
    
    };

    return (
        <>
            <Navbar />
            <section className={style.section}>
                <div
                className={`${style.form} ${style.lform}`}
                >
                    <form onSubmit={handleSubmit}>
                        {/* <span>{appError}</span> */}
                        <h1 className={style.formTitle}>{userState.job_title}</h1> 
                        <p>{userState.companyName}</p>
                        <div>
                            <input
                                className={style.formInput}
                                type="text" 
                                name="name"
                                placeholder="Name *"
                                value={appData.name}
                                onChange={handleFormChanges}
                            />
                        </div>
                        {/* {errors.companyName && <span>{errors.companyName}</span>} */}
                        <div>
                            <input
                                className={style.formInput}
                                type="email"
                                name="email"
                                placeholder="Email *"
                                value={appData.email}
                                onChange={handleFormChanges}
                            />
                        </div>
                        {/* {errors.job_type && <span>{errors.job_type}</span>} */}
                        <div>
                            <input
                                className={style.formInput}
                                type="text"
                                name="phone"
                                placeholder="Phone Number *"
                                value={appData.phone}
                                onChange={handleFormChanges}
                            />
                        </div>
                        {/* {errors.job_desc && <span>{errors.job_desc}</span>} */}
                        <div>
                            <input
                                className={style.formInput}
                                type="text"
                                name="city"
                                placeholder="State of Residence"
                                value={appData.city}
                                onChange={handleFormChanges}
                            />
                        </div>
                        <div>
                            <p style={{fontSize: "16px"}}>Resume *</p>
                            <input
                                type="file"
                                placeholder="resume"
                                name="resume"
                                value={appData.resume}
                                onChange={handleFormChanges}
                            />
                        </div>
                        <button type="submit" className={style.formButton}>
                        Apply Now
                        </button>
                    </form>
                </div>
            </section>
            <Footer />   
        </>
    )
}

export default ApplyComponent
