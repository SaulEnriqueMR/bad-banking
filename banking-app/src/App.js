import './App.css';
import {HashRouter, Routes, Route} from "react-router-dom";
import NavBar from "./NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from "./Context";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Balance from "./pages/Balance";
import AllData from "./pages/AllData";

function App() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/Login/" component={Login} />
            <Route path="/Deposit/" component={Deposit} />
            <Route path="/Withdraw/" component={Withdraw} />
            <Route path="/Balance/" component={Balance} />
            <Route path="/AllData/" component={AllData} />
          </Routes>
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
