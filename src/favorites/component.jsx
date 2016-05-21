import React, { Component, PropTypes as PT } from "react";
// XXX: breaks encapsulation?
import StreamEntry from "../activity_stream/stream_entry";
import * as models from "../activity_stream/models";

// NB: constitutes a class to allow for inheritance
export default class Favorites extends Component {
	render() {
		let { entries } = this.props;
		let content = entries.length === 0 ?
			<p>no favorites</p> :
			<ol>
				{entries.map(entry => {
					return <li key={entry.id}>
						<StreamEntry entry={entry} />
					</li>;
				})}
			</ol>;

		return <section>
			<h3>Favorites</h3>
			{content}
		</section>;
	}
}
Favorites.propTypes = {
	entries: PT.arrayOf(PT.instanceOf(models.StreamEntry)).isRequired
};
