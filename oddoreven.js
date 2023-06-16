function oddOrEven(array) {
   //enter code here
  let sum = 0; 
  let length = array.length;
  if (array.length == 0)
    {
      return "even";
    }
  for (let a = 0; a<length; a++)
    {
      sum += array[a];
    }
   if(sum %2 == 0)
    {
      return "even"
    }
  else
    {
      return "odd";
    }
}