const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const emptyMessage = document.getElementById('emptyMessage');

function updateEmptyMessage() {
  if (taskList.children.length === 0) {
    emptyMessage.style.display = 'block';
  } else {
    emptyMessage.style.display = 'none';
  }
}

function createTaskItem(taskText) {
  const li = document.createElement('li');
  li.className = 'taskItem';
  
  const span = document.createElement('span');
  span.textContent = taskText;
  
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Remover';
  deleteBtn.className = 'deleteBtn';
  deleteBtn.onclick = function () {
    li.remove();
    updateEmptyMessage();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);
  
  return li;
}

addTaskBtn.addEventListener('click', function() {
  const taskText = taskInput.value.trim();
  
  if (taskText !== '') {
    const taskItem = createTaskItem(taskText);
    taskList.appendChild(taskItem);
    taskInput.value = '';
    updateEmptyMessage();
  } else {
    alert('Por favor, digite uma tarefa!');
  }
});

updateEmptyMessage();
