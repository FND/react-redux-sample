/* eslint-env browser */

import { Article } from "./models";
import { simulateLatency } from "../util";

export default function(id) {
	return fetch("data/articles.json").
		then(simulateLatency).
		then(res => res.json()).
		then(payload => Article.fromJSON(payload[id], id));
}
