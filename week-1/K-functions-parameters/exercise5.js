// Declare your function here
function createLongGreeting (text, num){
    let a = "Hello, My name is" + ' ' + text;
    let b = "and I'm" + ' ' + num + ' ' + 'years old';
    return a.concat(b);
}
const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
