import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import "../index.css";
import userFetch from '../api/userFetch';
import UserCard from "./UserCard";
import Loading from './Loading';
import { getJobAsync } from '../redux/action/getJobsAction';
import Navbar from './Navbar';


const GetJobsComponent = () => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const dispatch = useDispatch();
  

    const history = useHistory();

    function handleClick(id) {
        history.push(`/jobprofile/${id}`);
    }

    

    useEffect(() => {
      dispatch(getJobAsync());
    }, [dispatch]);

    
    useEffect(() => {
      
      const fetchData = async () => {
        setLoading(true);
       const response = await userFetch.get("/jobs");
       setLoading(false);
       setJobs(response.data.data);
     }
     fetchData();
  
  
  }, [])


    return (
        <>
          <Navbar />

          {isLoading ? (
            <Loading />
          ) : (
            <div className="user-card">
              {jobs
                .map((data) => (
                  <UserCard
                    key={data._id}
                    id={data._id}
                    companyName={data.companyName}
                    job_title={data.job_title}
                    job_type={data.job_type}
                    onClick={handleClick}
                  />
                ))}
            </div>
          )}
        </>
    )
}

export default GetJobsComponent
