document.cookie = "username=John Doe";
function mOver(obj)
{
    obj.innerHTML="New Experience"
}
function mOut(obj)
{
    obj.innerHTML="New Destination"
}
function click(obj)
{
    obj.style.backgroundColor="#0b284e";
}

function inputemail(x){
    x.style.background="#8bb2b8";
}
var i=0;
var images=[];
var time=5000;

images[0]='about.png';
images[1]='about.png';
images[2]='about.png';

function changeimg()
{
    document.slide.src = images[i];
    if(i < images.length -1)
    {
        i++;
    }
    else{
        i=0;
    }

    setTimeout("changeimg()",time);
}

window.onload=changeimg;


function turkeyFunc(obj) {
    obj.innerHTML = "$35";
    alert("you got 50% discount!!!!!!!!");
    document.getElementById("discounttext").innerHTML="YOU HAVE GOT DISCOUNT!!!";

 }
 
document.addEventListener('DOMContentLoaded',function(){
    let stars=document.querySelectorAll('.star1');
    stars.forEach(function(star){star.addEventListener('click',setRate);});
    
});
let rating=parseInt(document.querySelector('.stars1').getAttribute('data-rating'));
let target=stars[rating-1];
target.dispatchEvent(new MouseEvent('click'));

function setRate(ev)
{
    let span=ev.currentTarget;
    let stars=document.querySelectorAll('.star1');
    let match=false;
    let num=0;
    stars.forEach(function(star,index)
    {
        if(match)
        {
            star.classList.remove('rated');
        }
        else{
            star.classList.add('rated');
        }
        if(num==6)
        {
            num=1;
        }
        if(star === span)
        {
            match = true;
            num = index+1;
        }

    });

    alert("YOU HAVE RATED US:"+num+".THANK YOU!!!");
    document.querySelector('.stars1').setAttribute('data-rating',num);
}

