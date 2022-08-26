import {useContext, useState} from "react";
import Card from "../Card";
import UserContext from "../state/Context";

function CreateAccount(){
	const [show, setShow] = useState(true);
	const [status, setStatus] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const ctx = useContext(UserContext);
	
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
		ctx.users.push({name, email, password, balance:100});
		setShow(false);
	}
	
	function clearForm() {
		setName('');
		setEmail('');
		setPassword('');
		setShow(true);
	}
	
	return (
			<Card
					bgcolor="primary"
					header="Create Account"
					status={status}
					body={show ? (
							<>
								Name<br/>
								<input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
								Email address<br/>
								<input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
								Password<br/>
								<input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
								<button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
							</>
					):(
							<>
								<h5>Success</h5>
								<button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
							</>
					)}
			/>
	)
}

export default CreateAccount;
