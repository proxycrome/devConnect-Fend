import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, removeUserSession } from "../utility/common";
import "../index.css";
import userFetch from '../api/userFetch';
import UserCard from "./UserCard";
import Loading from './Loading';
import { getJobAsync } from '../redux/action/getJobsAction';
import { setUserSession } from '../utility/common';
import Navbar from './Navbar';


const GetJobsComponent = () => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const dispatch = useDispatch();
  

    const token = getToken();
    const history = useHistory();

    function handleClick(id) {
        history.push(`/jobprofile/${id}`);
    }

    function handleLogOut() {
        removeUserSession();
    }

    useEffect(() => {
      dispatch(getJobAsync());
    }, [dispatch]);

    const getJobsInfo = useSelector((state) => state.getJob);
    // const { data } = getJobsInfo;
    // const { isLoading } = getJobsInfo;
    // console.log(data);
    

    // console.log("aaaaaa", jobData)
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
      {/* <div className="navbar">
        <div className="logo">DevConnect</div>
        <div className="navLinks">
          <div className="navLinkItems">
            <Link to="/">Home</Link>
            <Link to="#">About</Link>
            {token ? null : <Link to="/login">Log in</Link>}

            {token && (
              <Link to="/" onClick={handleLogOut}>
                Log out
              </Link>
            )}
            {token ? null : <Link to="/register">Sign up</Link>}
          </div>
        </div>
      </div> */}

      {isLoading ? (
        <Loading />
      ) : (
        <div className="user-card">
          {jobs
            .map((data) => (
              <UserCard
                key={data._id}
                id={data._id}
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
