//print num from 1-255

var x =1;
while(x<256){
  console.log(x);
  x +=1;
}

//sum of number 0-255

var x =0;
var sum =0;
while(x<256){
  console.log(sum);
  sum+=x
  x += 1;
  }
console.log(sum);


//find Largest

function largestNum(arr){
  var max=arr[0];
  for(var i =1;i<arr.length;i++){
    if(arr[i] > max){
      max=arr[i];
    }
  }
  return max;
}
x = largestNum([20,50,-1,-200,-2200]);
console.log(x);

