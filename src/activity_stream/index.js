import { connect } from "react-redux";
import ActivityStream from "./component";
import retrieveActivities from "./service";

let state2props = state => ({
	entries: state.activities
});

let dispatch2props = dispatch => ({
	onInit: () => {
		retrieveActivities().
			then(activities => {
				dispatch({ type: "activities", activities });
			});
	}
});

class Provider extends ActivityStream {
	componentWillMount() {
		this.props.onInit();
	}
}

export default connect(state2props, dispatch2props)(Provider);

export let activitiesReducer = (state = [], action) => {
	if(action.type !== "activities") {
		return state;
	}
	return action.activities;
};
