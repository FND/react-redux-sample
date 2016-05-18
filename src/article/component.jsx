import React, { Component, PropTypes as PT } from "react";
import * as models from "./models";

// NB: constitutes a class to allow for inheritance
export default class Article extends Component {
	render() {
		let { title, excerpt } = this.props.article;
		return <article>
			<h3>{title}</h3>
			<p>{excerpt}</p>
		</article>;
	}
}
Article.propTypes = {
	article: PT.instanceOf(models.Article)
};
