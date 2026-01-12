const input = document.querySelector('#favchap');
const addButton = document.querySelector('button');
const list = document.querySelector('#chapterList');

addButton.addEventListener('click', () => {
  const chapter = input.value.trim();

  if (chapter !== '') {
    const li = document.createElement('li');
    li.textContent = chapter;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';

    li.append(deleteBtn);

    list.append(li);

    input.value = '';
  } else {
    alert('Please enter a chapter.');
  }

  input.focus();
});

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});