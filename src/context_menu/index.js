import { connect } from "react-redux";
import ContextMenu from "./component";

let state2props = state => {
	let { view } = state.routing;
	let items = view === "" ? [] : [{
		caption: "home",
		uri: "#"
	}];

	if(view === "article") {
		let { current, editing } = state.article;
		if(current && !editing) {
			items.push({
				caption: "✎ edit",
				action: "onEditArticle"
			});
		}
	}

	return { items };
};

let dispatch2props = dispatch => ({
	onEditArticle: () => {
		dispatch({ type: "edit-article" });
	}
});

export default connect(state2props, dispatch2props)(ContextMenu);
