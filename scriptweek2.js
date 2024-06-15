document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const taskInput = document.getElementById('task-input').value;
    const categoryInput = document.getElementById('category-input').value;
    const priorityInput = document.getElementById('priority-input').value;
    const li = document.createElement('li');
    li.className = `priority-${priorityInput}`;
    li.innerHTML = `
        <span>${taskInput} - ${categoryInput}</span>
        <button onclick="toggleDone(this)">Done</button>
    `;
    const taskList = document.getElementById('task-list');
    taskList.appendChild(li);
    document.getElementById('task-input').value = '';
    document.getElementById('category-input').value = '';
    document.getElementById('priority-input').value = '1';

    sortTasks();
});

function toggleDone(button) {
    const li = button.parentElement;
    li.classList.toggle('strike');
}

function sortTasks() {
    const taskList = document.getElementById('task-list');
    const tasks = Array.from(taskList.children);

    tasks.sort((a, b) => {
        const priorityA = a.className.split('-')[1];
        const priorityB = b.className.split('-')[1];

        if (priorityA < priorityB) return -1;
        if (priorityA > priorityB) return 1;
        return 0;
    });

    taskList.innerHTML = '';
    tasks.forEach(task => taskList.appendChild(task));
}
