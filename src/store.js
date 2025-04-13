import fs from 'fs';
import path from 'path';

const filePath = path.resolve(__dirname, "../store.json");

// 데이터 불러오기
export function readData() {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading data: ", error);
        return [];
    }
}

// 데이터 저장하기
export function writeData(newData) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(newData, null, 2), 'utf-8');
    } catch (error) {
        console.error("Error writing data: ", error);
    }
}