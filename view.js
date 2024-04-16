class TaskView {
    constructor() {
        this.taskListElement = document.getElementById('tasksList');
        this.taskNameElement = document.getElementById('taskName');
        this.taskTypeElement = document.getElementById('taskType');
    }

    displaySortedTasks(tasks) {
        this.taskListElement.innerHTML = '';
        tasks.forEach(task => {
            this.addTaskToList(task);
        });
    }

    addTaskToList(task) {
        const item = document.createElement('li');
        const taskColor = this.getColorForTaskType(task.taskType);
        item.style.color = taskColor;
        item.innerHTML = `Task ${task.id}: ${task.name}, ${task.taskType}`;
        this.taskListElement.appendChild(item);
    }

    getColorForTaskType(taskType) {
        switch (taskType) {
            case "Divers":
                return "green";
            case "Maison":
                return "orange";
            case "Travail":
                return "red";
            default:
                return "black";
        }
    }

    clearInput() {
        this.taskNameElement.value = '';
        this.taskTypeElement.value = 'Divers';
    }
}
