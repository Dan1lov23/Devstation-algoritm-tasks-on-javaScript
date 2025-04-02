function check(symbol) {
    let checkArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (let a = 0; a < checkArray.length; a++) {
        if (symbol === checkArray[a]) {
            return true;
        }
    }
    return false;
}

function isAValidMessage(message) {
    let string = "";
    let stringArray = [];
    let numArray= [];
    if (message.length === 0) {
        return true;
    } else if (message.length === 1 && message[0] === "0") {
        return true;
    } else if (check(message[0]) === false) {
        return false;
    }
    for (let a = 0; a < message.length; a++) {
        if (check(message[a]) === true && check(message[a + 1]) === true) {
            let num = message[a] + message[a + 1];
            numArray.push(num);
            stringArray.push(string);
            string = "";
        } else if (check(message[a]) === true && check(message[a - 1]) === false && check(message[a + 1]) === false) {
            numArray.push(message[a]);
            if (string !== "") {
                stringArray.push(string);
            }
            string = "";
        } else if (check(message[a]) === false) {
            string += message[a];
            if (a === message.length - 1) {
                stringArray.push(string);
            }
        }
    }
    for (let a = 0; a < numArray.length; a++) {
        if (Number(numArray[a]) !== String(stringArray[a]).length) {
            return false;
        }
    }
    return true;
}