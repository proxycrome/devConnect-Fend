import React from "react";
import CardImage from "../images/avi.jpg";
import "../index.css";

function UserCard({ job_title, job_type, onClick, id, companyName }) {
  return (
    <>
      <div className="card" onClick={() => onClick(id)}>
        <img src={CardImage} className="card-image" alt="user pics" />
        <div className="card-text">
          <h2>{job_title}</h2>
          <h3>{job_type}</h3>
          <h6>{companyName}</h6>
        </div>
      </div>
    </>
  );
}

export default UserCard;