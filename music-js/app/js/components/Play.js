export default class Play {
  $play;
  constructor() {
    this.$play = document.createElement("div");
    this.$play.classList.add("play");

    this.$play.innerHTML = `
        <h3 class="play-heading">now playing</h3>
        <div class="play-box">
          <img class="play-img" src="./img/play.jpg" />
          <div class="play-info">
              <h6 class="play-name">beautiful in white</h6>
              <p class="play-artist">westlife</p>
              <div class="play-progress">
                  <input type="range" min="0" max="100" value="63" />
              </div>
              <div class="play-option">
                  <ion-icon name="repeat"></ion-icon>
                  <ion-icon name="play-skip-back"></ion-icon>
                  <ion-icon name="play"></ion-icon>
                  <ion-icon name="play-skip-forward"></ion-icon>
                  <ion-icon name="shuffle"></ion-icon>
              </div>
          </div>
        </div>
    `;
  }

  render() {
    return this.$play;
  }
}
