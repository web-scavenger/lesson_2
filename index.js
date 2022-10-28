let PI = 3.14


/**
 * string = ''
 */


// ==== STRING =====
const str1 = 'SISTer\'s'
const str2 = "room"

const error = 'Error 3'

const message = ''

const str3 = `Error ${message}: ${error}`


let age = 24; // number
age = String(age);

let a = 12;
let b = a;
a = 'Anna';
b = true





// ===== NUMBER ====

const number = 1;

let nextNumber = 'asd';

// console.log(nextNumber, typeof nextNumber);

nextNumber = Number(nextNumber);

const maxValue = BigInt('9')

const maxValue2 = 9n



// ==== Boolean ====

const truth = true // 1 'asdas'
const fail = false; // 0 ''

const testvariable = {'name': 'name'}

const testBoolean = Boolean(testvariable)

let name = 'dima';

// null | undefined


name = null;

// ==== OBJECT ====

const obj = {
  key: 'a',
  1: 4,
  key: true,
  undefined: 'undefined',
  null: null,
  true: 'fal',

  testFunction: function () {
    return 'Hello'
  }
}

console.log(obj.testFunction())