// 120
var INPUT_TOTAL_INCOME119;
var _arrayValues119;
var arrayValues119 = JSON.parse(localStorage.getItem("valores119")) || [];
var suma119 = JSON.parse(localStorage.getItem("TOTAL119"));
var TOTAL_INCOME119 = document.getElementById('119').innerText = `${suma119}`;
var elem = document.getElementById('valor-entrada119');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor119();}}
function agregarValor119 () {
    if(arrayValues119 != ' ' && arrayValues119 > 0){
        INPUT_TOTAL_INCOME119 = document.getElementById('valor-entrada119').value;
        var arrayUnico = INPUT_TOTAL_INCOME119;  //  llamar del localStorage
        _arrayValues119 = JSON.parse(localStorage.getItem("TOTAL119"));  //  modificar
        let suma1 = parseInt(_arrayValues119) + parseInt(arrayUnico) ;
        TOTAL_INCOME119 = document.getElementById('119').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL119", JSON.stringify(suma1));
        localStorage.setItem("valores119", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME119 = document.getElementById('valor-entrada119').value;
        arrayValues119 = INPUT_TOTAL_INCOME119;  // mandar al localStorage
        localStorage.setItem("valores119", JSON.stringify(arrayValues119));  // modificar total productos
        _arrayValues119 = JSON.parse(localStorage.getItem("valores119"));
        TOTAL_INCOME119 = document.getElementById('119').innerText = `${arrayValues119}` // mandar al localStorage
         localStorage.setItem("TOTAL119", JSON.stringify(INPUT_TOTAL_INCOME119));  }   }
function disminuirValor119 () {
    _arrayValues119 = JSON.parse(localStorage.getItem("TOTAL119"));
    suma119 = _arrayValues119;
    if(arrayValues119 != ' ' && arrayValues119 > 0){
        INPUT_TOTAL_INCOME119 = document.getElementById('valor-entrada119').value;
        var arrayUnico = INPUT_TOTAL_INCOME119;  //  llamar del localStorage
        _arrayValues119 = JSON.parse(localStorage.getItem("TOTAL119"));  //  modificar
        let suma1 = parseInt(_arrayValues119) - parseInt(arrayUnico) ;
        TOTAL_INCOME119 = document.getElementById('119').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL119", JSON.stringify(suma1));
        localStorage.setItem("valores119", JSON.stringify(suma1)); } }
// 121
