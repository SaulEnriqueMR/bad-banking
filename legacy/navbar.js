function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="legacy/navbar#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="legacy/navbar#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="legacy/navbar#/login/">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="legacy/navbar#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="legacy/navbar#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="legacy/navbar#/balance/">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="legacy/navbar#/alldata/">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}