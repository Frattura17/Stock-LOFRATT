// 89
var INPUT_TOTAL_INCOME088;
var _arrayValues088;
var arrayValues088 = JSON.parse(localStorage.getItem("valores088")) || [];
var suma088 = JSON.parse(localStorage.getItem("TOTAL088"));
var TOTAL_INCOME088 = document.getElementById('088').innerText = `${suma088}`;
var elem = document.getElementById('valor-entrada088');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor088();}}
function agregarValor088 () {
    if(arrayValues088 != ' ' && arrayValues088 > 0){
        INPUT_TOTAL_INCOME088 = document.getElementById('valor-entrada088').value;
        var arrayUnico = INPUT_TOTAL_INCOME088;  //  llamar del localStorage
        _arrayValues088 = JSON.parse(localStorage.getItem("TOTAL088"));  //  modificar
        let suma1 = parseInt(_arrayValues088) + parseInt(arrayUnico) ;
        TOTAL_INCOME088 = document.getElementById('088').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL088", JSON.stringify(suma1));
        localStorage.setItem("valores088", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME088 = document.getElementById('valor-entrada088').value;
        arrayValues088 = INPUT_TOTAL_INCOME088;  // mandar al localStorage
        localStorage.setItem("valores088", JSON.stringify(arrayValues088));  // modificar total productos
        _arrayValues088 = JSON.parse(localStorage.getItem("valores088"));
        TOTAL_INCOME088 = document.getElementById('088').innerText = `${arrayValues088}` // mandar al localStorage
         localStorage.setItem("TOTAL088", JSON.stringify(INPUT_TOTAL_INCOME088));  }   }
function disminuirValor088 () {
    _arrayValues088 = JSON.parse(localStorage.getItem("TOTAL088"));
    suma088 = _arrayValues088;
    if(arrayValues088 != ' ' && arrayValues088 > 0){
        INPUT_TOTAL_INCOME088 = document.getElementById('valor-entrada088').value;
        var arrayUnico = INPUT_TOTAL_INCOME088;  //  llamar del localStorage
        _arrayValues088 = JSON.parse(localStorage.getItem("TOTAL088"));  //  modificar
        let suma1 = parseInt(_arrayValues088) - parseInt(arrayUnico) ;
        TOTAL_INCOME088 = document.getElementById('088').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL088", JSON.stringify(suma1));
        localStorage.setItem("valores088", JSON.stringify(suma1)); } }
// 90
var INPUT_TOTAL_INCOME089;
var _arrayValues089;
var arrayValues089 = JSON.parse(localStorage.getItem("valores089")) || [];
var suma089 = JSON.parse(localStorage.getItem("TOTAL089"));
var TOTAL_INCOME089 = document.getElementById('089').innerText = `${suma089}`;
var elem = document.getElementById('valor-entrada089');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor089();}}
function agregarValor089 () {
    if(arrayValues089 != ' ' && arrayValues089 > 0){
        INPUT_TOTAL_INCOME089 = document.getElementById('valor-entrada089').value;
        var arrayUnico = INPUT_TOTAL_INCOME089;  //  llamar del localStorage
        _arrayValues089 = JSON.parse(localStorage.getItem("TOTAL089"));  //  modificar
        let suma1 = parseInt(_arrayValues089) + parseInt(arrayUnico) ;
        TOTAL_INCOME089 = document.getElementById('089').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL089", JSON.stringify(suma1));
        localStorage.setItem("valores089", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME089 = document.getElementById('valor-entrada089').value;
        arrayValues089 = INPUT_TOTAL_INCOME089;  // mandar al localStorage
        localStorage.setItem("valores089", JSON.stringify(arrayValues089));  // modificar total productos
        _arrayValues089 = JSON.parse(localStorage.getItem("valores089"));
        TOTAL_INCOME089 = document.getElementById('089').innerText = `${arrayValues089}` // mandar al localStorage
         localStorage.setItem("TOTAL089", JSON.stringify(INPUT_TOTAL_INCOME089));  }   }
function disminuirValor089 () {
    _arrayValues089 = JSON.parse(localStorage.getItem("TOTAL089"));
    suma089 = _arrayValues089;
    if(arrayValues089 != ' ' && arrayValues089 > 0){
        INPUT_TOTAL_INCOME089 = document.getElementById('valor-entrada089').value;
        var arrayUnico = INPUT_TOTAL_INCOME089;  //  llamar del localStorage
        _arrayValues089 = JSON.parse(localStorage.getItem("TOTAL089"));  //  modificar
        let suma1 = parseInt(_arrayValues089) - parseInt(arrayUnico) ;
        TOTAL_INCOME089 = document.getElementById('089').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL089", JSON.stringify(suma1));
        localStorage.setItem("valores089", JSON.stringify(suma1)); } }
// 91
var INPUT_TOTAL_INCOME090;
var _arrayValues090;
var arrayValues090 = JSON.parse(localStorage.getItem("valores090")) || [];
var suma090 = JSON.parse(localStorage.getItem("TOTAL090"));
var TOTAL_INCOME090 = document.getElementById('090').innerText = `${suma090}`;
var elem = document.getElementById('valor-entrada090');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor090();}}
function agregarValor090 () {
    if(arrayValues090 != ' ' && arrayValues090 > 0){
        INPUT_TOTAL_INCOME090 = document.getElementById('valor-entrada090').value;
        var arrayUnico = INPUT_TOTAL_INCOME090;  //  llamar del localStorage
        _arrayValues090 = JSON.parse(localStorage.getItem("TOTAL090"));  //  modificar
        let suma1 = parseInt(_arrayValues090) + parseInt(arrayUnico) ;
        TOTAL_INCOME090 = document.getElementById('090').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL090", JSON.stringify(suma1));
        localStorage.setItem("valores090", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME090 = document.getElementById('valor-entrada090').value;
        arrayValues090 = INPUT_TOTAL_INCOME090;  // mandar al localStorage
        localStorage.setItem("valores090", JSON.stringify(arrayValues090));  // modificar total productos
        _arrayValues090 = JSON.parse(localStorage.getItem("valores090"));
        TOTAL_INCOME090 = document.getElementById('090').innerText = `${arrayValues090}` // mandar al localStorage
         localStorage.setItem("TOTAL090", JSON.stringify(INPUT_TOTAL_INCOME090));  }   }
function disminuirValor090 () {
    _arrayValues090 = JSON.parse(localStorage.getItem("TOTAL090"));
    suma090 = _arrayValues090;
    if(arrayValues090 != ' ' && arrayValues090 > 0){
        INPUT_TOTAL_INCOME090 = document.getElementById('valor-entrada090').value;
        var arrayUnico = INPUT_TOTAL_INCOME090;  //  llamar del localStorage
        _arrayValues090 = JSON.parse(localStorage.getItem("TOTAL090"));  //  modificar
        let suma1 = parseInt(_arrayValues090) - parseInt(arrayUnico) ;
        TOTAL_INCOME090 = document.getElementById('090').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL090", JSON.stringify(suma1));
        localStorage.setItem("valores090", JSON.stringify(suma1)); } }
// 92
var INPUT_TOTAL_INCOME091;
var _arrayValues091;
var arrayValues091 = JSON.parse(localStorage.getItem("valores091")) || [];
var suma091 = JSON.parse(localStorage.getItem("TOTAL091"));
var TOTAL_INCOME091 = document.getElementById('091').innerText = `${suma091}`;
var elem = document.getElementById('valor-entrada091');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor091();}}
function agregarValor091 () {
    if(arrayValues091 != ' ' && arrayValues091 > 0){
        INPUT_TOTAL_INCOME091 = document.getElementById('valor-entrada091').value;
        var arrayUnico = INPUT_TOTAL_INCOME091;  //  llamar del localStorage
        _arrayValues091 = JSON.parse(localStorage.getItem("TOTAL091"));  //  modificar
        let suma1 = parseInt(_arrayValues091) + parseInt(arrayUnico) ;
        TOTAL_INCOME091 = document.getElementById('091').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL091", JSON.stringify(suma1));
        localStorage.setItem("valores091", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME091 = document.getElementById('valor-entrada091').value;
        arrayValues091 = INPUT_TOTAL_INCOME091;  // mandar al localStorage
        localStorage.setItem("valores091", JSON.stringify(arrayValues091));  // modificar total productos
        _arrayValues091 = JSON.parse(localStorage.getItem("valores091"));
        TOTAL_INCOME091 = document.getElementById('091').innerText = `${arrayValues091}` // mandar al localStorage
         localStorage.setItem("TOTAL091", JSON.stringify(INPUT_TOTAL_INCOME091));  }   }
function disminuirValor091 () {
    _arrayValues091 = JSON.parse(localStorage.getItem("TOTAL091"));
    suma091 = _arrayValues091;
    if(arrayValues091 != ' ' && arrayValues091 > 0){
        INPUT_TOTAL_INCOME091 = document.getElementById('valor-entrada091').value;
        var arrayUnico = INPUT_TOTAL_INCOME091;  //  llamar del localStorage
        _arrayValues091 = JSON.parse(localStorage.getItem("TOTAL091"));  //  modificar
        let suma1 = parseInt(_arrayValues091) - parseInt(arrayUnico) ;
        TOTAL_INCOME091 = document.getElementById('091').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL091", JSON.stringify(suma1));
        localStorage.setItem("valores091", JSON.stringify(suma1)); } }
// 93
var INPUT_TOTAL_INCOME092;
var _arrayValues092;
var arrayValues092 = JSON.parse(localStorage.getItem("valores092")) || [];
var suma092 = JSON.parse(localStorage.getItem("TOTAL092"));
var TOTAL_INCOME092 = document.getElementById('092').innerText = `${suma092}`;
var elem = document.getElementById('valor-entrada092');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor092();}}
function agregarValor092 () {
    if(arrayValues092 != ' ' && arrayValues092 > 0){
        INPUT_TOTAL_INCOME092 = document.getElementById('valor-entrada092').value;
        var arrayUnico = INPUT_TOTAL_INCOME092;  //  llamar del localStorage
        _arrayValues092 = JSON.parse(localStorage.getItem("TOTAL092"));  //  modificar
        let suma1 = parseInt(_arrayValues092) + parseInt(arrayUnico) ;
        TOTAL_INCOME092 = document.getElementById('092').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL092", JSON.stringify(suma1));
        localStorage.setItem("valores092", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME092 = document.getElementById('valor-entrada092').value;
        arrayValues092 = INPUT_TOTAL_INCOME092;  // mandar al localStorage
        localStorage.setItem("valores092", JSON.stringify(arrayValues092));  // modificar total productos
        _arrayValues092 = JSON.parse(localStorage.getItem("valores092"));
        TOTAL_INCOME092 = document.getElementById('092').innerText = `${arrayValues092}` // mandar al localStorage
         localStorage.setItem("TOTAL092", JSON.stringify(INPUT_TOTAL_INCOME092));  }   }
function disminuirValor092 () {
    _arrayValues092 = JSON.parse(localStorage.getItem("TOTAL092"));
    suma092 = _arrayValues092;
    if(arrayValues092 != ' ' && arrayValues092 > 0){
        INPUT_TOTAL_INCOME092 = document.getElementById('valor-entrada092').value;
        var arrayUnico = INPUT_TOTAL_INCOME092;  //  llamar del localStorage
        _arrayValues092 = JSON.parse(localStorage.getItem("TOTAL092"));  //  modificar
        let suma1 = parseInt(_arrayValues092) - parseInt(arrayUnico) ;
        TOTAL_INCOME092 = document.getElementById('092').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL092", JSON.stringify(suma1));
        localStorage.setItem("valores092", JSON.stringify(suma1)); } }
// 94
var INPUT_TOTAL_INCOME093;
var _arrayValues093;
var arrayValues093 = JSON.parse(localStorage.getItem("valores093")) || [];
var suma093 = JSON.parse(localStorage.getItem("TOTAL093"));
var TOTAL_INCOME093 = document.getElementById('093').innerText = `${suma093}`;
var elem = document.getElementById('valor-entrada093');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor093();}}
function agregarValor093 () {
    if(arrayValues093 != ' ' && arrayValues093 > 0){
        INPUT_TOTAL_INCOME093 = document.getElementById('valor-entrada093').value;
        var arrayUnico = INPUT_TOTAL_INCOME093;  //  llamar del localStorage
        _arrayValues093 = JSON.parse(localStorage.getItem("TOTAL093"));  //  modificar
        let suma1 = parseInt(_arrayValues093) + parseInt(arrayUnico) ;
        TOTAL_INCOME093 = document.getElementById('093').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL093", JSON.stringify(suma1));
        localStorage.setItem("valores093", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME093 = document.getElementById('valor-entrada093').value;
        arrayValues093 = INPUT_TOTAL_INCOME093;  // mandar al localStorage
        localStorage.setItem("valores093", JSON.stringify(arrayValues093));  // modificar total productos
        _arrayValues093 = JSON.parse(localStorage.getItem("valores093"));
        TOTAL_INCOME093 = document.getElementById('093').innerText = `${arrayValues093}` // mandar al localStorage
         localStorage.setItem("TOTAL093", JSON.stringify(INPUT_TOTAL_INCOME093));  }   }
function disminuirValor093 () {
    _arrayValues093 = JSON.parse(localStorage.getItem("TOTAL093"));
    suma093 = _arrayValues093;
    if(arrayValues093 != ' ' && arrayValues093 > 0){
        INPUT_TOTAL_INCOME093 = document.getElementById('valor-entrada093').value;
        var arrayUnico = INPUT_TOTAL_INCOME093;  //  llamar del localStorage
        _arrayValues093 = JSON.parse(localStorage.getItem("TOTAL093"));  //  modificar
        let suma1 = parseInt(_arrayValues093) - parseInt(arrayUnico) ;
        TOTAL_INCOME093 = document.getElementById('093').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL093", JSON.stringify(suma1));
        localStorage.setItem("valores093", JSON.stringify(suma1)); } }
// 95
var INPUT_TOTAL_INCOME094;
var _arrayValues094;
var arrayValues094 = JSON.parse(localStorage.getItem("valores094")) || [];
var suma094 = JSON.parse(localStorage.getItem("TOTAL094"));
var TOTAL_INCOME094 = document.getElementById('094').innerText = `${suma094}`;
var elem = document.getElementById('valor-entrada094');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor094();}}
function agregarValor094 () {
    if(arrayValues094 != ' ' && arrayValues094 > 0){
        INPUT_TOTAL_INCOME094 = document.getElementById('valor-entrada094').value;
        var arrayUnico = INPUT_TOTAL_INCOME094;  //  llamar del localStorage
        _arrayValues094 = JSON.parse(localStorage.getItem("TOTAL094"));  //  modificar
        let suma1 = parseInt(_arrayValues094) + parseInt(arrayUnico) ;
        TOTAL_INCOME094 = document.getElementById('094').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL094", JSON.stringify(suma1));
        localStorage.setItem("valores094", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME094 = document.getElementById('valor-entrada094').value;
        arrayValues094 = INPUT_TOTAL_INCOME094;  // mandar al localStorage
        localStorage.setItem("valores094", JSON.stringify(arrayValues094));  // modificar total productos
        _arrayValues094 = JSON.parse(localStorage.getItem("valores094"));
        TOTAL_INCOME094 = document.getElementById('094').innerText = `${arrayValues094}` // mandar al localStorage
         localStorage.setItem("TOTAL094", JSON.stringify(INPUT_TOTAL_INCOME094));  }   }
function disminuirValor094 () {
    _arrayValues094 = JSON.parse(localStorage.getItem("TOTAL094"));
    suma094 = _arrayValues094;
    if(arrayValues094 != ' ' && arrayValues094 > 0){
        INPUT_TOTAL_INCOME094 = document.getElementById('valor-entrada094').value;
        var arrayUnico = INPUT_TOTAL_INCOME094;  //  llamar del localStorage
        _arrayValues094 = JSON.parse(localStorage.getItem("TOTAL094"));  //  modificar
        let suma1 = parseInt(_arrayValues094) - parseInt(arrayUnico) ;
        TOTAL_INCOME094 = document.getElementById('094').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL094", JSON.stringify(suma1));
        localStorage.setItem("valores094", JSON.stringify(suma1)); } }
// 96
var INPUT_TOTAL_INCOME095;
var _arrayValues095;
var arrayValues095 = JSON.parse(localStorage.getItem("valores095")) || [];
var suma095 = JSON.parse(localStorage.getItem("TOTAL095"));
var TOTAL_INCOME095 = document.getElementById('095').innerText = `${suma095}`;
var elem = document.getElementById('valor-entrada095');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor095();}}
function agregarValor095 () {
    if(arrayValues095 != ' ' && arrayValues095 > 0){
        INPUT_TOTAL_INCOME095 = document.getElementById('valor-entrada095').value;
        var arrayUnico = INPUT_TOTAL_INCOME095;  //  llamar del localStorage
        _arrayValues095 = JSON.parse(localStorage.getItem("TOTAL095"));  //  modificar
        let suma1 = parseInt(_arrayValues095) + parseInt(arrayUnico) ;
        TOTAL_INCOME095 = document.getElementById('095').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL095", JSON.stringify(suma1));
        localStorage.setItem("valores095", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME095 = document.getElementById('valor-entrada095').value;
        arrayValues095 = INPUT_TOTAL_INCOME095;  // mandar al localStorage
        localStorage.setItem("valores095", JSON.stringify(arrayValues095));  // modificar total productos
        _arrayValues095 = JSON.parse(localStorage.getItem("valores095"));
        TOTAL_INCOME095 = document.getElementById('095').innerText = `${arrayValues095}` // mandar al localStorage
         localStorage.setItem("TOTAL095", JSON.stringify(INPUT_TOTAL_INCOME095));  }   }
function disminuirValor095 () {
    _arrayValues095 = JSON.parse(localStorage.getItem("TOTAL095"));
    suma095 = _arrayValues095;
    if(arrayValues095 != ' ' && arrayValues095 > 0){
        INPUT_TOTAL_INCOME095 = document.getElementById('valor-entrada095').value;
        var arrayUnico = INPUT_TOTAL_INCOME095;  //  llamar del localStorage
        _arrayValues095 = JSON.parse(localStorage.getItem("TOTAL095"));  //  modificar
        let suma1 = parseInt(_arrayValues095) - parseInt(arrayUnico) ;
        TOTAL_INCOME095 = document.getElementById('095').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL095", JSON.stringify(suma1));
        localStorage.setItem("valores095", JSON.stringify(suma1)); } }