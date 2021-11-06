// 123
var INPUT_TOTAL_INCOME122;
var _arrayValues122;
var arrayValues122 = JSON.parse(localStorage.getItem("valores122")) || [];
var suma122 = JSON.parse(localStorage.getItem("TOTAL122"));
var TOTAL_INCOME122 = document.getElementById('122').innerText = `${suma122}`;
var elem = document.getElementById('valor-entrada122');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor122();}}
function agregarValor122 () {
    if(arrayValues122 != ' ' && arrayValues122 > 0){
        INPUT_TOTAL_INCOME122 = document.getElementById('valor-entrada122').value;
        var arrayUnico = INPUT_TOTAL_INCOME122;  //  llamar del localStorage
        _arrayValues122 = JSON.parse(localStorage.getItem("TOTAL122"));  //  modificar
        let suma1 = parseInt(_arrayValues122) + parseInt(arrayUnico) ;
        TOTAL_INCOME122 = document.getElementById('122').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL122", JSON.stringify(suma1));
        localStorage.setItem("valores122", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME122 = document.getElementById('valor-entrada122').value;
        arrayValues122 = INPUT_TOTAL_INCOME122;  // mandar al localStorage
        localStorage.setItem("valores122", JSON.stringify(arrayValues122));  // modificar total productos
        _arrayValues122 = JSON.parse(localStorage.getItem("valores122"));
        TOTAL_INCOME122 = document.getElementById('122').innerText = `${arrayValues122}` // mandar al localStorage
         localStorage.setItem("TOTAL122", JSON.stringify(INPUT_TOTAL_INCOME122));  }   }
function disminuirValor122 () {
    _arrayValues122 = JSON.parse(localStorage.getItem("TOTAL122"));
    suma122 = _arrayValues122;
    if(arrayValues122 != ' ' && arrayValues122 > 0){
        INPUT_TOTAL_INCOME122 = document.getElementById('valor-entrada122').value;
        var arrayUnico = INPUT_TOTAL_INCOME122;  //  llamar del localStorage
        _arrayValues122 = JSON.parse(localStorage.getItem("TOTAL122"));  //  modificar
        let suma1 = parseInt(_arrayValues122) - parseInt(arrayUnico) ;
        TOTAL_INCOME122 = document.getElementById('122').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL122", JSON.stringify(suma1));
        localStorage.setItem("valores122", JSON.stringify(suma1)); } }
// 124
var INPUT_TOTAL_INCOME123;
var _arrayValues123;
var arrayValues123 = JSON.parse(localStorage.getItem("valores123")) || [];
var suma123 = JSON.parse(localStorage.getItem("TOTAL123"));
var TOTAL_INCOME123 = document.getElementById('123').innerText = `${suma123}`;
var elem = document.getElementById('valor-entrada123');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor123();}}
function agregarValor123 () {
    if(arrayValues123 != ' ' && arrayValues123 > 0){
        INPUT_TOTAL_INCOME123 = document.getElementById('valor-entrada123').value;
        var arrayUnico = INPUT_TOTAL_INCOME123;  //  llamar del localStorage
        _arrayValues123 = JSON.parse(localStorage.getItem("TOTAL123"));  //  modificar
        let suma1 = parseInt(_arrayValues123) + parseInt(arrayUnico) ;
        TOTAL_INCOME123 = document.getElementById('123').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL123", JSON.stringify(suma1));
        localStorage.setItem("valores123", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME123 = document.getElementById('valor-entrada123').value;
        arrayValues123 = INPUT_TOTAL_INCOME123;  // mandar al localStorage
        localStorage.setItem("valores123", JSON.stringify(arrayValues123));  // modificar total productos
        _arrayValues123 = JSON.parse(localStorage.getItem("valores123"));
        TOTAL_INCOME123 = document.getElementById('123').innerText = `${arrayValues123}` // mandar al localStorage
         localStorage.setItem("TOTAL123", JSON.stringify(INPUT_TOTAL_INCOME123));  }   }
function disminuirValor123 () {
    _arrayValues123 = JSON.parse(localStorage.getItem("TOTAL123"));
    suma123 = _arrayValues123;
    if(arrayValues123 != ' ' && arrayValues123 > 0){
        INPUT_TOTAL_INCOME123 = document.getElementById('valor-entrada123').value;
        var arrayUnico = INPUT_TOTAL_INCOME123;  //  llamar del localStorage
        _arrayValues123 = JSON.parse(localStorage.getItem("TOTAL123"));  //  modificar
        let suma1 = parseInt(_arrayValues123) - parseInt(arrayUnico) ;
        TOTAL_INCOME123 = document.getElementById('123').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL123", JSON.stringify(suma1));
        localStorage.setItem("valores123", JSON.stringify(suma1)); } }
// 125
var INPUT_TOTAL_INCOME124;
var _arrayValues124;
var arrayValues124 = JSON.parse(localStorage.getItem("valores124")) || [];
var suma124 = JSON.parse(localStorage.getItem("TOTAL124"));
var TOTAL_INCOME124 = document.getElementById('124').innerText = `${suma124}`;
var elem = document.getElementById('valor-entrada124');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor124();}}
function agregarValor124 () {
    if(arrayValues124 != ' ' && arrayValues124 > 0){
        INPUT_TOTAL_INCOME124 = document.getElementById('valor-entrada124').value;
        var arrayUnico = INPUT_TOTAL_INCOME124;  //  llamar del localStorage
        _arrayValues124 = JSON.parse(localStorage.getItem("TOTAL124"));  //  modificar
        let suma1 = parseInt(_arrayValues124) + parseInt(arrayUnico) ;
        TOTAL_INCOME124 = document.getElementById('124').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL124", JSON.stringify(suma1));
        localStorage.setItem("valores124", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME124 = document.getElementById('valor-entrada124').value;
        arrayValues124 = INPUT_TOTAL_INCOME124;  // mandar al localStorage
        localStorage.setItem("valores124", JSON.stringify(arrayValues124));  // modificar total productos
        _arrayValues124 = JSON.parse(localStorage.getItem("valores124"));
        TOTAL_INCOME124 = document.getElementById('124').innerText = `${arrayValues124}` // mandar al localStorage
         localStorage.setItem("TOTAL124", JSON.stringify(INPUT_TOTAL_INCOME124));  }   }
function disminuirValor124 () {
    _arrayValues124 = JSON.parse(localStorage.getItem("TOTAL124"));
    suma124 = _arrayValues124;
    if(arrayValues124 != ' ' && arrayValues124 > 0){
        INPUT_TOTAL_INCOME124 = document.getElementById('valor-entrada124').value;
        var arrayUnico = INPUT_TOTAL_INCOME124;  //  llamar del localStorage
        _arrayValues124 = JSON.parse(localStorage.getItem("TOTAL124"));  //  modificar
        let suma1 = parseInt(_arrayValues124) - parseInt(arrayUnico) ;
        TOTAL_INCOME124 = document.getElementById('124').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL124", JSON.stringify(suma1));
        localStorage.setItem("valores124", JSON.stringify(suma1)); } }
// 126
var INPUT_TOTAL_INCOME125;
var _arrayValues125;
var arrayValues125 = JSON.parse(localStorage.getItem("valores125")) || [];
var suma125 = JSON.parse(localStorage.getItem("TOTAL125"));
var TOTAL_INCOME125 = document.getElementById('125').innerText = `${suma125}`;
var elem = document.getElementById('valor-entrada125');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor125();}}
function agregarValor125 () {
    if(arrayValues125 != ' ' && arrayValues125 > 0){
        INPUT_TOTAL_INCOME125 = document.getElementById('valor-entrada125').value;
        var arrayUnico = INPUT_TOTAL_INCOME125;  //  llamar del localStorage
        _arrayValues125 = JSON.parse(localStorage.getItem("TOTAL125"));  //  modificar
        let suma1 = parseInt(_arrayValues125) + parseInt(arrayUnico) ;
        TOTAL_INCOME125 = document.getElementById('125').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL125", JSON.stringify(suma1));
        localStorage.setItem("valores125", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME125 = document.getElementById('valor-entrada125').value;
        arrayValues125 = INPUT_TOTAL_INCOME125;  // mandar al localStorage
        localStorage.setItem("valores125", JSON.stringify(arrayValues125));  // modificar total productos
        _arrayValues125 = JSON.parse(localStorage.getItem("valores125"));
        TOTAL_INCOME125 = document.getElementById('125').innerText = `${arrayValues125}` // mandar al localStorage
         localStorage.setItem("TOTAL125", JSON.stringify(INPUT_TOTAL_INCOME125));  }   }
function disminuirValor125 () {
    _arrayValues125 = JSON.parse(localStorage.getItem("TOTAL125"));
    suma125 = _arrayValues125;
    if(arrayValues125 != ' ' && arrayValues125 > 0){
        INPUT_TOTAL_INCOME125 = document.getElementById('valor-entrada125').value;
        var arrayUnico = INPUT_TOTAL_INCOME125;  //  llamar del localStorage
        _arrayValues125 = JSON.parse(localStorage.getItem("TOTAL125"));  //  modificar
        let suma1 = parseInt(_arrayValues125) - parseInt(arrayUnico) ;
        TOTAL_INCOME125 = document.getElementById('125').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL125", JSON.stringify(suma1));
        localStorage.setItem("valores125", JSON.stringify(suma1)); } }
// 127
var INPUT_TOTAL_INCOME126;
var _arrayValues126;
var arrayValues126 = JSON.parse(localStorage.getItem("valores126")) || [];
var suma126 = JSON.parse(localStorage.getItem("TOTAL126"));
var TOTAL_INCOME126 = document.getElementById('126').innerText = `${suma126}`;
var elem = document.getElementById('valor-entrada126');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor126();}}
function agregarValor126 () {
    if(arrayValues126 != ' ' && arrayValues126 > 0){
        INPUT_TOTAL_INCOME126 = document.getElementById('valor-entrada126').value;
        var arrayUnico = INPUT_TOTAL_INCOME126;  //  llamar del localStorage
        _arrayValues126 = JSON.parse(localStorage.getItem("TOTAL126"));  //  modificar
        let suma1 = parseInt(_arrayValues126) + parseInt(arrayUnico) ;
        TOTAL_INCOME126 = document.getElementById('126').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL126", JSON.stringify(suma1));
        localStorage.setItem("valores126", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME126 = document.getElementById('valor-entrada126').value;
        arrayValues126 = INPUT_TOTAL_INCOME126;  // mandar al localStorage
        localStorage.setItem("valores126", JSON.stringify(arrayValues126));  // modificar total productos
        _arrayValues126 = JSON.parse(localStorage.getItem("valores126"));
        TOTAL_INCOME126 = document.getElementById('126').innerText = `${arrayValues126}` // mandar al localStorage
         localStorage.setItem("TOTAL126", JSON.stringify(INPUT_TOTAL_INCOME126));  }   }
function disminuirValor126 () {
    _arrayValues126 = JSON.parse(localStorage.getItem("TOTAL126"));
    suma126 = _arrayValues126;
    if(arrayValues126 != ' ' && arrayValues126 > 0){
        INPUT_TOTAL_INCOME126 = document.getElementById('valor-entrada126').value;
        var arrayUnico = INPUT_TOTAL_INCOME126;  //  llamar del localStorage
        _arrayValues126 = JSON.parse(localStorage.getItem("TOTAL126"));  //  modificar
        let suma1 = parseInt(_arrayValues126) - parseInt(arrayUnico) ;
        TOTAL_INCOME126 = document.getElementById('126').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL126", JSON.stringify(suma1));
        localStorage.setItem("valores126", JSON.stringify(suma1)); } }
// 128
var INPUT_TOTAL_INCOME127;
var _arrayValues127;
var arrayValues127 = JSON.parse(localStorage.getItem("valores127")) || [];
var suma127 = JSON.parse(localStorage.getItem("TOTAL127"));
var TOTAL_INCOME127 = document.getElementById('127').innerText = `${suma127}`;
var elem = document.getElementById('valor-entrada127');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor127();}}
function agregarValor127 () {
    if(arrayValues127 != ' ' && arrayValues127 > 0){
        INPUT_TOTAL_INCOME127 = document.getElementById('valor-entrada127').value;
        var arrayUnico = INPUT_TOTAL_INCOME127;  //  llamar del localStorage
        _arrayValues127 = JSON.parse(localStorage.getItem("TOTAL127"));  //  modificar
        let suma1 = parseInt(_arrayValues127) + parseInt(arrayUnico) ;
        TOTAL_INCOME127 = document.getElementById('127').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL127", JSON.stringify(suma1));
        localStorage.setItem("valores127", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME127 = document.getElementById('valor-entrada127').value;
        arrayValues127 = INPUT_TOTAL_INCOME127;  // mandar al localStorage
        localStorage.setItem("valores127", JSON.stringify(arrayValues127));  // modificar total productos
        _arrayValues127 = JSON.parse(localStorage.getItem("valores127"));
        TOTAL_INCOME127 = document.getElementById('127').innerText = `${arrayValues127}` // mandar al localStorage
         localStorage.setItem("TOTAL127", JSON.stringify(INPUT_TOTAL_INCOME127));  }   }
function disminuirValor127 () {
    _arrayValues127 = JSON.parse(localStorage.getItem("TOTAL127"));
    suma127 = _arrayValues127;
    if(arrayValues127 != ' ' && arrayValues127 > 0){
        INPUT_TOTAL_INCOME127 = document.getElementById('valor-entrada127').value;
        var arrayUnico = INPUT_TOTAL_INCOME127;  //  llamar del localStorage
        _arrayValues127 = JSON.parse(localStorage.getItem("TOTAL127"));  //  modificar
        let suma1 = parseInt(_arrayValues127) - parseInt(arrayUnico) ;
        TOTAL_INCOME127 = document.getElementById('127').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL127", JSON.stringify(suma1));
        localStorage.setItem("valores127", JSON.stringify(suma1)); } }
// 129
var INPUT_TOTAL_INCOME128;
var _arrayValues128;
var arrayValues128 = JSON.parse(localStorage.getItem("valores128")) || [];
var suma128 = JSON.parse(localStorage.getItem("TOTAL128"));
var TOTAL_INCOME128 = document.getElementById('128').innerText = `${suma128}`;
var elem = document.getElementById('valor-entrada128');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor128();}}
function agregarValor128 () {
    if(arrayValues128 != ' ' && arrayValues128 > 0){
        INPUT_TOTAL_INCOME128 = document.getElementById('valor-entrada128').value;
        var arrayUnico = INPUT_TOTAL_INCOME128;  //  llamar del localStorage
        _arrayValues128 = JSON.parse(localStorage.getItem("TOTAL128"));  //  modificar
        let suma1 = parseInt(_arrayValues128) + parseInt(arrayUnico) ;
        TOTAL_INCOME128 = document.getElementById('128').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL128", JSON.stringify(suma1));
        localStorage.setItem("valores128", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME128 = document.getElementById('valor-entrada128').value;
        arrayValues128 = INPUT_TOTAL_INCOME128;  // mandar al localStorage
        localStorage.setItem("valores128", JSON.stringify(arrayValues128));  // modificar total productos
        _arrayValues128 = JSON.parse(localStorage.getItem("valores128"));
        TOTAL_INCOME128 = document.getElementById('128').innerText = `${arrayValues128}` // mandar al localStorage
         localStorage.setItem("TOTAL128", JSON.stringify(INPUT_TOTAL_INCOME128));  }   }
function disminuirValor128 () {
    _arrayValues128 = JSON.parse(localStorage.getItem("TOTAL128"));
    suma128 = _arrayValues128;
    if(arrayValues128 != ' ' && arrayValues128 > 0){
        INPUT_TOTAL_INCOME128 = document.getElementById('valor-entrada128').value;
        var arrayUnico = INPUT_TOTAL_INCOME128;  //  llamar del localStorage
        _arrayValues128 = JSON.parse(localStorage.getItem("TOTAL128"));  //  modificar
        let suma1 = parseInt(_arrayValues128) - parseInt(arrayUnico) ;
        TOTAL_INCOME128 = document.getElementById('128').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL128", JSON.stringify(suma1));
        localStorage.setItem("valores128", JSON.stringify(suma1)); } }
// 130
var INPUT_TOTAL_INCOME129;
var _arrayValues129;
var arrayValues129 = JSON.parse(localStorage.getItem("valores129")) || [];
var suma129 = JSON.parse(localStorage.getItem("TOTAL129"));
var TOTAL_INCOME129 = document.getElementById('129').innerText = `${suma129}`;
var elem = document.getElementById('valor-entrada129');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor129();}}
function agregarValor129 () {
    if(arrayValues129 != ' ' && arrayValues129 > 0){
        INPUT_TOTAL_INCOME129 = document.getElementById('valor-entrada129').value;
        var arrayUnico = INPUT_TOTAL_INCOME129;  //  llamar del localStorage
        _arrayValues129 = JSON.parse(localStorage.getItem("TOTAL129"));  //  modificar
        let suma1 = parseInt(_arrayValues129) + parseInt(arrayUnico) ;
        TOTAL_INCOME129 = document.getElementById('129').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL129", JSON.stringify(suma1));
        localStorage.setItem("valores129", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME129 = document.getElementById('valor-entrada129').value;
        arrayValues129 = INPUT_TOTAL_INCOME129;  // mandar al localStorage
        localStorage.setItem("valores129", JSON.stringify(arrayValues129));  // modificar total productos
        _arrayValues129 = JSON.parse(localStorage.getItem("valores129"));
        TOTAL_INCOME129 = document.getElementById('129').innerText = `${arrayValues129}` // mandar al localStorage
         localStorage.setItem("TOTAL129", JSON.stringify(INPUT_TOTAL_INCOME129));  }   }
function disminuirValor129 () {
    _arrayValues129 = JSON.parse(localStorage.getItem("TOTAL129"));
    suma129 = _arrayValues129;
    if(arrayValues129 != ' ' && arrayValues129 > 0){
        INPUT_TOTAL_INCOME129 = document.getElementById('valor-entrada129').value;
        var arrayUnico = INPUT_TOTAL_INCOME129;  //  llamar del localStorage
        _arrayValues129 = JSON.parse(localStorage.getItem("TOTAL129"));  //  modificar
        let suma1 = parseInt(_arrayValues129) - parseInt(arrayUnico) ;
        TOTAL_INCOME129 = document.getElementById('129').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL129", JSON.stringify(suma1));
        localStorage.setItem("valores129", JSON.stringify(suma1)); } }
// 131
var INPUT_TOTAL_INCOME130;
var _arrayValues130;
var arrayValues130 = JSON.parse(localStorage.getItem("valores130")) || [];
var suma130 = JSON.parse(localStorage.getItem("TOTAL130"));
var TOTAL_INCOME130 = document.getElementById('130').innerText = `${suma130}`;
var elem = document.getElementById('valor-entrada130');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor130();}}
function agregarValor130 () {
    if(arrayValues130 != ' ' && arrayValues130 > 0){
        INPUT_TOTAL_INCOME130 = document.getElementById('valor-entrada130').value;
        var arrayUnico = INPUT_TOTAL_INCOME130;  //  llamar del localStorage
        _arrayValues130 = JSON.parse(localStorage.getItem("TOTAL130"));  //  modificar
        let suma1 = parseInt(_arrayValues130) + parseInt(arrayUnico) ;
        TOTAL_INCOME130 = document.getElementById('130').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL130", JSON.stringify(suma1));
        localStorage.setItem("valores130", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME130 = document.getElementById('valor-entrada130').value;
        arrayValues130 = INPUT_TOTAL_INCOME130;  // mandar al localStorage
        localStorage.setItem("valores130", JSON.stringify(arrayValues130));  // modificar total productos
        _arrayValues130 = JSON.parse(localStorage.getItem("valores130"));
        TOTAL_INCOME130 = document.getElementById('130').innerText = `${arrayValues130}` // mandar al localStorage
         localStorage.setItem("TOTAL130", JSON.stringify(INPUT_TOTAL_INCOME130));  }   }
function disminuirValor130 () {
    _arrayValues130 = JSON.parse(localStorage.getItem("TOTAL130"));
    suma130 = _arrayValues130;
    if(arrayValues130 != ' ' && arrayValues130 > 0){
        INPUT_TOTAL_INCOME130 = document.getElementById('valor-entrada130').value;
        var arrayUnico = INPUT_TOTAL_INCOME130;  //  llamar del localStorage
        _arrayValues130 = JSON.parse(localStorage.getItem("TOTAL130"));  //  modificar
        let suma1 = parseInt(_arrayValues130) - parseInt(arrayUnico) ;
        TOTAL_INCOME130 = document.getElementById('130').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL130", JSON.stringify(suma1));
        localStorage.setItem("valores130", JSON.stringify(suma1)); } }
// 132
var INPUT_TOTAL_INCOME131;
var _arrayValues131;
var arrayValues131 = JSON.parse(localStorage.getItem("valores131")) || [];
var suma131 = JSON.parse(localStorage.getItem("TOTAL131"));
var TOTAL_INCOME131 = document.getElementById('131').innerText = `${suma131}`;
var elem = document.getElementById('valor-entrada131');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor131();}}
function agregarValor131 () {
    if(arrayValues131 != ' ' && arrayValues131 > 0){
        INPUT_TOTAL_INCOME131 = document.getElementById('valor-entrada131').value;
        var arrayUnico = INPUT_TOTAL_INCOME131;  //  llamar del localStorage
        _arrayValues131 = JSON.parse(localStorage.getItem("TOTAL131"));  //  modificar
        let suma1 = parseInt(_arrayValues131) + parseInt(arrayUnico) ;
        TOTAL_INCOME131 = document.getElementById('131').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL131", JSON.stringify(suma1));
        localStorage.setItem("valores131", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME131 = document.getElementById('valor-entrada131').value;
        arrayValues131 = INPUT_TOTAL_INCOME131;  // mandar al localStorage
        localStorage.setItem("valores131", JSON.stringify(arrayValues131));  // modificar total productos
        _arrayValues131 = JSON.parse(localStorage.getItem("valores131"));
        TOTAL_INCOME131 = document.getElementById('131').innerText = `${arrayValues131}` // mandar al localStorage
         localStorage.setItem("TOTAL131", JSON.stringify(INPUT_TOTAL_INCOME131));  }   }
function disminuirValor131 () {
    _arrayValues131 = JSON.parse(localStorage.getItem("TOTAL131"));
    suma131 = _arrayValues131;
    if(arrayValues131 != ' ' && arrayValues131 > 0){
        INPUT_TOTAL_INCOME131 = document.getElementById('valor-entrada131').value;
        var arrayUnico = INPUT_TOTAL_INCOME131;  //  llamar del localStorage
        _arrayValues131 = JSON.parse(localStorage.getItem("TOTAL131"));  //  modificar
        let suma1 = parseInt(_arrayValues131) - parseInt(arrayUnico) ;
        TOTAL_INCOME131 = document.getElementById('131').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL131", JSON.stringify(suma1));
        localStorage.setItem("valores131", JSON.stringify(suma1)); } }
// 133
var INPUT_TOTAL_INCOME132;
var _arrayValues132;
var arrayValues132 = JSON.parse(localStorage.getItem("valores132")) || [];
var suma132 = JSON.parse(localStorage.getItem("TOTAL132"));
var TOTAL_INCOME132 = document.getElementById('132').innerText = `${suma132}`;
var elem = document.getElementById('valor-entrada132');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor132();}}
function agregarValor132 () {
    if(arrayValues132 != ' ' && arrayValues132 > 0){
        INPUT_TOTAL_INCOME132 = document.getElementById('valor-entrada132').value;
        var arrayUnico = INPUT_TOTAL_INCOME132;  //  llamar del localStorage
        _arrayValues132 = JSON.parse(localStorage.getItem("TOTAL132"));  //  modificar
        let suma1 = parseInt(_arrayValues132) + parseInt(arrayUnico) ;
        TOTAL_INCOME132 = document.getElementById('132').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL132", JSON.stringify(suma1));
        localStorage.setItem("valores132", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME132 = document.getElementById('valor-entrada132').value;
        arrayValues132 = INPUT_TOTAL_INCOME132;  // mandar al localStorage
        localStorage.setItem("valores132", JSON.stringify(arrayValues132));  // modificar total productos
        _arrayValues132 = JSON.parse(localStorage.getItem("valores132"));
        TOTAL_INCOME132 = document.getElementById('132').innerText = `${arrayValues132}` // mandar al localStorage
         localStorage.setItem("TOTAL132", JSON.stringify(INPUT_TOTAL_INCOME132));  }   }
function disminuirValor132 () {
    _arrayValues132 = JSON.parse(localStorage.getItem("TOTAL132"));
    suma132 = _arrayValues132;
    if(arrayValues132 != ' ' && arrayValues132 > 0){
        INPUT_TOTAL_INCOME132 = document.getElementById('valor-entrada132').value;
        var arrayUnico = INPUT_TOTAL_INCOME132;  //  llamar del localStorage
        _arrayValues132 = JSON.parse(localStorage.getItem("TOTAL132"));  //  modificar
        let suma1 = parseInt(_arrayValues132) - parseInt(arrayUnico) ;
        TOTAL_INCOME132 = document.getElementById('132').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL132", JSON.stringify(suma1));
        localStorage.setItem("valores132", JSON.stringify(suma1)); } }
// 134
var INPUT_TOTAL_INCOME133;
var _arrayValues133;
var arrayValues133 = JSON.parse(localStorage.getItem("valores133")) || [];
var suma133 = JSON.parse(localStorage.getItem("TOTAL133"));
var TOTAL_INCOME133 = document.getElementById('133').innerText = `${suma133}`;
var elem = document.getElementById('valor-entrada133');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor133();}}
function agregarValor133 () {
    if(arrayValues133 != ' ' && arrayValues133 > 0){
        INPUT_TOTAL_INCOME133 = document.getElementById('valor-entrada133').value;
        var arrayUnico = INPUT_TOTAL_INCOME133;  //  llamar del localStorage
        _arrayValues133 = JSON.parse(localStorage.getItem("TOTAL133"));  //  modificar
        let suma1 = parseInt(_arrayValues133) + parseInt(arrayUnico) ;
        TOTAL_INCOME133 = document.getElementById('133').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL133", JSON.stringify(suma1));
        localStorage.setItem("valores133", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME133 = document.getElementById('valor-entrada133').value;
        arrayValues133 = INPUT_TOTAL_INCOME133;  // mandar al localStorage
        localStorage.setItem("valores133", JSON.stringify(arrayValues133));  // modificar total productos
        _arrayValues133 = JSON.parse(localStorage.getItem("valores133"));
        TOTAL_INCOME133 = document.getElementById('133').innerText = `${arrayValues133}` // mandar al localStorage
         localStorage.setItem("TOTAL133", JSON.stringify(INPUT_TOTAL_INCOME133));  }   }
function disminuirValor133 () {
    _arrayValues133 = JSON.parse(localStorage.getItem("TOTAL133"));
    suma133 = _arrayValues133;
    if(arrayValues133 != ' ' && arrayValues133 > 0){
        INPUT_TOTAL_INCOME133 = document.getElementById('valor-entrada133').value;
        var arrayUnico = INPUT_TOTAL_INCOME133;  //  llamar del localStorage
        _arrayValues133 = JSON.parse(localStorage.getItem("TOTAL133"));  //  modificar
        let suma1 = parseInt(_arrayValues133) - parseInt(arrayUnico) ;
        TOTAL_INCOME133 = document.getElementById('133').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL133", JSON.stringify(suma1));
        localStorage.setItem("valores133", JSON.stringify(suma1)); } }
// 135
var INPUT_TOTAL_INCOME134;
var _arrayValues134;
var arrayValues134 = JSON.parse(localStorage.getItem("valores134")) || [];
var suma134 = JSON.parse(localStorage.getItem("TOTAL134"));
var TOTAL_INCOME134 = document.getElementById('134').innerText = `${suma134}`;
var elem = document.getElementById('valor-entrada134');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor134();}}
function agregarValor134 () {
    if(arrayValues134 != ' ' && arrayValues134 > 0){
        INPUT_TOTAL_INCOME134 = document.getElementById('valor-entrada134').value;
        var arrayUnico = INPUT_TOTAL_INCOME134;  //  llamar del localStorage
        _arrayValues134 = JSON.parse(localStorage.getItem("TOTAL134"));  //  modificar
        let suma1 = parseInt(_arrayValues134) + parseInt(arrayUnico) ;
        TOTAL_INCOME134 = document.getElementById('134').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL134", JSON.stringify(suma1));
        localStorage.setItem("valores134", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME134 = document.getElementById('valor-entrada134').value;
        arrayValues134 = INPUT_TOTAL_INCOME134;  // mandar al localStorage
        localStorage.setItem("valores134", JSON.stringify(arrayValues134));  // modificar total productos
        _arrayValues134 = JSON.parse(localStorage.getItem("valores134"));
        TOTAL_INCOME134 = document.getElementById('134').innerText = `${arrayValues134}` // mandar al localStorage
         localStorage.setItem("TOTAL134", JSON.stringify(INPUT_TOTAL_INCOME134));  }   }
function disminuirValor134 () {
    _arrayValues134 = JSON.parse(localStorage.getItem("TOTAL134"));
    suma134 = _arrayValues134;
    if(arrayValues134 != ' ' && arrayValues134 > 0){
        INPUT_TOTAL_INCOME134 = document.getElementById('valor-entrada134').value;
        var arrayUnico = INPUT_TOTAL_INCOME134;  //  llamar del localStorage
        _arrayValues134 = JSON.parse(localStorage.getItem("TOTAL134"));  //  modificar
        let suma1 = parseInt(_arrayValues134) - parseInt(arrayUnico) ;
        TOTAL_INCOME134 = document.getElementById('134').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL134", JSON.stringify(suma1));
        localStorage.setItem("valores134", JSON.stringify(suma1)); } }
// 136
var INPUT_TOTAL_INCOME135;
var _arrayValues135;
var arrayValues135 = JSON.parse(localStorage.getItem("valores135")) || [];
var suma135 = JSON.parse(localStorage.getItem("TOTAL135"));
var TOTAL_INCOME135 = document.getElementById('135').innerText = `${suma135}`;
var elem = document.getElementById('valor-entrada135');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor135();}}
function agregarValor135 () {
    if(arrayValues135 != ' ' && arrayValues135 > 0){
        INPUT_TOTAL_INCOME135 = document.getElementById('valor-entrada135').value;
        var arrayUnico = INPUT_TOTAL_INCOME135;  //  llamar del localStorage
        _arrayValues135 = JSON.parse(localStorage.getItem("TOTAL135"));  //  modificar
        let suma1 = parseInt(_arrayValues135) + parseInt(arrayUnico) ;
        TOTAL_INCOME135 = document.getElementById('135').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL135", JSON.stringify(suma1));
        localStorage.setItem("valores135", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME135 = document.getElementById('valor-entrada135').value;
        arrayValues135 = INPUT_TOTAL_INCOME135;  // mandar al localStorage
        localStorage.setItem("valores135", JSON.stringify(arrayValues135));  // modificar total productos
        _arrayValues135 = JSON.parse(localStorage.getItem("valores135"));
        TOTAL_INCOME135 = document.getElementById('135').innerText = `${arrayValues135}` // mandar al localStorage
         localStorage.setItem("TOTAL135", JSON.stringify(INPUT_TOTAL_INCOME135));  }   }
function disminuirValor135 () {
    _arrayValues135 = JSON.parse(localStorage.getItem("TOTAL135"));
    suma135 = _arrayValues135;
    if(arrayValues135 != ' ' && arrayValues135 > 0){
        INPUT_TOTAL_INCOME135 = document.getElementById('valor-entrada135').value;
        var arrayUnico = INPUT_TOTAL_INCOME135;  //  llamar del localStorage
        _arrayValues135 = JSON.parse(localStorage.getItem("TOTAL135"));  //  modificar
        let suma1 = parseInt(_arrayValues135) - parseInt(arrayUnico) ;
        TOTAL_INCOME135 = document.getElementById('135').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL135", JSON.stringify(suma1));
        localStorage.setItem("valores135", JSON.stringify(suma1)); } }
// 137
var INPUT_TOTAL_INCOME136;
var _arrayValues136;
var arrayValues136 = JSON.parse(localStorage.getItem("valores136")) || [];
var suma136 = JSON.parse(localStorage.getItem("TOTAL136"));
var TOTAL_INCOME136 = document.getElementById('136').innerText = `${suma136}`;
var elem = document.getElementById('valor-entrada136');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor136();}}
function agregarValor136 () {
    if(arrayValues136 != ' ' && arrayValues136 > 0){
        INPUT_TOTAL_INCOME136 = document.getElementById('valor-entrada136').value;
        var arrayUnico = INPUT_TOTAL_INCOME136;  //  llamar del localStorage
        _arrayValues136 = JSON.parse(localStorage.getItem("TOTAL136"));  //  modificar
        let suma1 = parseInt(_arrayValues136) + parseInt(arrayUnico) ;
        TOTAL_INCOME136 = document.getElementById('136').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL136", JSON.stringify(suma1));
        localStorage.setItem("valores136", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME136 = document.getElementById('valor-entrada136').value;
        arrayValues136 = INPUT_TOTAL_INCOME136;  // mandar al localStorage
        localStorage.setItem("valores136", JSON.stringify(arrayValues136));  // modificar total productos
        _arrayValues136 = JSON.parse(localStorage.getItem("valores136"));
        TOTAL_INCOME136 = document.getElementById('136').innerText = `${arrayValues136}` // mandar al localStorage
         localStorage.setItem("TOTAL136", JSON.stringify(INPUT_TOTAL_INCOME136));  }   }
function disminuirValor136 () {
    _arrayValues136 = JSON.parse(localStorage.getItem("TOTAL136"));
    suma136 = _arrayValues136;
    if(arrayValues136 != ' ' && arrayValues136 > 0){
        INPUT_TOTAL_INCOME136 = document.getElementById('valor-entrada136').value;
        var arrayUnico = INPUT_TOTAL_INCOME136;  //  llamar del localStorage
        _arrayValues136 = JSON.parse(localStorage.getItem("TOTAL136"));  //  modificar
        let suma1 = parseInt(_arrayValues136) - parseInt(arrayUnico) ;
        TOTAL_INCOME136 = document.getElementById('136').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL136", JSON.stringify(suma1));
        localStorage.setItem("valores136", JSON.stringify(suma1)); } }
// 138
var INPUT_TOTAL_INCOME137;
var _arrayValues137;
var arrayValues137 = JSON.parse(localStorage.getItem("valores137")) || [];
var suma137 = JSON.parse(localStorage.getItem("TOTAL137"));
var TOTAL_INCOME137 = document.getElementById('137').innerText = `${suma137}`;
var elem = document.getElementById('valor-entrada137');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor137();}}
function agregarValor137 () {
    if(arrayValues137 != ' ' && arrayValues137 > 0){
        INPUT_TOTAL_INCOME137 = document.getElementById('valor-entrada137').value;
        var arrayUnico = INPUT_TOTAL_INCOME137;  //  llamar del localStorage
        _arrayValues137 = JSON.parse(localStorage.getItem("TOTAL137"));  //  modificar
        let suma1 = parseInt(_arrayValues137) + parseInt(arrayUnico) ;
        TOTAL_INCOME137 = document.getElementById('137').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL137", JSON.stringify(suma1));
        localStorage.setItem("valores137", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME137 = document.getElementById('valor-entrada137').value;
        arrayValues137 = INPUT_TOTAL_INCOME137;  // mandar al localStorage
        localStorage.setItem("valores137", JSON.stringify(arrayValues137));  // modificar total productos
        _arrayValues137 = JSON.parse(localStorage.getItem("valores137"));
        TOTAL_INCOME137 = document.getElementById('137').innerText = `${arrayValues137}` // mandar al localStorage
         localStorage.setItem("TOTAL137", JSON.stringify(INPUT_TOTAL_INCOME137));  }   }
function disminuirValor137 () {
    _arrayValues137 = JSON.parse(localStorage.getItem("TOTAL137"));
    suma137 = _arrayValues137;
    if(arrayValues137 != ' ' && arrayValues137 > 0){
        INPUT_TOTAL_INCOME137 = document.getElementById('valor-entrada137').value;
        var arrayUnico = INPUT_TOTAL_INCOME137;  //  llamar del localStorage
        _arrayValues137 = JSON.parse(localStorage.getItem("TOTAL137"));  //  modificar
        let suma1 = parseInt(_arrayValues137) - parseInt(arrayUnico) ;
        TOTAL_INCOME137 = document.getElementById('137').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL137", JSON.stringify(suma1));
        localStorage.setItem("valores137", JSON.stringify(suma1)); } }
// 139
var INPUT_TOTAL_INCOME138;
var _arrayValues138;
var arrayValues138 = JSON.parse(localStorage.getItem("valores138")) || [];
var suma138 = JSON.parse(localStorage.getItem("TOTAL138"));
var TOTAL_INCOME138 = document.getElementById('138').innerText = `${suma138}`;
var elem = document.getElementById('valor-entrada138');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor138();}}
function agregarValor138 () {
    if(arrayValues138 != ' ' && arrayValues138 > 0){
        INPUT_TOTAL_INCOME138 = document.getElementById('valor-entrada138').value;
        var arrayUnico = INPUT_TOTAL_INCOME138;  //  llamar del localStorage
        _arrayValues138 = JSON.parse(localStorage.getItem("TOTAL138"));  //  modificar
        let suma1 = parseInt(_arrayValues138) + parseInt(arrayUnico) ;
        TOTAL_INCOME138 = document.getElementById('138').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL138", JSON.stringify(suma1));
        localStorage.setItem("valores138", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME138 = document.getElementById('valor-entrada138').value;
        arrayValues138 = INPUT_TOTAL_INCOME138;  // mandar al localStorage
        localStorage.setItem("valores138", JSON.stringify(arrayValues138));  // modificar total productos
        _arrayValues138 = JSON.parse(localStorage.getItem("valores138"));
        TOTAL_INCOME138 = document.getElementById('138').innerText = `${arrayValues138}` // mandar al localStorage
         localStorage.setItem("TOTAL138", JSON.stringify(INPUT_TOTAL_INCOME138));  }   }
function disminuirValor138 () {
    _arrayValues138 = JSON.parse(localStorage.getItem("TOTAL138"));
    suma138 = _arrayValues138;
    if(arrayValues138 != ' ' && arrayValues138 > 0){
        INPUT_TOTAL_INCOME138 = document.getElementById('valor-entrada138').value;
        var arrayUnico = INPUT_TOTAL_INCOME138;  //  llamar del localStorage
        _arrayValues138 = JSON.parse(localStorage.getItem("TOTAL138"));  //  modificar
        let suma1 = parseInt(_arrayValues138) - parseInt(arrayUnico) ;
        TOTAL_INCOME138 = document.getElementById('138').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL138", JSON.stringify(suma1));
        localStorage.setItem("valores138", JSON.stringify(suma1)); } }
// 140
var INPUT_TOTAL_INCOME139;
var _arrayValues139;
var arrayValues139 = JSON.parse(localStorage.getItem("valores139")) || [];
var suma139 = JSON.parse(localStorage.getItem("TOTAL139"));
var TOTAL_INCOME139 = document.getElementById('139').innerText = `${suma139}`;
var elem = document.getElementById('valor-entrada139');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor139();}}
function agregarValor139 () {
    if(arrayValues139 != ' ' && arrayValues139 > 0){
        INPUT_TOTAL_INCOME139 = document.getElementById('valor-entrada139').value;
        var arrayUnico = INPUT_TOTAL_INCOME139;  //  llamar del localStorage
        _arrayValues139 = JSON.parse(localStorage.getItem("TOTAL139"));  //  modificar
        let suma1 = parseInt(_arrayValues139) + parseInt(arrayUnico) ;
        TOTAL_INCOME139 = document.getElementById('139').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL139", JSON.stringify(suma1));
        localStorage.setItem("valores139", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME139 = document.getElementById('valor-entrada139').value;
        arrayValues139 = INPUT_TOTAL_INCOME139;  // mandar al localStorage
        localStorage.setItem("valores139", JSON.stringify(arrayValues139));  // modificar total productos
        _arrayValues139 = JSON.parse(localStorage.getItem("valores139"));
        TOTAL_INCOME139 = document.getElementById('139').innerText = `${arrayValues139}` // mandar al localStorage
         localStorage.setItem("TOTAL139", JSON.stringify(INPUT_TOTAL_INCOME139));  }   }
function disminuirValor139 () {
    _arrayValues139 = JSON.parse(localStorage.getItem("TOTAL139"));
    suma139 = _arrayValues139;
    if(arrayValues139 != ' ' && arrayValues139 > 0){
        INPUT_TOTAL_INCOME139 = document.getElementById('valor-entrada139').value;
        var arrayUnico = INPUT_TOTAL_INCOME139;  //  llamar del localStorage
        _arrayValues139 = JSON.parse(localStorage.getItem("TOTAL139"));  //  modificar
        let suma1 = parseInt(_arrayValues139) - parseInt(arrayUnico) ;
        TOTAL_INCOME139 = document.getElementById('139').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL139", JSON.stringify(suma1));
        localStorage.setItem("valores139", JSON.stringify(suma1)); } }
// 141
var INPUT_TOTAL_INCOME140;
var _arrayValues140;
var arrayValues140 = JSON.parse(localStorage.getItem("valores140")) || [];
var suma140 = JSON.parse(localStorage.getItem("TOTAL140"));
var TOTAL_INCOME140 = document.getElementById('140').innerText = `${suma140}`;
var elem = document.getElementById('valor-entrada140');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor140();}}
function agregarValor140 () {
    if(arrayValues140 != ' ' && arrayValues140 > 0){
        INPUT_TOTAL_INCOME140 = document.getElementById('valor-entrada140').value;
        var arrayUnico = INPUT_TOTAL_INCOME140;  //  llamar del localStorage
        _arrayValues140 = JSON.parse(localStorage.getItem("TOTAL140"));  //  modificar
        let suma1 = parseInt(_arrayValues140) + parseInt(arrayUnico) ;
        TOTAL_INCOME140 = document.getElementById('140').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL140", JSON.stringify(suma1));
        localStorage.setItem("valores140", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME140 = document.getElementById('valor-entrada140').value;
        arrayValues140 = INPUT_TOTAL_INCOME140;  // mandar al localStorage
        localStorage.setItem("valores140", JSON.stringify(arrayValues140));  // modificar total productos
        _arrayValues140 = JSON.parse(localStorage.getItem("valores140"));
        TOTAL_INCOME140 = document.getElementById('140').innerText = `${arrayValues140}` // mandar al localStorage
         localStorage.setItem("TOTAL140", JSON.stringify(INPUT_TOTAL_INCOME140));  }   }
function disminuirValor140 () {
    _arrayValues140 = JSON.parse(localStorage.getItem("TOTAL140"));
    suma140 = _arrayValues140;
    if(arrayValues140 != ' ' && arrayValues140 > 0){
        INPUT_TOTAL_INCOME140 = document.getElementById('valor-entrada140').value;
        var arrayUnico = INPUT_TOTAL_INCOME140;  //  llamar del localStorage
        _arrayValues140 = JSON.parse(localStorage.getItem("TOTAL140"));  //  modificar
        let suma1 = parseInt(_arrayValues140) - parseInt(arrayUnico) ;
        TOTAL_INCOME140 = document.getElementById('140').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL140", JSON.stringify(suma1));
        localStorage.setItem("valores140", JSON.stringify(suma1)); } }
// 142
var INPUT_TOTAL_INCOME141;
var _arrayValues141;
var arrayValues141 = JSON.parse(localStorage.getItem("valores141")) || [];
var suma141 = JSON.parse(localStorage.getItem("TOTAL141"));
var TOTAL_INCOME141 = document.getElementById('141').innerText = `${suma141}`;
var elem = document.getElementById('valor-entrada141');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor141();}}
function agregarValor141 () {
    if(arrayValues141 != ' ' && arrayValues141 > 0){
        INPUT_TOTAL_INCOME141 = document.getElementById('valor-entrada141').value;
        var arrayUnico = INPUT_TOTAL_INCOME141;  //  llamar del localStorage
        _arrayValues141 = JSON.parse(localStorage.getItem("TOTAL141"));  //  modificar
        let suma1 = parseInt(_arrayValues141) + parseInt(arrayUnico) ;
        TOTAL_INCOME141 = document.getElementById('141').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL141", JSON.stringify(suma1));
        localStorage.setItem("valores141", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME141 = document.getElementById('valor-entrada141').value;
        arrayValues141 = INPUT_TOTAL_INCOME141;  // mandar al localStorage
        localStorage.setItem("valores141", JSON.stringify(arrayValues141));  // modificar total productos
        _arrayValues141 = JSON.parse(localStorage.getItem("valores141"));
        TOTAL_INCOME141 = document.getElementById('141').innerText = `${arrayValues141}` // mandar al localStorage
         localStorage.setItem("TOTAL141", JSON.stringify(INPUT_TOTAL_INCOME141));  }   }
function disminuirValor141 () {
    _arrayValues141 = JSON.parse(localStorage.getItem("TOTAL141"));
    suma141 = _arrayValues141;
    if(arrayValues141 != ' ' && arrayValues141 > 0){
        INPUT_TOTAL_INCOME141 = document.getElementById('valor-entrada141').value;
        var arrayUnico = INPUT_TOTAL_INCOME141;  //  llamar del localStorage
        _arrayValues141 = JSON.parse(localStorage.getItem("TOTAL141"));  //  modificar
        let suma1 = parseInt(_arrayValues141) - parseInt(arrayUnico) ;
        TOTAL_INCOME141 = document.getElementById('141').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL141", JSON.stringify(suma1));
        localStorage.setItem("valores141", JSON.stringify(suma1)); } }
// 143
var INPUT_TOTAL_INCOME142;
var _arrayValues142;
var arrayValues142 = JSON.parse(localStorage.getItem("valores142")) || [];
var suma142 = JSON.parse(localStorage.getItem("TOTAL142"));
var TOTAL_INCOME142 = document.getElementById('142').innerText = `${suma142}`;
var elem = document.getElementById('valor-entrada142');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor142();}}
function agregarValor142 () {
    if(arrayValues142 != ' ' && arrayValues142 > 0){
        INPUT_TOTAL_INCOME142 = document.getElementById('valor-entrada142').value;
        var arrayUnico = INPUT_TOTAL_INCOME142;  //  llamar del localStorage
        _arrayValues142 = JSON.parse(localStorage.getItem("TOTAL142"));  //  modificar
        let suma1 = parseInt(_arrayValues142) + parseInt(arrayUnico) ;
        TOTAL_INCOME142 = document.getElementById('142').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL142", JSON.stringify(suma1));
        localStorage.setItem("valores142", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME142 = document.getElementById('valor-entrada142').value;
        arrayValues142 = INPUT_TOTAL_INCOME142;  // mandar al localStorage
        localStorage.setItem("valores142", JSON.stringify(arrayValues142));  // modificar total productos
        _arrayValues142 = JSON.parse(localStorage.getItem("valores142"));
        TOTAL_INCOME142 = document.getElementById('142').innerText = `${arrayValues142}` // mandar al localStorage
         localStorage.setItem("TOTAL142", JSON.stringify(INPUT_TOTAL_INCOME142));  }   }
function disminuirValor142 () {
    _arrayValues142 = JSON.parse(localStorage.getItem("TOTAL142"));
    suma142 = _arrayValues142;
    if(arrayValues142 != ' ' && arrayValues142 > 0){
        INPUT_TOTAL_INCOME142 = document.getElementById('valor-entrada142').value;
        var arrayUnico = INPUT_TOTAL_INCOME142;  //  llamar del localStorage
        _arrayValues142 = JSON.parse(localStorage.getItem("TOTAL142"));  //  modificar
        let suma1 = parseInt(_arrayValues142) - parseInt(arrayUnico) ;
        TOTAL_INCOME142 = document.getElementById('142').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL142", JSON.stringify(suma1));
        localStorage.setItem("valores142", JSON.stringify(suma1)); } }
// 144
var INPUT_TOTAL_INCOME143;
var _arrayValues143;
var arrayValues143 = JSON.parse(localStorage.getItem("valores143")) || [];
var suma143 = JSON.parse(localStorage.getItem("TOTAL143"));
var TOTAL_INCOME143 = document.getElementById('143').innerText = `${suma143}`;
var elem = document.getElementById('valor-entrada143');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor143();}}
function agregarValor143 () {
    if(arrayValues143 != ' ' && arrayValues143 > 0){
        INPUT_TOTAL_INCOME143 = document.getElementById('valor-entrada143').value;
        var arrayUnico = INPUT_TOTAL_INCOME143;  //  llamar del localStorage
        _arrayValues143 = JSON.parse(localStorage.getItem("TOTAL143"));  //  modificar
        let suma1 = parseInt(_arrayValues143) + parseInt(arrayUnico) ;
        TOTAL_INCOME143 = document.getElementById('143').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL143", JSON.stringify(suma1));
        localStorage.setItem("valores143", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME143 = document.getElementById('valor-entrada143').value;
        arrayValues143 = INPUT_TOTAL_INCOME143;  // mandar al localStorage
        localStorage.setItem("valores143", JSON.stringify(arrayValues143));  // modificar total productos
        _arrayValues143 = JSON.parse(localStorage.getItem("valores143"));
        TOTAL_INCOME143 = document.getElementById('143').innerText = `${arrayValues143}` // mandar al localStorage
         localStorage.setItem("TOTAL143", JSON.stringify(INPUT_TOTAL_INCOME143));  }   }
function disminuirValor143 () {
    _arrayValues143 = JSON.parse(localStorage.getItem("TOTAL143"));
    suma143 = _arrayValues143;
    if(arrayValues143 != ' ' && arrayValues143 > 0){
        INPUT_TOTAL_INCOME143 = document.getElementById('valor-entrada143').value;
        var arrayUnico = INPUT_TOTAL_INCOME143;  //  llamar del localStorage
        _arrayValues143 = JSON.parse(localStorage.getItem("TOTAL143"));  //  modificar
        let suma1 = parseInt(_arrayValues143) - parseInt(arrayUnico) ;
        TOTAL_INCOME143 = document.getElementById('143').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL143", JSON.stringify(suma1));
        localStorage.setItem("valores143", JSON.stringify(suma1)); } }
// 145
var INPUT_TOTAL_INCOME144;
var _arrayValues144;
var arrayValues144 = JSON.parse(localStorage.getItem("valores144")) || [];
var suma144 = JSON.parse(localStorage.getItem("TOTAL144"));
var TOTAL_INCOME144 = document.getElementById('144').innerText = `${suma144}`;
var elem = document.getElementById('valor-entrada144');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor144();}}
function agregarValor144 () {
    if(arrayValues144 != ' ' && arrayValues144 > 0){
        INPUT_TOTAL_INCOME144 = document.getElementById('valor-entrada144').value;
        var arrayUnico = INPUT_TOTAL_INCOME144;  //  llamar del localStorage
        _arrayValues144 = JSON.parse(localStorage.getItem("TOTAL144"));  //  modificar
        let suma1 = parseInt(_arrayValues144) + parseInt(arrayUnico) ;
        TOTAL_INCOME144 = document.getElementById('144').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL144", JSON.stringify(suma1));
        localStorage.setItem("valores144", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME144 = document.getElementById('valor-entrada144').value;
        arrayValues144 = INPUT_TOTAL_INCOME144;  // mandar al localStorage
        localStorage.setItem("valores144", JSON.stringify(arrayValues144));  // modificar total productos
        _arrayValues144 = JSON.parse(localStorage.getItem("valores144"));
        TOTAL_INCOME144 = document.getElementById('144').innerText = `${arrayValues144}` // mandar al localStorage
         localStorage.setItem("TOTAL144", JSON.stringify(INPUT_TOTAL_INCOME144));  }   }
function disminuirValor144 () {
    _arrayValues144 = JSON.parse(localStorage.getItem("TOTAL144"));
    suma144 = _arrayValues144;
    if(arrayValues144 != ' ' && arrayValues144 > 0){
        INPUT_TOTAL_INCOME144 = document.getElementById('valor-entrada144').value;
        var arrayUnico = INPUT_TOTAL_INCOME144;  //  llamar del localStorage
        _arrayValues144 = JSON.parse(localStorage.getItem("TOTAL144"));  //  modificar
        let suma1 = parseInt(_arrayValues144) - parseInt(arrayUnico) ;
        TOTAL_INCOME144 = document.getElementById('144').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL144", JSON.stringify(suma1));
        localStorage.setItem("valores144", JSON.stringify(suma1)); } }
// 146
var INPUT_TOTAL_INCOME145;
var _arrayValues145;
var arrayValues145 = JSON.parse(localStorage.getItem("valores145")) || [];
var suma145 = JSON.parse(localStorage.getItem("TOTAL145"));
var TOTAL_INCOME145 = document.getElementById('145').innerText = `${suma145}`;
var elem = document.getElementById('valor-entrada145');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor145();}}
function agregarValor145 () {
    if(arrayValues145 != ' ' && arrayValues145 > 0){
        INPUT_TOTAL_INCOME145 = document.getElementById('valor-entrada145').value;
        var arrayUnico = INPUT_TOTAL_INCOME145;  //  llamar del localStorage
        _arrayValues145 = JSON.parse(localStorage.getItem("TOTAL145"));  //  modificar
        let suma1 = parseInt(_arrayValues145) + parseInt(arrayUnico) ;
        TOTAL_INCOME145 = document.getElementById('145').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL145", JSON.stringify(suma1));
        localStorage.setItem("valores145", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME145 = document.getElementById('valor-entrada145').value;
        arrayValues145 = INPUT_TOTAL_INCOME145;  // mandar al localStorage
        localStorage.setItem("valores145", JSON.stringify(arrayValues145));  // modificar total productos
        _arrayValues145 = JSON.parse(localStorage.getItem("valores145"));
        TOTAL_INCOME145 = document.getElementById('145').innerText = `${arrayValues145}` // mandar al localStorage
         localStorage.setItem("TOTAL145", JSON.stringify(INPUT_TOTAL_INCOME145));  }   }
function disminuirValor145 () {
    _arrayValues145 = JSON.parse(localStorage.getItem("TOTAL145"));
    suma145 = _arrayValues145;
    if(arrayValues145 != ' ' && arrayValues145 > 0){
        INPUT_TOTAL_INCOME145 = document.getElementById('valor-entrada145').value;
        var arrayUnico = INPUT_TOTAL_INCOME145;  //  llamar del localStorage
        _arrayValues145 = JSON.parse(localStorage.getItem("TOTAL145"));  //  modificar
        let suma1 = parseInt(_arrayValues145) - parseInt(arrayUnico) ;
        TOTAL_INCOME145 = document.getElementById('145').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL145", JSON.stringify(suma1));
        localStorage.setItem("valores145", JSON.stringify(suma1)); } }
// 147
var INPUT_TOTAL_INCOME146;
var _arrayValues146;
var arrayValues146 = JSON.parse(localStorage.getItem("valores146")) || [];
var suma146 = JSON.parse(localStorage.getItem("TOTAL146"));
var TOTAL_INCOME146 = document.getElementById('146').innerText = `${suma146}`;
var elem = document.getElementById('valor-entrada146');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor146();}}
function agregarValor146 () {
    if(arrayValues146 != ' ' && arrayValues146 > 0){
        INPUT_TOTAL_INCOME146 = document.getElementById('valor-entrada146').value;
        var arrayUnico = INPUT_TOTAL_INCOME146;  //  llamar del localStorage
        _arrayValues146 = JSON.parse(localStorage.getItem("TOTAL146"));  //  modificar
        let suma1 = parseInt(_arrayValues146) + parseInt(arrayUnico) ;
        TOTAL_INCOME146 = document.getElementById('146').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL146", JSON.stringify(suma1));
        localStorage.setItem("valores146", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME146 = document.getElementById('valor-entrada146').value;
        arrayValues146 = INPUT_TOTAL_INCOME146;  // mandar al localStorage
        localStorage.setItem("valores146", JSON.stringify(arrayValues146));  // modificar total productos
        _arrayValues146 = JSON.parse(localStorage.getItem("valores146"));
        TOTAL_INCOME146 = document.getElementById('146').innerText = `${arrayValues146}` // mandar al localStorage
         localStorage.setItem("TOTAL146", JSON.stringify(INPUT_TOTAL_INCOME146));  }   }
function disminuirValor146 () {
    _arrayValues146 = JSON.parse(localStorage.getItem("TOTAL146"));
    suma146 = _arrayValues146;
    if(arrayValues146 != ' ' && arrayValues146 > 0){
        INPUT_TOTAL_INCOME146 = document.getElementById('valor-entrada146').value;
        var arrayUnico = INPUT_TOTAL_INCOME146;  //  llamar del localStorage
        _arrayValues146 = JSON.parse(localStorage.getItem("TOTAL146"));  //  modificar
        let suma1 = parseInt(_arrayValues146) - parseInt(arrayUnico) ;
        TOTAL_INCOME146 = document.getElementById('146').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL146", JSON.stringify(suma1));
        localStorage.setItem("valores146", JSON.stringify(suma1)); } }
// 148
var INPUT_TOTAL_INCOME147;
var _arrayValues147;
var arrayValues147 = JSON.parse(localStorage.getItem("valores147")) || [];
var suma147 = JSON.parse(localStorage.getItem("TOTAL147"));
var TOTAL_INCOME147 = document.getElementById('147').innerText = `${suma147}`;
var elem = document.getElementById('valor-entrada147');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor147();}}
function agregarValor147 () {
    if(arrayValues147 != ' ' && arrayValues147 > 0){
        INPUT_TOTAL_INCOME147 = document.getElementById('valor-entrada147').value;
        var arrayUnico = INPUT_TOTAL_INCOME147;  //  llamar del localStorage
        _arrayValues147 = JSON.parse(localStorage.getItem("TOTAL147"));  //  modificar
        let suma1 = parseInt(_arrayValues147) + parseInt(arrayUnico) ;
        TOTAL_INCOME147 = document.getElementById('147').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL147", JSON.stringify(suma1));
        localStorage.setItem("valores147", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME147 = document.getElementById('valor-entrada147').value;
        arrayValues147 = INPUT_TOTAL_INCOME147;  // mandar al localStorage
        localStorage.setItem("valores147", JSON.stringify(arrayValues147));  // modificar total productos
        _arrayValues147 = JSON.parse(localStorage.getItem("valores147"));
        TOTAL_INCOME147 = document.getElementById('147').innerText = `${arrayValues147}` // mandar al localStorage
         localStorage.setItem("TOTAL147", JSON.stringify(INPUT_TOTAL_INCOME147));  }   }
function disminuirValor147 () {
    _arrayValues147 = JSON.parse(localStorage.getItem("TOTAL147"));
    suma147 = _arrayValues147;
    if(arrayValues147 != ' ' && arrayValues147 > 0){
        INPUT_TOTAL_INCOME147 = document.getElementById('valor-entrada147').value;
        var arrayUnico = INPUT_TOTAL_INCOME147;  //  llamar del localStorage
        _arrayValues147 = JSON.parse(localStorage.getItem("TOTAL147"));  //  modificar
        let suma1 = parseInt(_arrayValues147) - parseInt(arrayUnico) ;
        TOTAL_INCOME147 = document.getElementById('147').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL147", JSON.stringify(suma1));
        localStorage.setItem("valores147", JSON.stringify(suma1)); } }
// 149
var INPUT_TOTAL_INCOME148;
var _arrayValues148;
var arrayValues148 = JSON.parse(localStorage.getItem("valores148")) || [];
var suma148 = JSON.parse(localStorage.getItem("TOTAL148"));
var TOTAL_INCOME148 = document.getElementById('148').innerText = `${suma148}`;
var elem = document.getElementById('valor-entrada148');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor148();}}
function agregarValor148 () {
    if(arrayValues148 != ' ' && arrayValues148 > 0){
        INPUT_TOTAL_INCOME148 = document.getElementById('valor-entrada148').value;
        var arrayUnico = INPUT_TOTAL_INCOME148;  //  llamar del localStorage
        _arrayValues148 = JSON.parse(localStorage.getItem("TOTAL148"));  //  modificar
        let suma1 = parseInt(_arrayValues148) + parseInt(arrayUnico) ;
        TOTAL_INCOME148 = document.getElementById('148').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL148", JSON.stringify(suma1));
        localStorage.setItem("valores148", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME148 = document.getElementById('valor-entrada148').value;
        arrayValues148 = INPUT_TOTAL_INCOME148;  // mandar al localStorage
        localStorage.setItem("valores148", JSON.stringify(arrayValues148));  // modificar total productos
        _arrayValues148 = JSON.parse(localStorage.getItem("valores148"));
        TOTAL_INCOME148 = document.getElementById('148').innerText = `${arrayValues148}` // mandar al localStorage
         localStorage.setItem("TOTAL148", JSON.stringify(INPUT_TOTAL_INCOME148));  }   }
function disminuirValor148 () {
    _arrayValues148 = JSON.parse(localStorage.getItem("TOTAL148"));
    suma148 = _arrayValues148;
    if(arrayValues148 != ' ' && arrayValues148 > 0){
        INPUT_TOTAL_INCOME148 = document.getElementById('valor-entrada148').value;
        var arrayUnico = INPUT_TOTAL_INCOME148;  //  llamar del localStorage
        _arrayValues148 = JSON.parse(localStorage.getItem("TOTAL148"));  //  modificar
        let suma1 = parseInt(_arrayValues148) - parseInt(arrayUnico) ;
        TOTAL_INCOME148 = document.getElementById('148').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL148", JSON.stringify(suma1));
        localStorage.setItem("valores148", JSON.stringify(suma1)); } }
// 150
var INPUT_TOTAL_INCOME149;
var _arrayValues149;
var arrayValues149 = JSON.parse(localStorage.getItem("valores149")) || [];
var suma149 = JSON.parse(localStorage.getItem("TOTAL149"));
var TOTAL_INCOME149 = document.getElementById('149').innerText = `${suma149}`;
var elem = document.getElementById('valor-entrada149');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor149();}}
function agregarValor149 () {
    if(arrayValues149 != ' ' && arrayValues149 > 0){
        INPUT_TOTAL_INCOME149 = document.getElementById('valor-entrada149').value;
        var arrayUnico = INPUT_TOTAL_INCOME149;  //  llamar del localStorage
        _arrayValues149 = JSON.parse(localStorage.getItem("TOTAL149"));  //  modificar
        let suma1 = parseInt(_arrayValues149) + parseInt(arrayUnico) ;
        TOTAL_INCOME149 = document.getElementById('149').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL149", JSON.stringify(suma1));
        localStorage.setItem("valores149", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME149 = document.getElementById('valor-entrada149').value;
        arrayValues149 = INPUT_TOTAL_INCOME149;  // mandar al localStorage
        localStorage.setItem("valores149", JSON.stringify(arrayValues149));  // modificar total productos
        _arrayValues149 = JSON.parse(localStorage.getItem("valores149"));
        TOTAL_INCOME149 = document.getElementById('149').innerText = `${arrayValues149}` // mandar al localStorage
         localStorage.setItem("TOTAL149", JSON.stringify(INPUT_TOTAL_INCOME149));  }   }
function disminuirValor149 () {
    _arrayValues149 = JSON.parse(localStorage.getItem("TOTAL149"));
    suma149 = _arrayValues149;
    if(arrayValues149 != ' ' && arrayValues149 > 0){
        INPUT_TOTAL_INCOME149 = document.getElementById('valor-entrada149').value;
        var arrayUnico = INPUT_TOTAL_INCOME149;  //  llamar del localStorage
        _arrayValues149 = JSON.parse(localStorage.getItem("TOTAL149"));  //  modificar
        let suma1 = parseInt(_arrayValues149) - parseInt(arrayUnico) ;
        TOTAL_INCOME149 = document.getElementById('149').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL149", JSON.stringify(suma1));
        localStorage.setItem("valores149", JSON.stringify(suma1)); } }