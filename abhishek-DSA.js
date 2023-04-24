// 1st question.
 var array = [34,45,65,23,5,676,32,34];
var target = 66;

var n=array.length;
var start=0;
var end=n-1;

while(start<end){
    var sum;
    sum = array[start] + array[end];

    if(sum==target){
        console.log(array[start],array[end]);
        // return true;
    }
    if(sum<target){
        start=start+1;
    }
    else{
        end=end-1;
    }
}



// 2nd Question

// var start = 5768;
// var end = 78656;
// var sumEvenNum=0;
// function sumEven(a,b){
//     for(i=a;i<=b;i++){
//         if(i%2==0){
//             sumEvenNum+=i;
//         }
//     }
//     console.log(sumEvenNum);
// }

// sumEven(start,end);


//3rd question

// var number=19;
// var array = [3,5,79,45,0,-67,23,77,19,78,12];
// var flag=false;
// var index;

// function findNum(a,b){
//     for(i=0;i<b.length;i++){
//         if(b[i]==a){
//             flag=true;
//             index = i;
//         }
//     }
    
//     if(flag){
//         console.log(index);
//     } else {
//         console.log("Not Found");
//     }
// }

// findNum(number,array);


// 4th question

// var array = [34,45,567,78,89,34,67,87,34,78,89];
// var object;

// function objectPrint(a,b){
//     b={};
//     for(i=0;i<a.length;i++){
//         b[i] = a[i];
//     }
//     console.log(b);
// }

// objectPrint(array,object);
