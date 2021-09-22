import React from 'react';
import style from "../styles/profilepage.module.css";
import { MdKeyboardBackspace } from "react-icons/md";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { useParams, useHistory } from "react-router-dom";


const JobProfile = () => {
    const history = useHistory();

    const { id } = useParams();

    const storageData = localStorage.getItem("userList");
    const userData = JSON.parse(storageData);
    const [userState] = userData.data.filter((user) => user._id === id);


    return (
        <>
      <NavBar />

      <div className={style.section}>
        <MdKeyboardBackspace
          className={style.backIcon}
          onClick={() => history.goBack()}
        />
        <div className={style.container1}>
          <div className={style.mainDiv}>
            <div className={style.topDiv}>
              <div className={style.profileImage}></div>
            </div>
            <div className={style.bottomDiv}>
              <div className={style.infoUser}>
                <h2>{`Job Title: ${userState.job_title}`}</h2>
                <h2>{`Job Type: ${userState.job_type}`}</h2>
                <h3>{`Salary: N${userState.salary}`}</h3>
                <h3>{`Closing Date: ${userState.closing_date}`}</h3>
                <button>Apply Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className={style.container2}>
          <div className={style.about}>
            <h3>Job Description</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              maiores, repellendus nam possimus atque velit cumque.
              Exercitationem laboriosam impedit id, veritatis omnis, delectus
              laudantium numquam provident sint inventore dolorum dolores sed
              vitae in harum repellat! Velit voluptate molestias soluta cum
              totam illo provident, quaerat voluptatum debitis suscipit
              doloremque culpa reiciendis vitae accusamus repellat odit libero
              sapiente pariatur. Doloribus aliquam minus sint fugit, nostrum ad,
              quasi corporis, natus veniam architecto necessitatibus dolorum
              totam ab neque. Quidem illum repellendus ipsa tempora, ea
              assumenda a beatae quo voluptates ex doloribus. Reprehenderit
              similique omnis, hic obcaecati, laboriosam iste dolorum ab
              deserunt soluta aut impedit nihil? Libero quos tempora corrupti
              quibusdam saepe ullam necessitatibus non rem illo atque nobis
              officia, consequatur quam modi esse, maxime ex dolore provident
              aliquid sequi commodi optio quae tempore! Sed, aliquam, magnam
              labore dignissimos soluta debitis magni quis nobis distinctio
              laudantium consectetur provident. Veniam doloremque tempora soluta
              incidunt dolorum ipsam?
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
    )
}

export default JobProfile
