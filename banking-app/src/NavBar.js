import {Link, Outlet} from "react-router-dom";
// import UserContext from "./state/Context";
// import {useContext} from "react";


function NavBar() {
	// const context = useContext(UserContext)
	
	return (
		<>
			<nav className="navbar navbar-light navbar-expand-lg navbar-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="/#/">BadBank</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="nav navbar-nav">
							<li className="nav-item">
								<Link className="nav-link" to="/CreateAccount/">Create Account</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Login/">Login</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Deposit/">Deposit</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Withdraw/">Withdraw</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Balance/">Balance</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/AllData/">AllData</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<Outlet />
		</>
	)
}

export default NavBar;