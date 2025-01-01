//EX1 & EX3 & EX4
const userInfo = [];

userInfo[0] = prompt("Enter Your Name");
askGender();
order();
viewUserInfo(userInfo);

function askGender() {
    userInfo[1] = prompt('Enter Your Gender ("male" | "female")');
    if (userInfo[1] == "male") {
        alert(`Welcome Mr. ${userInfo[0]}`);
    } else if (userInfo[1] == "female") {
        alert(`Welcome Ms. ${userInfo[0]}`);
    } else {
        alert(`Welcome ${userInfo[0]}`);
    }
}

function order(){
    let checkOrder = confirm('Do You Want to Order: "shawarma" | "zinger" | "burger" ?');
    if (checkOrder) {
        userInfo[2] = prompt('Write Order Name: "shawarma" | "zinger" | "burger"');
        alert("Your Order is being prepared");
        console.log(`Name: ${userInfo[0]} , Order: ${userInfo[2]}`);
    } else {    
        alert(`Goodbye ${userInfo[0]}`);
        console.log(`Name: ${userInfo[0]} , Order: No current order`);
    }
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
function printUserInfo(){
    for (let index = 0; index < userInfo.length; index++) 
        console.log(userInfo[index]);
}

function viewUserInfo(userInfo){
    //Select
    const mainContainer = document.querySelector('.container'); 

    // Create New Div & ol
    const olContainer = document.createElement('div');
    olContainer.classList.add('ol-container');
    const olTag = document.createElement('ol');

    for (let i = 0; i < userInfo.length; i++) {  
        // Create New li
        const liTag = document.createElement('li');
        liTag.textContent = userInfo[i];
        olTag.append(liTag);
    }
    olContainer.append(olTag);
    mainContainer.append(olContainer);
}
