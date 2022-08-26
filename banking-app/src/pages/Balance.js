import {useContext} from "react";
import UserContext from "../state/Context";
import Card from "../Card";

function Balance() {
	let {account} = useContext(UserContext)
	
	const getCard = () => {
		if (Object.entries(account).length > 0) {
			return (
					<Card
							txtcolor="black"
							header="BadBank Balance Module"
							title={(`Hi ${account.name}! Welcome to the bank`)}
							text={(`This is your balance: ${account.balance}`)}
							body=""
					/>
			)
		}
		return (
				<Card
						txtcolor="black"
						header="BadBank Balance Module"
						title="You are not logged in"
						text="Please log in to check your account balance."
						body=""
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

export default Balance;
