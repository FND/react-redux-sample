import React from "react";
import { connect } from "react-redux";
import Article from "./component";
import retrieveArticle from "./service";

let state2props = state => ({
	articleID: state.routing.params[0],
	article: state.article
});

class Provider extends Article {
	componentWillMount() {
		let { articleID, dispatch } = this.props;
		retrieveArticle(articleID).
			then(article => {
				dispatch({ type: "article-selection", article });
			});
	}

	render() {
		return this.props.article ? super.render() :
				<p>loading…</p>;
	}
}

export default connect(state2props)(Provider);

export let articleReducer = (state = null, action) => {
	if(action.type !== "article-selection") {
		return state;
	}
	return action.article;
};