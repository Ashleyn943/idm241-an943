//obj
const firsthighlight = document.getElementById('firstlyric');
const annotation = document.getElementById('FirstPopUp');
const clicked = document.getElementsByClassName('clicked')

//toggle annotation
firsthighlight.addEventListener('click', function(){ 
    annotation.classList.toggle('hideMe');
    firsthighlight.classList.toggle('clicked');
});

