import React, { PropTypes as PT } from "react";
import * as models from "./models";

export default function StreamEntry({ entry, onSelect }) {
	let { desc, articleID } = entry;
	let uri = `#article/${articleID}`;

	let cls = "activity";
	if(entry.favorite) {
		cls += " favorite";
	}

	let onClick = onSelect === undefined ? null : ev => {
		onSelect(entry.id);
	};

	return <article className={cls}>
		<button onClick={onClick}>⭐️</button>
		{" "}
		<a href={uri}>{desc}</a>
	</article>;
}
StreamEntry.propTypes = {
	entry: PT.instanceOf(models.StreamEntry).isRequired,
	onSelect: PT.func
};
