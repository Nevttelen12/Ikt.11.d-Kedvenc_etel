//find gparnet class
//const gparnet = document.querySelector('body');
const dparnet = document.getElementById("FoEtel");

//get datas from the server
//load datas
const dhttp = new XMLHttpRequest();
const durl='./foetelData.json';
var dres = "";
dhttp.open("GET", durl);
dhttp.send();

dhttp.onload = function() {
    dres = JSON.parse(dhttp.responseText)
    loaddcard()
}


//load fcard
const dhttp2 = new XMLHttpRequest();
const durl2 = './MainCard.html';
var dcard = "";

function loaddcard(){
    dhttp2.open("GET", durl2);
    dhttp2.send();
}

dhttp2.onload = function() {
    dcard = dhttp2.responseText
    ddoStaff()
}


function ddoStaff(){
    dres.Main.forEach(element => {

        var tmp = ""
        tmp = dcard
        tmp = tmp.replace("#Class#",dres.general.Class)
        tmp = tmp.replace("#imgClass#",dres.general.imgClass)
        tmp = tmp.replace("#img#",element.inform.img)
        tmp = tmp.replace("#iclass#",dres.general.iclass)
        tmp = tmp.replace("#cardtitle2#",element.inform.cardtitle2)
        tmp = tmp.replace("#cardsubtitle2#",element.inform.cardsubtitle2)
        tmp = tmp.replace("#link#",element.inform.link)

        dparnet.innerHTML += tmp
    });
}