const playerDefaults = {
  autoplay: 0, 
  autohide: 1, 
  modestbranding: 0, 
  rel: 0, 
  showinfo: 0, 
  controls: 0, 
  disablekb: 1, 
  enablejsapi: 0, 
  iv_load_policy: 3
};


export default class Video {
  constructor(videoId, id, screen) {
    this.tv = null;
    this.screen = screen;
    this.tvId = id || "tv";
    this.onStateChange = this.onStateChange.bind(this)
    this.play = this.play.bind(this);
    this.createPlayer = this.createPlayer.bind(this);
    this.rescale = this.rescale.bind(this)
    this.video = {
      'videoId': videoId, 
      'startSeconds': 18, 
      'suggestedQuality': 'hd720'
    }
  }
  createPlayer(options) {
    const self = this;
    this.tv = new YT.Player('tv', {events: {
      'onReady': this.play, 
      'onStateChange': this.onStateChange
    }, playerVars: options});
  }
  play() {
    this.tv.loadVideoById(this.video);
    this.tv.mute();
  }
  rescale() {
    const w = window.innerWidth + 400;
    const h = window.innerHeight + 400;
    const screen = document.querySelector(this.screen);
    const tv1 = document.getElementById(this.tvId)

    if (w/h > 16/9) {
      this.tv.setSize(w, w/16*9);
    } else {
      this.tv.setSize(h/9*16, h);
    }
  }
  onStateChange(e) {
    const tv1 = document.getElementById(this.tvId)
    if (e.data === 1){
      tv1.classList.add('active')
    } else if (e.data === YT.PlayerState.ENDED) {
      tv1.classList.remove('active')
      this.tv.loadVideoById(vid);
    }
  }
  init() {
    this.createPlayer(playerDefaults);
    this.rescale();
  }
}