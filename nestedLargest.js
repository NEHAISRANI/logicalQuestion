const a=[[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]
var i=0
while (i<a.length){
  var j=1
  var new1=a[i][0]
  while(j<a[i].length){
    if (a[i][j]>new1){
      new1=a[i][j]
    }
  j++
  }
  console.log(new1)
  i++
}

  