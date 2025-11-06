const firsthighlight = document.getElementById('firstlyric');
const annotation = document.getElementById('FirstPopUp');
const clicked = document.getElementsByClassName('clicked');
const URLselect = document.getElementsByClassName('URLhome');
const shareModule = document.getElementsByClassName('share-module');
const shareBtn = document.getElementById('shareBtn');

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
