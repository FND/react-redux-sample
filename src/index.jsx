import React from "react";
import { render } from "react-dom";
import App from "./components/app";

const ROOT = document.querySelector("SampleApp"); // assumes singleton

init();
window.addEventListener("hashchange", ev => init());

function init() {
	let route = window.location.hash.substr(1);

	let app = <App route={route} setRoute={setRoute} />;
	render(app, ROOT);
}

function setRoute(route) {
	window.location.hash = route;
}
