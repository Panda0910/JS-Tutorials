import Sidebar from "./components/Sidebar.js";
import Main from "./components/Main.js";

const app = document.querySelector("#app");

const sidebarCategory = [
  {
    heading: "menu",
    menu: [
      {
        icon: `<ion-icon name="home"></ion-icon>`,
        text: "home",
        isActive: true,
      },
      {
        icon: `<ion-icon name="search"></ion-icon>`,
        text: "search",
        isActive: false,
      },
      {
        icon: `<ion-icon name="compass"></ion-icon>`,
        text: "discorver",
        isActive: false,
      },
      {
        icon: `<ion-icon name="albums"></ion-icon>`,
        text: "album",
        isActive: false,
      },
      {
        icon: `<ion-icon name="person"></ion-icon>`,
        text: "artist",
        isActive: false,
      },
    ],
  },
  {
    heading: "library",
    menu: [
      {
        icon: `<ion-icon name="time"></ion-icon>`,
        text: "recent",
        isActive: false,
      },
      {
        icon: `<ion-icon name="heart"></ion-icon>`,
        text: "favorite",
        isActive: false,
      },
      {
        icon: `<ion-icon name="folder"></ion-icon>`,
        text: "local",
        isActive: false,
      },
    ],
  },
];
const sidebar = new Sidebar(sidebarCategory);
const main = new Main();

app.appendChild(sidebar.render());
app.appendChild(main.render());
