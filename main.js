



function started() 
{
 var myTime = setTimeout(mystart,3000);
return myTime;
}
console.log(started());
function stoped()
{
 clearTimeout(myTime);
}
function mystart() 
{
  alert("haha");
}