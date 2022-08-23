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
      <UserContext.Provider value={{users:[{name:'abel', email:'abel@mit.edu', password:'secret', balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CreateAccount/" element={<CreateAccount />} />
            <Route path="/Login/" element={<Login />} />
            <Route path="/Deposit/" element={<Deposit />} />
            <Route path="/Withdraw/" element={<Withdraw />} />
            <Route path="/Balance/" element={<Balance />} />
            <Route path="/AllData/" element={<AllData />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
