function TaskList({ tasks, onDeleteTask }) {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    {task}
                    <button onClick={() => onDeleteTask(index)}>X</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;