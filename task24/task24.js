// Напишите функцию humanReadable(seconds), которая принимает неотрицательное целое число
// (секунды) в качестве входных данных и возвращает время в читабельном формате HH:MM:SS.

function humanReadable(seconds) {
    if (seconds < 0) {
        throw new Error('Seconds must be a non-negative integer.');
    }
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const remainingSeconds = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${remainingSeconds}`;
}

humanReadable(59);
