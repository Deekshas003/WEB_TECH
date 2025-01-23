// using var
var username = "pyspiders";
console.log("username:", username);

{
    console.log("username inside the block:", username);
    var location = "basvangudi"; // Corrected the variable name
}
console.log("outside the code location:", location); // Now it will work

// re-initialization
username = "ptspiders institution";
console.log("username after re-initialization:", username);

// re-declaration
var username = "qspiders";
console.log("username after re-declaration:", username);


