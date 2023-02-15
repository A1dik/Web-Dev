function pow(x, n) 
{
    let res = x;
  
    for (let i = 1; i < n; i++)
    {
      res *= x;
    }
  
    return res;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) 
  {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } 
  else 
  {
    alert( pow(x, n) );
  }