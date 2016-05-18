import React, { createElement, PropTypes as PT } from "react";
import ActivityStream from "../activity_stream";
import Article from "../article";

const ROUTES = {
	// …[#]
	root: ActivityStream,
	// …#article/<ID>
	article: Article
};

export default function Router({ view }) {
	let component = view && ROUTES[view];
	return component ? createElement(component) :
			<p>failed to render view '{view}'</p>;
}
Router.propTypes = {
	view: PT.string
};
