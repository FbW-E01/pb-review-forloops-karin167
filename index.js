
//1
for(let i = 0; i <= 10; i++){
    console.log(i);
}
//2
for(let i = 10; i <= 20; i++){
    console.log(i);
}

//3
for (let i = -10; i <= 10; i++){
    console.log(i);
}
//4
for (let i = 10; i >= -10; i--){
    console.log(i);
}
//5 
const str = "karin";
for (let i = 0; i < str.length; i++ ){
    console.log(str[i]);
}
//6
const arr = ['karin', 'Milad','Lea','Joel','Omer'];
//6.1
for(let i =  0 ; i < arr.length; i++){
    console.log(arr[i]);
}
//6.2
arr.forEach(x =>{
    console.log(x);
})
//7

let arr2 = ['London','Paris','Mdrid','NYC','Berlin','Amsterdam'];
for(let i = 0; i < arr2.length; i++){
    if(i % 2 === 0){
            console.log(arr2[i]);

    }
}

//8
const arr3 = ['London','Paris','Mdrid','NYC','Berlin','Amsterdam'];
for(let i = 0; i < arr3.length; i+=3){
     console.log(arr3[i]);
}
console.log('###########################################');

//9
const arr4 = ['London','Paris','Mdrid','NYC','Berlin','Amsterdam','Rome','Tokyo','Budapest', 'Tel Aviv'];
for(let i = 1; i < arr4.length; i+=3){
     console.log(arr4[i]);
}

//10 
const arrObj1= [
    {counter: 222},{counter: 299},{counter: 266},{counter: 233}
 ]
 for (let i = 0; i < arrObj1.length; i++){
     console.log(arrObj1[i].counter);
 }
//  arrObj1.forEach(x =>console.log(x.counter))
console.log('###########################################');

//11
const foo = Math.floor(Math.random() * 100);
console.log(foo);
for(let i = 0; i < 100; i++){
    console.log(i);
    if (i === foo) {
        break;
    }
    

}



// let foo = Math.floor(Math.random() * 100);
// console.log(foo);
// for(let i = 0; i < foo; i++){
//     console.log(i) };
