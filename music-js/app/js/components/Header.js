const headerItem = [
  {
    name: "music",
    isActive: true,
  },
  {
    name: "podcast",
    isActive: false,
  },
  {
    name: "live",
    isActive: false,
  },
  {
    name: "radio",
    isActive: false,
  },
];

class Header {
  $header;
  $headerMenu;

  constructor() {
    this.$header = document.createElement("header");
    this.$header.classList.add("header");

    this.$headerMenu = document.createElement("ul");
    this.$headerMenu.classList.add("menu");
  }

  render() {
    headerItem.forEach((item, index) => {
      this.$headerMenu.innerHTML += `
        <li class="menu-item ${item.isActive ? "active" : ""}">${item.name}</li>
      `;
    });
    this.$header.appendChild(this.$headerMenu);
    return this.$header;
  }
}

export default Header;
