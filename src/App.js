import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import DevSignupComponent from "./components/DevSignupComponent";
import DevLoginComponent from "./components/DevLoginComponent";
import EmpSignupComponent from "./components/EmpSignupComponent";
import EmpLoginComponent from "./components/EmpLoginComponent";
import PostJobComponent from "./components/PostJobComponent";
import GetJobsComponent from "./components/GetJobsComponent";
import JobProfile from "./components/JobProfile";
import ApplyComponent from "./components/ApplyComponent";
import ApplySuccess from "./components/ApplySuccess";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/register" component={DevSignupComponent} />
          <Route exact path="/login" component={DevLoginComponent} /> 
          <Route exact path="/employer/register" component={EmpSignupComponent} /> 
          <Route exact path="/employer/login" component={EmpLoginComponent} /> 
          <Route exact path="/users/employer/s/jobs" component={PostJobComponent} /> 
          <Route exact path="/users/jobs" component={GetJobsComponent} /> 
          <Route exact path="/jobprofile/:id" component={JobProfile} /> 
          <Route exact path="/apply/:id" component={ApplyComponent} />
          <Route exact path="/success" component={ApplySuccess} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
