// Objects

let obj = { name: "Cipher" }
// console.log(obj);

let person ={
    name: 'John',
    email: 'john@wick.com',
    count: 0,
    age: 45,
    status: true, 
    children: {
        name: 'Jay'
    },  
    hobbies: ['Reading', 'Writing', true, 100, null], // Array
}

let dynamicPropValue = 'age';

console.log(person[dynamicPropValue]); // !=== person.clickedName
console.log(person['age']); // === person.age
console.log(person[children]);

person.country = 'India';
console.log(person);

let year = 2020;
console.log(year);


person['country'] = 'India';

console.log(typeof person.hobbies);
console.log(typeof null);