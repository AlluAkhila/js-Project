let isopen=false
function myopen()
{
    const modal = document.getElementById("modal")
    if (isopen)
    {
        modal.style.display = 'none';
        isopen=false
    }
    else
    {
        modal.style.display = 'block';
        isopen=true
        document.body.style.background="rgba(0,0,0,0.4)"
    }
}
function change()
{
    document.body.classList.toggle('dark')
}
let a=document.getElementById('count')
let b=document.getElementById('check')
let count = 0
function incr ()
{
  if(count<20)
  count++
  a.textContent=count;
  check();
}
function decr ()
{
  if(count>0)
  count--
  a.textContent=count;
  check();
}
function remove ()
{
  count=0
  a.textContent=count;

}
function check()
{
  if(count%2==0)
   b.textContent="even"
  else
   b.textContent="Odd"
   b.style.color="orange"
}
