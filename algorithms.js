//Algorithm Challengers Version 1.1.7 May 8,2017
//Page 16 Problems
//Setting and Swapping
let myNumber = 42;
let myName = 'Jason';
let temp = myNumber;
myNumber = myName;
myName = temp; 

//Print -52 to 1066
for (let x=-52;x<1067;x++) {
    console.log(x);
}

//Don't Worry, Be Happy
const beCheerful = () => {
    for (let x=1;x<99;x++){
        console.log("good morning!");
    }
}
beCheerful()

//Multiples of Three - but Not All
for (let x=-9;x>=-300;x-=3) {
    console.log(x);
}

//Printing Integers with While
let x = 2000
while (x<=5280) {
    console.log(x);
    x += 1
}

//You Say It's your Birthday
const birthdayornah = (x,y) => {
    if ((x === 17 && y === 3) || (x === 3 && y === 17)) {
        console.log("How did you know?");
    } else {
        console.log("Just another day....");
    }
}
birthdayornah(3,17);

//Leap Year
const leapyear = (year) => {
    if (year % 4 === 0 && year % 100 !== 0) {
        return 'Leap year!';
    } 
    if (year % 400 === 0) {
        return 'Leap year!';
    } else {
        return 'Not a leap year.';
    }
}
leapyear(400);

//Print and Count
const printandcount = () => {
    let count = 0;
    for (let x = 512;x<4097;x++) {
        if (x % 5 === 0){
            console.log(x);
            count += 1;
        }
    } return count;
}
printandcount();

//Multiples of Six
const multiplesofsix = () => {
    let x = 0;
    while (x<=60000) {
        console.log(x);
        x += 6;
    }
}
multiplesofsix();

//Counting, the Dojo Way
for(let x=1;x<101;x++) {
    if(x % 5 === 0 && x % 10 === 0) {
        console.log('Coding Dojo')
    } else if(x % 5 === 0) {
        console.log('Coding')
    } else {
        console.log(x);
    }
}

//What Do You Know?
const wdyknow = (incoming) => {
    console.log(incoming);
}
wdyknow(12);

//Whoa, That Sucker's Huge
let finalcount = 0;
for(let x=-300000;x<300001;x++) {
    if(x % 2 != 0) {
        finalcount += x
    }     
} 
console.log(finalcount);

//Countdown by Fours
let startint = 2016;
while(startint > 0) {
    console.log(startint);
    startint -= 4;
}

//Flexible Countdown
const countdownbyfours = (lowNum,highNum,mult) => {
    for(highNum;highNum>=lowNum;highNum-=mult) {
        if(highNum % mult === 0) {
            console.log(highNum);
        }
    }
}
countdownbyfours(2,9,3);

//The Final Countdown
const finalcountdown = (param1,param2,param3,param4) => {
    while(param2<=param3) {
        if(param2 % param1 === 0 && param2 !== param4) {
            console.log(param2);
        } param2++;
    }
}
finalcountdown(3,5,17,9);

//Page 20 Problems
//Countdown
const countdown = number => {
    arr = [];
    while(number>=0) {
        arr.push(number);
        number -= 1;
    }
    console.log(arr);
    console.log(arr.length);
}
countdown(5);

//Print and Return
let temparr = [5,1];
const printandreturn = (arr) => {
    console.log(arr[0]);
    return arr[1];
}
printandreturn(temparr);

//First Plus Length
let temparr = [5,4,3,2,1];
const firstpluslength = (arr) => {
    let sum = arr[0] + arr.length;
    return sum;
}
firstpluslength(temparr);

//Values Greater than Second
let temparr = [1,3,5,7,9,13];
const greaterthansecond = (arr) => {
    let count = 0
    for(var i=0;i<=arr.length;i++) {
        if(arr[i]>arr[1]) {
            console.log(arr[i]);
            count += 1;
        }
    }
    return count;
}
greaterthansecond(temparr);

//Values Greater than Second, Generalized
let temparr = [4,1,25,1,,5,7,2];
const greaterthangeneral = (arr) => {
    let newarr = [];
    let count = 0;
    for(var i=0;i<=arr.length;i++) {
        if(arr[i] > arr[1]) {
            newarr.push(arr[i]);
            count += 1;
        }
    }
    if(arr.length < 2) {
        console.log('Second array value not detected. Array length less than two.')
    }
    console.log(`${count} values greater than second value of array.`);
    return newarr;
}
greaterthangeneral(temparr);

//This Length, That Value
const lengthandvalue = (num1,num2) => {
    let arr = [];
    if (num1 === num2) {
        console.log("Jinx!");
    } else {
        for(var i=0;i<num1;i++) {
            arr[i] = num2;
        } 
        return arr;
    }    
}
lengthandvalue(3,5);

//Fit the First Value
let newarr = [1,2,3];
const fitthefirst = (arr) => {
    if(arr[0] > arr.length) {
        console.log("Too big!");
    } else if(arr[0] < arr.length) {
        console.log("Too small!");
    } else {
        console.log("Just right!");
    }
}
fitthefirst(newarr);

//Fahrenheit to Celsius
const fahrenheitToCelsius = fDegrees => {
    let fCelsius = (fDegrees - 32) * (5/9);
    return fCelsius;
}
fahrenheitToCelsius(32);

//Celsius to Fahrenheit
const celsiusToFahrenheit = cDegrees => {
    let fDegrees = (cDegrees * 9/5) + 32;
    return fDegrees;
}
celsiusToFahrenheit(0);

