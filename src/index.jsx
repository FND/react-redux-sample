import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App, { routeReducer } from "./app";

const ROOT = document.querySelector("SampleApp"); // assumes singleton
const STORE = createStore(routeReducer, {});

updateRoute();
window.addEventListener("hashchange", ev => updateRoute());

let app = <Provider store={STORE}>
	<App />
</Provider>;
render(app, ROOT);

// TODO: use `store.subscribe` to auto-update
function setRoute(route) {
	window.location.hash = route;
	STORE.dispatch({ type: "routing", route });
}

// ensures store's state reflects location bar
function updateRoute() {
	let route = window.location.hash.substr(1);
	STORE.dispatch({ type: "routing", route });
}
