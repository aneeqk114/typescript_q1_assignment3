//PROBLEM 1
var sum : number=0;
var arr:number []=[10,11,12,13,14,15,16,17,18,19,20];
for (var i:number=0;i<arr.length;i++){
    if(arr[i]%2==0){
    sum=sum+arr[i]; 
    }
}
console.log("Entered array:\n",arr);
console.log("Sum of even numbers in array :\t",sum);

//PROBLEM 2
var arr2:number []= [21,22,23,24,25,26,27,28,29,30];
for(var i:number=0;i<arr2.length;i++){
    if (arr2[i]%2!=0){
        arr2.splice(i,1);
    }
}
console.log("\n\nArray containing only even elements:\n",arr2);

//PROBLEM 3
var arr3:number []= [17,26,19,33,24,12,9,76,55,22];
for(var i:number=0;i<arr3.length;i++){
    if (arr3[i]%2!=0){
        arr3.splice(i,1);
    }
}
console.log("\n\nArray containing only odd elements:\n",arr3);

// PROBLEM 4
let pi: number =3.1416;
function area_circle(radius:number){
    let area:number=pi*radius*radius;
    return area;
}
console.log("\n\nArea of circle:", area_circle(7));

//PROBLEM 5
var arr4:number []=[37,83,97,66,42,72,69,45,51,85];
for(var i:number=0;i<arr4.length;i++){
    if (arr4[i]<50){
        arr4.splice(i,1);
    }
}
console.log("LIST OF PASSING GRADES:\n",arr4);

//PROBLEM 6
var max:number=0;
var arr5:number[]= [29,69,182,17,2,16,36,22,99,100,216];
function max_number(){
    for(var i:number=0;i<arr.length;i++){
        if(max<arr5[i]){
            max=arr5[i];
        }
    }
console.log("Maximun element in array is:\t",max);
}
max_number();