import React from "react";
import style from "../styles/loading.module.css";

function Loading() {
  console.log("loading");
  return (
    <div className={style.loading}>
      <h1>Loading...</h1>
    </div>
  );
}

export default Loading;