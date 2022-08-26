import {useContext, useState} from "react";
import UserContext from "../state/Context";
import Card from "../Card";

function Login(){
	let [status, setStatus] = useState('');
	let [email, setEmail] = useState('');
	let [password, setPassword] = useState('');
	let ctx = useContext(UserContext);
	let [account, setAccount] = useState(ctx.account)
	
	function validate(field, label, message){
		if (!field) {
			setStatus(`Error: ${label} ${message}`);
			setTimeout(() => setStatus(''),3000);
			return false;
		}
		return true;
	}
	
	function handleLogin(){
		console.log(email, password);
		if (!validate(email, 'email', 'was left blank')) return;
		if (!validate(password, 'password', 'was left blank')) return;
		let result = ctx.users.filter(x => {return x.email === email && x.password === password});
		console.log('logged user: ', result);
		if (result.length === 0) {
			setStatus(`Error! Wrong user or password`);
			setTimeout(() => setStatus(''),3000);
			return;
		}
		ctx.account = result[0];
		console.log('setted context: ', ctx.account)
		setAccount(ctx.account);
	}
	
	function blurEmail(event) {
		validate(email, 'email', 'was left blank')
	}
	
	function blurPassword(event) {
		validate(password, 'password', 'was left blank');
		console.log(password.length);
		if (password.length < 8) {
			setStatus(`Error: password must be 8 characters long or longer`);
			setTimeout(() => setStatus(''),3000);
		}
	}
	
	function shouldDisableSubmit(event) {
		return (email === '' || password === '');
	}
	
	const getCard = () => {
		if (Object.entries(account).length > 0) {
			return (
					<Card
							bgcolor="primary"
							header="Login"
							body={
								<>
									<p>You are logged in! You can check your account balanced, widthdraw money or deposit money</p>
								</>
							}
					/>
			)
		}
		return (
				<Card
						bgcolor="primary"
						header="Login"
						status={status}
						body={
							<>
								Email address<br/>
								<input type="input" onBlur={blurEmail} className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
								Password<br/>
								<input type="password" onBlur={blurPassword} className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
								<button type="submit" disabled={shouldDisableSubmit()} className="btn btn-light" onClick={handleLogin}>Login</button>
							</>
						}
				/>
		)
	}
	
	return (
			<>
				<div className="home">
					<div className="container home__layout">
						<div className="home__content">
							{getCard()}
						</div>
					</div>
				</div>
				<div className="credits">By Saúl Enrique Melchor Ramírez</div>
			</>
	)
}

export default Login;
