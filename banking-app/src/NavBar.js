import {Link, Outlet} from "react-router-dom";
import {OverlayTrigger, Tooltip} from "react-bootstrap";



function NavBar() {
	
	const changeSection = (e) => {
		const activeLinks = document.querySelectorAll('.nav-link.active');
		activeLinks.forEach(activeLink => {
			activeLink.classList.remove('active');
		});
		e.target.classList.add('active');
	}
	
	const renderTooltip = (props) => (
			<Tooltip id="button-tooltip" {...props}>
				{props}
			</Tooltip>
	);
	
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
								<Link onClick={changeSection} className="nav-link" to="/CreateAccount/">
									<OverlayTrigger
											placement="bottom"
											overlay={renderTooltip('This is where you can create an account')}
											delay={{ show: 10, hide: 10 }}>
										<>Create Account</>
									</OverlayTrigger>
								</Link>
							</li>
							<li className="nav-item">
								<Link onClick={changeSection} className="nav-link" to="/Login/">
									<OverlayTrigger
											placement="bottom"
											overlay={renderTooltip('This is where you can login and make transactions with your money')}
											delay={{ show: 10, hide: 10 }}>
											<>Login</>
									</OverlayTrigger>
								</Link>
							</li>
							<li className="nav-item">
								<Link onClick={changeSection} className="nav-link" to="/Deposit/">
									<OverlayTrigger
											placement="bottom"
											overlay={renderTooltip('This is where you can create an add money to your account')}
											delay={{ show: 10, hide: 10 }}>
											<>Deposit</>
									</OverlayTrigger>
								</Link>
							</li>
							<li className="nav-item">
								<Link onClick={changeSection} className="nav-link" to="/Withdraw/">
									<OverlayTrigger
											placement="bottom"
											overlay={renderTooltip('This is where you can withdraw money from your account')}
											delay={{ show: 10, hide: 10 }}>
										<>Withdraw</>
									</OverlayTrigger>
								</Link>
							</li>
							<li className="nav-item">
								<Link onClick={changeSection} className="nav-link" to="/Balance/">
									<OverlayTrigger
											placement="bottom"
											overlay={renderTooltip('This is where you can see your account balance')}
											delay={{ show: 10, hide: 10 }}>
										<>Balance</>
									</OverlayTrigger>
								</Link>
							</li>
							<li className="nav-item">
								<Link onClick={changeSection} className="nav-link" to="/AllData/">
									<OverlayTrigger
											placement="bottom"
											overlay={renderTooltip('This is where you can see the state of the app')}
											delay={{ show: 10, hide: 10 }}>
										<>AllData</>
									</OverlayTrigger>
								</Link>
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