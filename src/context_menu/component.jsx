import React, { Component, PropTypes as PT } from "react";

// NB: constitutes a class to allow for inheritance
export default class ContextMenu extends Component {
	render() {
		let { items } = this.props;
		return <nav>
			<h3>Context Menu</h3>
			<ul>
				{items.map((item, i) => {
					return <li key={i}>
						<MenuItem {...item} />
					</li>;
				})}
			</ul>
		</nav>;
	}
}
ContextMenu.propTypes = {
	items: PT.arrayOf(PT.object).isRequired
};

function MenuItem(props) {
	let { caption, uri } = props;
	return <a href={uri}>{caption}</a>;
}
MenuItem.propTypes = {
	caption: PT.string.isRequired,
	uri: PT.string
};
