import Player from '@vimeo/player';
import throttle from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

setTime();

player.on('timeupdate', throttle(setTimeToLocale, 1000));

function setTimeToLocale(e) {}

function setTime() {}




// console.log(localStorage);

// player.on('timeupdate', function() {});

// iframe.addEventListener('timeupdate', function(){
//     const timeControl = parseInt(iframe.target.currentTime);
//     console.log(timeControl);
// });




