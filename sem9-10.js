//1
for (let i = 1; i <= 7; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += "#";
    }
    console.log(str);
}
//2
for(let i=1;i<=100;i++){
    if(i%3==0){
        if(i%5==0){
            console.log('FizzBuzz');
        }
        else{
            console.log('Fizz');
        }
    }
    else{
        if (i%5==0){
            console.log('Buzz');
        }
        else{
            console.log(i);
        }
    }
}
//3
for (let i = 1; i <= 8; i++) {
    let str = "";
    for (let j = 1; j <= 8; j++) {
        if (i % 2 === 1) {
            if (j % 2 === 1) {
                str += "#";
            } else {
                str += " ";
            }
        } else if (i % 2 === 0) {
            if (j % 2 === 1) {
                str += " ";
            } else {
                str += "#";
            }
        }
    }
    console.log(str);
}
//4
function min(x,y){
    if(x<y){
        return x;
    }
    else{
        return y;
    }
}
console.log(min(5,6));
console.log(min(6,6));
console.log(min(7,6));
//5
function countBs(str) {
    let k = 0;
    for(let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "B") {
            k++;
        }
    }
    return k;
}
function countChar(str, symbol) {
    let k = 0;
    for(let i = 0; i < str.length; i++) {
        if (str.charAt(i) === symbol) {
            k++;
        }
    }
    return k;
}
console.log(countBs("Bbbb dudb BB dxhkB"));
console.log(countChar("ahlcu AAAaaa hkgtf", "a"));
//6
function range(start,end,step=1){
    let mass=[];
    if(step>0){
        for (let i=start;i<=end;i+=step){
            mass.push(i);
        }
        return mass;
    }
    else{
        for (let i=start;i>=end;i+=step){
            mass.push(i);
        }
        return mass;
    }
}
function sum(mass){
    let res=0;
    for(let i=0;i<mass.length;i++){
        res+=mass[i];
    }
    return res;
}
console.log(range(3,10));
console.log(range(1,10,2));
console.log(range(5,2,-1));
console.log(sum([1,2,3,4,5,6,7,8,9]));
//7
function reverseArray(mass){
    let new_mass=[];
    for(let i=mass.length-1;i>=0;i--){
        console.log(i)
        new_mass.push(mass[i]);
    }
    return new_mass;
}
console.log(reverseArray([1,2,3]));
function  reverseArrayInPlace(arr) {
    let k = arr.length - 1
    if (arr.length % 2 === 0) {
        for (let i = 0; i < (arr.length / 2); i++) {
            let arr1 = arr[i];
            arr[i] = arr[k];
            arr[k] = arr1;
            k--
        }
    } else {
        for (let i = 0; i < ((arr.length - 1) / 2); i++) {
            let arr1 = arr[i];
            arr[i] = arr[k];
            arr[k] = arr1;
            k--
        }
    }
}
masss=[1,2,3,4,5];
console.log(masss);
console.log(reverseArrayInPlace(masss));
console.log(masss);
