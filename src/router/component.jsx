import React, { PropTypes as PT } from "react";

export default function Router({ route }) {
	route = route || "default";

	return <main>
		<p>current route: {JSON.stringify(route)}</p>
	</main>;
}
Router.propTypes = {
	route: PT.string
};
