const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
   let n = result.input;//2322
   let a = parseInt(n.split("")[0]);//2
   let b = parseInt(n.split("")[1]);//3
   let c = parseInt(n.split("")[2]);//2
   let d = parseInt(n.split("")[3]);//2
   if ( a == c && a == d && c == d){
    console.log("YES");
   }else{
    console.log("NO");
   }
});
