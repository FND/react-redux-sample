import React, { PropTypes as PT } from "react";
import StreamEntry from "./stream_entry";
import * as models from "./models";

export default function ActivityStream({ entries }) {
	let content = entries.length === 0 ?
		<p>no new items</p> :
		<ol>
			{entries.map(entry => {
				return <StreamEntry key={entry.id} entry={entry} />;
			})}
		</ol>;

	return <section>
		<h3>Activity Stream</h3>
		{content}
	</section>;
}
ActivityStream.propTypes = {
	entries: PT.arrayOf(PT.instanceOf(models.StreamEntry)).isRequired
};