//Celcius equal to Fahrenheit
let cTemp = 200;
const celsiusequalsfahrenheit = cDegrees => {
    let fDegrees = (cDegrees * 9/5) + 32;
    for(cDegrees;cDegrees>=0;cDegrees--) {
        if(fDegrees === cDegrees) {
            return `${fDegrees} Fahrenheit and ${cDegrees} Celsius equate at the same value.`
        } else {
            return 'No equal values found.'
        }
    }
}
celsiusequalsfahrenheit(200);

//Page 22 Problems
//Biggie Size
let temparr = [1,2,3,4,5];
const makeItBig = arr => {
    let string = 'big';
    for(var i=0;i<arr.length;i++) {
        if(arr[i] > 0) {
            arr[i] = string;
        }
    }
    return arr;
}
makeItBig(temparr);

//Print Low, Return High
let temparr = [-2,-1,1,2,3,4,5];
const printLowReturnHigh = arr => {
    let low = 0;
    let high = 0;
    for(var i=0;i<arr.length;i++) {
        if(arr[i] > high) {
            high = arr[i];
        }
        if(arr[i] < low) {
            low = arr[i];
        }
    }
    console.log(low);
    return(high);
}
printLowReturnHigh(arr);

//Print One, Return Another
let temparr = [6,2,3,4,5];
const printOneReturnAnother = arr => {
    let firstodd = 0;
    for(var i=0;i<arr.length;i++) {
        if(i === arr.length-2) {
            console.log(arr[i]);
        }
        if(arr[i] % 2 != 0 && firstodd === 0) {
            firstodd = arr[i];
        }
    }
    return firstodd;
}
printOneReturnAnother(temparr);

//Double Vision
let temparr = [1,2,3,4,5];
const doubleVision = arr => {
    let newarr = [];
    for(var i=0;i<arr.length;i++) {
        newarr.push(arr[i] * 2);
    }
    return newarr;
}
doubleVision(temparr);

//Count Positives
let temparr = [-1,2,3,2,-5,2,1];
const countPositives = arr => {
    let count = 0;
    for(var i=0;i<arr.length;i++) {
        if(arr[i] > 0) {
            count += 1;
        }
    }
    arr[arr.length-1] = count;
    return arr;
}
countPositives(temparr);

//Evens and Odds
let temparr = [1,2,3,6,6,6];
const evensAndOdds = arr => {
    let oddstring = "That's odd!";
    let evenstring = "Even more so!";
    for(var i=0;i<arr.length;i++) {
        if(arr[i] % 2 != 0 && arr[i+1] % 2 != 0 && arr[i+2] % 2 != 0) {
            if(i < arr.length - 2) {
                console.log(oddstring);
            }
            else {
                console.log(arr[i]);
            }
        } else if(arr[i] % 2 === 0 && arr[i+1] % 2 === 0 && arr[i+2] % 2 === 0) {
            if(i < arr.length - 2) {
                console.log(evenstring);
            }
        }
        else {
            console.log(arr[i]);
        }
    }
}
evensAndOdds(temparr);

//Increment the Seconds
let temparr = [1,2,3,4,5];
const incrementTheSeconds = arr => {
    for(var i=0;i<arr.length;i++) {
        if(arr[i] % 2 != 0) {
            arr[i] += 1;
        }
        console.log(arr[i]);
    }
    return arr;
}
incrementTheSeconds(temparr);

//Previous Lengths
let stringarr = ["hello","world","goodbye","world","what's","good?"];
const previousLengths = arr => {
    let templength = 0;
    let assignedlength = 0;
    for(var i=0;i<arr.length;i++) {
        templength = arr[i].length
        arr[i] = assignedlength;
        assignedlength = templength;
    }
    return arr;
}
previousLengths(stringarr);

//Add Seven to Most
let temparr = [1,2,3,4,5];
const sevenToMost = arr => {
    let newarr = [];
    for(var i=0;i<arr.length;i++) {
        newarr[i] = arr[i] + 7;                        
    }
    return newarr.slice(1);
}
sevenToMost(temparr);

//Reverse Array
let temparr = [1,2,3,4,5];
const reverseArray = arr => {
    let newarr = [];
    for(var i=arr.length-1;i>=0;i--) {
        newarr.push(arr[i]);
    }
    return newarr;
}
reverseArray(temparr);

//Outlook: Negative
let temparr = [-1,1,2,3,4,5];
const outlookNegative = arr => {
    let newarr = [];
    for(var i=0;i<arr.length;i++) {
        if(arr[i] > 0) {
            arr[i] = arr[i] * -1;
        }
        newarr.push(arr[i]);
    }
    return newarr;
}
outlookNegative(temparr);

//Always Hungry
let temparr = ["food","food","food"];
const alwaysHungry = arr => {
    let string = "food";
    let reply = "yummy";
    let sadness = "I'm hungry";
    let count = 0;
    for(var i=0;i<arr.length;i++) {
        if(arr[i] === string) {
            console.log(reply + ` - Found food at index ${i}.`);
            count += 1;
        }
    }
    if(count === 0) {
        console.log(sadness)
    }
}
alwaysHungry(temparr);

//Swap Toward the Center
let temparr = [1,2,3,4,5,6];
const swapTowardCenter = arr => {
    let temp = 0;
    let temp2 = 0;

    temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;

    temp2 = arr[2];
    arr[2] = arr[arr.length-3];
    arr[arr.length-3] = temp2;

    return arr;
}
swapTowardCenter(temparr);

//Scale the Array
let temparr = [1,2,3,4,5];
let number = 3;
const scaleArray = (num,arr) => {
    for(var i=0;i<arr.length;i++) {
        arr[i] = arr[i] * num;
    }
    return temparr;
}
scaleArray(number,temparr);

//Completed by Jason Wang 09/11/2018