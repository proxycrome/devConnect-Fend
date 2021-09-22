import React from "react";
import CardImage from "../images/avi.jpg";
import "../index.css";

function UserCard({ job_title, job_type, onClick, id }) {
  return (
    <>
      <div className="card" onClick={() => onClick(id)}>
        <img src={CardImage} className="card-image" />
        <div className="card-text">
          <h2>{job_title}</h2>
          <h3>{job_type}</h3>
        </div>
      </div>
    </>
  );
}

export default UserCard;