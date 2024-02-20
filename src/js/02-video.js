import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const videoCurrentTime = throttle(data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);

player.on('timeupdate', videoCurrentTime);

const VideoStoredTime = localStorage.getItem('videoplayer-current-time');
if (VideoStoredTime) {
  player.setCurrentTime(parseFloat(VideoStoredTime));
}