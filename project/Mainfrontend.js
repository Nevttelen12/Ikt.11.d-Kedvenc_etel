//find gparnet class
//const gparnet = document.querySelector('body');
const gparnet = document.getElementById("Etel");

//get datas from the server
//load datas
const fhttp = new XMLHttpRequest();
const furl='./MainData.js';
var fres = "";
fhttp.open("GET", furl);
fhttp.send();

fhttp.onload = function() {
    fres = JSON.parse(fhttp.responseText)
    loadfcard()
}


//load fcard
const fhttp2 = new XMLHttpRequest();
const furl2 = './MainCard.html';
var fcard = "";

function loadfcard(){
    fhttp2.open("GET", furl2);
    fhttp2.send();
}

fhttp2.onload = function() {
    fcard = fhttp2.responseText
    fdoStaff()
}


function fdoStaff(){
    fres.biom.forEach(element => {

        var tmp = ""
        tmp = fcard
        tmp = tmp.replace("#Class#",fres.general.Class)
        tmp = tmp.replace("#imgClass#",fres.general.imgClass)
        tmp = tmp.replace("#img#",element.inform.img)
        tmp = tmp.replace("#card-title#",element.inform.card-title)
        tmp = tmp.replace("#card-title2#",element.inform.card-title2)
        tmp = tmp.replace("#card-subtitle#",element.inform.card-subtitle)
        tmp = tmp.replace("#card-subtitle2#",element.inform.card-subtitle2)
        tmp = tmp.replace("#link#",element.inform.link)

        gparnet.innerHTML += tmp
    });
}