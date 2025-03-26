// const coding=[ 'js', 'CPP', 'java', 'C', 'ruby' ]
// const val=coding.forEach((x)=>{
//     return x
// })
// console.log(val); //undefined
// const nums=[1,2,3,4,5,6,7,8,9,10]
//------------Filter-----------------------
// const ans=nums.filter((x)=>
//     x>8
// )
// //const ans=nums.filter((x)=>{
//        return  x>8
//     }
//      )
//console.log(ans);//[ 9, 10 ]
// Array of objects
let objArr = [
    {
        name: 'john',
        age: 12,
        gender: 'male'
    },
    {
        name: 'jane',
        age: 15,
        gender: 'female'
    },
    {
        name: 'julie',
        age: 20,
        gender: 'trans'
    },
    {
        name: 'stephy',
        age: 19,
        gender: 'trans'
    },
    {
        name: 'cassie',
        age: 21,
        gender: 'female'
    },
    {
        name: 'james',
        age: 24,
        gender: 'male'
    },
    {
        name: 'lily',
        age: 23,
        gender: 'female'
    }
];
const male=objArr.filter((obj)=>{
    // if (obj.gender=='male')
    //     return obj.name
    if (obj.age>20 && obj.gender=='male')
        return obj.name
})
//console.log(male);
//------------map----------------------------return value automatically
// const newnuma=nums.map((x)=>{
//     return x+10
// })

// console.log(newnuma);

//--------------CHAINING ----------------
const nums=[1,2,3,4,5,6,7,8,9,10]
const newarr=nums.map((x)=>x+10).map((x)=>x*2).filter((x)=>x>25)

console.log(newarr);
//----------------------------REDUCE method-------------------------------------------"reducer"
const ans=nums.reduce((acc,currVal)=>{
    console.log(`acc = ${acc} and currVal = ${currVal}`);
    
    return acc+currVal
    
},0)
console.log(ans);
const shoopingCart=[
    {
        item:"x",
        Price:1234
    },
    {
        item:"y",
        Price:1400
    },
    {
        item:"x",
        Price:1700
    },
    {
        item:"x",
        Price:134
    },
]
const total=shoopingCart.reduce((acc, val)=> acc+val.Price,0)
console.log(total);
