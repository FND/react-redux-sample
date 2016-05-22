import { connect } from "react-redux";
import Favorites from "./component";

let state2props = state => ({
	entries: state.activities.filter(entry => entry.favorite) // XXX: inefficient
});

let dispatch2props = dispatch => ({
	onToggleFavorite: entryID => {
		dispatch({ type: "toggle-favorite", entryID });
	}
});

export default connect(state2props, dispatch2props)(Favorites);
