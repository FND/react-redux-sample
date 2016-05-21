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
	},
	onSelectFavorite: entryID => {
		dispatch({ type: "activity-favorite", entryID });
	}
});

class Provider extends ActivityStream {
	componentWillMount() {
		this.props.onInit();
	}
}

export default connect(state2props, dispatch2props)(Provider);

export let activitiesReducer = (state = [], action) => {
	switch(action.type) {
	case "activities": // TODO: rename
		return action.activities;
	case "activity-favorite":
		let id = action.entryID;
		// XXX: inefficient
		return state.map(entry => entry.id !== id ? entry : entry.clone({
			favorite: true
		}));
	default:
		return state;
	}
};
