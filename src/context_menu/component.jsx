import React, { Component, PropTypes as PT } from "react";

// NB: constitutes a class to allow for inheritance
export default class ContextMenu extends Component {
	render() {
		let { items } = this.props;
		return <nav>
			<h3>Context Menu</h3>
			<ul>
				{items.map((item, i) => {
					let action = item.action && this.props[item.action];
					return <li key={i}>
						<MenuItem {...item} action={action} />
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
	let { caption, action, uri } = props;
	return uri ?
			<a href={uri}>{caption}</a> :
			<button onClick={action}>{caption}</button>;
}
MenuItem.propTypes = {
	caption: PT.string.isRequired,
	action: PT.func,
	uri: PT.string
};
