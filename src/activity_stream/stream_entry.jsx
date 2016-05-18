import React, { PropTypes as PT } from "react";
import * as models from "./models";

export default function StreamEntry({ entry }) {
	let { desc, articleID } = entry;
	let uri = `#article/${articleID}`;
	return <li>
		<a href={uri}>{desc}</a>
	</li>;
}
StreamEntry.propTypes = {
	entry: PT.instanceOf(models.StreamEntry).isRequired
};
