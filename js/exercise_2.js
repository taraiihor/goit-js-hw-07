const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const listingredientsEl = document.querySelector("#ingredients");

const elements = ingredients.map((option) => {
  const ingredientsItemEl = document.createElement("li");
  ingredientsItemEl.classList.add("ingredients__item");
  ingredientsItemEl.textContent = option;

  return ingredientsItemEl;
});

listingredientsEl.append(...elements);
