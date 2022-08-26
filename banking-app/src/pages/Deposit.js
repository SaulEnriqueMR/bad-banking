// import Balance from "./Balance";
import {useContext} from "react";
import UserContext from "../state/Context";
import Card from "../Card";

function Deposit() {
	const ctx = useContext(UserContext)
	
	const getCard = () => {
		if (Object.entries(ctx.account).length > 0) {
			return (
					<Card
							txtcolor="black"
							header="BadBank Deposit Module"
							title={(`Hi ${ctx.account.name}! Welcome to the bank`)}
							text={(`This is your balance: ${ctx.account.balance}`)}
							body=""
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
										header="BadBank Balance Module"
										title="You are not logged in"
										text="Please log in to check your account balance."
										body=""
								/>
							</div>
						</div>
					</div>
					<div className="credits">By Saúl Enrique Melchor Ramírez</div>
				</>
		)
	}
	
	return (
			<>
				{getCard()}
			</>
	)
}

export default Deposit;
