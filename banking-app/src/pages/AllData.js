import {useContext} from "react";
import UserContext from "../state/Context";
import Card from "../Card";

function AllData(){
	let ctx = useContext(UserContext);
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
											{JSON.stringify(ctx)}<br/>
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
