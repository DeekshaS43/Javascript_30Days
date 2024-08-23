let challange= '30 Days Of JavaScript';
let change='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let column1='You cannot end a sentence with because because because is a conjunction';
let x1='30 Days Of'
let x2='JavaScript'
let string=''


//level1
console.log(challange)
console.log(challange.length)
console.log(challange.toUpperCase())
console.log(challange.toLowerCase())
console.log(challange.substring(3,21))//cut out firstword 30
console.log(challange.substring(0,3))//cut out rest
console.log(challange.includes('script'))
console.log(challange.split(' '))
console.log(challange.split())
console.log(change.split(','))
console.log(challange.replace('Javascript','Python'))
console.log(challange.charAt(15))
console.log(challange.charCodeAt('J'))
console.log(challange.indexOf('a'))
console.log(challange.lastIndexOf('a'))
console.log(column1.indexOf('because'))
console.log(column1.lastIndexOf('because'))
console.log(column1.search('because'))
console.log(challange.trim(' '))
console.log(challange.startsWith('30'))
console.log(challange.endsWith('JavaScript'))
console.log(challange.match(/a/gi))
console.log(challange.concat(x1,' ', x2))
console.log(challange.repeat(2))

//level2
console.log("There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
 let s1='10'
 console.log(typeof s1 ==typeof 10)
 let s2 = +s1
console.log(typeof(s2) === typeof 10)
 let float=9.8
 console.log(parseFloat(9.8)==10)
 console.log((parseInt(9.8) +1) == 10)

 let u1='python'
 let u2='jargon'
 console.log(u1.includes('on'),u2.includes('on'))

 let action="I hope this course is not full of jargon."
 console.log(action.includes('jargon'))
 let num=Math.random()

 let num1=num*101
 const num2=Math.floor(num1)
 console.log(num2)

 let num3=num*51
 const num4=Math.floor(num3)+50
 console.log(num4)

 let num5=num*256
 const num6=Math.floor(num5)
 console.log(num6)

 let sr="Javascript"
 let index=Math.floor(Math.random()*10)
 let char=sr[index]
 console.log(char)

 console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

 let char2=column1.length
 let char3=column1.lastIndexOf('because')
 console.log(column1.substr(char3,char2))


 //level3
 //1
 let alpha='Love is the best thing in this world. Some found their love and some are still looking for their love'
 let count='love'
 let alpha1=alpha.toLowerCase()
 let a=0
 let alpha2=alpha1.split(' ')
 for(i=0;i<alpha2.length;i++){
    if(count===alpha2[i]){
        a++;
    }
 }
 console.log(`The word "${count}" appears ${a} times.`);
//2
let sys=/because/gi
console.log(column1.match(sys).length)

//3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/[%@&#;$.,;!?]/g, ''))

//4
const sector='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const nums = /\d+/g; 
const numbers = sector.match(nums); 
const monthly = parseInt(numbers[0], 10);
const annual = parseInt(numbers[1], 10);
const monthlyCourses= parseInt(numbers[2], 10);
const total = (monthly * 12) + annual + (monthlyCourses * 12);
console.log(`The total annual income is ${total} euro.`);
 

