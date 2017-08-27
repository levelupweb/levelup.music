export default new function() {
	const config = this;

	this.dev = true;
	this.ssl = false;
	this.port = "3000";
	this.staticFolder = "/dist"
	this.type = this.ssl ? "https://" : "http://";
	this.domain = this.type + "Your Domain";
	this.staticURL = this.domain + this.staticFolder;
	this.host = this.dev ? "185.22.232.114" : "127.0.0.1";
	this.hosturl = this.type + this.host;
	this.sitename = "Your Site Name";
	this.token = "Your App Token";
	this.mail = new function() {
		this.port = "3080";
		this.sendURL = config.hosturl + ':' + this.port + '/send';
		this.who = "Юзернейм из Levelup";
		this.to = "beatzhitta@gmail.com";
	}
};
