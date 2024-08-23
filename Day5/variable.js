const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
// level 1
  const arr=[]
  const arr1=[1,2,3,4,5,6]
  console.log(arr.length)
  console.log(arr1[0])
  console.log(arr1[arr1.length-1])
  console.log(arr1[arr1.length-1/2])

  const mixedDataType=[10, 'hello', true, 3, ["hey","there", false]]
  console.log(mixedDataType)
  console.log(mixedDataType.length)

  const isCompany=["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle","Amazon"]
  console.log(isCompany)
  console.log(isCompany.length)
  console.log(isCompany[0],isCompany[isCompany.length-1],isCompany[isCompany.length/2])

  for (i=0;i<isCompany.length;i++){
    console.log(isCompany[i]);
  }

  for (i=0;i<isCompany.length;i++){
    console.log(isCompany[i].toUpperCase());
  }

  console.log(`${isCompany.join(' ')} are bit it companies`)


  for (i=0;i<isCompany.length;i++){
    const company = isCompany[i];
    let count = 0;
    for(j=0;j<company.length;j++){
        if(company[j].toLowerCase()==='o'){
            count++;
        }
    }
    if(count>1){
        console.log(company)
    }
    }
    const con=isCompany.length
    const mid=con/2
    console.log(isCompany.sort())
     console.log(isCompany.reverse())
    console.log(isCompany.slice(0,3))
     console.log(isCompany.slice(-3))
    console.log(isCompany.slice(mid,mid+1))
    console.log(isCompany.shift())
    console.log(isCompany.splice(mid,1))
     console.log(isCompany.pop())

    console.log(isCompany.splice()) //remove all
 //level2

//2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,''));
const word=text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,'');
 const words = word.split(' ')
 console.log(words)
 console.log(words.length)

 //3 
 const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

 if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}
console.log(shoppingCart)


if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}
console.log(shoppingCart)

shoppingCart.pop('Sugar')
console.log(shoppingCart)

shoppingCart[3]='Green Tea'
console.log(shoppingCart)

//4
if(countries.includes('Euthopia')){
  conaole.log('Euthopia')
}
else{
  countries.push('Euthopia')
  console.log(countries)
}

//5
if(webTechs.includes('Saas')){
  conaole.log('Saas is css processor')
}
else{
  webTechs.push('Saas')
  console.log(webTechs)
}

//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullstack=frontEnd.concat(backEnd)

console.log(fullstack)

//level3

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)
console.log(ages[0])
console.log(ages[ages.length-1])
const s=ages.length
const s1=s/2
console.log(ages[s,s1+1])
let sum =0
ages.forEach(element => {
    sum += element
});
let avg_age = sum/2
console.log(avg_age)

let min = ages[0] 
let max =ages[ages.length-1]
console.log(min,max)

const minAverageDiff = Math.abs(min - avg_age);
const maxAverageDiff = Math.abs(max - avg_age);


const country = ["USA", "Canada", "Germany", "France", "Australia", "Japan", "India", "Brazil", "China", "South Africa", "Russia", "Mexico"];


