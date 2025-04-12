// Напишите функцию validBraces(braces), которая принимает строку braces в качестве параметра
// и проверяет корректность расположения скобок в этой строке.
// Функция должна возвращать true, если порядок скобок верный, иначе false.
// Строка считается корректной, если каждой открывающей скобке соответствует закрывающая скобка.

function validBraces(braces) {
    let s11 = 0
    let s12 = 0;
    let s21 = 0;
    let s22 = 0;
    let s31 = 0;
    let s32 = 0;
    for (let a = 0; a < braces.length; a++) {
        if (braces[a] === "{") {
            s11++;
        } else if (braces[a] === "}") {
            s12++;
        } else if (braces[a] === "(") {
            s21++;
        } else if (braces[a] === ")") {
            s22++;
        } else if (braces[a] === "[") {
            s31++;
        } else if (braces[a] === "]") {
            s32++;
        }
    }
    console.log(s11, s12, s21, s22, s31, s32);
    if (s11 !== s12 || s21 !== s22 || s31 !== s32) {
        return false;
    }
    return true;
}

console.log(validBraces("())({}}{()][]["));
