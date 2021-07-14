let userInput: unknown; // Unknown Type
// Unknown is preferred over any if unsure what type is stored in a variable (with a valid type check through an if statement). Still should not be used frequently (union types are more ideal in most cases).

let userName: string;

userInput = 5;
userInput = 'Jeremy';
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  // Never type
  // Never type is intended to never return anything from any function with the never type
  throw { message: message, errorCode: code };
}

generateError('An error occurred!', 500);
