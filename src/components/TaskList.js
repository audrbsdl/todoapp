function TaskList({ tasks, onDeleteTask }) {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    {task}
                    <button className="ListButton" onClick={() => onDeleteTask(index)}>X</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;