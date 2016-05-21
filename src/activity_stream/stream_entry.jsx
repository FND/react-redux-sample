import React, { PropTypes as PT } from "react";
import * as models from "./models";

export default function StreamEntry({ entry, onSelect }) {
	let { desc, articleID } = entry;
	let uri = `#article/${articleID}`;
	let styles = entry.favorite ? null : { opacity: 0.2 }; // XXX: crude
	let onClick = onSelect === undefined ? null : ev => {
		onSelect(entry.id);
	};
	return <div>
		<button style={styles} onClick={onClick}>⭐️</button>
		{" "}
		<a href={uri}>{desc}</a>
	</div>;
}
StreamEntry.propTypes = {
	entry: PT.instanceOf(models.StreamEntry).isRequired,
	onSelect: PT.func
};
