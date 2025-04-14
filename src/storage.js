// 데이터 불러오기
export function getTasksFromLocalStorage() {
    const data = localStorage.getItem('tasks');
    return data ? JSON.parse(data) : [];
}

// 데이터 저장하기
export function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}