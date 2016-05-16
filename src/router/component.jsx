import { createElement, PropTypes as PT } from "react";
import ActivityStream from "../activity_stream";
import Article from "../article";

const ROUTES = {
	// …[#]
	root: ActivityStream,
	// …#article/<ID>
	article: Article
};

export default function Router({ route }) {
	let [view, routingParams] = parseRoute(route);
	return createElement(view, { routingParams }); // TODO: set Redux state instead?
}
Router.propTypes = {
	route: PT.string
};

function parseRoute(route) {
	route = route || "root";

	let [view, ...params] = route.split("/");
	let component = ROUTES[view];

	return [component, params];
}
