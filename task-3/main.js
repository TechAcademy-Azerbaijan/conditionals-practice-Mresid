const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
   let n = result.input;//5,6,7
   let a = parseInt(n.split(",")[0]);
   let b = parseInt(n.split(",")[1]);
   let c = parseInt(n.split(",")[2]);
    if (a + b > c && a + c > b && b + a > c){
        console.log("YES");
    }else{
        console.log("NO");
    }

});
