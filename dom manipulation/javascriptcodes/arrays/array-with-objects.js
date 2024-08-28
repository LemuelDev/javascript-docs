// exer 11
// Create an array of objects with each object representing a person with a name and age property. Use the .find() method to find the person with the age of 25.
let people = [
    { name: 'Alice', age: 23 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 26 }
  ];
  
  let personWithAge25 = people.find(function(person) {
    return person.age === 25;
  });
  
  console.log(personWithAge25); // prints { name: 'Bob', age: 25 }