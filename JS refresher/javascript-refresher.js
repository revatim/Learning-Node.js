/* Working with objects (Reference types)

*/
const person = {
    name : 'Revati',
    age : 21,
    greet: () => {
        console.log("This will return undefined, this right now refers to the global scope and not the object (if we are using arrow function)");
        console.log(`Hi, I am ${this.name}, I am ${this.age} years old`);
    },
    greet1 () {
        console.log(`Hi, I am ${this.name}, I am ${this.age} years old`);
    }
};

console.log(person);
person.greet();
person.greet1();


/* 
Arrays and Array Methods (Reference types :: basically I can change constants)
*/
const something = ['hi', 'bye', 'tata'];
for (item of something) {
    // Iterating over an array
    console.log(item);
};

//map allows to transform array -> returns new array doesnt edit old arrays

let new_something  = something.map(item => {
    return ('Random: ' + item);
});

console.log(new_something);
console.log(something);


/* Rest and Spread operators */
//immutabilty (pattern) dont edit existing objects

const copiedArray = [...something];  //Spread operator
// Can do same with objects
console.log(copiedArray, " This is an example of Spread Operator -- pull elements from an array or properties from an object ");

//Rest opretaor 

const toArray = (...arr) => {
    return arr;
}

console.log(toArray(1,2,3), " This is an exmaple of rest operator it will take variable arguments --- merge multiple arguments");


/* Destructuring */

const printName = (person) => {
    console.log(person.name);
}

const printName1 = ({name}) => {
    //destructuring
    console.log(name);
}

printName(person);

printName1(person);

const { name : name2, age : age2 } = person;
//Specific objects names can be assigned like this
console.log(name2, age2);



/* Async Code adn Promises */

const fetchData = () => {
    const promise = new Promise( (resolve, reject) => {
            setTimeout( () => {
            resolve('Done');
        }, 1500);
        return promise;
    });
    
};

setTimeout( () => {
    console.log("Timer is done and I am midway!");
    fetchData.then( text => {
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2);
    });
    // 
}, 2000);



/* Basics */

var name = 'Revati';
var age1 = 29;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby
  );
}

console.log(summarizeUser(name, age1, hasHobbies));




//var name = 'Revati';
const surname = 'Mahajan';
let age = 21;

//surname = "mH" // Cannot change const variable  TypeError: Assignment to constant variable
age = 22;

/* Understanding Arrow Functions */

// Anonymous function but stored in a variable - holds function as a value
const summarizeUser1 = function(userName, userAge, userHasHobby) {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby
  );
}

/* this keyword and how arrow function affectes it
https://academind.com/learn/javascript/this-keyword-function-references/

*/
const summarizeUser2 = (userName, userAge, userHasHobby) => {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby
  );
}


//console.log(summarizeUser1(name, age, hasHobbies));
console.log(summarizeUser2(name, age, hasHobbies));


//const add = (a,b) => return (a + b);
const addrand = () => 1 + 2;