import {createContext} from "react";

const UserContext = createContext({
	users: [],
	account: {},
});

export default UserContext;
