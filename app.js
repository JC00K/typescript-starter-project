var userInput; // Unknown Type
// Unknown is preferred over any if unsure what type is stored in a variable (with a valid type check through an if statement). Still should not be used frequently (union types are more ideal in most cases).
var userName;
userInput = 5;
userInput = 'Jeremy';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
