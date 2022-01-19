import Header from "./Header.js";
import Music from "./Music.js";

class Main {
  $main;
  $mainHeader;
  $mainMusic;

  constructor() {
    this.$main = document.createElement("main");
    this.$mainHeader = new Header();
    this.$mainMusic = new Music();
  }

  render() {
    this.$main.appendChild(this.$mainHeader.render());
    this.$main.appendChild(this.$mainMusic.render());
    return this.$main;
  }
}

export default Main;
