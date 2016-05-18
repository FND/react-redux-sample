/* eslint-env browser */

import { StreamEntry } from "./models";
import { simulateLatency } from "../util";

export default function() {
	return fetch("data/activities.json").
		then(simulateLatency).
		then(res => res.json()).
		then(payload => payload.map(item => StreamEntry.fromJSON(item)));
}
