const playerDefaults = {
  autoplay: 0, 
  autohide: 1, 
  modestbranding: 0, 
  rel: 0, 
  showinfo: 0, 
  loop: 1,
  controls: 0, 
  disablekb: 1, 
  enablejsapi: 0, 
  iv_load_policy: 3
};

export default class Video {
  constructor(options, id, screen) {
    this.player = null;
    this.screen = screen;
    this.options = options;
    this.id = id;
    this.play = this.play.bind(this);
    this.createPlayer = this.createPlayer.bind(this);
    this.rescale = this.rescale.bind(this);
  }

  init() {
    this.createPlayer();
    this.rescale();
    this.play();
  }

  createPlayer() {
    const yt = require("youtube-player");
    this.player = yt(this.id, {...playerDefaults, ...this.options});
  }

  play() {
    this.player.loadVideoById({...playerDefaults, ...this.options});
    this.player.playVideo()
      .then(() => {
        document.getElementById(this.id).classList.add('active');
      });
    this.player.mute();

    this.player.on("stateChange", (e) => {
      if (e.data === YT.PlayerState.ENDED) {
          this.player.playVideo({...playerDefaults, ...this.options}); 
          this.player.seekTo(this.options.startSeconds);
      }
    })
  }

  rescale() {
    const w = window.innerWidth + 400;
    const h = window.innerHeight + 400;
    const screen = document.querySelector(this.screen);
    const tv1 = document.getElementById(this.id)

    if (w/h > 16/9) {
      this.player.setSize(w, w/16*9);
    } else {
      this.player.setSize(h/9*16, h);
    }
  }
}