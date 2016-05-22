import React, { createElement, PropTypes as PT } from "react";
import ActivityStream from "../activity_stream";
import Article from "../article";
import Favorites from "../favorites";
import ContextMenu from "../context_menu";

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
		<ContextMenu />
	</main>;
}
Router.propTypes = {
	view: PT.string
};
