/* JavaScript for Home header */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

async function loadCategories() {
  const response = await fetch("../data/categories.json");
  const categories = await response.json();

  const grid = document.getElementById("categoryGrid");

  categories.forEach((category) => {
    const card = document.createElement("div");
    card.classList.add("category-card");

    card.innerHTML = `
      <div class="category-image-box">
        <img src="../images/data/category/${category.categoryID}.jpg" alt="${category.name}" />
      </div>
      <p class="category-name">${category.name}</p>
    `;

    grid.appendChild(card);
  });
}

loadCategories();