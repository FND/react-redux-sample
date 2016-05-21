import React, { Component, PropTypes as PT } from "react";
import StreamEntry from "./stream_entry";
import * as models from "./models";

// NB: constitutes a class to allow for inheritance
export default class ActivityStream extends Component {
	render() {
		let { entries, onSelectFavorite } = this.props;
		let content = entries.length === 0 ?
			<p>no new items</p> :
			<ol>
				{entries.map(entry => {
					return <li key={entry.id}>
						<StreamEntry entry={entry} onSelect={onSelectFavorite} />
					</li>;
				})}
			</ol>;

		return <section>
			<h3>Activity Stream</h3>
			{content}
		</section>;
	}
}
ActivityStream.propTypes = {
	entries: PT.arrayOf(PT.instanceOf(models.StreamEntry)).isRequired,
	onSelectFavorite: PT.func.isRequired // XXX: merely passing through
};
