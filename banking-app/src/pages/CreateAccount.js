import {useContext, useState} from "react";
import Card from "../Card";
import UserContext from "../state/Context";

function CreateAccount(){
	let [show, setShow] = useState(true);
	let [status, setStatus] = useState('');
	let [name, setName] = useState('');
	let [email, setEmail] = useState('');
	let [password, setPassword] = useState('');
	let ctx = useContext(UserContext);
	
	function validate(field, label, message){
		if (!field) {
			setStatus(`Error: ${label} ${message}`);
			setTimeout(() => setStatus(''),3000);
			return false;
		}
		return true;
	}
	
	function handleCreate() {
		console.log(name,email,password);
		if (!validate(name, 'name', 'was left blank')) return;
		if (!validate(email, 'email', 'was left blank')) return;
		if (!validate(password, 'password', 'was left blank')) return;
		if (password.length < 8) {
			setStatus(`Error: password must be 8 characters long or longer`);
			setTimeout(() => setStatus(''),3000);
			return;
		}
		ctx.users.push({name, email, password, balance:100});
		setShow(false);
	}
	
	function blurName(event) {
		validate(name, 'name', 'was left blank');
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
	
	function clearForm() {
		setName('');
		setEmail('');
		setPassword('');
		setShow(true);
	}
	
	function shouldDisableSubmit(event) {
		return (email === '' || name === '' || password === '');
	}
	
	return (
			<>
				<div className="home">
					<div className="container home__layout">
						<div className="home__content">
							<Card
									bgcolor="primary"
									header="Create Account"
									status={status}
									body={show ? (
											<>
												Name<br/>
												<input type="input" onBlur={blurName} className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
												Email address<br/>
												<input type="input" onBlur={blurEmail} className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
												Password<br/>
												<input type="password" onBlur={blurPassword} className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
												<button disabled={shouldDisableSubmit()} type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
											</>
									):(
											<>
												<h5>Success</h5>
												<button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
											</>
									)}
							/>
						</div>
					</div>
				</div>
				<div className="credits">By Saúl Enrique Melchor Ramírez</div>
			</>
	)
}

export default CreateAccount;
