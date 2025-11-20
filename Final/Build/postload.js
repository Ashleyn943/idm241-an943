const firsthighlight = document.getElementById('firstlyric');
const annotation = document.getElementById('FirstPopUp');
const clicked = document.getElementsByClassName('clicked');
const URLselect = document.getElementsByClassName('URLhome');
const shareModule = document.getElementsByClassName('share-module');
const shareBtn = document.getElementById('shareBtn');
const contriBtn = document.getElementById('contributors');
const contributor = document.getElementsByClassName('contributordiv');

/*Slide Function for Annotation Module*/
function animation() {
  annotation.classList.toggle("animate");
  annotation.classList.toggle("animateOut");
  firsthighlight.classList.toggle("clicked");
  $('.share-module').slideUp("slow");
  shareBtn.classList.remove("boldText");
};
  
/*Slide Function for Share Module*/
$('#shareBtn').on( "click", function() {
  shareBtn.classList.toggle("boldText");
  $('.share-module').slideToggle( "slow" );
});

/*Slide contributor credits out*/
$('#contributors').on( "click", function() {
  contriBtn.classList.toggle("boldText");
  $('.contributordiv').slideToggle( "slow" );
});

/*Copying to clipboard for button on Share Module*/
const URLbtn = document.getElementById("copyURL");
const text = URLbtn.querySelector(".text");
const checkmark = document.getElementById('Checked');

URLbtn.onclick = function() {
  URLbtn.focus();
  text.classList.add("fade");
  setTimeout(() => {
    var copyText = document.getElementById("URLSelect");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
      navigator.clipboard.writeText(copyText.value);
    text.textContent = "Copied!";
    checkmark.classList.remove("unconfirmed");
    text.classList.remove("fade");
  setTimeout(() => {
    text.classList.add("fade");
  setTimeout(() => {
    text.textContent = "Copy";
    text.classList.remove("fade");
    checkmark.classList.add("unconfirmed");   
  }, 500);
  }, 500);
  }, 500);
};

/*Like Button + Counter*/
let like_flag = false;
let dislike_flag = false;
function liked(event) {
  let counter = parseFloat(document.getElementById('counter').innerHTML);
  var button = event.target.className;
  switch(button){
  	case 'like':
    case 'fa fa-thumbs-up':
    	if (like_flag==false && dislike_flag==false) {
        counter++;
        like_flag=true;
        thumbsUp.classList.add('pressed');
      } else if (like_flag==false && dislike_flag==true) {
        counter = counter + 2;
        like_flag=true;
        dislike_flag=false;
        thumbsUp.classList.add('pressed');
        thumbsDown.classList.remove('pressed');
      } else {
      	counter--;
        like_flag=false;
        thumbsUp.classList.remove('pressed');
      }
    break;
    case 'dislike':
    case 'fa fa-thumbs-down':
    	if (dislike_flag==false && like_flag==false) {
        counter--;
        dislike_flag=true;
        thumbsDown.classList.toggle('pressed');
      } else if (dislike_flag==false && like_flag==true) {
        counter = counter - 2;
        dislike_flag=true;
        like_flag=false;
        thumbsDown.classList.toggle('pressed');
        thumbsUp.classList.remove('pressed');
      } else {
      	counter++;
        dislike_flag=false;
        thumbsDown.classList.toggle('pressed');
      }
    break;
  }
  console.log('the button '+button+' was pressed');
  
  document.getElementById('counter').innerHTML = counter;
};

const thumbsUp = document.getElementById('like');
const thumbsDown = document.getElementById('dislike');

