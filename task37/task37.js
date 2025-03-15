// Реализуйте функцию isValidTime(s), которая проверяет,
// является ли переданная строка валидным представлением времени в формате HH:MM.
// Если да, то функция возвращает true, если нет, то false.
// Строка s всегда будет в формате "HH:MM".

function isValidTime(s) {
    s = s.split(":");
    let hours = Number(s[0]);
    let minutes = Number(s[1]);
    if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
        return true;
    }
    return false;
}

console.log(isValidTime("06:60"))   ;
