import { useState } from "react";

function Input({ onAddTask }) {
    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        if (inputValue.trim()) {
            onAddTask(inputValue);
            setInputValue('');
        }
    }

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

export default Input;