const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsUlRef = document.querySelector('#ingredients');

const ingredientsList = ingredients.map(ingredient => {
  const ingredientsLiRef = document.createElement('li');
  ingredientsLiRef.textContent = ingredient;
  return ingredientsLiRef;
});

ingredientsUlRef.append(...ingredientsList);

// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//  после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().
