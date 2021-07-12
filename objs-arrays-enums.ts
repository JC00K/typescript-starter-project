// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // Tuple type
// } = {

//   const person = {
//   name: 'Jeremy',
//   age: 29,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };

// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

enum Role { // Enum Type
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Jeremy',
  age: 29,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
