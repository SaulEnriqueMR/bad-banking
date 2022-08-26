import {useContext} from "react";
import UserContext from "../state/Context";
import Card from "../Card";

function AllData(){
	let ctx = useContext(UserContext);
	
	const getUserInfo = () => {
		if (Object.entries(ctx.account).length === 0) {
			return (
					<div className="mb-4">You are <b>not logged in</b>, log in to see your info</div>
			)
		}
		return (
				<div className="mb-4">
					<div><b>Your name:</b> {ctx.account.name}</div>
					<div><b>Your email:</b> {ctx.account.email}</div>
					<div><b>Your account balance:</b> {ctx.account.balance}</div>
					<div><b>Your password:</b> {ctx.account.password}</div>
				</div>
		)
	}
	
	const getAllUsers = () => {
		let users = ctx.users.map((item, index) => {
			let id = `user-${index}`;
			return (
				<li key={id}>
					<b>Name:</b> {item.name} - <b>Email:</b> {item.email} - <b>Balance:</b> {item.balance} - <b>Password:</b> {item.password}
				</li>
			)
		})
		return (
				<>
					<div>All the other users</div>
					<ul>
						{users}
					</ul>
				</>
		)
	}
	
	return (
			<>
				<div className="home">
					<div className="container home__layout">
						<div className="home__content">
							<Card
									txtcolor="black"
									header="BadBank All Data"
									title="Check all the data stored"
									text="Here you can check everything in the context."
									body={(
											<>
												{getUserInfo()}
												{getAllUsers()}
											</>
									)}
							/>
						</div>
					</div>
				</div>
				<div className="credits">By Saúl Enrique Melchor Ramírez</div>
			</>
	);
}

export default AllData;
