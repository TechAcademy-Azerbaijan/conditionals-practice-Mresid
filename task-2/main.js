const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
   let n = result.input;
   let a = parseInt(n.split(",")[0]);
   let b =  parseInt(n.split(",")[1]);
   let c = parseInt(n.split(",")[2]);
   if (a > b && b < c) {
    console.log("IN");
   }else{
    console.log("OUT");
   }
});
