import Player from '@vimeo/player';
import { throttle } from 'lodash';
console.log(throttle);


    const iframe = document.querySelector('iframe');
   const player = new Player('iframe', {
    id: 19231868,
    width: 640
});

player.on('play', function() {
    console.log('played the video!');
});


iframe.addEventListener('timeupdate', function(){
    const timeControl = parseInt(iframe.currentTime);
    console.log(timeControl);
});


console.log(localStorage);

// localStorage.setItem('videoplayer-current-time', 'timeControl');

// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });