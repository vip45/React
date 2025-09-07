# Javascript is a synchronous single threaded language

# Hoisting :
 Hoisting is a javascript default behaviour of moving variables and functions to the top of their scope this happens during creation phase of the execution context ,
 But only declarations are hoisted, not initializations

# Hoisting with VAR :
console.log(a); // undefined
var a = 5;
console.log(a); // 5

In case of var the declarations are hoisted but not the initialization
Variables declared with var are hoisted and initialized with Undefined
var is a function scoped not blocked scoped 

# Hoisting with let and const : 
let and const are hoisted but not initialized they stay in temporal deadzone (TDZ)
it gives reference error

internally variable is hoisted but in TDZ
accessing before initializing gives reference error

SAME WITH CONST BUT WITH AN EXTRA RULE :
Const must initialized at the declartion or it will give Syntaxt error
eg : const c; syntax error, const c = 10 // correct

unlike var , let and const are block scoped 

# Hoisting with Functions 
# Function Declarations
    Functions are fully hoisted 
    both name and function body is hoisted in top

    sayHello(); // ✅ Works: "Hello"
    function sayHello() {
      console.log("Hello");
    }

# Function Expressions
    If you assign a function to a variable using var, only the variable declaration is hoisted, not the function body.
So it behaves like var hoisting → initialized with undefined.
same with let and const 
If you use let or const for function expressions, they are hoisted into the temporal dead zone (TDZ), so accessing them before declaration gives a ReferenceError.

# Temporal DeadZone :
    It is a time between when a variable is hoisted and when it is initialized .
    Variables let and const are hoisted but not initialized like var with undefined
    untill the line where they are declared they are in TDZ
    accessing them during this time causes a REFERENCE ERROR

    ✅ In short:
    The TDZ prevents accessing let and const variables before their declaration line is executed, even though they are hoisted.

# Hoisting Summary
var → Hoisted & initialized with undefined.
let and const → Hoisted but in TDZ (can’t access before declaration).
Function declarations → Fully hoisted.
Function expressions & arrow functions → Behave like variables (var / let / const).

# Undefined vs Not-Defined
    Undefined means the variable is defined but has not assigned a value to yet
    Not Defined means the variable does not exist at all (reference error)

# Scope
Scope defines where a variable or function cab be accessed in our code
Types:
    1: Global
    2: Function
    3: Block

# Lexical Environment
A Lexical environment is a structure that holds
Local Memory 
Reference to its outer function

# Shadowing
When a variable in a local/block scope has the same name as a variable in an outer scope, the inner variable shadows the outer one. Shadowing is allowed between different declaration types (e.g., var outside and let inside), but illegal if let/const is shadowed by var in the same scope.

# Closures
A Closure is created when a function remembers the variables from its outer scope , even after that outer function has finished executing
In Simple Terms : A closure is a function bundled with its lexical environment 

