const firsthighlight = document.getElementById('firstlyric');
const annotation = document.getElementById('FirstPopUp');
const clicked = document.getElementsByClassName('clicked');
const URLselect = document.getElementsByClassName('URLhome');
const URLbtn = document.getElementById('copyURL');
const shareModule = document.getElementsByClassName('share-module');
const shareBtn = document.getElementById('shareBtn');
const checkmark = document.getElementById('Checked');

/*Slide Function for Annotation Module*/
function animation() {
  annotation.classList.toggle("animate");
  firsthighlight.classList.toggle("clicked");
};

/*Slide Function for Share Module*/
$('#shareBtn').on( "click", function() {
  $('.share-module').slideToggle( "slow" );
});

/*Copying to clipboard for button on Share Module*/
URLbtn.onclick = function() {
    URLbtn.focus();
    URLbtn.innerHTML = 'Copied!';
    checkmark.classList.remove("unconfirmed")
    var copyText = document.getElementById("URLSelect");

    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
    window.setTimeout(function() {
        URLbtn.blur(); 
        URLbtn.innerHTML = 'Copy';   
        checkmark.classList.add("unconfirmed")    
    }, 1500);
};
