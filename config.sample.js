export default new function() {
	const config = this;

	this.dev = true;
	this.ssl = false;
	this.port = "Port";
	this.staticFolder = "/dist"
	this.type = this.ssl ? "https://" : "http://";
	this.domain = this.type + (this.dev ? "localhost:" + this.port : "film.levelupworlds.com");
	this.staticURL = this.domain + this.staticFolder;
	this.host = this.dev ? "185.22.232.114" : "127.0.0.1";
	this.hosturl = this.type + this.host;
	this.sitename = "Your sitename";
	this.token = "Your Application Token";
	this.mail = new function() {
		this.port = "Mail Server Port";
		this.sendURL = config.hosturl + ':' + this.port + '/send';
		this.who = "Mail Username";
		this.to = "beatzhitta@gmail.com";
	}
};
