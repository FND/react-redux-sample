export class StreamEntry {
	constructor(id, desc, articleID, isFavorite) {
		this.id = id;
		this.desc = desc;
		this.articleID = articleID;
		this.favorite = isFavorite;
	}

	clone(newProps) {
		let props = Object.assign({}, this, newProps);
		return new this.constructor(props.id, props.desc, props.articleID,
				props.favorite);
	}

	static fromJSON(payload) {
		return new this(payload.id, payload.desc, payload.articleID,
				payload["is-favorite"]);
	}
}
