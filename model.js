class TaskModel {
    constructor() {
        // Logique qui vérifie si une instance existe déjà
        // si c'est le cas, retourner cette instance plutôt que de créer une nouvelle
        if (TaskModel.instance) {
            return TaskModel.instance;
        }
        TaskModel.instance = this;

        this.tasks = [
            { id: 1, name: "Launch the Goblin Barrel", taskType: "Divers" },
            { id: 2, name: "Defeat the Archer Queen", taskType: "Maison" },
            { id: 3, name: "Destroy the Inferno Tower", taskType: "Travail" }
        ];
    }

    addTask(taskName, taskType) {
        const newTask = {
            id: this.tasks.length + 1,
            name: taskName,
            taskType: taskType,
        };
        this.tasks.push(newTask);
        return newTask;
    }

    getTasksByDifficulty(difficulty) {
        if (difficulty === "All") {
            return this.tasks;
        }
        return this.tasks.filter(task => task.taskType === difficulty);
    }
}
