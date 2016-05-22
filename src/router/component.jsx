import React, { createElement, PropTypes as PT } from "react";
import ActivityStream from "../activity_stream";
import Article from "../article";
import Favorites from "../favorites";

const ROUTES = {
	// …[#]
	root: ActivityStream,
	// …#article/<ID>
	article: Article
};

export default function Router({ view }) {
	let component = view && ROUTES[view];
	if(!component) {
		return <p>failed to render view '{view}'</p>;
	}

	return <main>
		{createElement(component)}

		<Favorites />
	</main>;
}
Router.propTypes = {
	view: PT.string
};
