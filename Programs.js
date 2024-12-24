//  Month Evaluation
let month = 5;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month");
}

// check season
let monthNum = 11;
switch (monthNum) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Invalid month");
}




// Check Traffic Light 
let lightColor = "red";
switch (lightColor) {
    case "red":
        console.log("Stop!");
        break;
    case "yellow":
        console.log("Caution!");
        break;
    case "green":
        console.log("Go!");
        break;
    default:
        console.log("Invalid color");
}


// User Role Access

let userRole = "admin";
switch (userRole) {
    case "admin":
        console.log("Access granted: Admin privileges.");
        break;
    case "editor":
        console.log("Access granted: Editor privileges.");
        break;
    case "viewer":
        console.log("Access granted: Viewer privileges.");
        break;
    default:
        console.log("Access denied.");
}


//  Calculate the Sum of First 10 Natural Numbers
console.log("\n2. Calculate the Sum of First 10 Natural Numbers:");
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum: " + sum);


//  Print Even Numbers from 1 to 20
console.log("\n3. Print Even Numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


//  Print Odd Numbers from 1 to 20
console.log("\n4. Print Odd Numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Factorial of a Number
console.log("\n5. Factorial of a Number:");
let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log("Factorial of " + num + ": " + factorial);