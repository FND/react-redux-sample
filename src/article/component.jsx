import React, { Component, PropTypes as PT } from "react";
import * as models from "./models";

// NB: constitutes a class to allow for inheritance
export default class Article extends Component {
	render() {
		let { article, editing } = this.props;
		let { title, excerpt } = article;
		if(editing) {
			return <article>
				<h3>
					<input type="text" defaultValue={title} />
				</h3>
				<div>
					<textarea defaultValue={excerpt}></textarea>
				</div>
			</article>;
		} else {
			return <article>
				<h3>{title}</h3>
				<p>{excerpt}</p>
			</article>;
		}
	}
}
Article.propTypes = {
	article: PT.instanceOf(models.Article)
};
