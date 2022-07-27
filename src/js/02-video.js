import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

console.log(player);

player.on('play', function() {
    console.log('played the video!');
});


player.on('timeupdate', throttle(setTime, 1000));

function setTime({seconds}) {
    console.log("time", seconds);
     localStorage.setItem('videoplayer-current-time', seconds);
};
const saveTime = localStorage.getItem('videoplayer-current-time');
if (saveTime) {
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}


