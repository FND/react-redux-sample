import React from "react";
import { connect } from "react-redux";
import Article from "./component";
import retrieveArticle from "./service";

let state2props = ({ routing, article }) => ({
	articleID: routing.params[0],
	article: article.current,
	editing: article.editing
});

let dispatch2props = dispatch => ({
	onInit: articleID => {
		dispatch({ type: "article-selection", article: null });

		retrieveArticle(articleID).
			then(article => {
				dispatch({ type: "article-selection", article });
			});
	}
});

class Provider extends Article {
	componentWillReceiveProps(newProps) {
		let articleID = newProps.articleID;
		if(!newProps.article === undefined || this.props.articleID !== articleID) {
			this.props.onInit(articleID);
		}
	}

	componentWillMount() {
		this.props.onInit(this.props.articleID);
	}

	render() {
		return this.props.article ? super.render() :
				<p>loading…</p>;
	}
}

export default connect(state2props, dispatch2props)(Provider);

export let articleReducer = (state = {}, action) => {
	switch(action.type) { // TODO: rename actions for consistency
	case "article-selection":
		return { current: action.article };
	case "edit-article":
		return Object.assign({}, state, {
			editing: true
		});
	default:
		return state;
	}
};
