const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {

   let n = result.input;//1378
   let b =parseInt(n / 100);//13
   let c = parseInt(n % 1000);//378
   let d =parseInt(c / 10);//137
   let e =parseInt(n % 100)//78
   if (b == 37 || d == 37 || e == 37) {
      console.log("YES");
   }else{
      console.log("NO");
   }
   
   

});
