const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the input value for the task
    const taskName = document.getElementById('insertTask').value.trim();

    if (taskName) {
        // Create a new task item
        createTaskItem(taskName);

        // Clear field 
        document.getElementById('insertTask').value = '';
    }
});

// Create new task item
const createTaskItem = (taskName) => {
    const taskItem = document.createElement('li');

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

 
    const taskText = document.createElement('span');
    taskText.textContent = taskName;

    checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            taskText.classList.add('completed');
        } else {
            taskText.classList.remove('completed');
        }
    });

    // Delete icon
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa-solid fa-trash'; 
    deleteIcon.classList.add('delete-icon'); 
    deleteIcon.addEventListener('click', () => {
        taskList.removeChild(taskItem); 
    });

 
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText); 
    taskItem.appendChild(deleteIcon);


    taskList.appendChild(taskItem);
};
