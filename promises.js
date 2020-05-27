var promise=new Promise(function(resolve,reject){
    const x="geeksforgeeks";
    const y="geeksfo"
    if(x===y){
        resolve("neha");
    }else{
        reject("aman");
    }
});

promise.then(function(data){
    console.log(data,"sucess,you are a geek")
    }).
catch(function(data){
    console.log(data,"some error has occured")
    });

    

try {
    console.log("neha")
  } 
catch (error) {
    console.error(error)
}