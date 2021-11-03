var INPUT_TOTAL_INCOME;
var _arrayValues;
var suma = JSON.parse(localStorage.getItem("TOTAL"));
var TOTAL_INCOME = document.getElementById('000').innerText = `Cantidad total ${suma}`;
var arrayValues = JSON.parse(localStorage.getItem("valores")) || [];
function agregarValor () {
    if(arrayValues != ' ' && arrayValues > 0){
        INPUT_TOTAL_INCOME = document.getElementById('valor-entrada').value;
        var arrayUnico = INPUT_TOTAL_INCOME;  //  llamar del localStorage
        _arrayValues = JSON.parse(localStorage.getItem("TOTAL"));  //  modificar
        let suma1 = parseInt(_arrayValues) + parseInt(arrayUnico) ;
        TOTAL_INCOME = document.getElementById('000').innerText = `Cantidad total ${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL", JSON.stringify(suma1));
        localStorage.setItem("valores", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME = document.getElementById('valor-entrada').value;
        arrayValues = INPUT_TOTAL_INCOME;  // mandar al localStorage
        localStorage.setItem("valores", JSON.stringify(arrayValues));  // modificar total productos
        _arrayValues = JSON.parse(localStorage.getItem("valores"));
        TOTAL_INCOME = document.getElementById('000').innerText = `Cantidad total ${arrayValues}` // mandar al localStorage
         localStorage.setItem("TOTAL", JSON.stringify(INPUT_TOTAL_INCOME));  }   }
function disminuirValor () {
    _arrayValues = JSON.parse(localStorage.getItem("TOTAL"));
    suma = _arrayValues;
    if(arrayValues != ' ' && arrayValues > 0){
        INPUT_TOTAL_INCOME = document.getElementById('valor-entrada').value;
        var arrayUnico = INPUT_TOTAL_INCOME;  //  llamar del localStorage
        _arrayValues = JSON.parse(localStorage.getItem("TOTAL"));  //  modificar
        let suma1 = parseInt(_arrayValues) - parseInt(arrayUnico) ;
        TOTAL_INCOME = document.getElementById('000').innerText = `Cantidad total ${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL", JSON.stringify(suma1));
        localStorage.setItem("valores", JSON.stringify(suma1)); } }
        // 2
var INPUT_TOTAL_INCOME001;
var _arrayValues001;
var arrayValues001 = JSON.parse(localStorage.getItem("valores001")) || [];
var suma001 = JSON.parse(localStorage.getItem("TOTAL001"));
var TOTAL_INCOME001 = document.getElementById('001').innerText = `Cantidad total ${suma001}`;
function agregarValor001 () {
    if(arrayValues001 != ' ' && arrayValues001 > 0){
        INPUT_TOTAL_INCOME001 = document.getElementById('valor-entrada001').value;
        var arrayUnico = INPUT_TOTAL_INCOME001;  //  llamar del localStorage
        _arrayValues001 = JSON.parse(localStorage.getItem("TOTAL001"));  //  modificar
        let suma1 = parseInt(_arrayValues001) + parseInt(arrayUnico) ;
        TOTAL_INCOME001 = document.getElementById('001').innerText = `Cantidad total ${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL001", JSON.stringify(suma1));
        localStorage.setItem("valores001", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME001 = document.getElementById('valor-entrada001').value;
        arrayValues001 = INPUT_TOTAL_INCOME001;  // mandar al localStorage
        localStorage.setItem("valores001", JSON.stringify(arrayValues001));  // modificar total productos
        _arrayValues001 = JSON.parse(localStorage.getItem("valores001"));
        TOTAL_INCOME001 = document.getElementById('001').innerText = `Cantidad total ${arrayValues001}` // mandar al localStorage
         localStorage.setItem("TOTAL001", JSON.stringify(INPUT_TOTAL_INCOME001));  }   }
function disminuirValor001 () {
    _arrayValues001 = JSON.parse(localStorage.getItem("TOTAL001"));
    suma001 = _arrayValues001;
    if(arrayValues001 != ' ' && arrayValues001 > 0){
        INPUT_TOTAL_INCOME001 = document.getElementById('valor-entrada001').value;
        var arrayUnico = INPUT_TOTAL_INCOME001;  //  llamar del localStorage
        _arrayValues001 = JSON.parse(localStorage.getItem("TOTAL001"));  //  modificar
        let suma1 = parseInt(_arrayValues001) - parseInt(arrayUnico) ;
        TOTAL_INCOME001 = document.getElementById('001').innerText = `Cantidad total ${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL001", JSON.stringify(suma1));
        localStorage.setItem("valores001", JSON.stringify(suma1)); } }
// 3
var INPUT_TOTAL_INCOME002;
var _arrayValues002;
var arrayValues002 = JSON.parse(localStorage.getItem("valores002")) || [];
var suma002 = JSON.parse(localStorage.getItem("TOTAL002"));
var TOTAL_INCOME002 = document.getElementById('002').innerText = `Cantidad total ${suma002}`;
function agregarValor002 () {
    if(arrayValues002 != ' ' && arrayValues002 > 0){
        INPUT_TOTAL_INCOME002 = document.getElementById('valor-entrada002').value;
        var arrayUnico = INPUT_TOTAL_INCOME002;  //  llamar del localStorage
        _arrayValues002 = JSON.parse(localStorage.getItem("TOTAL002"));  //  modificar
        let suma1 = parseInt(_arrayValues002) + parseInt(arrayUnico) ;
        TOTAL_INCOME002 = document.getElementById('002').innerText = `Cantidad total ${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL002", JSON.stringify(suma1));
        localStorage.setItem("valores002", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME002 = document.getElementById('valor-entrada002').value;
        arrayValues002 = INPUT_TOTAL_INCOME002;  // mandar al localStorage
        localStorage.setItem("valores002", JSON.stringify(arrayValues002));  // modificar total productos
        _arrayValues002 = JSON.parse(localStorage.getItem("valores002"));
        TOTAL_INCOME002 = document.getElementById('002').innerText = `Cantidad total ${arrayValues002}` // mandar al localStorage
         localStorage.setItem("TOTAL002", JSON.stringify(INPUT_TOTAL_INCOME002));  }   }
function disminuirValor002 () {
    _arrayValues002 = JSON.parse(localStorage.getItem("TOTAL002"));
    suma002 = _arrayValues002;
    if(arrayValues002 != ' ' && arrayValues002 > 0){
        INPUT_TOTAL_INCOME002 = document.getElementById('valor-entrada002').value;
        var arrayUnico = INPUT_TOTAL_INCOME002;  //  llamar del localStorage
        _arrayValues002 = JSON.parse(localStorage.getItem("TOTAL002"));  //  modificar
        let suma1 = parseInt(_arrayValues002) - parseInt(arrayUnico) ;
        TOTAL_INCOME002 = document.getElementById('002').innerText = `Cantidad total ${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL002", JSON.stringify(suma1));
        localStorage.setItem("valores002", JSON.stringify(suma1)); } }
// 4
var INPUT_TOTAL_INCOME003;
var _arrayValues003;
var arrayValues003 = JSON.parse(localStorage.getItem("valores003")) || [];
var suma003 = JSON.parse(localStorage.getItem("TOTAL003"));
var TOTAL_INCOME003 = document.getElementById('003').innerText = `Cantidad total ${suma003}`;
function agregarValor003 () {
    if(arrayValues003 != ' ' && arrayValues003 > 0){
        INPUT_TOTAL_INCOME003 = document.getElementById('valor-entrada003').value;
        var arrayUnico = INPUT_TOTAL_INCOME003;  //  llamar del localStorage
        _arrayValues003 = JSON.parse(localStorage.getItem("TOTAL003"));  //  modificar
        let suma1 = parseInt(_arrayValues003) + parseInt(arrayUnico) ;
        TOTAL_INCOME003 = document.getElementById('003').innerText = `Cantidad total ${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL003", JSON.stringify(suma1));
        localStorage.setItem("valores003", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME003 = document.getElementById('valor-entrada003').value;
        arrayValues003 = INPUT_TOTAL_INCOME003;  // mandar al localStorage
        localStorage.setItem("valores003", JSON.stringify(arrayValues003));  // modificar total productos
        _arrayValues003 = JSON.parse(localStorage.getItem("valores003"));
        TOTAL_INCOME003 = document.getElementById('003').innerText = `Cantidad total ${arrayValues003}` // mandar al localStorage
         localStorage.setItem("TOTAL003", JSON.stringify(INPUT_TOTAL_INCOME003));  }   }
function disminuirValor003 () {
    _arrayValues003 = JSON.parse(localStorage.getItem("TOTAL003"));
    suma003 = _arrayValues003;
    if(arrayValues003 != ' ' && arrayValues003 > 0){
        INPUT_TOTAL_INCOME003 = document.getElementById('valor-entrada003').value;
        var arrayUnico = INPUT_TOTAL_INCOME003;  //  llamar del localStorage
        _arrayValues003 = JSON.parse(localStorage.getItem("TOTAL003"));  //  modificar
        let suma1 = parseInt(_arrayValues003) - parseInt(arrayUnico) ;
        TOTAL_INCOME003 = document.getElementById('003').innerText = `Cantidad total ${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL003", JSON.stringify(suma1));
        localStorage.setItem("valores003", JSON.stringify(suma1)); } }