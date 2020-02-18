function s(w1, w2) {
    return w1.concat(' ',w2);
}

var result = s('code', 'your');
console.log(result);

// Answer these questions:
// - What does this program do? Run it and see, or Google some of the methods used ot understand them.
        // The concat() method is used to join two or more strings.
// - How many parameters does the function take?
        // Tow Parameters w1 and w2
// - What is the function name?
        // s is the name of function
// - Where is the function called? with what parameters?
        // console.log(result);
// - What does the function return?
        //  w1 . concat (w2);
// - How can this function be improved?
        // we can add space between worlds --> return w1.concat(' ',w2);