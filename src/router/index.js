import { connect } from "react-redux";
import Router from "./component";

let state2props = ({ routing }) => ({
	view: routing.view || "root",
	params: routing.params
});

export default connect(state2props)(Router);

export let routingReducer = (state = {}, action) => {
	if(action.type !== "routing") {
		return state;
	}

	let route = action.route;
	let [view, ...params] = route.split("/");
	return { view, params };
};
