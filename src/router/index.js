import { connect } from "react-redux";
import Router from "./component";

let state2props = state => ({
	route: state.route
});

export default connect(state2props)(Router);

export let routeReducer = (state, action) => {
	if(action.type !== "routing") {
		return state;
	}

	return Object.assign({}, state, {
		route: action.route
	});
};