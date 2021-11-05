var INPUT_TOTAL_INCOME;
var _arrayValues;
var suma = JSON.parse(localStorage.getItem("TOTAL"));
var TOTAL_INCOME = document.getElementById('000').innerHTML = `${suma}`;
var arrayValues = JSON.parse(localStorage.getItem("valores")) || [];
var elem = document.getElementById('valor-entrada');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
        agregarValor();}}
function agregarValor () {
    if(arrayValues != ' ' && arrayValues > 0){
        INPUT_TOTAL_INCOME = document.getElementById('valor-entrada').value;
        var arrayUnico = INPUT_TOTAL_INCOME;  //  llamar del localStorage
        _arrayValues = JSON.parse(localStorage.getItem("TOTAL"));  //  modificar
        let suma1 = parseInt(_arrayValues) + parseInt(arrayUnico) ;
        TOTAL_INCOME = document.getElementById('000').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL", JSON.stringify(suma1));
        localStorage.setItem("valores", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME = document.getElementById('valor-entrada').value;
        arrayValues = INPUT_TOTAL_INCOME;  // mandar al localStorage
        localStorage.setItem("valores", JSON.stringify(arrayValues));  // modificar total productos
        _arrayValues = JSON.parse(localStorage.getItem("valores"));
        TOTAL_INCOME = document.getElementById('000').innerText = `${arrayValues}` // mandar al localStorage
         localStorage.setItem("TOTAL", JSON.stringify(INPUT_TOTAL_INCOME));  }   }
function disminuirValor () {
    _arrayValues = JSON.parse(localStorage.getItem("TOTAL"));
    suma = _arrayValues;
    if(arrayValues != ' ' && arrayValues > 0){
        INPUT_TOTAL_INCOME = document.getElementById('valor-entrada').value;
        var arrayUnico = INPUT_TOTAL_INCOME;  //  llamar del localStorage
        _arrayValues = JSON.parse(localStorage.getItem("TOTAL"));  //  modificar
        let suma1 = parseInt(_arrayValues) - parseInt(arrayUnico) ;
        TOTAL_INCOME = document.getElementById('000').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL", JSON.stringify(suma1));
        localStorage.setItem("valores", JSON.stringify(suma1)); } }
        // 2
var INPUT_TOTAL_INCOME001;
var _arrayValues001;
var arrayValues001 = JSON.parse(localStorage.getItem("valores001")) || [];
var suma001 = JSON.parse(localStorage.getItem("TOTAL001"));
var TOTAL_INCOME001 = document.getElementById('001').innerText = `${suma001}`;
var elem = document.getElementById('valor-entrada001');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor001();}}
function agregarValor001 () {
    if(arrayValues001 != ' ' && arrayValues001 > 0){
        INPUT_TOTAL_INCOME001 = document.getElementById('valor-entrada001').value;
        var arrayUnico = INPUT_TOTAL_INCOME001;  //  llamar del localStorage
        _arrayValues001 = JSON.parse(localStorage.getItem("TOTAL001"));  //  modificar
        let suma1 = parseInt(_arrayValues001) + parseInt(arrayUnico) ;
        TOTAL_INCOME001 = document.getElementById('001').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL001", JSON.stringify(suma1));
        localStorage.setItem("valores001", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME001 = document.getElementById('valor-entrada001').value;
        arrayValues001 = INPUT_TOTAL_INCOME001;  // mandar al localStorage
        localStorage.setItem("valores001", JSON.stringify(arrayValues001));  // modificar total productos
        _arrayValues001 = JSON.parse(localStorage.getItem("valores001"));
        TOTAL_INCOME001 = document.getElementById('001').innerText = `${arrayValues001}` // mandar al localStorage
         localStorage.setItem("TOTAL001", JSON.stringify(INPUT_TOTAL_INCOME001));  }   }
function disminuirValor001 () {
    _arrayValues001 = JSON.parse(localStorage.getItem("TOTAL001"));
    suma001 = _arrayValues001;
    if(arrayValues001 != ' ' && arrayValues001 > 0){
        INPUT_TOTAL_INCOME001 = document.getElementById('valor-entrada001').value;
        var arrayUnico = INPUT_TOTAL_INCOME001;  //  llamar del localStorage
        _arrayValues001 = JSON.parse(localStorage.getItem("TOTAL001"));  //  modificar
        let suma1 = parseInt(_arrayValues001) - parseInt(arrayUnico) ;
        TOTAL_INCOME001 = document.getElementById('001').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL001", JSON.stringify(suma1));
        localStorage.setItem("valores001", JSON.stringify(suma1)); } }
// 3
var INPUT_TOTAL_INCOME002;
var _arrayValues002;
var arrayValues002 = JSON.parse(localStorage.getItem("valores002")) || [];
var suma002 = JSON.parse(localStorage.getItem("TOTAL002"));
var TOTAL_INCOME002 = document.getElementById('002').innerText = `${suma002}`;
var elem = document.getElementById('valor-entrada002');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor002();}}
function agregarValor002 () {
    if(arrayValues002 != ' ' && arrayValues002 > 0){
        INPUT_TOTAL_INCOME002 = document.getElementById('valor-entrada002').value;
        var arrayUnico = INPUT_TOTAL_INCOME002;  //  llamar del localStorage
        _arrayValues002 = JSON.parse(localStorage.getItem("TOTAL002"));  //  modificar
        let suma1 = parseInt(_arrayValues002) + parseInt(arrayUnico) ;
        TOTAL_INCOME002 = document.getElementById('002').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL002", JSON.stringify(suma1));
        localStorage.setItem("valores002", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME002 = document.getElementById('valor-entrada002').value;
        arrayValues002 = INPUT_TOTAL_INCOME002;  // mandar al localStorage
        localStorage.setItem("valores002", JSON.stringify(arrayValues002));  // modificar total productos
        _arrayValues002 = JSON.parse(localStorage.getItem("valores002"));
        TOTAL_INCOME002 = document.getElementById('002').innerText = `${arrayValues002}` // mandar al localStorage
         localStorage.setItem("TOTAL002", JSON.stringify(INPUT_TOTAL_INCOME002));  }   }
function disminuirValor002 () {
    _arrayValues002 = JSON.parse(localStorage.getItem("TOTAL002"));
    suma002 = _arrayValues002;
    if(arrayValues002 != ' ' && arrayValues002 > 0){
        INPUT_TOTAL_INCOME002 = document.getElementById('valor-entrada002').value;
        var arrayUnico = INPUT_TOTAL_INCOME002;  //  llamar del localStorage
        _arrayValues002 = JSON.parse(localStorage.getItem("TOTAL002"));  //  modificar
        let suma1 = parseInt(_arrayValues002) - parseInt(arrayUnico) ;
        TOTAL_INCOME002 = document.getElementById('002').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL002", JSON.stringify(suma1));
        localStorage.setItem("valores002", JSON.stringify(suma1)); } }
// 4
var INPUT_TOTAL_INCOME003;
var _arrayValues003;
var arrayValues003 = JSON.parse(localStorage.getItem("valores003")) || [];
var suma003 = JSON.parse(localStorage.getItem("TOTAL003"));
var TOTAL_INCOME003 = document.getElementById('003').innerText = `${suma003}`;
var elem = document.getElementById('valor-entrada003');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor003();}}
function agregarValor003 () {
    if(arrayValues003 != ' ' && arrayValues003 > 0){
        INPUT_TOTAL_INCOME003 = document.getElementById('valor-entrada003').value;
        var arrayUnico = INPUT_TOTAL_INCOME003;  //  llamar del localStorage
        _arrayValues003 = JSON.parse(localStorage.getItem("TOTAL003"));  //  modificar
        let suma1 = parseInt(_arrayValues003) + parseInt(arrayUnico) ;
        TOTAL_INCOME003 = document.getElementById('003').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL003", JSON.stringify(suma1));
        localStorage.setItem("valores003", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME003 = document.getElementById('valor-entrada003').value;
        arrayValues003 = INPUT_TOTAL_INCOME003;  // mandar al localStorage
        localStorage.setItem("valores003", JSON.stringify(arrayValues003));  // modificar total productos
        _arrayValues003 = JSON.parse(localStorage.getItem("valores003"));
        TOTAL_INCOME003 = document.getElementById('003').innerText = `${arrayValues003}` // mandar al localStorage
         localStorage.setItem("TOTAL003", JSON.stringify(INPUT_TOTAL_INCOME003));  }   }
function disminuirValor003 () {
    _arrayValues003 = JSON.parse(localStorage.getItem("TOTAL003"));
    suma003 = _arrayValues003;
    if(arrayValues003 != ' ' && arrayValues003 > 0){
        INPUT_TOTAL_INCOME003 = document.getElementById('valor-entrada003').value;
        var arrayUnico = INPUT_TOTAL_INCOME003;  //  llamar del localStorage
        _arrayValues003 = JSON.parse(localStorage.getItem("TOTAL003"));  //  modificar
        let suma1 = parseInt(_arrayValues003) - parseInt(arrayUnico) ;
        TOTAL_INCOME003 = document.getElementById('003').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL003", JSON.stringify(suma1));
        localStorage.setItem("valores003", JSON.stringify(suma1)); } }
// 5
var INPUT_TOTAL_INCOME004;
var _arrayValues004;
var arrayValues004 = JSON.parse(localStorage.getItem("valores004")) || [];
var suma004 = JSON.parse(localStorage.getItem("TOTAL004"));
var TOTAL_INCOME004 = document.getElementById('004').innerText = `${suma004}`;
var elem = document.getElementById('valor-entrada004');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor004();}}
function agregarValor004 () {
    if(arrayValues004 != ' ' && arrayValues004 > 0){
        INPUT_TOTAL_INCOME004 = document.getElementById('valor-entrada004').value;
        var arrayUnico = INPUT_TOTAL_INCOME004;  //  llamar del localStorage
        _arrayValues004 = JSON.parse(localStorage.getItem("TOTAL004"));  //  modificar
        let suma1 = parseInt(_arrayValues004) + parseInt(arrayUnico) ;
        TOTAL_INCOME004 = document.getElementById('004').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL004", JSON.stringify(suma1));
        localStorage.setItem("valores004", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME004 = document.getElementById('valor-entrada004').value;
        arrayValues004 = INPUT_TOTAL_INCOME004;  // mandar al localStorage
        localStorage.setItem("valores004", JSON.stringify(arrayValues004));  // modificar total productos
        _arrayValues004 = JSON.parse(localStorage.getItem("valores004"));
        TOTAL_INCOME004 = document.getElementById('004').innerText = `${arrayValues004}` // mandar al localStorage
         localStorage.setItem("TOTAL004", JSON.stringify(INPUT_TOTAL_INCOME004));  }   }
function disminuirValor004 () {
    _arrayValues004 = JSON.parse(localStorage.getItem("TOTAL004"));
    suma004 = _arrayValues004;
    if(arrayValues004 != ' ' && arrayValues004 > 0){
        INPUT_TOTAL_INCOME004 = document.getElementById('valor-entrada004').value;
        var arrayUnico = INPUT_TOTAL_INCOME004;  //  llamar del localStorage
        _arrayValues004 = JSON.parse(localStorage.getItem("TOTAL004"));  //  modificar
        let suma1 = parseInt(_arrayValues004) - parseInt(arrayUnico) ;
        TOTAL_INCOME004 = document.getElementById('004').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL004", JSON.stringify(suma1));
        localStorage.setItem("valores004", JSON.stringify(suma1)); } }
// 6
var INPUT_TOTAL_INCOME005;
var _arrayValues005;
var arrayValues005 = JSON.parse(localStorage.getItem("valores005")) || [];
var suma005 = JSON.parse(localStorage.getItem("TOTAL005"));
var TOTAL_INCOME005 = document.getElementById('005').innerText = `${suma005}`;
var elem = document.getElementById('valor-entrada005');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor005();}}
function agregarValor005 () {
    if(arrayValues005 != ' ' && arrayValues005 > 0){
        INPUT_TOTAL_INCOME005 = document.getElementById('valor-entrada005').value;
        var arrayUnico = INPUT_TOTAL_INCOME005;  //  llamar del localStorage
        _arrayValues005 = JSON.parse(localStorage.getItem("TOTAL005"));  //  modificar
        let suma1 = parseInt(_arrayValues005) + parseInt(arrayUnico) ;
        TOTAL_INCOME005 = document.getElementById('005').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL005", JSON.stringify(suma1));
        localStorage.setItem("valores005", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME005 = document.getElementById('valor-entrada005').value;
        arrayValues005 = INPUT_TOTAL_INCOME005;  // mandar al localStorage
        localStorage.setItem("valores005", JSON.stringify(arrayValues005));  // modificar total productos
        _arrayValues005 = JSON.parse(localStorage.getItem("valores005"));
        TOTAL_INCOME005 = document.getElementById('005').innerText = `${arrayValues005}` // mandar al localStorage
         localStorage.setItem("TOTAL005", JSON.stringify(INPUT_TOTAL_INCOME005));  }   }
function disminuirValor005 () {
    _arrayValues005 = JSON.parse(localStorage.getItem("TOTAL005"));
    suma005 = _arrayValues005;
    if(arrayValues005 != ' ' && arrayValues005 > 0){
        INPUT_TOTAL_INCOME005 = document.getElementById('valor-entrada005').value;
        var arrayUnico = INPUT_TOTAL_INCOME005;  //  llamar del localStorage
        _arrayValues005 = JSON.parse(localStorage.getItem("TOTAL005"));  //  modificar
        let suma1 = parseInt(_arrayValues005) - parseInt(arrayUnico) ;
        TOTAL_INCOME005 = document.getElementById('005').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL005", JSON.stringify(suma1));
        localStorage.setItem("valores005", JSON.stringify(suma1)); } }
// 7
var INPUT_TOTAL_INCOME006;
var _arrayValues006;
var arrayValues006 = JSON.parse(localStorage.getItem("valores006")) || [];
var suma006 = JSON.parse(localStorage.getItem("TOTAL006"));
var TOTAL_INCOME006 = document.getElementById('006').innerText = `${suma006}`;
var elem = document.getElementById('valor-entrada006');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor006();}}
function agregarValor006 () {
    if(arrayValues006 != ' ' && arrayValues006 > 0){
        INPUT_TOTAL_INCOME006 = document.getElementById('valor-entrada006').value;
        var arrayUnico = INPUT_TOTAL_INCOME006;  //  llamar del localStorage
        _arrayValues006 = JSON.parse(localStorage.getItem("TOTAL006"));  //  modificar
        let suma1 = parseInt(_arrayValues006) + parseInt(arrayUnico) ;
        TOTAL_INCOME006 = document.getElementById('006').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL006", JSON.stringify(suma1));
        localStorage.setItem("valores006", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME006 = document.getElementById('valor-entrada006').value;
        arrayValues006 = INPUT_TOTAL_INCOME006;  // mandar al localStorage
        localStorage.setItem("valores006", JSON.stringify(arrayValues006));  // modificar total productos
        _arrayValues006 = JSON.parse(localStorage.getItem("valores006"));
        TOTAL_INCOME006 = document.getElementById('006').innerText = `${arrayValues006}` // mandar al localStorage
         localStorage.setItem("TOTAL006", JSON.stringify(INPUT_TOTAL_INCOME006));  }   }
function disminuirValor006 () {
    _arrayValues006 = JSON.parse(localStorage.getItem("TOTAL006"));
    suma006 = _arrayValues006;
    if(arrayValues006 != ' ' && arrayValues006 > 0){
        INPUT_TOTAL_INCOME006 = document.getElementById('valor-entrada006').value;
        var arrayUnico = INPUT_TOTAL_INCOME006;  //  llamar del localStorage
        _arrayValues006 = JSON.parse(localStorage.getItem("TOTAL006"));  //  modificar
        let suma1 = parseInt(_arrayValues006) - parseInt(arrayUnico) ;
        TOTAL_INCOME006 = document.getElementById('006').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL006", JSON.stringify(suma1));
        localStorage.setItem("valores006", JSON.stringify(suma1)); } }
// 8
var INPUT_TOTAL_INCOME007;
var _arrayValues007;
var arrayValues007 = JSON.parse(localStorage.getItem("valores007")) || [];
var suma007 = JSON.parse(localStorage.getItem("TOTAL007"));
var TOTAL_INCOME007 = document.getElementById('007').innerText = `${suma007}`;
var elem = document.getElementById('valor-entrada007');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor007();}}
function agregarValor007 () {
    if(arrayValues007 != ' ' && arrayValues007 > 0){
        INPUT_TOTAL_INCOME007 = document.getElementById('valor-entrada007').value;
        var arrayUnico = INPUT_TOTAL_INCOME007;  //  llamar del localStorage
        _arrayValues007 = JSON.parse(localStorage.getItem("TOTAL007"));  //  modificar
        let suma1 = parseInt(_arrayValues007) + parseInt(arrayUnico) ;
        TOTAL_INCOME007 = document.getElementById('007').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL007", JSON.stringify(suma1));
        localStorage.setItem("valores007", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME007 = document.getElementById('valor-entrada007').value;
        arrayValues007 = INPUT_TOTAL_INCOME007;  // mandar al localStorage
        localStorage.setItem("valores007", JSON.stringify(arrayValues007));  // modificar total productos
        _arrayValues007 = JSON.parse(localStorage.getItem("valores007"));
        TOTAL_INCOME007 = document.getElementById('007').innerText = `${arrayValues007}` // mandar al localStorage
         localStorage.setItem("TOTAL007", JSON.stringify(INPUT_TOTAL_INCOME007));  }   }
function disminuirValor007 () {
    _arrayValues007 = JSON.parse(localStorage.getItem("TOTAL007"));
    suma007 = _arrayValues007;
    if(arrayValues007 != ' ' && arrayValues007 > 0){
        INPUT_TOTAL_INCOME007 = document.getElementById('valor-entrada007').value;
        var arrayUnico = INPUT_TOTAL_INCOME007;  //  llamar del localStorage
        _arrayValues007 = JSON.parse(localStorage.getItem("TOTAL007"));  //  modificar
        let suma1 = parseInt(_arrayValues007) - parseInt(arrayUnico) ;
        TOTAL_INCOME007 = document.getElementById('007').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL007", JSON.stringify(suma1));
        localStorage.setItem("valores007", JSON.stringify(suma1)); } }
// 9
var INPUT_TOTAL_INCOME008;
var _arrayValues008;
var arrayValues008 = JSON.parse(localStorage.getItem("valores008")) || [];
var suma008 = JSON.parse(localStorage.getItem("TOTAL008"));
var TOTAL_INCOME008 = document.getElementById('008').innerText = `${suma008}`;
var elem = document.getElementById('valor-entrada008');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor008();}}
function agregarValor008 () {
    if(arrayValues008 != ' ' && arrayValues008 > 0){
        INPUT_TOTAL_INCOME008 = document.getElementById('valor-entrada008').value;
        var arrayUnico = INPUT_TOTAL_INCOME008;  //  llamar del localStorage
        _arrayValues008 = JSON.parse(localStorage.getItem("TOTAL008"));  //  modificar
        let suma1 = parseInt(_arrayValues008) + parseInt(arrayUnico) ;
        TOTAL_INCOME008 = document.getElementById('008').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL008", JSON.stringify(suma1));
        localStorage.setItem("valores008", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME008 = document.getElementById('valor-entrada008').value;
        arrayValues008 = INPUT_TOTAL_INCOME008;  // mandar al localStorage
        localStorage.setItem("valores008", JSON.stringify(arrayValues008));  // modificar total productos
        _arrayValues008 = JSON.parse(localStorage.getItem("valores008"));
        TOTAL_INCOME008 = document.getElementById('008').innerText = `${arrayValues008}` // mandar al localStorage
         localStorage.setItem("TOTAL008", JSON.stringify(INPUT_TOTAL_INCOME008));  }   }
function disminuirValor008 () {
    _arrayValues008 = JSON.parse(localStorage.getItem("TOTAL008"));
    suma008 = _arrayValues008;
    if(arrayValues008 != ' ' && arrayValues008 > 0){
        INPUT_TOTAL_INCOME008 = document.getElementById('valor-entrada008').value;
        var arrayUnico = INPUT_TOTAL_INCOME008;  //  llamar del localStorage
        _arrayValues008 = JSON.parse(localStorage.getItem("TOTAL008"));  //  modificar
        let suma1 = parseInt(_arrayValues008) - parseInt(arrayUnico) ;
        TOTAL_INCOME008 = document.getElementById('008').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL008", JSON.stringify(suma1));
        localStorage.setItem("valores008", JSON.stringify(suma1)); } }
// 10
var INPUT_TOTAL_INCOME009;
var _arrayValues009;
var arrayValues009 = JSON.parse(localStorage.getItem("valores009")) || [];
var suma009 = JSON.parse(localStorage.getItem("TOTAL009"));
var TOTAL_INCOME009 = document.getElementById('009').innerText = `${suma009}`;
var elem = document.getElementById('valor-entrada009');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor009();}}
function agregarValor009 () {
    if(arrayValues009 != ' ' && arrayValues009 > 0){
        INPUT_TOTAL_INCOME009 = document.getElementById('valor-entrada009').value;
        var arrayUnico = INPUT_TOTAL_INCOME009;  //  llamar del localStorage
        _arrayValues009 = JSON.parse(localStorage.getItem("TOTAL009"));  //  modificar
        let suma1 = parseInt(_arrayValues009) + parseInt(arrayUnico) ;
        TOTAL_INCOME009 = document.getElementById('009').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL009", JSON.stringify(suma1));
        localStorage.setItem("valores009", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME009 = document.getElementById('valor-entrada009').value;
        arrayValues009 = INPUT_TOTAL_INCOME009;  // mandar al localStorage
        localStorage.setItem("valores009", JSON.stringify(arrayValues009));  // modificar total productos
        _arrayValues009 = JSON.parse(localStorage.getItem("valores009"));
        TOTAL_INCOME009 = document.getElementById('009').innerText = `${arrayValues009}` // mandar al localStorage
         localStorage.setItem("TOTAL009", JSON.stringify(INPUT_TOTAL_INCOME009));  }   }
function disminuirValor009 () {
    _arrayValues009 = JSON.parse(localStorage.getItem("TOTAL009"));
    suma009 = _arrayValues009;
    if(arrayValues009 != ' ' && arrayValues009 > 0){
        INPUT_TOTAL_INCOME009 = document.getElementById('valor-entrada009').value;
        var arrayUnico = INPUT_TOTAL_INCOME009;  //  llamar del localStorage
        _arrayValues009 = JSON.parse(localStorage.getItem("TOTAL009"));  //  modificar
        let suma1 = parseInt(_arrayValues009) - parseInt(arrayUnico) ;
        TOTAL_INCOME009 = document.getElementById('009').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL009", JSON.stringify(suma1));
        localStorage.setItem("valores009", JSON.stringify(suma1)); } }
// 11
var INPUT_TOTAL_INCOME010;
var _arrayValues010;
var arrayValues010 = JSON.parse(localStorage.getItem("valores010")) || [];
var suma010 = JSON.parse(localStorage.getItem("TOTAL010"));
var TOTAL_INCOME010 = document.getElementById('010').innerText = `${suma010}`;
var elem = document.getElementById('valor-entrada010');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor010();}}
function agregarValor010 () {
    if(arrayValues010 != ' ' && arrayValues010 > 0){
        INPUT_TOTAL_INCOME010 = document.getElementById('valor-entrada010').value;
        var arrayUnico = INPUT_TOTAL_INCOME010;  //  llamar del localStorage
        _arrayValues010 = JSON.parse(localStorage.getItem("TOTAL010"));  //  modificar
        let suma1 = parseInt(_arrayValues010) + parseInt(arrayUnico) ;
        TOTAL_INCOME010 = document.getElementById('010').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL010", JSON.stringify(suma1));
        localStorage.setItem("valores010", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME010 = document.getElementById('valor-entrada010').value;
        arrayValues010 = INPUT_TOTAL_INCOME010;  // mandar al localStorage
        localStorage.setItem("valores010", JSON.stringify(arrayValues010));  // modificar total productos
        _arrayValues010 = JSON.parse(localStorage.getItem("valores010"));
        TOTAL_INCOME010 = document.getElementById('010').innerText = `${arrayValues010}` // mandar al localStorage
         localStorage.setItem("TOTAL010", JSON.stringify(INPUT_TOTAL_INCOME010));  }   }
function disminuirValor010 () {
    _arrayValues010 = JSON.parse(localStorage.getItem("TOTAL010"));
    suma010 = _arrayValues010;
    if(arrayValues010 != ' ' && arrayValues010 > 0){
        INPUT_TOTAL_INCOME010 = document.getElementById('valor-entrada010').value;
        var arrayUnico = INPUT_TOTAL_INCOME010;  //  llamar del localStorage
        _arrayValues010 = JSON.parse(localStorage.getItem("TOTAL010"));  //  modificar
        let suma1 = parseInt(_arrayValues010) - parseInt(arrayUnico) ;
        TOTAL_INCOME010 = document.getElementById('010').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL010", JSON.stringify(suma1));
        localStorage.setItem("valores010", JSON.stringify(suma1)); } }
// 12
var INPUT_TOTAL_INCOME011;
var _arrayValues011;
var arrayValues011 = JSON.parse(localStorage.getItem("valores011")) || [];
var suma011 = JSON.parse(localStorage.getItem("TOTAL011"));
var TOTAL_INCOME011 = document.getElementById('011').innerText = `${suma011}`;
var elem = document.getElementById('valor-entrada011');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor011();}}
function agregarValor011 () {
    if(arrayValues011 != ' ' && arrayValues011 > 0){
        INPUT_TOTAL_INCOME011 = document.getElementById('valor-entrada011').value;
        var arrayUnico = INPUT_TOTAL_INCOME011;  //  llamar del localStorage
        _arrayValues011 = JSON.parse(localStorage.getItem("TOTAL011"));  //  modificar
        let suma1 = parseInt(_arrayValues011) + parseInt(arrayUnico) ;
        TOTAL_INCOME011 = document.getElementById('011').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL011", JSON.stringify(suma1));
        localStorage.setItem("valores011", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME011 = document.getElementById('valor-entrada011').value;
        arrayValues011 = INPUT_TOTAL_INCOME011;  // mandar al localStorage
        localStorage.setItem("valores011", JSON.stringify(arrayValues011));  // modificar total productos
        _arrayValues011 = JSON.parse(localStorage.getItem("valores011"));
        TOTAL_INCOME011 = document.getElementById('011').innerText = `${arrayValues011}` // mandar al localStorage
         localStorage.setItem("TOTAL011", JSON.stringify(INPUT_TOTAL_INCOME011));  }   }
function disminuirValor011 () {
    _arrayValues011 = JSON.parse(localStorage.getItem("TOTAL011"));
    suma011 = _arrayValues011;
    if(arrayValues011 != ' ' && arrayValues011 > 0){
        INPUT_TOTAL_INCOME011 = document.getElementById('valor-entrada011').value;
        var arrayUnico = INPUT_TOTAL_INCOME011;  //  llamar del localStorage
        _arrayValues011 = JSON.parse(localStorage.getItem("TOTAL011"));  //  modificar
        let suma1 = parseInt(_arrayValues011) - parseInt(arrayUnico) ;
        TOTAL_INCOME011 = document.getElementById('011').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL011", JSON.stringify(suma1));
        localStorage.setItem("valores011", JSON.stringify(suma1)); } }
// 13
var INPUT_TOTAL_INCOME012;
var _arrayValues012;
var arrayValues012 = JSON.parse(localStorage.getItem("valores012")) || [];
var suma012 = JSON.parse(localStorage.getItem("TOTAL012"));
var TOTAL_INCOME012 = document.getElementById('012').innerText = `${suma012}`;
var elem = document.getElementById('valor-entrada012');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor012();}}
function agregarValor012 () {
    if(arrayValues012 != ' ' && arrayValues012 > 0){
        INPUT_TOTAL_INCOME012 = document.getElementById('valor-entrada012').value;
        var arrayUnico = INPUT_TOTAL_INCOME012;  //  llamar del localStorage
        _arrayValues012 = JSON.parse(localStorage.getItem("TOTAL012"));  //  modificar
        let suma1 = parseInt(_arrayValues012) + parseInt(arrayUnico) ;
        TOTAL_INCOME012 = document.getElementById('012').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL012", JSON.stringify(suma1));
        localStorage.setItem("valores012", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME012 = document.getElementById('valor-entrada012').value;
        arrayValues012 = INPUT_TOTAL_INCOME012;  // mandar al localStorage
        localStorage.setItem("valores012", JSON.stringify(arrayValues012));  // modificar total productos
        _arrayValues012 = JSON.parse(localStorage.getItem("valores012"));
        TOTAL_INCOME012 = document.getElementById('012').innerText = `${arrayValues012}` // mandar al localStorage
         localStorage.setItem("TOTAL012", JSON.stringify(INPUT_TOTAL_INCOME012));  }   }
function disminuirValor012 () {
    _arrayValues012 = JSON.parse(localStorage.getItem("TOTAL012"));
    suma012 = _arrayValues012;
    if(arrayValues012 != ' ' && arrayValues012 > 0){
        INPUT_TOTAL_INCOME012 = document.getElementById('valor-entrada012').value;
        var arrayUnico = INPUT_TOTAL_INCOME012;  //  llamar del localStorage
        _arrayValues012 = JSON.parse(localStorage.getItem("TOTAL012"));  //  modificar
        let suma1 = parseInt(_arrayValues012) - parseInt(arrayUnico) ;
        TOTAL_INCOME012 = document.getElementById('012').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL012", JSON.stringify(suma1));
        localStorage.setItem("valores012", JSON.stringify(suma1)); } }
// 14
var INPUT_TOTAL_INCOME013;
var _arrayValues013;
var arrayValues013 = JSON.parse(localStorage.getItem("valores013")) || [];
var suma013 = JSON.parse(localStorage.getItem("TOTAL013"));
var TOTAL_INCOME013 = document.getElementById('013').innerText = `${suma013}`;
var elem = document.getElementById('valor-entrada013');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor013();}}
function agregarValor013 () {
    if(arrayValues013 != ' ' && arrayValues013 > 0){
        INPUT_TOTAL_INCOME013 = document.getElementById('valor-entrada013').value;
        var arrayUnico = INPUT_TOTAL_INCOME013;  //  llamar del localStorage
        _arrayValues013 = JSON.parse(localStorage.getItem("TOTAL013"));  //  modificar
        let suma1 = parseInt(_arrayValues013) + parseInt(arrayUnico) ;
        TOTAL_INCOME013 = document.getElementById('013').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL013", JSON.stringify(suma1));
        localStorage.setItem("valores013", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME013 = document.getElementById('valor-entrada013').value;
        arrayValues013 = INPUT_TOTAL_INCOME013;  // mandar al localStorage
        localStorage.setItem("valores013", JSON.stringify(arrayValues013));  // modificar total productos
        _arrayValues013 = JSON.parse(localStorage.getItem("valores013"));
        TOTAL_INCOME013 = document.getElementById('013').innerText = `${arrayValues013}` // mandar al localStorage
         localStorage.setItem("TOTAL013", JSON.stringify(INPUT_TOTAL_INCOME013));  }   }
function disminuirValor013 () {
    _arrayValues013 = JSON.parse(localStorage.getItem("TOTAL013"));
    suma013 = _arrayValues013;
    if(arrayValues013 != ' ' && arrayValues013 > 0){
        INPUT_TOTAL_INCOME013 = document.getElementById('valor-entrada013').value;
        var arrayUnico = INPUT_TOTAL_INCOME013;  //  llamar del localStorage
        _arrayValues013 = JSON.parse(localStorage.getItem("TOTAL013"));  //  modificar
        let suma1 = parseInt(_arrayValues013) - parseInt(arrayUnico) ;
        TOTAL_INCOME013 = document.getElementById('013').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL013", JSON.stringify(suma1));
        localStorage.setItem("valores013", JSON.stringify(suma1)); } }
// 15
var INPUT_TOTAL_INCOME014;
var _arrayValues014;
var arrayValues014 = JSON.parse(localStorage.getItem("valores014")) || [];
var suma014 = JSON.parse(localStorage.getItem("TOTAL014"));
var TOTAL_INCOME014 = document.getElementById('014').innerText = `${suma014}`;
var elem = document.getElementById('valor-entrada014');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor014();}}
function agregarValor014 () {
    if(arrayValues014 != ' ' && arrayValues014 > 0){
        INPUT_TOTAL_INCOME014 = document.getElementById('valor-entrada014').value;
        var arrayUnico = INPUT_TOTAL_INCOME014;  //  llamar del localStorage
        _arrayValues014 = JSON.parse(localStorage.getItem("TOTAL014"));  //  modificar
        let suma1 = parseInt(_arrayValues014) + parseInt(arrayUnico) ;
        TOTAL_INCOME014 = document.getElementById('014').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL014", JSON.stringify(suma1));
        localStorage.setItem("valores014", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME014 = document.getElementById('valor-entrada014').value;
        arrayValues014 = INPUT_TOTAL_INCOME014;  // mandar al localStorage
        localStorage.setItem("valores014", JSON.stringify(arrayValues014));  // modificar total productos
        _arrayValues014 = JSON.parse(localStorage.getItem("valores014"));
        TOTAL_INCOME014 = document.getElementById('014').innerText = `${arrayValues014}` // mandar al localStorage
         localStorage.setItem("TOTAL014", JSON.stringify(INPUT_TOTAL_INCOME014));  }   }
function disminuirValor014 () {
    _arrayValues014 = JSON.parse(localStorage.getItem("TOTAL014"));
    suma014 = _arrayValues014;
    if(arrayValues014 != ' ' && arrayValues014 > 0){
        INPUT_TOTAL_INCOME014 = document.getElementById('valor-entrada014').value;
        var arrayUnico = INPUT_TOTAL_INCOME014;  //  llamar del localStorage
        _arrayValues014 = JSON.parse(localStorage.getItem("TOTAL014"));  //  modificar
        let suma1 = parseInt(_arrayValues014) - parseInt(arrayUnico) ;
        TOTAL_INCOME014 = document.getElementById('014').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL014", JSON.stringify(suma1));
        localStorage.setItem("valores014", JSON.stringify(suma1)); } }
// 16
var INPUT_TOTAL_INCOME015;
var _arrayValues015;
var arrayValues015 = JSON.parse(localStorage.getItem("valores015")) || [];
var suma015 = JSON.parse(localStorage.getItem("TOTAL015"));
var TOTAL_INCOME015 = document.getElementById('015').innerText = `${suma015}`;
var elem = document.getElementById('valor-entrada015');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor015();}}
function agregarValor015 () {
    if(arrayValues015 != ' ' && arrayValues015 > 0){
        INPUT_TOTAL_INCOME015 = document.getElementById('valor-entrada015').value;
        var arrayUnico = INPUT_TOTAL_INCOME015;  //  llamar del localStorage
        _arrayValues015 = JSON.parse(localStorage.getItem("TOTAL015"));  //  modificar
        let suma1 = parseInt(_arrayValues015) + parseInt(arrayUnico) ;
        TOTAL_INCOME015 = document.getElementById('015').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL015", JSON.stringify(suma1));
        localStorage.setItem("valores015", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME015 = document.getElementById('valor-entrada015').value;
        arrayValues015 = INPUT_TOTAL_INCOME015;  // mandar al localStorage
        localStorage.setItem("valores015", JSON.stringify(arrayValues015));  // modificar total productos
        _arrayValues015 = JSON.parse(localStorage.getItem("valores015"));
        TOTAL_INCOME015 = document.getElementById('015').innerText = `${arrayValues015}` // mandar al localStorage
         localStorage.setItem("TOTAL015", JSON.stringify(INPUT_TOTAL_INCOME015));  }   }
function disminuirValor015 () {
    _arrayValues015 = JSON.parse(localStorage.getItem("TOTAL015"));
    suma015 = _arrayValues015;
    if(arrayValues015 != ' ' && arrayValues015 > 0){
        INPUT_TOTAL_INCOME015 = document.getElementById('valor-entrada015').value;
        var arrayUnico = INPUT_TOTAL_INCOME015;  //  llamar del localStorage
        _arrayValues015 = JSON.parse(localStorage.getItem("TOTAL015"));  //  modificar
        let suma1 = parseInt(_arrayValues015) - parseInt(arrayUnico) ;
        TOTAL_INCOME015 = document.getElementById('015').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL015", JSON.stringify(suma1));
        localStorage.setItem("valores015", JSON.stringify(suma1)); } }
// 17
var INPUT_TOTAL_INCOME016;
var _arrayValues016;
var arrayValues016 = JSON.parse(localStorage.getItem("valores016")) || [];
var suma016 = JSON.parse(localStorage.getItem("TOTAL016"));
var TOTAL_INCOME016 = document.getElementById('016').innerText = `${suma016}`;
var elem = document.getElementById('valor-entrada016');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor016();}}
function agregarValor016 () {
    if(arrayValues016 != ' ' && arrayValues016 > 0){
        INPUT_TOTAL_INCOME016 = document.getElementById('valor-entrada016').value;
        var arrayUnico = INPUT_TOTAL_INCOME016;  //  llamar del localStorage
        _arrayValues016 = JSON.parse(localStorage.getItem("TOTAL016"));  //  modificar
        let suma1 = parseInt(_arrayValues016) + parseInt(arrayUnico) ;
        TOTAL_INCOME016 = document.getElementById('016').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL016", JSON.stringify(suma1));
        localStorage.setItem("valores016", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME016 = document.getElementById('valor-entrada016').value;
        arrayValues016 = INPUT_TOTAL_INCOME016;  // mandar al localStorage
        localStorage.setItem("valores016", JSON.stringify(arrayValues016));  // modificar total productos
        _arrayValues016 = JSON.parse(localStorage.getItem("valores016"));
        TOTAL_INCOME016 = document.getElementById('016').innerText = `${arrayValues016}` // mandar al localStorage
         localStorage.setItem("TOTAL016", JSON.stringify(INPUT_TOTAL_INCOME016));  }   }
function disminuirValor016 () {
    _arrayValues016 = JSON.parse(localStorage.getItem("TOTAL016"));
    suma016 = _arrayValues016;
    if(arrayValues016 != ' ' && arrayValues016 > 0){
        INPUT_TOTAL_INCOME016 = document.getElementById('valor-entrada016').value;
        var arrayUnico = INPUT_TOTAL_INCOME016;  //  llamar del localStorage
        _arrayValues016 = JSON.parse(localStorage.getItem("TOTAL016"));  //  modificar
        let suma1 = parseInt(_arrayValues016) - parseInt(arrayUnico) ;
        TOTAL_INCOME016 = document.getElementById('016').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL016", JSON.stringify(suma1));
        localStorage.setItem("valores016", JSON.stringify(suma1)); } }
// 18
var INPUT_TOTAL_INCOME017;
var _arrayValues017;
var arrayValues017 = JSON.parse(localStorage.getItem("valores017")) || [];
var suma017 = JSON.parse(localStorage.getItem("TOTAL017"));
var TOTAL_INCOME017 = document.getElementById('017').innerText = `${suma017}`;
var elem = document.getElementById('valor-entrada017');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor017();}}
function agregarValor017 () {
    if(arrayValues017 != ' ' && arrayValues017 > 0){
        INPUT_TOTAL_INCOME017 = document.getElementById('valor-entrada017').value;
        var arrayUnico = INPUT_TOTAL_INCOME017;  //  llamar del localStorage
        _arrayValues017 = JSON.parse(localStorage.getItem("TOTAL017"));  //  modificar
        let suma1 = parseInt(_arrayValues017) + parseInt(arrayUnico) ;
        TOTAL_INCOME017 = document.getElementById('017').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL017", JSON.stringify(suma1));
        localStorage.setItem("valores017", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME017 = document.getElementById('valor-entrada017').value;
        arrayValues017 = INPUT_TOTAL_INCOME017;  // mandar al localStorage
        localStorage.setItem("valores017", JSON.stringify(arrayValues017));  // modificar total productos
        _arrayValues017 = JSON.parse(localStorage.getItem("valores017"));
        TOTAL_INCOME017 = document.getElementById('017').innerText = `${arrayValues017}` // mandar al localStorage
         localStorage.setItem("TOTAL017", JSON.stringify(INPUT_TOTAL_INCOME017));  }   }
function disminuirValor017 () {
    _arrayValues017 = JSON.parse(localStorage.getItem("TOTAL017"));
    suma017 = _arrayValues017;
    if(arrayValues017 != ' ' && arrayValues017 > 0){
        INPUT_TOTAL_INCOME017 = document.getElementById('valor-entrada017').value;
        var arrayUnico = INPUT_TOTAL_INCOME017;  //  llamar del localStorage
        _arrayValues017 = JSON.parse(localStorage.getItem("TOTAL017"));  //  modificar
        let suma1 = parseInt(_arrayValues017) - parseInt(arrayUnico) ;
        TOTAL_INCOME017 = document.getElementById('017').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL017", JSON.stringify(suma1));
        localStorage.setItem("valores017", JSON.stringify(suma1)); } }
// 19
var INPUT_TOTAL_INCOME018;
var _arrayValues018;
var arrayValues018 = JSON.parse(localStorage.getItem("valores018")) || [];
var suma018 = JSON.parse(localStorage.getItem("TOTAL018"));
var TOTAL_INCOME018 = document.getElementById('018').innerText = `${suma018}`;
var elem = document.getElementById('valor-entrada018');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor018();}}
function agregarValor018 () {
    if(arrayValues018 != ' ' && arrayValues018 > 0){
        INPUT_TOTAL_INCOME018 = document.getElementById('valor-entrada018').value;
        var arrayUnico = INPUT_TOTAL_INCOME018;  //  llamar del localStorage
        _arrayValues018 = JSON.parse(localStorage.getItem("TOTAL018"));  //  modificar
        let suma1 = parseInt(_arrayValues018) + parseInt(arrayUnico) ;
        TOTAL_INCOME018 = document.getElementById('018').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL018", JSON.stringify(suma1));
        localStorage.setItem("valores018", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME018 = document.getElementById('valor-entrada018').value;
        arrayValues018 = INPUT_TOTAL_INCOME018;  // mandar al localStorage
        localStorage.setItem("valores018", JSON.stringify(arrayValues018));  // modificar total productos
        _arrayValues018 = JSON.parse(localStorage.getItem("valores018"));
        TOTAL_INCOME018 = document.getElementById('018').innerText = `${arrayValues018}` // mandar al localStorage
         localStorage.setItem("TOTAL018", JSON.stringify(INPUT_TOTAL_INCOME018));  }   }
function disminuirValor018 () {
    _arrayValues018 = JSON.parse(localStorage.getItem("TOTAL018"));
    suma018 = _arrayValues018;
    if(arrayValues018 != ' ' && arrayValues018 > 0){
        INPUT_TOTAL_INCOME018 = document.getElementById('valor-entrada018').value;
        var arrayUnico = INPUT_TOTAL_INCOME018;  //  llamar del localStorage
        _arrayValues018 = JSON.parse(localStorage.getItem("TOTAL018"));  //  modificar
        let suma1 = parseInt(_arrayValues018) - parseInt(arrayUnico) ;
        TOTAL_INCOME018 = document.getElementById('018').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL018", JSON.stringify(suma1));
        localStorage.setItem("valores018", JSON.stringify(suma1)); } }
// 20
var INPUT_TOTAL_INCOME019;
var _arrayValues019;
var arrayValues019 = JSON.parse(localStorage.getItem("valores019")) || [];
var suma019 = JSON.parse(localStorage.getItem("TOTAL019"));
var TOTAL_INCOME019 = document.getElementById('019').innerText = `${suma019}`;
var elem = document.getElementById('valor-entrada019');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor019();}}
function agregarValor019 () {
    if(arrayValues019 != ' ' && arrayValues019 > 0){
        INPUT_TOTAL_INCOME019 = document.getElementById('valor-entrada019').value;
        var arrayUnico = INPUT_TOTAL_INCOME019;  //  llamar del localStorage
        _arrayValues019 = JSON.parse(localStorage.getItem("TOTAL019"));  //  modificar
        let suma1 = parseInt(_arrayValues019) + parseInt(arrayUnico) ;
        TOTAL_INCOME019 = document.getElementById('019').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL019", JSON.stringify(suma1));
        localStorage.setItem("valores019", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME019 = document.getElementById('valor-entrada019').value;
        arrayValues019 = INPUT_TOTAL_INCOME019;  // mandar al localStorage
        localStorage.setItem("valores019", JSON.stringify(arrayValues019));  // modificar total productos
        _arrayValues019 = JSON.parse(localStorage.getItem("valores019"));
        TOTAL_INCOME019 = document.getElementById('019').innerText = `${arrayValues019}` // mandar al localStorage
         localStorage.setItem("TOTAL019", JSON.stringify(INPUT_TOTAL_INCOME019));  }   }
function disminuirValor019 () {
    _arrayValues019 = JSON.parse(localStorage.getItem("TOTAL019"));
    suma019 = _arrayValues019;
    if(arrayValues019 != ' ' && arrayValues019 > 0){
        INPUT_TOTAL_INCOME019 = document.getElementById('valor-entrada019').value;
        var arrayUnico = INPUT_TOTAL_INCOME019;  //  llamar del localStorage
        _arrayValues019 = JSON.parse(localStorage.getItem("TOTAL019"));  //  modificar
        let suma1 = parseInt(_arrayValues019) - parseInt(arrayUnico) ;
        TOTAL_INCOME019 = document.getElementById('019').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL019", JSON.stringify(suma1));
        localStorage.setItem("valores019", JSON.stringify(suma1)); } }
// 21
var INPUT_TOTAL_INCOME020;
var _arrayValues020;
var arrayValues020 = JSON.parse(localStorage.getItem("valores020")) || [];
var suma020 = JSON.parse(localStorage.getItem("TOTAL020"));
var TOTAL_INCOME020 = document.getElementById('020').innerText = `${suma020}`;
var elem = document.getElementById('valor-entrada020');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor020();}}
function agregarValor020 () {
    if(arrayValues020 != ' ' && arrayValues020 > 0){
        INPUT_TOTAL_INCOME020 = document.getElementById('valor-entrada020').value;
        var arrayUnico = INPUT_TOTAL_INCOME020;  //  llamar del localStorage
        _arrayValues020 = JSON.parse(localStorage.getItem("TOTAL020"));  //  modificar
        let suma1 = parseInt(_arrayValues020) + parseInt(arrayUnico) ;
        TOTAL_INCOME020 = document.getElementById('020').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL020", JSON.stringify(suma1));
        localStorage.setItem("valores020", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME020 = document.getElementById('valor-entrada020').value;
        arrayValues020 = INPUT_TOTAL_INCOME020;  // mandar al localStorage
        localStorage.setItem("valores020", JSON.stringify(arrayValues020));  // modificar total productos
        _arrayValues020 = JSON.parse(localStorage.getItem("valores020"));
        TOTAL_INCOME020 = document.getElementById('020').innerText = `${arrayValues020}` // mandar al localStorage
         localStorage.setItem("TOTAL020", JSON.stringify(INPUT_TOTAL_INCOME020));  }   }
function disminuirValor020 () {
    _arrayValues020 = JSON.parse(localStorage.getItem("TOTAL020"));
    suma020 = _arrayValues020;
    if(arrayValues020 != ' ' && arrayValues020 > 0){
        INPUT_TOTAL_INCOME020 = document.getElementById('valor-entrada020').value;
        var arrayUnico = INPUT_TOTAL_INCOME020;  //  llamar del localStorage
        _arrayValues020 = JSON.parse(localStorage.getItem("TOTAL020"));  //  modificar
        let suma1 = parseInt(_arrayValues020) - parseInt(arrayUnico) ;
        TOTAL_INCOME020 = document.getElementById('020').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL020", JSON.stringify(suma1));
        localStorage.setItem("valores020", JSON.stringify(suma1)); } }
// 22
var INPUT_TOTAL_INCOME021;
var _arrayValues021;
var arrayValues021 = JSON.parse(localStorage.getItem("valores021")) || [];
var suma021 = JSON.parse(localStorage.getItem("TOTAL021"));
var TOTAL_INCOME021 = document.getElementById('021').innerText = `${suma021}`;
var elem = document.getElementById('valor-entrada021');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor021();}}
function agregarValor021 () {
    if(arrayValues021 != ' ' && arrayValues021 > 0){
        INPUT_TOTAL_INCOME021 = document.getElementById('valor-entrada021').value;
        var arrayUnico = INPUT_TOTAL_INCOME021;  //  llamar del localStorage
        _arrayValues021 = JSON.parse(localStorage.getItem("TOTAL021"));  //  modificar
        let suma1 = parseInt(_arrayValues021) + parseInt(arrayUnico) ;
        TOTAL_INCOME021 = document.getElementById('021').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL021", JSON.stringify(suma1));
        localStorage.setItem("valores021", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME021 = document.getElementById('valor-entrada021').value;
        arrayValues021 = INPUT_TOTAL_INCOME021;  // mandar al localStorage
        localStorage.setItem("valores021", JSON.stringify(arrayValues021));  // modificar total productos
        _arrayValues021 = JSON.parse(localStorage.getItem("valores021"));
        TOTAL_INCOME021 = document.getElementById('021').innerText = `${arrayValues021}` // mandar al localStorage
         localStorage.setItem("TOTAL021", JSON.stringify(INPUT_TOTAL_INCOME021));  }   }
function disminuirValor021 () {
    _arrayValues021 = JSON.parse(localStorage.getItem("TOTAL021"));
    suma021 = _arrayValues021;
    if(arrayValues021 != ' ' && arrayValues021 > 0){
        INPUT_TOTAL_INCOME021 = document.getElementById('valor-entrada021').value;
        var arrayUnico = INPUT_TOTAL_INCOME021;  //  llamar del localStorage
        _arrayValues021 = JSON.parse(localStorage.getItem("TOTAL021"));  //  modificar
        let suma1 = parseInt(_arrayValues021) - parseInt(arrayUnico) ;
        TOTAL_INCOME021 = document.getElementById('021').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL021", JSON.stringify(suma1));
        localStorage.setItem("valores021", JSON.stringify(suma1)); } }
// 23
var INPUT_TOTAL_INCOME022;
var _arrayValues022;
var arrayValues022 = JSON.parse(localStorage.getItem("valores022")) || [];
var suma022 = JSON.parse(localStorage.getItem("TOTAL022"));
var TOTAL_INCOME022 = document.getElementById('022').innerText = `${suma022}`;
var elem = document.getElementById('valor-entrada022');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor022();}}
function agregarValor022 () {
    if(arrayValues022 != ' ' && arrayValues022 > 0){
        INPUT_TOTAL_INCOME022 = document.getElementById('valor-entrada022').value;
        var arrayUnico = INPUT_TOTAL_INCOME022;  //  llamar del localStorage
        _arrayValues022 = JSON.parse(localStorage.getItem("TOTAL022"));  //  modificar
        let suma1 = parseInt(_arrayValues022) + parseInt(arrayUnico) ;
        TOTAL_INCOME022 = document.getElementById('022').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL022", JSON.stringify(suma1));
        localStorage.setItem("valores022", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME022 = document.getElementById('valor-entrada022').value;
        arrayValues022 = INPUT_TOTAL_INCOME022;  // mandar al localStorage
        localStorage.setItem("valores022", JSON.stringify(arrayValues022));  // modificar total productos
        _arrayValues022 = JSON.parse(localStorage.getItem("valores022"));
        TOTAL_INCOME022 = document.getElementById('022').innerText = `${arrayValues022}` // mandar al localStorage
         localStorage.setItem("TOTAL022", JSON.stringify(INPUT_TOTAL_INCOME022));  }   }
function disminuirValor022 () {
    _arrayValues022 = JSON.parse(localStorage.getItem("TOTAL022"));
    suma022 = _arrayValues022;
    if(arrayValues022 != ' ' && arrayValues022 > 0){
        INPUT_TOTAL_INCOME022 = document.getElementById('valor-entrada022').value;
        var arrayUnico = INPUT_TOTAL_INCOME022;  //  llamar del localStorage
        _arrayValues022 = JSON.parse(localStorage.getItem("TOTAL022"));  //  modificar
        let suma1 = parseInt(_arrayValues022) - parseInt(arrayUnico) ;
        TOTAL_INCOME022 = document.getElementById('022').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL022", JSON.stringify(suma1));
        localStorage.setItem("valores022", JSON.stringify(suma1)); } }
// 24
var INPUT_TOTAL_INCOME023;
var _arrayValues023;
var arrayValues023 = JSON.parse(localStorage.getItem("valores023")) || [];
var suma023 = JSON.parse(localStorage.getItem("TOTAL023"));
var TOTAL_INCOME023 = document.getElementById('023').innerText = `${suma023}`;
var elem = document.getElementById('valor-entrada023');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor023();}}
function agregarValor023 () {
    if(arrayValues023 != ' ' && arrayValues023 > 0){
        INPUT_TOTAL_INCOME023 = document.getElementById('valor-entrada023').value;
        var arrayUnico = INPUT_TOTAL_INCOME023;  //  llamar del localStorage
        _arrayValues023 = JSON.parse(localStorage.getItem("TOTAL023"));  //  modificar
        let suma1 = parseInt(_arrayValues023) + parseInt(arrayUnico) ;
        TOTAL_INCOME023 = document.getElementById('023').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL023", JSON.stringify(suma1));
        localStorage.setItem("valores023", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME023 = document.getElementById('valor-entrada023').value;
        arrayValues023 = INPUT_TOTAL_INCOME023;  // mandar al localStorage
        localStorage.setItem("valores023", JSON.stringify(arrayValues023));  // modificar total productos
        _arrayValues023 = JSON.parse(localStorage.getItem("valores023"));
        TOTAL_INCOME023 = document.getElementById('023').innerText = `${arrayValues023}` // mandar al localStorage
         localStorage.setItem("TOTAL023", JSON.stringify(INPUT_TOTAL_INCOME023));  }   }
function disminuirValor023 () {
    _arrayValues023 = JSON.parse(localStorage.getItem("TOTAL023"));
    suma023 = _arrayValues023;
    if(arrayValues023 != ' ' && arrayValues023 > 0){
        INPUT_TOTAL_INCOME023 = document.getElementById('valor-entrada023').value;
        var arrayUnico = INPUT_TOTAL_INCOME023;  //  llamar del localStorage
        _arrayValues023 = JSON.parse(localStorage.getItem("TOTAL023"));  //  modificar
        let suma1 = parseInt(_arrayValues023) - parseInt(arrayUnico) ;
        TOTAL_INCOME023 = document.getElementById('023').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL023", JSON.stringify(suma1));
        localStorage.setItem("valores023", JSON.stringify(suma1)); } }
// 25
var INPUT_TOTAL_INCOME024;
var _arrayValues024;
var arrayValues024 = JSON.parse(localStorage.getItem("valores024")) || [];
var suma024 = JSON.parse(localStorage.getItem("TOTAL024"));
var TOTAL_INCOME024 = document.getElementById('024').innerText = `${suma024}`;
var elem = document.getElementById('valor-entrada024');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor024();}}
function agregarValor024 () {
    if(arrayValues024 != ' ' && arrayValues024 > 0){
        INPUT_TOTAL_INCOME024 = document.getElementById('valor-entrada024').value;
        var arrayUnico = INPUT_TOTAL_INCOME024;  //  llamar del localStorage
        _arrayValues024 = JSON.parse(localStorage.getItem("TOTAL024"));  //  modificar
        let suma1 = parseInt(_arrayValues024) + parseInt(arrayUnico) ;
        TOTAL_INCOME024 = document.getElementById('024').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL024", JSON.stringify(suma1));
        localStorage.setItem("valores024", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME024 = document.getElementById('valor-entrada024').value;
        arrayValues024 = INPUT_TOTAL_INCOME024;  // mandar al localStorage
        localStorage.setItem("valores024", JSON.stringify(arrayValues024));  // modificar total productos
        _arrayValues024 = JSON.parse(localStorage.getItem("valores024"));
        TOTAL_INCOME024 = document.getElementById('024').innerText = `${arrayValues024}` // mandar al localStorage
         localStorage.setItem("TOTAL024", JSON.stringify(INPUT_TOTAL_INCOME024));  }   }
function disminuirValor024 () {
    _arrayValues024 = JSON.parse(localStorage.getItem("TOTAL024"));
    suma024 = _arrayValues024;
    if(arrayValues024 != ' ' && arrayValues024 > 0){
        INPUT_TOTAL_INCOME024 = document.getElementById('valor-entrada024').value;
        var arrayUnico = INPUT_TOTAL_INCOME024;  //  llamar del localStorage
        _arrayValues024 = JSON.parse(localStorage.getItem("TOTAL024"));  //  modificar
        let suma1 = parseInt(_arrayValues024) - parseInt(arrayUnico) ;
        TOTAL_INCOME024 = document.getElementById('024').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL024", JSON.stringify(suma1));
        localStorage.setItem("valores024", JSON.stringify(suma1)); } }
// 26
var INPUT_TOTAL_INCOME025;
var _arrayValues025;
var arrayValues025 = JSON.parse(localStorage.getItem("valores025")) || [];
var suma025 = JSON.parse(localStorage.getItem("TOTAL025"));
var TOTAL_INCOME025 = document.getElementById('025').innerText = `${suma025}`;
var elem = document.getElementById('valor-entrada025');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor025();}}
function agregarValor025 () {
    if(arrayValues025 != ' ' && arrayValues025 > 0){
        INPUT_TOTAL_INCOME025 = document.getElementById('valor-entrada025').value;
        var arrayUnico = INPUT_TOTAL_INCOME025;  //  llamar del localStorage
        _arrayValues025 = JSON.parse(localStorage.getItem("TOTAL025"));  //  modificar
        let suma1 = parseInt(_arrayValues025) + parseInt(arrayUnico) ;
        TOTAL_INCOME025 = document.getElementById('025').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL025", JSON.stringify(suma1));
        localStorage.setItem("valores025", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME025 = document.getElementById('valor-entrada025').value;
        arrayValues025 = INPUT_TOTAL_INCOME025;  // mandar al localStorage
        localStorage.setItem("valores025", JSON.stringify(arrayValues025));  // modificar total productos
        _arrayValues025 = JSON.parse(localStorage.getItem("valores025"));
        TOTAL_INCOME025 = document.getElementById('025').innerText = `${arrayValues025}` // mandar al localStorage
         localStorage.setItem("TOTAL025", JSON.stringify(INPUT_TOTAL_INCOME025));  }   }
function disminuirValor025 () {
    _arrayValues025 = JSON.parse(localStorage.getItem("TOTAL025"));
    suma025 = _arrayValues025;
    if(arrayValues025 != ' ' && arrayValues025 > 0){
        INPUT_TOTAL_INCOME025 = document.getElementById('valor-entrada025').value;
        var arrayUnico = INPUT_TOTAL_INCOME025;  //  llamar del localStorage
        _arrayValues025 = JSON.parse(localStorage.getItem("TOTAL025"));  //  modificar
        let suma1 = parseInt(_arrayValues025) - parseInt(arrayUnico) ;
        TOTAL_INCOME025 = document.getElementById('025').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL025", JSON.stringify(suma1));
        localStorage.setItem("valores025", JSON.stringify(suma1)); } }
// 27
var INPUT_TOTAL_INCOME026;
var _arrayValues026;
var arrayValues026 = JSON.parse(localStorage.getItem("valores026")) || [];
var suma026 = JSON.parse(localStorage.getItem("TOTAL026"));
var TOTAL_INCOME026 = document.getElementById('026').innerText = `${suma026}`;
var elem = document.getElementById('valor-entrada026');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor026();}}
function agregarValor026 () {
    if(arrayValues026 != ' ' && arrayValues026 > 0){
        INPUT_TOTAL_INCOME026 = document.getElementById('valor-entrada026').value;
        var arrayUnico = INPUT_TOTAL_INCOME026;  //  llamar del localStorage
        _arrayValues026 = JSON.parse(localStorage.getItem("TOTAL026"));  //  modificar
        let suma1 = parseInt(_arrayValues026) + parseInt(arrayUnico) ;
        TOTAL_INCOME026 = document.getElementById('026').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL026", JSON.stringify(suma1));
        localStorage.setItem("valores026", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME026 = document.getElementById('valor-entrada026').value;
        arrayValues026 = INPUT_TOTAL_INCOME026;  // mandar al localStorage
        localStorage.setItem("valores026", JSON.stringify(arrayValues026));  // modificar total productos
        _arrayValues026 = JSON.parse(localStorage.getItem("valores026"));
        TOTAL_INCOME026 = document.getElementById('026').innerText = `${arrayValues026}` // mandar al localStorage
         localStorage.setItem("TOTAL026", JSON.stringify(INPUT_TOTAL_INCOME026));  }   }
function disminuirValor026 () {
    _arrayValues026 = JSON.parse(localStorage.getItem("TOTAL026"));
    suma026 = _arrayValues026;
    if(arrayValues026 != ' ' && arrayValues026 > 0){
        INPUT_TOTAL_INCOME026 = document.getElementById('valor-entrada026').value;
        var arrayUnico = INPUT_TOTAL_INCOME026;  //  llamar del localStorage
        _arrayValues026 = JSON.parse(localStorage.getItem("TOTAL026"));  //  modificar
        let suma1 = parseInt(_arrayValues026) - parseInt(arrayUnico) ;
        TOTAL_INCOME026 = document.getElementById('026').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL026", JSON.stringify(suma1));
        localStorage.setItem("valores026", JSON.stringify(suma1)); } }
// 28
var INPUT_TOTAL_INCOME027;
var _arrayValues027;
var arrayValues027 = JSON.parse(localStorage.getItem("valores027")) || [];
var suma027 = JSON.parse(localStorage.getItem("TOTAL027"));
var TOTAL_INCOME027 = document.getElementById('027').innerText = `${suma027}`;
var elem = document.getElementById('valor-entrada027');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor027();}}
function agregarValor027 () {
    if(arrayValues027 != ' ' && arrayValues027 > 0){
        INPUT_TOTAL_INCOME027 = document.getElementById('valor-entrada027').value;
        var arrayUnico = INPUT_TOTAL_INCOME027;  //  llamar del localStorage
        _arrayValues027 = JSON.parse(localStorage.getItem("TOTAL027"));  //  modificar
        let suma1 = parseInt(_arrayValues027) + parseInt(arrayUnico) ;
        TOTAL_INCOME027 = document.getElementById('027').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL027", JSON.stringify(suma1));
        localStorage.setItem("valores027", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME027 = document.getElementById('valor-entrada027').value;
        arrayValues027 = INPUT_TOTAL_INCOME027;  // mandar al localStorage
        localStorage.setItem("valores027", JSON.stringify(arrayValues027));  // modificar total productos
        _arrayValues027 = JSON.parse(localStorage.getItem("valores027"));
        TOTAL_INCOME027 = document.getElementById('027').innerText = `${arrayValues027}` // mandar al localStorage
         localStorage.setItem("TOTAL027", JSON.stringify(INPUT_TOTAL_INCOME027));  }   }
function disminuirValor027 () {
    _arrayValues027 = JSON.parse(localStorage.getItem("TOTAL027"));
    suma027 = _arrayValues027;
    if(arrayValues027 != ' ' && arrayValues027 > 0){
        INPUT_TOTAL_INCOME027 = document.getElementById('valor-entrada027').value;
        var arrayUnico = INPUT_TOTAL_INCOME027;  //  llamar del localStorage
        _arrayValues027 = JSON.parse(localStorage.getItem("TOTAL027"));  //  modificar
        let suma1 = parseInt(_arrayValues027) - parseInt(arrayUnico) ;
        TOTAL_INCOME027 = document.getElementById('027').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL027", JSON.stringify(suma1));
        localStorage.setItem("valores027", JSON.stringify(suma1)); } }
// 29
var INPUT_TOTAL_INCOME028;
var _arrayValues028;
var arrayValues028 = JSON.parse(localStorage.getItem("valores028")) || [];
var suma028 = JSON.parse(localStorage.getItem("TOTAL028"));
var TOTAL_INCOME028 = document.getElementById('028').innerText = `${suma028}`;
var elem = document.getElementById('valor-entrada028');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor028();}}
function agregarValor028 () {
    if(arrayValues028 != ' ' && arrayValues028 > 0){
        INPUT_TOTAL_INCOME028 = document.getElementById('valor-entrada028').value;
        var arrayUnico = INPUT_TOTAL_INCOME028;  //  llamar del localStorage
        _arrayValues028 = JSON.parse(localStorage.getItem("TOTAL028"));  //  modificar
        let suma1 = parseInt(_arrayValues028) + parseInt(arrayUnico) ;
        TOTAL_INCOME028 = document.getElementById('028').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL028", JSON.stringify(suma1));
        localStorage.setItem("valores028", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME028 = document.getElementById('valor-entrada028').value;
        arrayValues028 = INPUT_TOTAL_INCOME028;  // mandar al localStorage
        localStorage.setItem("valores028", JSON.stringify(arrayValues028));  // modificar total productos
        _arrayValues028 = JSON.parse(localStorage.getItem("valores028"));
        TOTAL_INCOME028 = document.getElementById('028').innerText = `${arrayValues028}` // mandar al localStorage
         localStorage.setItem("TOTAL028", JSON.stringify(INPUT_TOTAL_INCOME028));  }   }
function disminuirValor028 () {
    _arrayValues028 = JSON.parse(localStorage.getItem("TOTAL028"));
    suma028 = _arrayValues028;
    if(arrayValues028 != ' ' && arrayValues028 > 0){
        INPUT_TOTAL_INCOME028 = document.getElementById('valor-entrada028').value;
        var arrayUnico = INPUT_TOTAL_INCOME028;  //  llamar del localStorage
        _arrayValues028 = JSON.parse(localStorage.getItem("TOTAL028"));  //  modificar
        let suma1 = parseInt(_arrayValues028) - parseInt(arrayUnico) ;
        TOTAL_INCOME028 = document.getElementById('028').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL028", JSON.stringify(suma1));
        localStorage.setItem("valores028", JSON.stringify(suma1)); } }
// 30
var INPUT_TOTAL_INCOME029;
var _arrayValues029;
var arrayValues029 = JSON.parse(localStorage.getItem("valores029")) || [];
var suma029 = JSON.parse(localStorage.getItem("TOTAL029"));
var TOTAL_INCOME029 = document.getElementById('029').innerText = `${suma029}`;
var elem = document.getElementById('valor-entrada029');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor029();}}
function agregarValor029 () {
    if(arrayValues029 != ' ' && arrayValues029 > 0){
        INPUT_TOTAL_INCOME029 = document.getElementById('valor-entrada029').value;
        var arrayUnico = INPUT_TOTAL_INCOME029;  //  llamar del localStorage
        _arrayValues029 = JSON.parse(localStorage.getItem("TOTAL029"));  //  modificar
        let suma1 = parseInt(_arrayValues029) + parseInt(arrayUnico) ;
        TOTAL_INCOME029 = document.getElementById('029').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL029", JSON.stringify(suma1));
        localStorage.setItem("valores029", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME029 = document.getElementById('valor-entrada029').value;
        arrayValues029 = INPUT_TOTAL_INCOME029;  // mandar al localStorage
        localStorage.setItem("valores029", JSON.stringify(arrayValues029));  // modificar total productos
        _arrayValues029 = JSON.parse(localStorage.getItem("valores029"));
        TOTAL_INCOME029 = document.getElementById('029').innerText = `${arrayValues029}` // mandar al localStorage
         localStorage.setItem("TOTAL029", JSON.stringify(INPUT_TOTAL_INCOME029));  }   }
function disminuirValor029 () {
    _arrayValues029 = JSON.parse(localStorage.getItem("TOTAL029"));
    suma029 = _arrayValues029;
    if(arrayValues029 != ' ' && arrayValues029 > 0){
        INPUT_TOTAL_INCOME029 = document.getElementById('valor-entrada029').value;
        var arrayUnico = INPUT_TOTAL_INCOME029;  //  llamar del localStorage
        _arrayValues029 = JSON.parse(localStorage.getItem("TOTAL029"));  //  modificar
        let suma1 = parseInt(_arrayValues029) - parseInt(arrayUnico) ;
        TOTAL_INCOME029 = document.getElementById('029').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL029", JSON.stringify(suma1));
        localStorage.setItem("valores029", JSON.stringify(suma1)); } }

// 31
var INPUT_TOTAL_INCOME030;
var _arrayValues030;
var arrayValues030 = JSON.parse(localStorage.getItem("valores030")) || [];
var suma030 = JSON.parse(localStorage.getItem("TOTAL030"));
var TOTAL_INCOME030 = document.getElementById('030').innerText = `${suma030}`;
var elem = document.getElementById('valor-entrada030');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor030();}}
function agregarValor030 () {
    if(arrayValues030 != ' ' && arrayValues030 > 0){
        INPUT_TOTAL_INCOME030 = document.getElementById('valor-entrada030').value;
        var arrayUnico = INPUT_TOTAL_INCOME030;  //  llamar del localStorage
        _arrayValues030 = JSON.parse(localStorage.getItem("TOTAL030"));  //  modificar
        let suma1 = parseInt(_arrayValues030) + parseInt(arrayUnico) ;
        TOTAL_INCOME030 = document.getElementById('030').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL030", JSON.stringify(suma1));
        localStorage.setItem("valores030", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME030 = document.getElementById('valor-entrada030').value;
        arrayValues030 = INPUT_TOTAL_INCOME030;  // mandar al localStorage
        localStorage.setItem("valores030", JSON.stringify(arrayValues030));  // modificar total productos
        _arrayValues030 = JSON.parse(localStorage.getItem("valores030"));
        TOTAL_INCOME030 = document.getElementById('030').innerText = `${arrayValues030}` // mandar al localStorage
         localStorage.setItem("TOTAL030", JSON.stringify(INPUT_TOTAL_INCOME030));  }   }
function disminuirValor030 () {
    _arrayValues030 = JSON.parse(localStorage.getItem("TOTAL030"));
    suma030 = _arrayValues030;
    if(arrayValues030 != ' ' && arrayValues030 > 0){
        INPUT_TOTAL_INCOME030 = document.getElementById('valor-entrada030').value;
        var arrayUnico = INPUT_TOTAL_INCOME030;  //  llamar del localStorage
        _arrayValues030 = JSON.parse(localStorage.getItem("TOTAL030"));  //  modificar
        let suma1 = parseInt(_arrayValues030) - parseInt(arrayUnico) ;
        TOTAL_INCOME030 = document.getElementById('030').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL030", JSON.stringify(suma1));
        localStorage.setItem("valores030", JSON.stringify(suma1)); } }
// 32
var INPUT_TOTAL_INCOME031;
var _arrayValues031;
var arrayValues031 = JSON.parse(localStorage.getItem("valores031")) || [];
var suma031 = JSON.parse(localStorage.getItem("TOTAL031"));
var TOTAL_INCOME031 = document.getElementById('031').innerText = `${suma031}`;
var elem = document.getElementById('valor-entrada031');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor031();}}
function agregarValor031 () {
    if(arrayValues031 != ' ' && arrayValues031 > 0){
        INPUT_TOTAL_INCOME031 = document.getElementById('valor-entrada031').value;
        var arrayUnico = INPUT_TOTAL_INCOME031;  //  llamar del localStorage
        _arrayValues031 = JSON.parse(localStorage.getItem("TOTAL031"));  //  modificar
        let suma1 = parseInt(_arrayValues031) + parseInt(arrayUnico) ;
        TOTAL_INCOME031 = document.getElementById('031').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL031", JSON.stringify(suma1));
        localStorage.setItem("valores031", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME031 = document.getElementById('valor-entrada031').value;
        arrayValues031 = INPUT_TOTAL_INCOME031;  // mandar al localStorage
        localStorage.setItem("valores031", JSON.stringify(arrayValues031));  // modificar total productos
        _arrayValues031 = JSON.parse(localStorage.getItem("valores031"));
        TOTAL_INCOME031 = document.getElementById('031').innerText = `${arrayValues031}` // mandar al localStorage
         localStorage.setItem("TOTAL031", JSON.stringify(INPUT_TOTAL_INCOME031));  }   }
function disminuirValor031 () {
    _arrayValues031 = JSON.parse(localStorage.getItem("TOTAL031"));
    suma031 = _arrayValues031;
    if(arrayValues031 != ' ' && arrayValues031 > 0){
        INPUT_TOTAL_INCOME031 = document.getElementById('valor-entrada031').value;
        var arrayUnico = INPUT_TOTAL_INCOME031;  //  llamar del localStorage
        _arrayValues031 = JSON.parse(localStorage.getItem("TOTAL031"));  //  modificar
        let suma1 = parseInt(_arrayValues031) - parseInt(arrayUnico) ;
        TOTAL_INCOME031 = document.getElementById('031').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL031", JSON.stringify(suma1));
        localStorage.setItem("valores031", JSON.stringify(suma1)); } }
// 33
var INPUT_TOTAL_INCOME032;
var _arrayValues032;
var arrayValues032 = JSON.parse(localStorage.getItem("valores032")) || [];
var suma032 = JSON.parse(localStorage.getItem("TOTAL032"));
var TOTAL_INCOME032 = document.getElementById('032').innerText = `${suma032}`;
var elem = document.getElementById('valor-entrada032');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor032();}}
function agregarValor032 () {
    if(arrayValues032 != ' ' && arrayValues032 > 0){
        INPUT_TOTAL_INCOME032 = document.getElementById('valor-entrada032').value;
        var arrayUnico = INPUT_TOTAL_INCOME032;  //  llamar del localStorage
        _arrayValues032 = JSON.parse(localStorage.getItem("TOTAL032"));  //  modificar
        let suma1 = parseInt(_arrayValues032) + parseInt(arrayUnico) ;
        TOTAL_INCOME032 = document.getElementById('032').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL032", JSON.stringify(suma1));
        localStorage.setItem("valores032", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME032 = document.getElementById('valor-entrada032').value;
        arrayValues032 = INPUT_TOTAL_INCOME032;  // mandar al localStorage
        localStorage.setItem("valores032", JSON.stringify(arrayValues032));  // modificar total productos
        _arrayValues032 = JSON.parse(localStorage.getItem("valores032"));
        TOTAL_INCOME032 = document.getElementById('032').innerText = `${arrayValues032}` // mandar al localStorage
         localStorage.setItem("TOTAL032", JSON.stringify(INPUT_TOTAL_INCOME032));  }   }
function disminuirValor032 () {
    _arrayValues032 = JSON.parse(localStorage.getItem("TOTAL032"));
    suma032 = _arrayValues032;
    if(arrayValues032 != ' ' && arrayValues032 > 0){
        INPUT_TOTAL_INCOME032 = document.getElementById('valor-entrada032').value;
        var arrayUnico = INPUT_TOTAL_INCOME032;  //  llamar del localStorage
        _arrayValues032 = JSON.parse(localStorage.getItem("TOTAL032"));  //  modificar
        let suma1 = parseInt(_arrayValues032) - parseInt(arrayUnico) ;
        TOTAL_INCOME032 = document.getElementById('032').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL032", JSON.stringify(suma1));
        localStorage.setItem("valores032", JSON.stringify(suma1)); } }
// 34
var INPUT_TOTAL_INCOME033;
var _arrayValues033;
var arrayValues033 = JSON.parse(localStorage.getItem("valores033")) || [];
var suma033 = JSON.parse(localStorage.getItem("TOTAL033"));
var TOTAL_INCOME033 = document.getElementById('033').innerText = `${suma033}`;
var elem = document.getElementById('valor-entrada033');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor033();}}
function agregarValor033 () {
    if(arrayValues033 != ' ' && arrayValues033 > 0){
        INPUT_TOTAL_INCOME033 = document.getElementById('valor-entrada033').value;
        var arrayUnico = INPUT_TOTAL_INCOME033;  //  llamar del localStorage
        _arrayValues033 = JSON.parse(localStorage.getItem("TOTAL033"));  //  modificar
        let suma1 = parseInt(_arrayValues033) + parseInt(arrayUnico) ;
        TOTAL_INCOME033 = document.getElementById('033').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL033", JSON.stringify(suma1));
        localStorage.setItem("valores033", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME033 = document.getElementById('valor-entrada033').value;
        arrayValues033 = INPUT_TOTAL_INCOME033;  // mandar al localStorage
        localStorage.setItem("valores033", JSON.stringify(arrayValues033));  // modificar total productos
        _arrayValues033 = JSON.parse(localStorage.getItem("valores033"));
        TOTAL_INCOME033 = document.getElementById('033').innerText = `${arrayValues033}` // mandar al localStorage
         localStorage.setItem("TOTAL033", JSON.stringify(INPUT_TOTAL_INCOME033));  }   }
function disminuirValor033 () {
    _arrayValues033 = JSON.parse(localStorage.getItem("TOTAL033"));
    suma033 = _arrayValues033;
    if(arrayValues033 != ' ' && arrayValues033 > 0){
        INPUT_TOTAL_INCOME033 = document.getElementById('valor-entrada033').value;
        var arrayUnico = INPUT_TOTAL_INCOME033;  //  llamar del localStorage
        _arrayValues033 = JSON.parse(localStorage.getItem("TOTAL033"));  //  modificar
        let suma1 = parseInt(_arrayValues033) - parseInt(arrayUnico) ;
        TOTAL_INCOME033 = document.getElementById('033').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL033", JSON.stringify(suma1));
        localStorage.setItem("valores033", JSON.stringify(suma1)); } }
// 35
var INPUT_TOTAL_INCOME034;
var _arrayValues034;
var arrayValues034 = JSON.parse(localStorage.getItem("valores034")) || [];
var suma034 = JSON.parse(localStorage.getItem("TOTAL034"));
var TOTAL_INCOME034 = document.getElementById('034').innerText = `${suma034}`;
var elem = document.getElementById('valor-entrada034');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor034();}}
function agregarValor034 () {
    if(arrayValues034 != ' ' && arrayValues034 > 0){
        INPUT_TOTAL_INCOME034 = document.getElementById('valor-entrada034').value;
        var arrayUnico = INPUT_TOTAL_INCOME034;  //  llamar del localStorage
        _arrayValues034 = JSON.parse(localStorage.getItem("TOTAL034"));  //  modificar
        let suma1 = parseInt(_arrayValues034) + parseInt(arrayUnico) ;
        TOTAL_INCOME034 = document.getElementById('034').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL034", JSON.stringify(suma1));
        localStorage.setItem("valores034", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME034 = document.getElementById('valor-entrada034').value;
        arrayValues034 = INPUT_TOTAL_INCOME034;  // mandar al localStorage
        localStorage.setItem("valores034", JSON.stringify(arrayValues034));  // modificar total productos
        _arrayValues034 = JSON.parse(localStorage.getItem("valores034"));
        TOTAL_INCOME034 = document.getElementById('034').innerText = `${arrayValues034}` // mandar al localStorage
         localStorage.setItem("TOTAL034", JSON.stringify(INPUT_TOTAL_INCOME034));  }   }
function disminuirValor034 () {
    _arrayValues034 = JSON.parse(localStorage.getItem("TOTAL034"));
    suma034 = _arrayValues034;
    if(arrayValues034 != ' ' && arrayValues034 > 0){
        INPUT_TOTAL_INCOME034 = document.getElementById('valor-entrada034').value;
        var arrayUnico = INPUT_TOTAL_INCOME034;  //  llamar del localStorage
        _arrayValues034 = JSON.parse(localStorage.getItem("TOTAL034"));  //  modificar
        let suma1 = parseInt(_arrayValues034) - parseInt(arrayUnico) ;
        TOTAL_INCOME034 = document.getElementById('034').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL034", JSON.stringify(suma1));
        localStorage.setItem("valores034", JSON.stringify(suma1)); } }
// 36
var INPUT_TOTAL_INCOME035;
var _arrayValues035;
var arrayValues035 = JSON.parse(localStorage.getItem("valores035")) || [];
var suma035 = JSON.parse(localStorage.getItem("TOTAL035"));
var TOTAL_INCOME035 = document.getElementById('035').innerText = `${suma035}`;
var elem = document.getElementById('valor-entrada035');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor035();}}
function agregarValor035 () {
    if(arrayValues035 != ' ' && arrayValues035 > 0){
        INPUT_TOTAL_INCOME035 = document.getElementById('valor-entrada035').value;
        var arrayUnico = INPUT_TOTAL_INCOME035;  //  llamar del localStorage
        _arrayValues035 = JSON.parse(localStorage.getItem("TOTAL035"));  //  modificar
        let suma1 = parseInt(_arrayValues035) + parseInt(arrayUnico) ;
        TOTAL_INCOME035 = document.getElementById('035').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL035", JSON.stringify(suma1));
        localStorage.setItem("valores035", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME035 = document.getElementById('valor-entrada035').value;
        arrayValues035 = INPUT_TOTAL_INCOME035;  // mandar al localStorage
        localStorage.setItem("valores035", JSON.stringify(arrayValues035));  // modificar total productos
        _arrayValues035 = JSON.parse(localStorage.getItem("valores035"));
        TOTAL_INCOME035 = document.getElementById('035').innerText = `${arrayValues035}` // mandar al localStorage
         localStorage.setItem("TOTAL035", JSON.stringify(INPUT_TOTAL_INCOME035));  }   }
function disminuirValor035 () {
    _arrayValues035 = JSON.parse(localStorage.getItem("TOTAL035"));
    suma035 = _arrayValues035;
    if(arrayValues035 != ' ' && arrayValues035 > 0){
        INPUT_TOTAL_INCOME035 = document.getElementById('valor-entrada035').value;
        var arrayUnico = INPUT_TOTAL_INCOME035;  //  llamar del localStorage
        _arrayValues035 = JSON.parse(localStorage.getItem("TOTAL035"));  //  modificar
        let suma1 = parseInt(_arrayValues035) - parseInt(arrayUnico) ;
        TOTAL_INCOME035 = document.getElementById('035').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL035", JSON.stringify(suma1));
        localStorage.setItem("valores035", JSON.stringify(suma1)); } }
// 37
var INPUT_TOTAL_INCOME036;
var _arrayValues036;
var arrayValues036 = JSON.parse(localStorage.getItem("valores036")) || [];
var suma036 = JSON.parse(localStorage.getItem("TOTAL036"));
var TOTAL_INCOME036 = document.getElementById('036').innerText = `${suma036}`;
var elem = document.getElementById('valor-entrada036');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor036();}}
function agregarValor036 () {
    if(arrayValues036 != ' ' && arrayValues036 > 0){
        INPUT_TOTAL_INCOME036 = document.getElementById('valor-entrada036').value;
        var arrayUnico = INPUT_TOTAL_INCOME036;  //  llamar del localStorage
        _arrayValues036 = JSON.parse(localStorage.getItem("TOTAL036"));  //  modificar
        let suma1 = parseInt(_arrayValues036) + parseInt(arrayUnico) ;
        TOTAL_INCOME036 = document.getElementById('036').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL036", JSON.stringify(suma1));
        localStorage.setItem("valores036", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME036 = document.getElementById('valor-entrada036').value;
        arrayValues036 = INPUT_TOTAL_INCOME036;  // mandar al localStorage
        localStorage.setItem("valores036", JSON.stringify(arrayValues036));  // modificar total productos
        _arrayValues036 = JSON.parse(localStorage.getItem("valores036"));
        TOTAL_INCOME036 = document.getElementById('036').innerText = `${arrayValues036}` // mandar al localStorage
         localStorage.setItem("TOTAL036", JSON.stringify(INPUT_TOTAL_INCOME036));  }   }
function disminuirValor036 () {
    _arrayValues036 = JSON.parse(localStorage.getItem("TOTAL036"));
    suma036 = _arrayValues036;
    if(arrayValues036 != ' ' && arrayValues036 > 0){
        INPUT_TOTAL_INCOME036 = document.getElementById('valor-entrada036').value;
        var arrayUnico = INPUT_TOTAL_INCOME036;  //  llamar del localStorage
        _arrayValues036 = JSON.parse(localStorage.getItem("TOTAL036"));  //  modificar
        let suma1 = parseInt(_arrayValues036) - parseInt(arrayUnico) ;
        TOTAL_INCOME036 = document.getElementById('036').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL036", JSON.stringify(suma1));
        localStorage.setItem("valores036", JSON.stringify(suma1)); } }
// 38
var INPUT_TOTAL_INCOME037;
var _arrayValues037;
var arrayValues037 = JSON.parse(localStorage.getItem("valores037")) || [];
var suma037 = JSON.parse(localStorage.getItem("TOTAL037"));
var TOTAL_INCOME037 = document.getElementById('037').innerText = `${suma037}`;
var elem = document.getElementById('valor-entrada037');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor037();}}
function agregarValor037 () {
    if(arrayValues037 != ' ' && arrayValues037 > 0){
        INPUT_TOTAL_INCOME037 = document.getElementById('valor-entrada037').value;
        var arrayUnico = INPUT_TOTAL_INCOME037;  //  llamar del localStorage
        _arrayValues037 = JSON.parse(localStorage.getItem("TOTAL037"));  //  modificar
        let suma1 = parseInt(_arrayValues037) + parseInt(arrayUnico) ;
        TOTAL_INCOME037 = document.getElementById('037').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL037", JSON.stringify(suma1));
        localStorage.setItem("valores037", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME037 = document.getElementById('valor-entrada037').value;
        arrayValues037 = INPUT_TOTAL_INCOME037;  // mandar al localStorage
        localStorage.setItem("valores037", JSON.stringify(arrayValues037));  // modificar total productos
        _arrayValues037 = JSON.parse(localStorage.getItem("valores037"));
        TOTAL_INCOME037 = document.getElementById('037').innerText = `${arrayValues037}` // mandar al localStorage
         localStorage.setItem("TOTAL037", JSON.stringify(INPUT_TOTAL_INCOME037));  }   }
function disminuirValor037 () {
    _arrayValues037 = JSON.parse(localStorage.getItem("TOTAL037"));
    suma037 = _arrayValues037;
    if(arrayValues037 != ' ' && arrayValues037 > 0){
        INPUT_TOTAL_INCOME037 = document.getElementById('valor-entrada037').value;
        var arrayUnico = INPUT_TOTAL_INCOME037;  //  llamar del localStorage
        _arrayValues037 = JSON.parse(localStorage.getItem("TOTAL037"));  //  modificar
        let suma1 = parseInt(_arrayValues037) - parseInt(arrayUnico) ;
        TOTAL_INCOME037 = document.getElementById('037').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL037", JSON.stringify(suma1));
        localStorage.setItem("valores037", JSON.stringify(suma1)); } }
// 39
var INPUT_TOTAL_INCOME038;
var _arrayValues038;
var arrayValues038 = JSON.parse(localStorage.getItem("valores038")) || [];
var suma038 = JSON.parse(localStorage.getItem("TOTAL038"));
var TOTAL_INCOME038 = document.getElementById('038').innerText = `${suma038}`;
var elem = document.getElementById('valor-entrada038');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor038();}}
function agregarValor038 () {
    if(arrayValues038 != ' ' && arrayValues038 > 0){
        INPUT_TOTAL_INCOME038 = document.getElementById('valor-entrada038').value;
        var arrayUnico = INPUT_TOTAL_INCOME038;  //  llamar del localStorage
        _arrayValues038 = JSON.parse(localStorage.getItem("TOTAL038"));  //  modificar
        let suma1 = parseInt(_arrayValues038) + parseInt(arrayUnico) ;
        TOTAL_INCOME038 = document.getElementById('038').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL038", JSON.stringify(suma1));
        localStorage.setItem("valores038", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME038 = document.getElementById('valor-entrada038').value;
        arrayValues038 = INPUT_TOTAL_INCOME038;  // mandar al localStorage
        localStorage.setItem("valores038", JSON.stringify(arrayValues038));  // modificar total productos
        _arrayValues038 = JSON.parse(localStorage.getItem("valores038"));
        TOTAL_INCOME038 = document.getElementById('038').innerText = `${arrayValues038}` // mandar al localStorage
         localStorage.setItem("TOTAL038", JSON.stringify(INPUT_TOTAL_INCOME038));  }   }
function disminuirValor038 () {
    _arrayValues038 = JSON.parse(localStorage.getItem("TOTAL038"));
    suma038 = _arrayValues038;
    if(arrayValues038 != ' ' && arrayValues038 > 0){
        INPUT_TOTAL_INCOME038 = document.getElementById('valor-entrada038').value;
        var arrayUnico = INPUT_TOTAL_INCOME038;  //  llamar del localStorage
        _arrayValues038 = JSON.parse(localStorage.getItem("TOTAL038"));  //  modificar
        let suma1 = parseInt(_arrayValues038) - parseInt(arrayUnico) ;
        TOTAL_INCOME038 = document.getElementById('038').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL038", JSON.stringify(suma1));
        localStorage.setItem("valores038", JSON.stringify(suma1)); } }
// 40
var INPUT_TOTAL_INCOME039;
var _arrayValues039;
var arrayValues039 = JSON.parse(localStorage.getItem("valores039")) || [];
var suma039 = JSON.parse(localStorage.getItem("TOTAL039"));
var TOTAL_INCOME039 = document.getElementById('039').innerText = `${suma039}`;
var elem = document.getElementById('valor-entrada039');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor039();}}
function agregarValor039 () {
    if(arrayValues039 != ' ' && arrayValues039 > 0){
        INPUT_TOTAL_INCOME039 = document.getElementById('valor-entrada039').value;
        var arrayUnico = INPUT_TOTAL_INCOME039;  //  llamar del localStorage
        _arrayValues039 = JSON.parse(localStorage.getItem("TOTAL039"));  //  modificar
        let suma1 = parseInt(_arrayValues039) + parseInt(arrayUnico) ;
        TOTAL_INCOME039 = document.getElementById('039').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL039", JSON.stringify(suma1));
        localStorage.setItem("valores039", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME039 = document.getElementById('valor-entrada039').value;
        arrayValues039 = INPUT_TOTAL_INCOME039;  // mandar al localStorage
        localStorage.setItem("valores039", JSON.stringify(arrayValues039));  // modificar total productos
        _arrayValues039 = JSON.parse(localStorage.getItem("valores039"));
        TOTAL_INCOME039 = document.getElementById('039').innerText = `${arrayValues039}` // mandar al localStorage
         localStorage.setItem("TOTAL039", JSON.stringify(INPUT_TOTAL_INCOME039));  }   }
function disminuirValor039 () {
    _arrayValues039 = JSON.parse(localStorage.getItem("TOTAL039"));
    suma039 = _arrayValues039;
    if(arrayValues039 != ' ' && arrayValues039 > 0){
        INPUT_TOTAL_INCOME039 = document.getElementById('valor-entrada039').value;
        var arrayUnico = INPUT_TOTAL_INCOME039;  //  llamar del localStorage
        _arrayValues039 = JSON.parse(localStorage.getItem("TOTAL039"));  //  modificar
        let suma1 = parseInt(_arrayValues039) - parseInt(arrayUnico) ;
        TOTAL_INCOME039 = document.getElementById('039').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL039", JSON.stringify(suma1));
        localStorage.setItem("valores039", JSON.stringify(suma1)); } }
// 41
var INPUT_TOTAL_INCOME040;
var _arrayValues040;
var arrayValues040 = JSON.parse(localStorage.getItem("valores040")) || [];
var suma040 = JSON.parse(localStorage.getItem("TOTAL040"));
var TOTAL_INCOME040 = document.getElementById('040').innerText = `${suma040}`;
var elem = document.getElementById('valor-entrada040');
elem.onkeyup = function(e){
    if(e.keyCode == 13){
agregarValor040();}}
function agregarValor040 () {
    if(arrayValues040 != ' ' && arrayValues040 > 0){
        INPUT_TOTAL_INCOME040 = document.getElementById('valor-entrada040').value;
        var arrayUnico = INPUT_TOTAL_INCOME040;  //  llamar del localStorage
        _arrayValues040 = JSON.parse(localStorage.getItem("TOTAL040"));  //  modificar
        let suma1 = parseInt(_arrayValues040) + parseInt(arrayUnico) ;
        TOTAL_INCOME040 = document.getElementById('040').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL040", JSON.stringify(suma1));
        localStorage.setItem("valores040", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME040 = document.getElementById('valor-entrada040').value;
        arrayValues040 = INPUT_TOTAL_INCOME040;  // mandar al localStorage
        localStorage.setItem("valores040", JSON.stringify(arrayValues040));  // modificar total productos
        _arrayValues040 = JSON.parse(localStorage.getItem("valores040"));
        TOTAL_INCOME040 = document.getElementById('040').innerText = `${arrayValues040}` // mandar al localStorage
         localStorage.setItem("TOTAL040", JSON.stringify(INPUT_TOTAL_INCOME040));  }   }
function disminuirValor040 () {
    _arrayValues040 = JSON.parse(localStorage.getItem("TOTAL040"));
    suma040 = _arrayValues040;
    if(arrayValues040 != ' ' && arrayValues040 > 0){
        INPUT_TOTAL_INCOME040 = document.getElementById('valor-entrada040').value;
        var arrayUnico = INPUT_TOTAL_INCOME040;  //  llamar del localStorage
        _arrayValues040 = JSON.parse(localStorage.getItem("TOTAL040"));  //  modificar
        let suma1 = parseInt(_arrayValues040) - parseInt(arrayUnico) ;
        TOTAL_INCOME040 = document.getElementById('040').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL040", JSON.stringify(suma1));
        localStorage.setItem("valores040", JSON.stringify(suma1)); } }
// 42
var INPUT_TOTAL_INCOME041;
var _arrayValues041;
var arrayValues041 = JSON.parse(localStorage.getItem("valores041")) || [];
var suma041 = JSON.parse(localStorage.getItem("TOTAL041"));
var TOTAL_INCOME041 = document.getElementById('041').innerHTML = `${suma041}`
var elem = document.getElementById('valor-entrada041');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor041();}}
function agregarValor041 () {
    if(arrayValues041 != ' ' && arrayValues041 > 0){
        INPUT_TOTAL_INCOME041 = document.getElementById('valor-entrada041').value;
        var arrayUnico = INPUT_TOTAL_INCOME041;  //  llamar del localStorage
        _arrayValues041 = JSON.parse(localStorage.getItem("TOTAL041"));  //  modificar
        let suma1 = parseInt(_arrayValues041) + parseInt(arrayUnico) ;
        TOTAL_INCOME041 = document.getElementById('041').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL041", JSON.stringify(suma1));
        localStorage.setItem("valores041", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME041 = document.getElementById('valor-entrada041').value;
        arrayValues041 = INPUT_TOTAL_INCOME041;  // mandar al localStorage
        localStorage.setItem("valores041", JSON.stringify(arrayValues041));  // modificar total productos
        _arrayValues041 = JSON.parse(localStorage.getItem("valores041"));
        TOTAL_INCOME041 = document.getElementById('041').innerText = `${arrayValues041}` // mandar al localStorage
         localStorage.setItem("TOTAL041", JSON.stringify(INPUT_TOTAL_INCOME041));  }   }
function disminuirValor041 () {
    _arrayValues041 = JSON.parse(localStorage.getItem("TOTAL041"));
    suma041 = _arrayValues041;
    if(arrayValues041 != ' ' && arrayValues041 > 0){
        INPUT_TOTAL_INCOME041 = document.getElementById('valor-entrada041').value;
        var arrayUnico = INPUT_TOTAL_INCOME041;  //  llamar del localStorage
        _arrayValues041 = JSON.parse(localStorage.getItem("TOTAL041"));  //  modificar
        let suma1 = parseInt(_arrayValues041) - parseInt(arrayUnico) ;
        TOTAL_INCOME041 = document.getElementById('041').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL041", JSON.stringify(suma1));
        localStorage.setItem("valores041", JSON.stringify(suma1)); } }