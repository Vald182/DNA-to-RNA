function converter() {
  
  let result = '';
  let nstr = document.getElementById("inp").value;
  nstr = String(nstr.toUpperCase());
  
  for (let i = 0; i < nstr.length; i += 1) {
    if (nstr[i] === 'A') {
      result += 'U';
    } else if (nstr[i] === 'C') {
        result += 'G';
    } else if (nstr[i] === 'G') {
        result += 'C';
    } else if (nstr[i] === 'T') {
        result += 'A';
    } else {
        result = 'Invalid parametr!'     
    }
  }

  document.getElementById("result").innerHTML = result;
};





