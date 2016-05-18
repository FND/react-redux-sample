export class Article {
	constructor(id, title, excerpt) {
		this.id = id;
		this.title = title;
		this.excerpt = excerpt;
	}

	static fromJSON(payload, id) {
		return new this(id, payload.title, payload.excerpt);
	}
}
