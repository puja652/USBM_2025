//mathematical operator:
let num1=5;
let num2=3;
let res=num1+num2;
console.log(res);//addition
let sub=num1-num2;
console.log(sub);//subtraction
let mul=num1=num2;
console.log(mul); //multiplication
let div=num1/num2;
console.log(div); //division



let num=29;
let even=(num%2);
console.log(even);


let square =2**3;
console.log( square);

let cube =2**4;
console.log(cube);
 
console.log(10 > 5);
console.log( 10 < 5);
console.log( 5 >= 5);
console.log(5 ==6);
console.log(5 ==6);
console.log(5 === "5");


//conditional statemant
let age =45;
if(age >=18){
     console.log("adult");

}else if(age>60){
    console.log("sinior");
}
else{
    console.log("sinior");
}


//falsy value:
//false,0,-0,"",``,'',null,unfined,NaN
if(' _0.0512'){
    console.log(" it is true");
}


//given total task_bill,discount_start_price if you satisfy the condition print discount
let total_bill=1055;
if(total_bill>=988){
    console.log( "discount");
}
else{
    console.log("no discount");
}



//check if(male) and tten check (22+)then he can able to maary
let Age =26;
let gender = "male"
if(gender=="male"){
    if( Age>22){
        console.log("marry");

    }else{
        console.log("he is not able to marry");
    }
}else{
    console.log("he is not able to marry");
}

//logical operator:
//& -> and
// || ->or
// ! ->not
if(gender==="male" && age>=26){
    console.log("marry");

}
else{ console.log(" not marry")
}

//switch case 
let alphabet ='e';
switch (alphabet){
    case "a": console .log ("vowel")
    break;
    case "e" : console.log("vowel")
    break;
    case "i" : console.log("vowel")
    break;
    case "o" : console.log("vowel")
    break;
    case "u" : console.log(" vowel")
    break;
    default:
        console.log("consonant");
}


//
let day="0";
switch (day)
{
    case "0" : console.log(" sunday");
    break;
    case "1" : console.log("monday");
    break;
    case "2" : console.log("tuesday");
    break;
    case "3" : console.log("wednessday");
    break;
    case "4": console.log("thursday");
    break;
    case "5" : console.log("friday");
    break;
    case "6" : console.log("saturdaqy");
    break;
    default : console.log("its not count as day");
    break;

}   
 //
 let month="15";
 switch (month){
    case "0" : console.log(" january");
    break;
    case "1" :console.log(" febuary");
    break;
    case "2" :console.log("march");
    break;
    case"3" : console.log("april");
    break;
    case "4" : console.log(" may");
    break;
    case "5" :console.log(" june");
    break;
    case "6" :console.log("july");
    break;
    case"7" : console.log("august");
    break;
    case "8" : console.log(" septmber");
    break;
    case "9" :console.log(" october");
    break;
    case "10" :console.log("november");
    break;
    case"11" : console.log("december");
    break;
    default:
        console.log(" sorry we could'nt find any month");
        break;
 }

    

 
 
 





