import {useContext, useState} from "react";
import UserContext from "../state/Context";
import Card from "../Card";
import {Form} from "react-bootstrap";

function Withdraw(){
	let ctx = useContext(UserContext);
	let [validTransaction, setValidTransaction] = useState(false);
	let [deposit, setDeposit] = useState(0);
	let [balance, setBalance] = useState(ctx.account.balance);
	let [status, setStatus] = useState('');
	
	
	const handleChange = (event) => {
		if (isNaN(event.target.value)) {
			setStatus(`Error: inserted quantity is not a number`);
			setTimeout(() => setStatus(''),3000);
			setValidTransaction(false);
			return;
		}
		if (event.target.value > balance) {
			setStatus(`Error: inserted quantity is bigger than your account balance`);
			setTimeout(() => setStatus(''),3000);
			setValidTransaction(false);
			return;
		}
		setValidTransaction(true);
		setDeposit(Number(event.target.value));
	};
	
	const handleSubmit = (event) => {
		let newTotal = balance - Math.abs(deposit);
		ctx.account.balance = newTotal;
		setBalance(newTotal);
		event.preventDefault();
	};
	
	const getCard = () => {
		if (Object.entries(ctx.account).length > 0) {
			return (
					<Card
							txtcolor="black"
							header="BadBank Withdraw Module"
							title={(`Hi ${ctx.account.name}! Welcome to the bank`)}
							text={(`This is your balance: ${balance}`)}
							status={status}
							body={(
									<Form onSubmit={handleSubmit}>
										<Form.Group>
											<Form.Label htmlFor="number-input">Insert quantity to withdraw</Form.Label><br/>
											<Form.Control id="number-input" type="number" width="200" onChange={handleChange}></Form.Control> <br/>
										</Form.Group>
										<input disabled={!validTransaction} type="submit" width="200" value="Withdraw from my account" id="submit-input"></input>
									</Form>
							)}
					/>
			)
		}
		return (
				<>
					<div className="home">
						<div className="container home__layout">
							<div className="home__content">
								<Card
										txtcolor="black"
										header="BadBank Withdraw Module"
										title="You are not logged in"
										text="Please log in to withdraw from your account balance."
										body=""
								/>
							</div>
						</div>
					</div>
				</>
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

export default Withdraw;
