const Stack = require('./stack')

function validateBrackets(brackets) {
    const stack = new Stack();
    const acceptedString = '[](){}';
    for (let i = 0; i < brackets.length; i++) {
        if (brackets[i] == '[' || brackets[i] == "(" || brackets[i] == "{") {
            stack.push(brackets[i]);
        }
        else {
            if (stack.isEmpty()) {
                return false;
            }
            if (!acceptedString.includes(brackets[i])) {
                continue;
            }
            if (brackets[i] == ']' && stack.peek() != '[' || brackets[i] == '}' && stack.peek() != '{' || brackets[i] == ')' && stack.peek() != '(') {
                return false;
            }
            stack.pop();
        }
    }
    return stack.isEmpty();
}
module.exports = validateBrackets;