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
    checkbox.addEventListener('change', (e) => {
        // Toggle the completed class when checkbox state changes
        if (e.target.checked) {
            taskItem.classList.add('completed');
        } else {
            taskItem.classList.remove('completed');
        }
    });

    const taskText = document.createElement('span');
    taskText.textContent = taskName;


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
