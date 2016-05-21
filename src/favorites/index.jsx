import { connect } from "react-redux";
import Favorites from "./component";

let state2props = state => ({
	entries: state.activities.filter(entry => entry.favorite) // XXX: inefficient
});

export default connect(state2props)(Favorites);
