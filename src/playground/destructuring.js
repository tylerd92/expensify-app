// Object Destructuring

// const person = {
//   name: 'Tyler',
//   age: 27,
//   location: {
//     city: 'Brooklyn',
//     temp: 78
//   }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-published'} = book.publisher;
// console.log(publisherName); //Penguin, default: Self-published

// Array Destructuring
// const address = ['1299 S Juniper St', 'Philadelphia', 'Pennsylvania', '19147'];
// // const [street, city, state, zip] = address;
// const [, city, state = 'New York'] = address; // use only what you need
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [beverage, , mediumPrice] = item;
console.log(`A medium ${beverage} costs ${mediumPrice}`);