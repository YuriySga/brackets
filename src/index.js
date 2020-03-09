module.exports = function check(str, bracketsConfig) {  
   arr = str.split(''); 
   let brConf = bracketsConfig;  
 
   brConf.forEach(itemAr => deleteBr(arr, itemAr));  
   brConf.forEach(itemAr => deleteBr(arr, itemAr));
   brConf.forEach(itemAr => deleteBr(arr, itemAr));
   brConf.forEach(itemAr => deleteBr(arr, itemAr));
   brConf.forEach(itemAr => deleteBr(arr, itemAr));

   return (arr.length == 0) ? true : false;  

    function deleteBr (ar, bc) {        
        let len = ar.length;
        for (let i = 0; i < ar.length-1; i++) { 
          if (ar[i] == bc[0] && ar[i+1] == bc[1]) {  
               ar.splice(i+1, 1);  //delete
               ar.splice(i, 1);     //delete         
          } else {
            //nop;
          }
        } 
    (len == ar.length) ? arr = ar : deleteBr(ar, bc); 
    }
}
