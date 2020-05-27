// setTimeout(function() {
//   console.log('heloo');
   
// }, 10000); 


function who() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('🤡');
    }, 300);
  });
} 

function what() {
  return new Promise(resolve => { 
    setTimeout(() => {
      resolve('lurks');
    }, 800);
  });
}

function where() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('in the shadows');
    }, 1500); 
  });
}

async function msg() {
  const a = await who(); 
  const b = await what();
  const c = await where();

  console.log(a,b,c)
}

msg(); 