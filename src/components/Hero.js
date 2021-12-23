import Background from "../images/homepage.jpg";
import homeStyles from "../styles/homepage.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className={homeStyles.banner}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Background})`,
      }}
    >
      <div className={homeStyles.heroContent}>
        <h1>Welcome to DevConnect</h1>
        <p>A hub for your dream job as a developer.</p>
        <Link to="/register">Sign up as a Developer</Link>
      </div>
    </div>
  );
};

export default Hero;
