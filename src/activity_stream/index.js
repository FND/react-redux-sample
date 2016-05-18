import { connect } from "react-redux";
import ActivityStream from "./component";

let state2props = state => ({
	entries: state.activities
});

export default connect(state2props)(ActivityStream);

export let activitiesReducer = (state = [], action) => {
	if(action.type !== "activities") {
		return state;
	}
	return action.activities;
};
