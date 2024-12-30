//EX1 & EX3
const userInfo = [];

userInfo[0] = prompt("Enter Your Name");
userInfo[1] = prompt('Enter Your Gender ("male" | "female")');
askGender();

function askGender() {
    if (userInfo[1] == "male") {
        alert(`Welcome Mr. ${userInfo[0]}`);
    } else if (userInfo[1] == "female") {
        alert(`Welcome Ms. ${userInfo[0]}`);
    } else {
        alert(`Welcome ${userInfo[0]}`);
    }
}

let checkOrder = confirm('Do You Want to Order: "shawarma" | "zinger" | "burger" ?');

if (checkOrder) {
    userInfo[2] = prompt('Write Order Name: "shawarma" | "zinger" | "burger"');
    alert("Your Order is being prepared");
    console.log(`Name: ${userInfo[0]} , Order: ${userInfo[2]}`);
} else {    
    alert(`Goodbye ${userInfo[0]}`);
    console.log(`Name: ${userInfo[0]} , Order: No current order`);
}

//Q2
let num = Math.floor(Math.random() * 10);
switch(num){
    case 1: 
    {
        console.log("ONE");
        break;
    }
    case 2: 
    {
        console.log("TWO");
        break;
    }    
    case 3: 
    {
        console.log("THREE");
        break;
    }
    case 4: 
    {
        console.log("FOUR");
        break;
    }
    case 5: 
    {
        console.log("FIVE");
        break;
    }
    case 6: 
    {
        console.log("SIX");
        break;
    }    
    case 7: 
    {
        console.log("SEVEN");
        break;
    }
    case 8: 
    {
        console.log("EIGHT");
        break;
    }
    case 9: 
    {
        console.log("NINE");
        break;
    }
    case 10: 
    {
        console.log("TEN");
        break;
    }
    default: {
        console.log("PLEASE TRY AGAIN");
        break;
    }    
}

for (let index = 0; index < userInfo.length; index++) {
    console.log(userInfo[index]);
}