// import logo from './logo.svg';
import './App.css';
import {HashRouter} from "react-router-dom";
// import {Navbar} from "react-bootstrap";

function App() {
  return (
    <HashRouter>
      {/*<NavBar/>*/}
      {/*<UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>*/}
        <div className="container" style={{padding: "20px"}}>
          {/*<Route path="/" exact component={Home} />*/}
          {/*<Route path="/CreateAccount/" component={CreateAccount} />*/}
          {/*<Route path="/login/" component={Login} />*/}
          {/*<Route path="/deposit/" component={Deposit} />*/}
          {/*<Route path="/withdraw/" component={Withdraw} />*/}
          {/*<Route path="/balance/" component={Balance} />*/}
          {/*<Route path="/alldata/" component={AllData} />*/}
        </div>
      {/*</UserContext.Provider>*/}
    </HashRouter>
  );
}

export default App;
