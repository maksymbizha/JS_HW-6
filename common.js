/*   Вариант 1 */

const a = + prompt('Enter the first number?');
const  b = + prompt('Enter the second number?');
const c = + prompt('Enter the third number?');

let sum = (a + b + c) / 3;


if (!isNaN(a) && !isNaN(b) && !isNaN(c)){

    alert(`(${a} + ${b} + ${c}) / 3 = ${sum}`);

} else {
    alert('Not a valid operation.')
}


/*   Вариант 2



const a = + prompt('Enter the first number?');
let b;
let c;
let sum = (a + b + c) / 3;

if (!isNaN(a)){
    b = + prompt('Enter the second number?');

    if (!isNaN(b)){
        c = + prompt('Enter the third number?');

        if (!isNaN(c)){


            alert(`(${a} + ${b} + ${c}) / 3 = ${sum}`);

        }else {
            alert('Not a valid operation.')
        }

    }else {
        alert('Not a valid operation.')
    }

} else {
    alert('Not a valid operation.')
}
*/
