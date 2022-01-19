class SidebarCategory {
  $categoryObj;
  $sidebarCategory;
  $sidebarHeading;
  $sidebarMenu;

  constructor(categoryObj) {
    this.$categoryObj = categoryObj;

    this.$sidebarCategory = document.createElement("div");
    this.$sidebarCategory.classList.add("sidebar-category");

    this.$sidebarHeading = document.createElement("h3");
    this.$sidebarHeading.classList.add("sidebar-heading");
    this.$sidebarHeading.textContent = categoryObj.heading;

    this.$sidebarMenu = document.createElement("ul");
    this.$sidebarMenu.classList.add("sidebar-menu");

    this.$categoryObj.menu.forEach((item) => {
      this.$sidebarMenu.innerHTML += `
            <li class="sidebar-item">
                <a href="#!" class="sidebar-link ${
                  item.isActive ? "active" : ""
                }">
                <span class="sidebar-link-icon">
                    ${item.icon}
                </span>
                <span class="sidebar-link-text">${item.text}</span>
                </a>
            </li>
        `;
    });
  }

  render() {
    this.$sidebarCategory.appendChild(this.$sidebarHeading);
    this.$sidebarCategory.appendChild(this.$sidebarMenu);

    return this.$sidebarCategory;
  }
}

export default SidebarCategory;
