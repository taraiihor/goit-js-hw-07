const numberCategoriesItems = document.querySelector("#categories");
const itemEl = numberCategoriesItems.querySelectorAll(".item");

console.log(`У списку ${itemEl.length} категорії.`);

itemEl.forEach((element) => {
  const title = element.querySelector("h2");
  const numberItems = element.querySelectorAll("li");
  console.log(
    `Категорія: ${title.textContent} Кількість елементів: ${numberItems.length}`
  );
});
