import React, { PropTypes as PT } from "react";

export default function App({ route }) {
	route = route || "default";

	return <main>
		<p>current route: {JSON.stringify(route)}</p>
	</main>;
}
App.propTypes = {
	route: PT.string,
	setRoute: PT.func.isRequired
};
