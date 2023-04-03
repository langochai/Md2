// Example 1: Here we have copied the array
// by using spread operator.
const cars1 = ["AUDI","BMW","TATA","MERCEDES"];
// Copied elements from cars1 to cars2 here
const cars2 = [...cars1];

// Copied elements from cars1 to cars3 here
// and also add some new elements in cars3
const cars3 = [...cars1,"NISSAN","TOYOTA"];

console.log(cars1);
console.log(cars2);
console.log(cars3);



// Example 2: Use spread operator for merging arrays
const cars1 = ["AUDI","BMW","TATA","MERCEDES"];
const cars2 = ["NISSAN","TOYOTA"];
// copied elements from cars1 and cars2 to cars3 here
const cars3 = [...cars1, ...cars2];

console.log(cars3);



// Example 3: We will use the spread operator with objects
// cars1 object
const cars1 = {
    Brand : "BMW",
    Color : "RED"
}
// copy cars1 object using spread
// operator to create cars2 object
const cars2 = {...cars1};
console.log(cars2);



//Example 4: We will use spread operator for merging objects.
// cars1 is a object which is containing
// the attributes Brand  & Color
const cars1 = {
    Brand : "Toyota",
    Color : "RED"
}
// cars2 is a object which is containing
// the attributes Brand, Color & Year
const cars2 = {
    Brand : "Nissan",
    Color : "BLUE",
    Year : 2004
}
const cars3 = {...cars1,...cars2};
console.log(cars3);



// Example 6: Use the spread operator with array destructuring.
const numbers = [3,5,7,8,9];
// Here we assign a,b and c with 3,5 and 7,
// the rest of the elements will all go to others
const [a,b,c,...others] = numbers;
console.log(a);
console.log(b);
console.log(c);
console.log(others);


