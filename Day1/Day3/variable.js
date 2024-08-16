//level1

//1

let firstname='Deeksha'
let lastname='Sachan'
let country='India'
let  city='Kanpur'
let age='22'
let  isMarried='Single'
let  year='2024'

console.log(typeof firstname)
console.log(typeof lastname)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

//2
console.log('10' == 10);

let float=9.8
console.log((parseInt(9.8) +1) == 10)

//3
let s= 3==3
console.log(s)

let s1=4>3
console.log(s1)

let s2=2<3
console.log(s2)
//4
let t=4==2
console.log(t)

let t1= 3>=4
console.log(t1)

//5
console.log(4 > 3)
console.log (4 >= 3)
console.log (4 < 3)
console.log (4 <= 3)
console.log (4 == 4)
console.log (4 === 4)
console.log (4 != 4)
console.log (4 !== 4)
console.log (4 != '4')
console.log (4 == '4')
console.log (4 === '4')

//6

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
let u1='python'
let u2='jargon'
console.log(!(u1.includes('on'),u2.includes('on')))

//7

const now=new Date()
console.log(now)
//What is the year today?
const ye = now. getFullYear()
console.log(`The  year today is ${ye}.`)

//What is the month today as a number?
const month= now. getMonth()
console.log(`The month today is${month}.`)

//What is the date today?
const date=now. getDate()
console.log(`The date today is ${date}.`)

//What is the day today as a number?
const day = now.getDay();
console.log(`The day today as a number is ${day}.`);



//What is the hours now?
const hours = now.getHours();
console.log(`The hours now are ${hours}.`);

//What is the minutes now?
const min = now.getMinutes();
console.log(`The hours now are ${min}.`);

//Find out the numbers of seconds elapsed from January 1, 1970 to now.
const seconds = Math.floor(now.getTime() / 1000);
console.log(`The number of seconds elapsed from January 1, 1970 to now is ${seconds}.`);

//level2
//5
const slope = 2;
const yIntercept = -2;
const xIntercept = -yIntercept / slope;
console.log(`The slope of the line is ${slope}.`);
console.log(`The y-intercept of the line is ${yIntercept}.`);
console.log(`The x-intercept of the line is ${xIntercept}.`);

//6
const x1 = 2;
const y1 = 2;
const x2 = 6;
const y2 = 10;
const slope1 = (y2 - y1) / (x2 - x1);
console.log(`The slope between the points (2, 2) and (6, 10) is ${slope}.`);
//7
        const a1 = 2;
        const b1 = 2;
        const a2 = 6;
        const b2 = 10;
        const slopePoints = (b2 - b1) / (a2 - a1);
        console.log(`The slope between the points (2, 2) and (6, 10) is ${slopePoints}.`);
        const slopeLine = 2;
        console.log(`The slope of the line y = 2x - 2 is ${slopeLine}.`);

        if (slopePoints === slopeLine) {
            console.log('The slopes are equal.');
        } else if (slopePoints > slopeLine) {
            console.log('The slope between the points (2, 2) and (6, 10) is steeper.');
        } else {
            console.log('The slope of the line y = 2x - 2 is steeper.');
        }

//15
const now1 = new Date()
const yearr = now.getFullYear() 
const days = now.getDate()
const months = now.getMonth() + 1 
const dates = now.getDate() 
const hour = now.getHours() 
const minute = now.getMinutes() 

const format1 = `${yearr}-${months}-${days} ${hour}:${minute}`;
// Format: DD-MM-YYYY HH:mm
const format2 = `${days}-${months}-${yearr} ${hour}:${minute}`;
// Format: DD/MM/YYYY HH:mm
const format3 = `${days}/${months}/${yearr} ${hour}:${minute}`;
console.log(format1); 
console.log(format2); 
console.log(format3);

//level3

const formats = `${yearr}-${months}-${days} ${hour}:${minute}`;
console.log(formats); 




