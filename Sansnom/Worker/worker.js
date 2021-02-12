onmessage = function(e) {
  const result = e.data;
   console.log(result);
   
    x= Math.floor(Math.random() * 600);   
    y= Math.floor(Math.random() * 600);   

    console.log(x);
    console.log(y);
    postMessage([x,y]);
  
}
