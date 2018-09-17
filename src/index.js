module.exports = function check(str, bracketsConfig) {
    let bracketsArray;
    bracketsArray = str.split("");
    if (bracketsArray.length % 2 !== 0) return false;
    let stack = [];
    for (let i = 0; i < bracketsArray.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if ((bracketsConfig[j][1].indexOf(bracketsArray[i])) === 0 && bracketsConfig[j][0] === stack[stack.length - 1] && stack.length > 0) {
                stack.pop();
            }
            else if ((bracketsConfig[j][0].indexOf(bracketsArray[i])) === 0) {
                stack.push(bracketsArray[i])
            }
        }
    }
    if (stack.length > 0) return false;
    return true;
};
