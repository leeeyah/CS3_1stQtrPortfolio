let age = window.prompt("How old are you?", "13");
let maxAge = window.prompt("What is the maximum age you expect to live to?", "100");
let numPerDay = window.prompt("How many of your favorite snack do you eat per day?", "2");
let totalRequired = (numPerDay * 365) * (maxAge - age)

if(confirm(`Is ${age}, ${maxAge}, and ${numPerDay} correct?`)) {
    alert("You will need " + totalRequired + " Llao Llao to last you until the ripe old age of " + maxAge);
    }
else {
    alert("Run the code again");
}
