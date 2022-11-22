/* random_bg_color();
function random_bg_color(){
  let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
  let a;

  function populate(a){
      for(let i=0; i<6; i++){
          let x = Math.round(Math.random() * 14);
          let y = hex[x];
          a += y;
      }
      return a;
  }
  let Color1 = populate('#');
  let Color2 = populate('#');
  var angle = 'to right';

  let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
  document.body.style.background = gradient;
}
*/

/*document.body.style.backgroundColor = "rgba(0, 0, 0, 100)";*/

document.body.style.backgroundImage = "url('../images/bg.png')";
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundSize = 'fixed';
document.body.style.backgroundSize = 'no-repeat';
document.body.style.backgroundSize = 'center center';



/*____________________________________________*/

new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Seven Lions, Last Heroes & HALIENE - Don't Wanna Fall",
          artist: "HAAMIAH Remix",
          cover: "img/dontwannafall.jpg",
          source: "mp3/Seven Lions, Last Heroes & HALIENE - Don't Wanna Fall (HAAMIAH Remix).wav",
          url: "https://soundcloud.com/haamiah/seven-lions-last-heroes-haliene-dont-wanna-fall-haamiah-remix",
          favorited: false
        },
        {
          name: "Levitate",
          artist: "HAAMIAH",
          cover: "img/levitate.jpg",
          source: "mp3/HAAMIAH - Levitate.wav",
          url: "https://open.spotify.com/track/0mQ0yiOQcOLIp8QprMuALL?si=5bf96df520be4b44",
          favorited: false
        },
        {
          name: "Alan Walker, K-391, Tungevaag, Mangoo - PLAY",
          artist: "HAAMIAH Remix",
          cover: "img/play.jpg",
          source: "mp3/Alan Walker, K-391, Tungevaag, Mangoo - PLAY (HAAMIAH Remix).wav",
          url: "https://soundcloud.com/haamiah/alan-walker-k-391-tungevaag-mangoo-play-haamiah-remix",
          favorited: false
        },
        {
          name: "Whitney Houston - I Learned From The Best",
          artist: "HAAMIAH Remix",
          cover: "img/ilearnedfromthebest.jpg",
          source: "mp3/Whitney Houston - I Learned From The Best (HAAMIAH Remix).mp3",
          url: "https://soundcloud.com/haamiah/whitney-houston-i-learned-from-the-best-haamiah-remix",
          favorited: false
        },
        {
          name: "Gryffin & Illenium ft. Daya - Feel Good",
          artist: "HAAMIAH Remix",
          cover: "img/feelgood.jpg",
          source: "mp3/Gryffin & Illenium ft. Daya - Feel Good (HAAMIAH Remix).wav",
          url: "https://soundcloud.com/haamiah/gryffin-illenium-ft-daya-feel-good-haamiah-remix",
          favorited: false
        },
        {
          name: "DJ Khaled ft. JAY Z, Future & Beyonce - Top Off",
          artist: "HAAMIAH Remix",
          cover: "img/topoff.jpg",
          source: "mp3/DJ Khaled ft. JAY Z, Future & Beyonce - Top Off (HAAMIAH Remix).wav",
          url: "https://soundcloud.com/haamiah/dj-khaled-ft-jay-z-future-beyonce-top-off-haamiah-remix",
          favorited: false
        },
        {
          name: "Thimlife ft. Vanessa Lani - Now Youre Gone",
          artist: "HAAMIAH Remix",
          cover: "img/nowyouregone.jpg",
          source: "mp3/Thimlife ft. Vanessa Lani - Now Youre Gone (HAAMIAH Remix).wav",
          url: "https://soundcloud.com/haamiah/thimlife-ft-vanessa-lani-now-youre-gone-haamiah-remix",
          favorited: false
        },
        {
          name: "HAAMIAH feat. Mandana - Golnar",
          artist: "HAAMIAH feat Mandana",
          cover: "img/Golnar.png",
          source: "mp3/HAAMIAH feat. Mandana - Golnar.wav",
          url: "https://open.spotify.com/track/339k8zbgYIN5MspfqjHrx7?si=9c5914cc1ccf400b",
          favorited: false
        },
        {
          name: "Illenium - Fractures (My Acoustic Cover)",
          artist: "HAAMIAH",
          cover: "img/fractures.jpg",
          source: "mp3/Illenium - Fractures (HAAMIAH Acoustic Cover).wav",
          url: "https://soundcloud.com/haamiah/illenium-fractures-haamiah-acoustic-cover?in=haamiah/sets/acoustic-covers&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
          favorited: false
        },
        {
          name: "HAAMIAH - Inception",
          artist: "HAAMIAH",
          cover: "img/Inception.jpg",
          source: "mp3/HAAMIAH - Inception.wav",
          url: "https://soundcloud.com/haamiah/haamiah-inception",
          favorited: false
        },
        {
          name: "HAAMIAH - Rainy Day",
          artist: "HAAMIAH",
          cover: "img/rainyday.jpg",
          source: "mp3/HAAMIAH - Rainy Day.wav",
          url: "https://soundcloud.com/haamiah/rainy-day",
          favorited: false
        },
        {
          name: "HAAMIAH - Rise Of The Phoenix",
          artist: "HAAMIAH",
          cover: "img/riseofthephoneix.jpg",
          source: "mp3/HAAMIAH - Rise Of The Phoenix.wav",
          url: "https://open.spotify.com/track/25tB7KPUoJ4XTzC83juapi?si=706d7ab8d9254b7a",
          favorited: false
        },
        {
          name: "HAAMIAH - Not Alone",
          artist: "HAAMIAH",
          cover: "img/riseofthephoneix.jpg",
          source: "mp3/HAAMIAH - Not Alone.wav",
          url: "https://open.spotify.com/track/5uvesxMAv48an2YsAJQvJn?si=a8ddffae77484e39",
          favorited: false
        },
        {
          name: "HAAMIAH - Starlight",
          artist: "HAAMIAH",
          cover: "img/riseofthephoneix.jpg",
          source: "mp3/HAAMIAH - Starlight.wav",
          url: "https://open.spotify.com/track/7yryf0UHrIy3f1FMZy13zm?si=47e2057781d04b71",
          favorited: false
        },
        {
          name: "Adventure Club Feat TKST - Wonder",
          artist: "HAAMIAH Remix",
          cover: "img/wonder.jpg",
          source: "mp3/Adventure Club Feat TKST - Wonder (HAAMIAH Remix).wav",
          url: "https://soundcloud.com/haamiah/adventure-club-feat-tkst-wonder-haamiah-remix",
          favorited: false
        },
        {
          name: "3lau ft. Bright Lights - How You Love Me",
          artist: "HAAMIAH Remix",
          cover: "img/howyouloveme.jpg",
          source: "mp3/3lau ft. Bright Lights - How You Love Me (HAAMIAH Remix).wav",
          url: "https://soundcloud.com/haamiah/how-you-love-me-3lau-bright-lights-haamiah-remix",
          favorited: false
        },
        {
          name: "Tiësto & Don Diablo feat Thomas Troelsen - Chemicals",
          artist: "HAAMIAH Remix",
          cover: "img/chemicals.jpg",
          source: "mp3/Tiësto & Don Diablo feat Thomas Troelsen - Chemicals (HAAMIAH Remix).mp3",
          url: "https://soundcloud.com/haamiah/tiesto-don-diablo-feat-thomas-troelsen-chemicals-haamiah-remix",
          favorited: false
        }
        
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
      random_bg_color();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
      random_bg_color();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
      
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
