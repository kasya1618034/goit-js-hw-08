import Vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', function() {
    console.log('played the video!');
});
