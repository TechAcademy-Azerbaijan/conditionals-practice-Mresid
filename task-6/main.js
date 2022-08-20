const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  let n = result.input;
    let a = parseInt(n.split("")[0]);//
   let b = parseInt(n.split("")[1]);//
   let c = parseInt(n.split("")[2]);//
   let d = parseInt(n.split("")[3]);//
  if (a % 2 == 0 && b % 2 == 0 && c % 2 == 0 && d % 2 == 0) {
    console.log("YES");
  }else{
    console.log("NO");
  }
  
});
