import React from "react";
import { connect } from "react-redux";
import Article from "./component";
import retrieveArticle from "./service";

let state2props = state => ({
	articleID: state.routing.params[0],
	article: state.article
});

class Provider extends Article {
	componentWillReceiveProps(newProps) {
		let articleID = newProps.articleID;
		if(!newProps.article === undefined || this.props.articleID !== articleID) {
			this.load(articleID);
		}
	}

	componentWillMount() {
		this.load(this.props.articleID);
	}

	load(articleID) {
		this.props.dispatch({ type: "article-selection", article: null });

		retrieveArticle(articleID).
			then(article => {
				this.props.dispatch({ type: "article-selection", article });
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
