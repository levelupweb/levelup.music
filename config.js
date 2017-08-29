export default new function() {
	const config = this;

	this.dev = true;
	this.ssl = false;
	this.port = "3050";
	this.staticFolder = "/dist"
	this.type = this.ssl ? "https://" : "http://";
	this.domain = this.type + (this.dev ? "localhost:" + this.port : "music.levelupworlds.com");
	this.staticURL = this.domain + this.staticFolder;
	this.host = this.dev ? "127.0.0.1" : "185.22.232.114";
	this.hosturl = this.type + this.host;
	this.sitename = "Levelup Music";
	this.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtdXNpYy5sZXZlbHVwd29ybGRzLmNvbSIsImlhdCI6MTUwMzg0MDc4MywiZXhwIjoxNTM1Mzc2NzgzLCJhdWQiOiJtdXNpYy5sZXZlbHVwd29ybGRzLmNvbSIsInN1YiI6IjE2NDYyMzg0IiwiYXBwbGljYXRpb25faWQiOiIxNjQ2MjM4NCJ9.-IlCdEQtC2LFjYHXwAsYj_sZXfB_awR7-jMpy74eSE4";
	this.mail = new function() {
		this.port = "3080";
		this.sendURL = config.hosturl + ':' + this.port + '/send';
		this.who = "Николас из Levelup Music";
		this.to = "beatzhitta@gmail.com";
	}
};
