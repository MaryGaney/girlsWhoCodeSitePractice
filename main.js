//JS for GWC page
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("myTopnav");

var sticky = navbar.offsetTop;

function myFunction() {
if (window.pageYOffset >= sticky) {
  navbar.classList.add("sticky")
} else {
  navbar.classList.remove("sticky");
}
}


//for the About page

//Kristi's info
const Kristi = document.querySelector('#Kristiphoto');
const Kristiinfo = document.querySelector('#Kristiinfo');
const KristiButton = document.querySelector('#KristiButton');
const KristiName = document.querySelector('#KristiName');

Kristi.addEventListener('click', kristiClick);
KristiButton.addEventListener('click', kristiClose);
Kristi.addEventListener('mouseover', kristiNameShow);
Kristi.addEventListener('mouseleave', kristiNameHidden);

function kristiNameShow(){
  KristiName.style.visibility = 'visible';
}

function kristiNameHidden(){
  KristiName.style.visibility = 'hidden';
}

function kristiClick(){
  Kristiinfo.style.visibility = 'visible';
};

function kristiClose(){
  Kristiinfo.style.visibility = 'hidden';
};

//Ashleigh's info
const Ashleigh = document.querySelector('#Ashleighphoto');
const Ashleighinfo = document.querySelector('#Ashleighinfo');
const AshleighButton = document.querySelector('#AshleighButton');
const AshleighName = document.querySelector('#AshleighName');

Ashleigh.addEventListener('click', AshleighClick);
AshleighButton.addEventListener('click', AshleighClose);
Ashleigh.addEventListener('mouseover', ashleighNameShow);
Ashleigh.addEventListener('mouseleave', ashleighNameHidden);

function ashleighNameShow(){
  AshleighName.style.visibility = 'visible';
}

function ashleighNameHidden(){
  AshleighName.style.visibility = 'hidden';
}

function AshleighClick(){
  Ashleighinfo.style.visibility = 'visible';
};

function AshleighClose(){
  Ashleighinfo.style.visibility = 'hidden';
};


//Mary's info
const Mary = document.querySelector('#Maryphoto');
const Maryinfo = document.querySelector('#Maryinfo');
const MaryButton = document.querySelector('#MaryButton');
const MaryName = document.querySelector('#MaryName');

Mary.addEventListener('click', MaryClick);
MaryButton.addEventListener('click', MaryClose);
Mary.addEventListener('mouseover', maryNameShow);
Mary.addEventListener('mouseleave', maryNameHidden);

function maryNameShow(){
  MaryName.style.visibility = 'visible';
}

function maryNameHidden(){
  MaryName.style.visibility = 'hidden';
}

function MaryClick(){
  Maryinfo.style.visibility = 'visible';
};

function MaryClose(){
  Maryinfo.style.visibility = 'hidden';
};

//Gloria's info
const Gloria = document.querySelector('#Gloriaphoto');
const Gloriainfo = document.querySelector('#Gloriainfo');
const GloriaButton = document.querySelector('#GloriaButton');
const GloriaName = document.querySelector('#GloriaName');

Gloria.addEventListener('click', GloriaClick);
GloriaButton.addEventListener('click', GloriaClose);
Gloria.addEventListener('mouseover', gloriaNameShow);
Gloria.addEventListener('mouseleave', gloriaNameHidden);

function gloriaNameShow(){
  GloriaName.style.visibility = 'visible';
};

function gloriaNameHidden(){
  GloriaName.style.visibility = 'hidden';
}

function GloriaClick(){
  Gloriainfo.style.visibility = 'visible';
};

function GloriaClose(){
  Gloriainfo.style.visibility = 'hidden';
};

//Gabby's info
const Gabby = document.querySelector('#Gabbyphoto');
const Gabbyinfo = document.querySelector('#Gabbyinfo');
const GabbyButton = document.querySelector('#GabbyButton');
const GabbyName = document.querySelector('#GabbyName');

Gabby.addEventListener('click', GabbyClick);
GabbyButton.addEventListener('click', GabbyClose);
Gabby.addEventListener('mouseover', gabbyNameShow);
Gabby.addEventListener('mouseleave', gabbyNameHidden);

function gabbyNameShow(){
  GabbyName.style.visibility = 'visible';
};

function gabbyNameHidden(){
  GabbyName.style.visibility = 'hidden';
}

function GabbyClick(){
  Gabbyinfo.style.visibility = 'visible';
};

function GabbyClose(){
  Gabbyinfo.style.visibility = 'hidden';
};

//Anika's info
const Anika = document.querySelector('#Anikaphoto');
const Anikainfo = document.querySelector('#Anikainfo');
const AnikaButton = document.querySelector('#AnikaButton');
const AnikaName = document.querySelector('#AnikaName');

Anika.addEventListener('click', AnikaClick);
AnikaButton.addEventListener('click', AnikaClose);
Anika.addEventListener('mouseover', anikaNameShow);
Anika.addEventListener('mouseleave', anikaNameHidden);

function anikaNameShow(){
  AnikaName.style.visibility = 'visible';
};

function anikaNameHidden(){
  AnikaName.style.visibility = 'hidden';
}

function AnikaClick(){
  Anikainfo.style.visibility = 'visible';
};

function AnikaClose(){
  Anikainfo.style.visibility = 'hidden';
};

//Meglan's info
const Meglan = document.querySelector('#Meglanphoto');
const Meglaninfo = document.querySelector('#Meglaninfo');
const MeglanButton = document.querySelector('#MeglanButton');
const MeglanName = document.querySelector('#MeglanName');

Meglan.addEventListener('click', MeglanClick);
MeglanButton.addEventListener('click', MeglanClose);
Meglan.addEventListener('mouseover', meglanNameShow);
Meglan.addEventListener('mouseleave', meglanNameHidden);

function meglanNameShow(){
  MeglanName.style.visibility = 'visible';
};

function meglanNameHidden(){
  MeglanName.style.visibility = 'hidden';
}

function MeglanClick(){
  Meglaninfo.style.visibility = 'visible';
};

function MeglanClose(){
  Meglaninfo.style.visibility = 'hidden';
};

//Priyanka's info
const Priyanka = document.querySelector('#Priyankaphoto');
const Priyankainfo = document.querySelector('#Priyankainfo');
const PriyankaButton = document.querySelector('#PriyankaButton');
const PriyankaName = document.querySelector('#PriyankaName');

Priyanka.addEventListener('click', PriyankaClick);
PriyankaButton.addEventListener('click', PriyankaClose);
Priyanka.addEventListener('mouseover', priyankaNameShow);
Priyanka.addEventListener('mouseleave', priyankaNameHidden);

function priyankaNameShow(){
  PriyankaName.style.visibility = 'visible';
};

function priyankaNameHidden(){
  PriyankaName.style.visibility = 'hidden';
}

function PriyankaClick(){
  Priyankainfo.style.visibility = 'visible';
};

function PriyankaClose(){
  Priyankainfo.style.visibility = 'hidden';
};
