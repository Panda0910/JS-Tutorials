import SidebarCategory from "./SidebarCategory.js";

class Sidebar {
  $sidebar;
  $sidebarBrand;
  $categories;

  constructor(categories) {
    this.$sidebar = document.createElement("div");
    this.$sidebar.classList.add("sidebar");

    this.$sidebarBrand = document.createElement("a");
    this.$sidebarBrand.classList.add("sidebar-brand");
    this.$sidebarBrand.setAttribute("href", "/");
    this.$sidebarBrand.innerHTML = `
      <span><ion-icon name="play-circle"></ion-icon></span>
      <span>Panda</span>
    `;

    this.$categories = categories;
  }

  render() {
    this.$sidebar.appendChild(this.$sidebarBrand);
    this.$categories.forEach((category) => {
      const sidebarCategoryChild = new SidebarCategory(category);
      this.$sidebar.appendChild(sidebarCategoryChild.render());
    });
    return this.$sidebar;
  }
}

export default Sidebar;
