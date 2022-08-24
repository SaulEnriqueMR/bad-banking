import { Outlet, Link } from "react-router-dom";
// import {useContext} from "react";
import UserContext from "./state/Context";
import {useContext} from "react";


function NavBar() {
	const ctx = useContext(UserContext);
	
	return(
		<>
			<UserContext.Consumer>
				{({account}) => (
					<>
						{JSON.stringify(ctx)} <br/>
						{JSON.stringify(account)}
						<nav className="navbar navbar-expand-lg navbar-light bg-light">
							<a className="navbar-brand" href="/#/">BadBank</a>
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse" id="navbarNav">
								<ul className="navbar-nav">
									{!(account === null || account === {}) ? (
											<>
												<li className="nav-item">
													<Link className="nav-link" to="/CreateAccount/">Create Account</Link>
												</li>
												<li className="nav-item">
													<Link className="nav-link" to="/Login/">Login</Link>
												</li>
											</>
									):(
											<>
												<li className="nav-item">
													<Link className="nav-link" to="/Deposit/">Deposit</Link>
												</li>
												<li className="nav-item">
													<Link className="nav-link" to="/Withdraw/">Withdraw</Link>
												</li>
												<li className="nav-item">
													<Link className="nav-link" to="/Balance/">Balance</Link>
												</li>
											</>
									)}
									<li className="nav-item">
										<Link className="nav-link" to="/AllData/">AllData</Link>
									</li>
								</ul>
							</div>
						</nav>
						<Outlet />
					</>
				)}
			</UserContext.Consumer>
		</>
	);
}

export default NavBar;