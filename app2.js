//EX2
alert("You Are Now in EX2!")
let gender = prompt('Enter Your Gender ("male" | "female")');
if (gender == "male") {
    alert(`Welcome Mr`);
} else if (gender == "female") {
    alert(`Welcome Ms`);
} else {
    while (gender != "male" && gender != "female"){
        gender = prompt('Enter Your Gender ("male" | "female")');
    }
}

//Q1
for (let i = 0; i <= 5; i++) {
    alert(i);
}

//Q2
let nums1_5 ="";
for (let i = 0; i <= 5; i++) {
    nums1_5 += i + " ";
}
alert(nums1_5);

//Q3
let numsMultiples_3 = "";
for (let i = 0; i <= 20; i++) {
    if(i%3 == 0)
        numsMultiples_3 = i + " ";
}
alert(`Numbers That Multiples On 3  between [1 - 20] : ${numsMultiples_3}`);

//Q4
let validNum = false;
while(!validNum){
    let userNum = prompt("Enter a Number From (1 - 100): ")
    if(userNum >= 0 && userNum <= 100){
        alert("Good Chooise")
        validNum = true;
    }
}