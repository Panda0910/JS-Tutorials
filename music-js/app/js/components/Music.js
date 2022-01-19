const musicChildren = [
  {
    heading: "global top 50",
    playlists: [
      {
        imgSrc: "./img/01.jfif",
        name: "told you so",
        author: "paramore",
      },
      {
        imgSrc: "./img/02.jfif",
        name: "the adventure",
        author: "angles & airwaves",
      },
      {
        imgSrc: "./img/03.jfif",
        name: "paradise city",
        author: "gun n roses",
      },
      {
        imgSrc: "./img/04.jfif",
        name: "18 and life",
        author: "skid row",
      },
    ],
  },
  {
    heading: "song you might like",
    playlists: [
      {
        imgSrc: "./img/02.jfif",
        name: "last hope",
        author: "paramore",
      },
      {
        imgSrc: "./img/04.jfif",
        name: "basket case",
        author: "green day",
      },
      {
        imgSrc: "./img/01.jfif",
        name: "Patience",
        author: "gun n roses",
      },
      {
        imgSrc: "./img/03.jfif",
        name: "jet lag",
        author: "simple plan",
      },
    ],
  },
];

import Play from "./Play.js";

class Music {
  $music;
  $musicPlay;

  constructor() {
    this.$music = document.createElement("section");
    this.$music.classList.add("music");

    this.$musicPlay = new Play();
  }

  render() {
    musicChildren.forEach(({ heading, playlists }) => {
      const musicChild = document.createElement("div");
      musicChild.classList.add("music-box");
      musicChild.innerHTML = `
            <div class="music-info">
                <h3 class="music-heading">${heading}</h3>
                <a href="#!" class="music-btn">see all</a>
            </div>
        `;

      let playlist = document.createElement("div");
      playlist.classList.add("playlist");
      playlists.forEach(({ imgSrc, name, author }) => {
        playlist.innerHTML += `
                <div class="playlist-item">
                    <div class="playlist-img">
                        <img
                            src="${imgSrc}"
                            alt="Background của playlist"
                        />
                        <ion-icon name="play"></ion-icon>
                    </div>
                    <div class="playlist-info">
                        <h5 class="playlist-name">${name}</h5>
                        <p class="playlist-author">${author}</p>
                    </div>
                </div>
            `;
      });

      musicChild.appendChild(playlist);

      this.$music.appendChild(musicChild);
    });

    this.$music.appendChild(this.$musicPlay.render());
    return this.$music;
  }
}

export default Music;
