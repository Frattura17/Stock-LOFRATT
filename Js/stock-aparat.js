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
// 97
var INPUT_TOTAL_INCOME096;
var _arrayValues096;
var arrayValues096 = JSON.parse(localStorage.getItem("valores096")) || [];
var suma096 = JSON.parse(localStorage.getItem("TOTAL096"));
var TOTAL_INCOME096 = document.getElementById('096').innerText = `${suma096}`;
var elem = document.getElementById('valor-entrada096');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor096();}}
function agregarValor096 () {
    if(arrayValues096 != ' ' && arrayValues096 > 0){
        INPUT_TOTAL_INCOME096 = document.getElementById('valor-entrada096').value;
        var arrayUnico = INPUT_TOTAL_INCOME096;  //  llamar del localStorage
        _arrayValues096 = JSON.parse(localStorage.getItem("TOTAL096"));  //  modificar
        let suma1 = parseInt(_arrayValues096) + parseInt(arrayUnico) ;
        TOTAL_INCOME096 = document.getElementById('096').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL096", JSON.stringify(suma1));
        localStorage.setItem("valores096", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME096 = document.getElementById('valor-entrada096').value;
        arrayValues096 = INPUT_TOTAL_INCOME096;  // mandar al localStorage
        localStorage.setItem("valores096", JSON.stringify(arrayValues096));  // modificar total productos
        _arrayValues096 = JSON.parse(localStorage.getItem("valores096"));
        TOTAL_INCOME096 = document.getElementById('096').innerText = `${arrayValues096}` // mandar al localStorage
         localStorage.setItem("TOTAL096", JSON.stringify(INPUT_TOTAL_INCOME096));  }   }
function disminuirValor096 () {
    _arrayValues096 = JSON.parse(localStorage.getItem("TOTAL096"));
    suma096 = _arrayValues096;
    if(arrayValues096 != ' ' && arrayValues096 > 0){
        INPUT_TOTAL_INCOME096 = document.getElementById('valor-entrada096').value;
        var arrayUnico = INPUT_TOTAL_INCOME096;  //  llamar del localStorage
        _arrayValues096 = JSON.parse(localStorage.getItem("TOTAL096"));  //  modificar
        let suma1 = parseInt(_arrayValues096) - parseInt(arrayUnico) ;
        TOTAL_INCOME096 = document.getElementById('096').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL096", JSON.stringify(suma1));
        localStorage.setItem("valores096", JSON.stringify(suma1)); } }
// 98
var INPUT_TOTAL_INCOME097;
var _arrayValues097;
var arrayValues097 = JSON.parse(localStorage.getItem("valores097")) || [];
var suma097 = JSON.parse(localStorage.getItem("TOTAL097"));
var TOTAL_INCOME097 = document.getElementById('097').innerText = `${suma097}`;
var elem = document.getElementById('valor-entrada097');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor097();}}
function agregarValor097 () {
    if(arrayValues097 != ' ' && arrayValues097 > 0){
        INPUT_TOTAL_INCOME097 = document.getElementById('valor-entrada097').value;
        var arrayUnico = INPUT_TOTAL_INCOME097;  //  llamar del localStorage
        _arrayValues097 = JSON.parse(localStorage.getItem("TOTAL097"));  //  modificar
        let suma1 = parseInt(_arrayValues097) + parseInt(arrayUnico) ;
        TOTAL_INCOME097 = document.getElementById('097').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL097", JSON.stringify(suma1));
        localStorage.setItem("valores097", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME097 = document.getElementById('valor-entrada097').value;
        arrayValues097 = INPUT_TOTAL_INCOME097;  // mandar al localStorage
        localStorage.setItem("valores097", JSON.stringify(arrayValues097));  // modificar total productos
        _arrayValues097 = JSON.parse(localStorage.getItem("valores097"));
        TOTAL_INCOME097 = document.getElementById('097').innerText = `${arrayValues097}` // mandar al localStorage
         localStorage.setItem("TOTAL097", JSON.stringify(INPUT_TOTAL_INCOME097));  }   }
function disminuirValor097 () {
    _arrayValues097 = JSON.parse(localStorage.getItem("TOTAL097"));
    suma097 = _arrayValues097;
    if(arrayValues097 != ' ' && arrayValues097 > 0){
        INPUT_TOTAL_INCOME097 = document.getElementById('valor-entrada097').value;
        var arrayUnico = INPUT_TOTAL_INCOME097;  //  llamar del localStorage
        _arrayValues097 = JSON.parse(localStorage.getItem("TOTAL097"));  //  modificar
        let suma1 = parseInt(_arrayValues097) - parseInt(arrayUnico) ;
        TOTAL_INCOME097 = document.getElementById('097').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL097", JSON.stringify(suma1));
        localStorage.setItem("valores097", JSON.stringify(suma1)); } }
// 99
var INPUT_TOTAL_INCOME098;
var _arrayValues098;
var arrayValues098 = JSON.parse(localStorage.getItem("valores098")) || [];
var suma098 = JSON.parse(localStorage.getItem("TOTAL098"));
var TOTAL_INCOME098 = document.getElementById('098').innerText = `${suma098}`;
var elem = document.getElementById('valor-entrada098');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor098();}}
function agregarValor098 () {
    if(arrayValues098 != ' ' && arrayValues098 > 0){
        INPUT_TOTAL_INCOME098 = document.getElementById('valor-entrada098').value;
        var arrayUnico = INPUT_TOTAL_INCOME098;  //  llamar del localStorage
        _arrayValues098 = JSON.parse(localStorage.getItem("TOTAL098"));  //  modificar
        let suma1 = parseInt(_arrayValues098) + parseInt(arrayUnico) ;
        TOTAL_INCOME098 = document.getElementById('098').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL098", JSON.stringify(suma1));
        localStorage.setItem("valores098", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME098 = document.getElementById('valor-entrada098').value;
        arrayValues098 = INPUT_TOTAL_INCOME098;  // mandar al localStorage
        localStorage.setItem("valores098", JSON.stringify(arrayValues098));  // modificar total productos
        _arrayValues098 = JSON.parse(localStorage.getItem("valores098"));
        TOTAL_INCOME098 = document.getElementById('098').innerText = `${arrayValues098}` // mandar al localStorage
         localStorage.setItem("TOTAL098", JSON.stringify(INPUT_TOTAL_INCOME098));  }   }
function disminuirValor098 () {
    _arrayValues098 = JSON.parse(localStorage.getItem("TOTAL098"));
    suma098 = _arrayValues098;
    if(arrayValues098 != ' ' && arrayValues098 > 0){
        INPUT_TOTAL_INCOME098 = document.getElementById('valor-entrada098').value;
        var arrayUnico = INPUT_TOTAL_INCOME098;  //  llamar del localStorage
        _arrayValues098 = JSON.parse(localStorage.getItem("TOTAL098"));  //  modificar
        let suma1 = parseInt(_arrayValues098) - parseInt(arrayUnico) ;
        TOTAL_INCOME098 = document.getElementById('098').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL098", JSON.stringify(suma1));
        localStorage.setItem("valores098", JSON.stringify(suma1)); } }
const productos = [
{nombre:'Alta Frecuencia + Campana',valor:suma091,idValor:'091',function:'agregarValor091()',function1:'disminuirValor091()',entrada: "valor-entrada091"},
{nombre:'Pipeta Campana',valor:suma092,idValor:'092',function:'agregarValor092()',function1:'disminuirValor092()',entrada: "valor-entrada092"},
{nombre:'Pipeta Espiral',valor:suma093,idValor:'093',function:'agregarValor093()',function1:'disminuirValor093()',entrada: "valor-entrada093"},
{nombre:'Pipeta Cebolla-Peine-Papada-Gota',valor:suma094,idValor:'094',function:'agregarValor094()',function1:'disminuirValor094()',entrada: "valor-entrada094"},
{nombre:'Torno Driller Egeo Gris',valor:suma095,idValor:'095',function:'agregarValor095()',function1:'disminuirValor095()',entrada: "valor-entrada095"},
{nombre:'Soporte Para Torno Colgante',valor:suma096,idValor:'096',function:'agregarValor096()',function1:'disminuirValor096()',entrada: "valor-entrada096"},
{nombre:'Sillon + Silla Profesional',valor:suma097,idValor:'097',function:'agregarValor097()',function1:'disminuirValor097()',entrada: "valor-entrada097"},
{nombre:'Esterilizador',valor:suma098,idValor:'098',function:'agregarValor098()',function1:'disminuirValor098()',entrada: "valor-entrada098"}
     
 ]
 var input = document.querySelector('#inputSearch');
 var boton = document.querySelector('#boton');
 var changeSearch = document.querySelector('#changeResult');
 var filtrar = () => {
     changeSearch.innerHTML = '';
     var textoSearch = input.value.toLowerCase();
     for(let producto of productos) {
         let nombre = producto.nombre.toLowerCase();
         let valorTotal = producto.valor
         let id = producto.idValor
         let func = producto.function
         let func1 = producto.function1
         let entry = producto.entrada
         if(nombre.indexOf(textoSearch) !== -1) {
             changeSearch.innerHTML += `<div class="card col-4 m-2" style="width: 16rem;" id="div-contenedor">
             <div class="card-body" >
              <!-- <img src="/assets/cerogram-img.jpeg" class="card-img-top img-logo" alt="..."> -->
               <h5 class="text-center nombre" id="div-producto" value="ciclofusion">${nombre}</h5>
             </div>
             <div class="mt-3 mb-3 text-center" id="div-incomes">
                  <ul class="list-group list-group-flush" id="div">
                    <li class="list-group-item text-center cantidad-total font-result" id="${id}">${valorTotal}</li>
                  </ul>
                <hr class="m-3 mt-0">
               <button class="btn btn-outline-success m-1 mb-2 ingreso " id="ingreso" onclick="${func}">Ingreso</button>
               <input type="number" class="input valor-entrada" id="${entry}">
               <button href="#" class="btn btn-outline-danger m-1 mb-2 venta " id="venta" onclick="${func1}">Venta</button>
             </div>
           </div>` 
         }
     }}
 boton.addEventListener('click',filtrar);
 input.addEventListener('keyup',filtrar);