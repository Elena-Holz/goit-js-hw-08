import Player from '@vimeo/player';
import throttle from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

console.log(player);

player.on('play', function() {
    console.log('played the video!');
});

 if(localStorage.currentTime) {
       player.currentTime = localStorage.currentTime
    }

    player.addEventListener('timeupdate', () => {localStorage.currentTime = player.currentTime
});

// player.on('timeupdate', function (time) {
//     console.log("time", time);
// });

// player.on('timeupdate', () => {
//     localStorage.currentTime = player.currentTime
// });

// setTime();

// player.on('timeupdate', throttle(setTimeToLocale, 1000));

// function setTimeToLocale(e) {}

// function setTime() {}


// player.on('timeupdate', throttle(onPlay, 1000));

// function onPlay({ seconds }) {
//     localStorage.setItem('videoplayer-current-time', seconds);
//     console.log(seconds);
// }

// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));











// console.log(localStorage);

// player.on('timeupdate', function() {});

// iframe.addEventListener('timeupdate', function(){
//     const timeControl = parseInt(iframe.target.currentTime);
//     console.log(timeControl);
// });




