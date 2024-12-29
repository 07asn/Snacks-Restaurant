//EX1
let Customername = prompt("Enter Your Name");
let gender = prompt('Enter Your Gender ("male" | "female")');

if (gender == "male") {
    alert(`Welcome Mr. ${Customername}`);
} else if (gender == "female") {
    alert(`Welcome Ms. ${Customername}`);
} else {
    alert(`Welcome ${Customername}`);
}

let checkOrder = confirm('Do You Want to Order: "shawarma" | "zinger" | "burger" ?');
let order;

if (checkOrder) {
    order = prompt('Write Order Name: "shawarma" | "zinger" | "burger"');
    alert("Your Order is being prepared");
    console.log(`Name: ${Customername} , Order: ${order}`);
} else {    
    alert(`Goodbye ${Customername}`);
    console.log(`Name: ${Customername} , Order: No current order`);
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