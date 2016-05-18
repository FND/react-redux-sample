export class StreamEntry {
	constructor(id, desc, articleID) {
		this.id = id;
		this.desc = desc;
		this.articleID = articleID;
	}

	static fromJSON(payload) {
		return new this(payload.id, payload.desc, payload.articleID);
	}
}
