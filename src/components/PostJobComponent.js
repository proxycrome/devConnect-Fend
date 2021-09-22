import React, {useState} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useDispatch } from "react-redux";
import style from "../styles/signup.module.css";
import { postJobAsync } from '../redux/action/postJobAction';
import { useHistory } from 'react-router-dom';

const PostJobComponent = () => {
    const history = useHistory();
    const dispatch = useDispatch();


    const [jobData, setJobData] = useState({
        job_title: "",
        job_type: "",
        job_desc: "",
        closing_date: "",
        salary: "",
    });

   

    const handleFormChanges = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setJobData({ ...jobData, [e.target.name]: e.target.value });
    };

    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
    
        dispatch(postJobAsync(jobData));
    
        setTimeout(() => {
          history.push(`/users/jobs`);
        }, 2000);
        
    
    };

    return (
        <>
        <Navbar />
        <section className={style.section}>
            <div
            className={`${style.form} ${style.lform}`}
            >
                <form onSubmit={handleSubmit}>
                    <h1 className={style.formTitle}>Post a Job </h1>
                    <div>
                        <input
                            className={style.formInput}
                            type="text"
                            name="job_title"
                            placeholder="Job Title*"
                            value={jobData.job_title}
                            onChange={handleFormChanges}
                        />
                    </div>
                    {/* {errors.companyName && <span>{errors.companyName}</span>} */}
                    <div>
                        <input
                            className={style.formInput}
                            type="text"
                            name="job_type"
                            placeholder="Job Type*"
                            value={jobData.job_type}
                            onChange={handleFormChanges}
                        />
                    </div>
                    {/* {errors.job_type && <span>{errors.job_type}</span>} */}
                    <div>
                        <textarea 
                            className={style.formTextarea}
                            name="job_desc"  
                            cols="39" 
                            rows="10" 
                            placeholder="Please enter Job Description*"
                            value={jobData.job_desc}
                            onChange={handleFormChanges}>
                        </textarea>
                    </div>
                    {/* {errors.job_desc && <span>{errors.job_desc}</span>} */}
                    <div>
                        <input
                            className={style.formInput}
                            type="date"
                            name="closing_date"
                            placeholder="YYYY/MM/DD"
                            value={jobData.closing_date}
                            onChange={handleFormChanges}
                        />
                    </div>
                    <div>
                        <input
                            className={style.formInput}
                            type="text"
                            placeholder="Salary"
                            name="salary"
                            value={jobData.salary}
                            onChange={handleFormChanges}
                        />
                    </div>
                    <button type="submit" className={style.formButton}>
                    Submit
                    </button>
                </form>
            </div>
        </section>
        <Footer />
    </>
    )
}

export default PostJobComponent
