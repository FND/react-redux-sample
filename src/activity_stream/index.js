import { connect } from "react-redux";
import ActivityStream from "./component";
import retrieveActivities from "./service";

let state2props = state => ({
	entries: state.activities
});

class Provider extends ActivityStream {
	componentWillMount() {
		retrieveActivities().
			then(activities => {
				this.props.dispatch({ type: "activities", activities });
			});
	}
}

export default connect(state2props)(Provider);

export let activitiesReducer = (state = [], action) => {
	if(action.type !== "activities") {
		return state;
	}
	return action.activities;
};
