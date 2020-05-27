const arr=[[4,5,0],[1,10,7]]
var i=0
var new1=[]
while (i<arr.length){
  var j=0
  var b=0
  while(j<arr[i].length){
    if (b<arr[i][j]){
      b=arr[i][j]
  }
  j++
  }
  new1.push(b)
  i++
}
console.log(new1) 