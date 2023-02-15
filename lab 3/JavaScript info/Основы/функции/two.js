function checkAge(age) 
{
    return (age > 18) ? true : confirm('Родители разрешили?');
  }
  ////второй
function checkAge(age) 
  {
    return (age > 18) || confirm('Родители разрешили?');
  }