const addForm = document.querySelector('.add');
const list = document.querySelector('.list-group');

const addTodo = (todo) => {
  const html = `
   <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
   </li>
  `;

  list.innerHTML += html;
};

// add todo
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    addTodo(todo);
    addForm.reset();
  }
});

// delete todo
list.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

const seacrhTodo = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtured'));
  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtured'));
};

// search todo
const search = document.querySelector('.search input');
search.addEventListener('keyup', (e) => {
  e.preventDefault();
  const term = search.value.trim().toLowerCase();
  seacrhTodo(term);
});
