import React, { PropTypes as PT } from "react";

export default function Article({ routingParams }) {
	let articleID = routingParams[0];
	return <p>article #{articleID}</p>;
}
Article.propTypes = {
	routingParams: PT.arrayOf(PT.string).isRequired
};
