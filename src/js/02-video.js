import Player from '@vimeo/player';
import { throttle } from 'lodash';
console.log(throttle);


    const iframe = document.querySelector('iframe');
const player = new Player('iframe');

player.on('play', function () {
    console.log('played the video!');
});
    // , {
//     id: 19231868,
//     width: 640
// });

// player.on('play', function() {
//     console.log('played the video!');
// });

















console.log(localStorage);

player.on('timeupdate', function() {});

iframe.addEventListener('timeupdate', function(){
    const timeControl = parseInt(iframe.target.currentTime);
    console.log(timeControl);
});




