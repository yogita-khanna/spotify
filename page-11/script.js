const prev = document.getElementById("prev");
const play = document.getElementById("play");
const next = document.getElementById("next");
const audio = document.getElementById("audio");
const name = document.getElementById("name");
const pause = document.getElementById("play");
const pre = document.getElementsByClassName("pre");
const element = document.querySelector('.pre-first');

const songs = [
  {
    name: "Driving in Delhi IRL Podcast",
    path: "audio/audio-1.mp3",
    img: "../images/image-11.jpg",
  },
  {
    name: "Driving in Delhi IRL Podcast",
    path: "audio/audio-2.mp3",
    img: "../images/image-11.jpg",
  },
  {
    name: "Driving in Delhi IRL Podcast.mp3",
    path: "audio/audio-3.mp3",
    img: "../images/image-11.jpg",
  },
  {
    name: "Driving in Delhi IRL Podcast",
    path: "audio/audio-4.mp3",
    img: "../images/image-11.jpg",
  },
  {
    name: "Driving in Delhi IRL Podcast",
    path: "audio/audio-5.mp3",
    img: "../images/image-11.jpg",
  },
  {
    name: "Driving in Delhi IRL Podcast.mp3",
    path: "audio/audio-6.mp3",
    img: "../images/image-11.jpg",
  },
  {
    name: "Driving in Delhi IRL Podcast",
    path: "audio/audio-7.mp3",
    img: "../images/image-11.jpg",
  },
  {
    name: "Driving in Delhi IRL Podcast",
    path: "audio/audio-8.mp3",
    img: "../images/image-11.jpg",
  },
  {
    name: "Driving in Delhi IRL Podcast.mp3",
    path: "audio/audio-9.mp3",
    img: "../images/image-11.jpg",
  },
  {
    name: "Driving in Delhi IRL Podcast",
    path: "audio/audio-10.mp3",
    img: "../images/image-11.jpg",
  },
  {
    name: "Driving in Delhi IRL Podcast",
    path: "audio/audio-5.mp3",
    img: "../images/image-11.jpg",
  },
  {
    name: "Driving in Delhi IRL Podcast.mp3",
    path: "audio/audio-6.mp3",
    img: "../images/image-11.jpg",
  },
  {
    name: "Driving in Delhi IRL Podcast",
    path: "audio/audio-7.mp3",
    img: "../images/image-11.jpg",
  },
  {
    name: "Driving in Delhi IRL Podcast",
    path: "audio/audio-8.mp3",
    img: "../images/image-11.jpg",
  },
  {
    name: "Driving in Delhi IRL Podcast.mp3",
    path: "audio/audio-9.mp3",
    img: "../images/image-11.jpg",
  },
  {
    name: "Driving in Delhi IRL Podcast",
    path: "audio/audio-1.mp3",
    img: "../images/image-11.jpg",
  },
  {
    name: "Driving in Delhi IRL Podcast",
    path: "audio/audio-2.mp3",
    img: "../images/image-11.jpg",
  },
  {
    name: "Driving in Delhi IRL Podcast.mp3",
    path: "audio/audio-3.mp3",
    img: "../images/image-11.jpg",
  },
  {
    name: "Driving in Delhi IRL Podcast",
    path: "audio/audio-4.mp3",
    img: "../images/image-11.jpg",
  },
  {
    name: "Driving in Delhi IRL Podcast",
    path: "audio/audio-5.mp3",
    img: "../images/image-11.jpg",
  },
  {
    name: "Driving in Delhi IRL Podcast.mp3",
    path: "audio/audio-6.mp3",
    img: "../images/image-11.jpg",
  },
  {
    name: "Driving in Delhi IRL Podcast",
    path: "audio/audio-7.mp3",
    img: "../images/image-11.jpg",
  },
  {
    name: "Driving in Delhi IRL Podcast",
    path: "audio/audio-8.mp3",
    img: "../images/image-11.jpg",
  },
  {
    name: "Driving in Delhi IRL Podcast.mp3",
    path: "audio/audio-9.mp3",
    img: "../images/image-11.jpg",
  },
  {
    name: "Driving in Delhi IRL Podcast.mp3",
    path: "audio/audio-10.mp3",
    img: "../images/image-11.jpg",
  },
];




// ended and timeupdate

// // Get the <audio> element with id="myVideo"
// let aud = document.getElementById("myVideo");

// // Assign an ontimeupdate event to the <audio> element, and execute a function if the current playback position has changed
// aud.ontimeupdate = function() {myFunction()};

// function myFunction() {
// // Display the current position of the audio in a <p> element with id="demo"
//     document.getElementById("demo").innerHTML = aud.currentTime;
// }



let playing = true;

play.addEventListener("click", () => {
  playing = !playing;
  if (playing) {
    playsong();
    pause.classList.add('fa-circle-pause');
    pause.classList.remove('fa-circle-play')
    element.style.visibility = 'visible';
  } else {
    pausesong();
    pause.classList.remove('fa-circle-pause');
    pause.classList.add('fa-circle-play')
  }
});

next.addEventListener("click", () => {
  console.log("next");
  nextsong();
  playsong();
});

function loadsong() {
  audio.src = songs[i].path;
  img.src = songs[i].img;
  name.textContent = songs[i].name;
}

let i = 0;

function playsong(i) {
  audio.play();
}

function pausesong(i) {
  audio.pause();
}

function nextsong() {
  if (i == songs.length - 1) {
    i = 0;
    loadsong();
    return;
  }
  i++;
  loadsong();
}
function prevsong() {
  if (i == 0) {
    i = songs.length - 1;
    loadsong();
    return;
  }
  i--;
  loadsong();
}

loadsong();

const section=document.querySelector(".section-3")
section.classList.add('left');
section.addEventListener("click",(ev)=>{
    console.log(ev.target.id)
    i=ev.target.id-1;
    loadsong();
    console.log(i)
    if(playing==true){
        playing=false;
        pausesong()
        pause.classList.remove('fa-circle-pause');
        pause.classList.add('fa-circle-play');
        element.style.visibility = 'visible';
    }else{
        playing=true;
        playsong()
        pause.classList.add('fa-circle-pause');
        pause.classList.remove('fa-circle-play')
    }
})

const seeker = document.querySelector('.div');

audio.addEventListener('timeupdate', () => {
  const percent = audio.currentTime / audio.duration * 100;
  seeker.style.width = `${percent}%`;
  // console.log(percent);
});

seeker.addEventListener('input', (e) => {
  audio.currentTime = e.target.value / 100 * audio.duration;
});
const first = document.querySelector('.first-2');
first.addEventListener('click',(e)=>{
  console.log(e.offsetX);
  console.log(first.clientWidth);
  audio.currentTime = (e.offsetX / first.clientWidth) * audio.duration
})