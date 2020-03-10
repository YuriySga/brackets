module.exports = function check(str, bracketsConfig) {
  
  if (typeof str == "string") {   //если первый прогон
    str = str.split('');
  }     

  let len = str.length;
  bracketsConfig.forEach(itemAr => {
    for (let i = 0; i < str.length-1; i++) { 
      if (str[i] == itemAr[0] && str[i+1] == itemAr[1]) {  
        str.splice(i+1, 1);  //delete
        str.splice(i, 1);     //delete         
      }
    }
  });

  return (len == str.length) ? (str.length == 0) ? true : false : check(str, bracketsConfig); 
}


