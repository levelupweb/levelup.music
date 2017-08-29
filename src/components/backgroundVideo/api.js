const tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/player_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tv;
const	playerDefaults = {autoplay: 0, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3};
const vid = {'videoId': 'xvU3nEK_0mg', 'startSeconds': 18, 'suggestedQuality': 'hd720'}

function onYouTubePlayerAPIReady(){
  tv = new YT.Player('tv', {events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange}, playerVars: playerDefaults});
}

function onPlayerReady(){
  tv.loadVideoById(vid);
  tv.mute();
}

function onPlayerStateChange(e) {
  const tv1 = document.getElementById('tv')

  if (e.data === 1){
    tv1.classList.add('active')
  } else if (e.data === YT.PlayerState.ENDED){
    tv1.classList.remove('active')
    if(currVid === vid.length - 1){
      currVid = 0;
    } else {
      currVid++;  
    }
    tv.loadVideoById(vid);
  }
}

function vidRescale(){
  const w = window.innerWidth+400,
    h = window.innerHeight+400;
  const screen = document.querySelector('.tv .screen');
  const tv1 = document.getElementById('tv')

  if (w/h > 16/9){
    tv.setSize(w, w/16*9);
  } else {
    tv.setSize(h/9*16, h);
  }
}

window.addEventListener('load', function(){
  onYouTubePlayerAPIReady()
  vidRescale();
});
window.addEventListener('resize', function(){
  vidRescale();
});