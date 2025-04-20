import { useState } from "react";

function Input({ onAddTask }) {
    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        if (inputValue.trim()) {
            onAddTask(inputValue);
            setInputValue('');
        }
    }

    const activeEnter = (e) => {
        if(e.key === "Enter") {
            handleAdd();
        }
    }

    return (
        <div>
            <input
                type="text"
                className="Input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => activeEnter(e)}
            />
            <button className="Button" onClick={handleAdd}>Add</button>
        </div>
    );
}

export default Input;