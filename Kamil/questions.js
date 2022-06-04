/*
    1. Write an expression which selects every <p> element in the document (write in all ways you know)
*/

const pelmnt = document.querySelector("p");
const j = document.querySelectorAll("p");
const v = document.getElementsByName("p");
const w = document.getElementsByTagName("p");


/*
    2. Write an expression which selects every element with the wrapper class in the document (write in all ways you know)
*/
const a = document.querySelectorAll('.wrapper')
const y = document.getElementsByClassName('.wrapper')
/*
    3. You are given an array [1,2,3,4,5,6,7,8,9,10], create a new array based on this one which only contains numbers can divide by two (with built in array methods)
*/
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function newArray(c) {
    for (let i = 0; i < c.lenght; i++) {
        if (c[i] % 2 == '0') {
            let b;
            b.push(c[i])
        }
    } return b;
}

/*
    4. You are given an array [1,2,3,4,5,6,7,8,9,10], create a new array based on this one which is multiplied versions of every element in the array(with built in array methods)
*/
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiple(a) {
    let c;
    for (let i = 0; i < a.lenght; i++) {
        c = a.push(a[i] * 2)
    }
    return c;
}

/*
    5. Write a custom method which accepts an array and returns an array with all the values duplicated
    input: [1,2,3,4,5]
    expected output: [1,2,3,4,5,1,2,3,4,5]
    
*/
let c = [1, 2, 3, 4, 5];
function copyArray(a) {
    let copiedarr;
    return copiedarr = a.concat(a)

}

/*
    6. Write a custom method with name 'multiply' which can be invoked like the example below:
    multiply(2)(3)(5)
    expected output: 30
*/


/*
    7. [1,2,3,4,5,6,7,8,9,10], check with an array method if the array only contains numbers greater than 5
*/
let c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
c.every(cb());

function cb(x) {
    for (let i = 0; i < x.lenght; i++) {
        if (x[i] > 5) {
            return true;
        } else {
            return false;
        }
    }
}
/*
    8. [1,2,3,4,5,6,7,8,9,10], check with an array method if the array at least contains one element which divides by 2
*/
let c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

c.some(cb());

function cb(x) {
    for (let i = 0; i < x.lenght; i++) {
        if (x[i] % 2 == '0') {
            return true;
        }
    }

}

/*
    9.  What will be the output of the following code?
        var Employee = {
            company: 'xyz'
        }
        var emp1 = Object.create(Employee);
        delete emp1.company
        console.log(emp1.company);
*/
// nothing because deleted;
/*
    10. I wrote a function, how can i know how many arguments provided to my function
*/


/*
    11. You are given an array like [1,2,3,4], how can you empty array? (write in )
    input: [1, 2, 3, 4]
    output: []
*/
let a = [1, 2, 3, 4]
function removearr(a) {
    for (let i = 0; i < a.lenght; a++) {
        a.pop(a[i])
    }
    return a;
}
console.log(removearr(a))