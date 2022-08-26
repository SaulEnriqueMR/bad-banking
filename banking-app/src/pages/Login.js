import {useContext, useState} from "react";
import UserContext from "../state/Context";
import Card from "../Card";

function Login(){
	const [status, setStatus] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const ctx = useContext(UserContext);
	const [account, setAccount] = useState(ctx.account)
	
	function validate(field, label){
		if (!field) {
			setStatus(`Error: ${label}`);
			setTimeout(() => setStatus(''),3000);
			return false;
		}
		return true;
	}
	
	function handleLogin(){
		console.log(email, password);
		if (!validate(email, 'email')) return;
		if (!validate(password, 'password')) return;
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
								<input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
								Password<br/>
								<input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
								<button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
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
			</>
	)
}

export default Login;
