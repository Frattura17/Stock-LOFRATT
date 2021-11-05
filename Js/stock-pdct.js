var INPUT_TOTAL_INCOME;
var _arrayValues;
var suma = JSON.parse(localStorage.getItem("TOTAL"));
var TOTAL_INCOME = document.getElementById('000'). = `${suma}`;
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
var TOTAL_INCOME041 = document.getElementById('041').innerText = `${suma041}`;
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
// 43
var INPUT_TOTAL_INCOME042;
var _arrayValues042;
var arrayValues042 = JSON.parse(localStorage.getItem("valores042")) || [];
var suma042 = JSON.parse(localStorage.getItem("TOTAL042"));
var TOTAL_INCOME042 = document.getElementById('042').innerText = `${suma042}`;
var elem = document.getElementById('valor-entrada042');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor042();}}
function agregarValor042 () {
    if(arrayValues042 != ' ' && arrayValues042 > 0){
        INPUT_TOTAL_INCOME042 = document.getElementById('valor-entrada042').value;
        var arrayUnico = INPUT_TOTAL_INCOME042;  //  llamar del localStorage
        _arrayValues042 = JSON.parse(localStorage.getItem("TOTAL042"));  //  modificar
        let suma1 = parseInt(_arrayValues042) + parseInt(arrayUnico) ;
        TOTAL_INCOME042 = document.getElementById('042').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL042", JSON.stringify(suma1));
        localStorage.setItem("valores042", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME042 = document.getElementById('valor-entrada042').value;
        arrayValues042 = INPUT_TOTAL_INCOME042;  // mandar al localStorage
        localStorage.setItem("valores042", JSON.stringify(arrayValues042));  // modificar total productos
        _arrayValues042 = JSON.parse(localStorage.getItem("valores042"));
        TOTAL_INCOME042 = document.getElementById('042').innerText = `${arrayValues042}` // mandar al localStorage
         localStorage.setItem("TOTAL042", JSON.stringify(INPUT_TOTAL_INCOME042));  }   }
function disminuirValor042 () {
    _arrayValues042 = JSON.parse(localStorage.getItem("TOTAL042"));
    suma042 = _arrayValues042;
    if(arrayValues042 != ' ' && arrayValues042 > 0){
        INPUT_TOTAL_INCOME042 = document.getElementById('valor-entrada042').value;
        var arrayUnico = INPUT_TOTAL_INCOME042;  //  llamar del localStorage
        _arrayValues042 = JSON.parse(localStorage.getItem("TOTAL042"));  //  modificar
        let suma1 = parseInt(_arrayValues042) - parseInt(arrayUnico) ;
        TOTAL_INCOME042 = document.getElementById('042').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL042", JSON.stringify(suma1));
        localStorage.setItem("valores042", JSON.stringify(suma1)); } }
// 44
var INPUT_TOTAL_INCOME043;
var _arrayValues043;
var arrayValues043 = JSON.parse(localStorage.getItem("valores043")) || [];
var suma043 = JSON.parse(localStorage.getItem("TOTAL043"));
var TOTAL_INCOME043 = document.getElementById('043').innerText = `${suma043}`;
var elem = document.getElementById('valor-entrada043');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor043();}}
function agregarValor043 () {
    if(arrayValues043 != ' ' && arrayValues043 > 0){
        INPUT_TOTAL_INCOME043 = document.getElementById('valor-entrada043').value;
        var arrayUnico = INPUT_TOTAL_INCOME043;  //  llamar del localStorage
        _arrayValues043 = JSON.parse(localStorage.getItem("TOTAL043"));  //  modificar
        let suma1 = parseInt(_arrayValues043) + parseInt(arrayUnico) ;
        TOTAL_INCOME043 = document.getElementById('043').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL043", JSON.stringify(suma1));
        localStorage.setItem("valores043", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME043 = document.getElementById('valor-entrada043').value;
        arrayValues043 = INPUT_TOTAL_INCOME043;  // mandar al localStorage
        localStorage.setItem("valores043", JSON.stringify(arrayValues043));  // modificar total productos
        _arrayValues043 = JSON.parse(localStorage.getItem("valores043"));
        TOTAL_INCOME043 = document.getElementById('043').innerText = `${arrayValues043}` // mandar al localStorage
         localStorage.setItem("TOTAL043", JSON.stringify(INPUT_TOTAL_INCOME043));  }   }
function disminuirValor043 () {
    _arrayValues043 = JSON.parse(localStorage.getItem("TOTAL043"));
    suma043 = _arrayValues043;
    if(arrayValues043 != ' ' && arrayValues043 > 0){
        INPUT_TOTAL_INCOME043 = document.getElementById('valor-entrada043').value;
        var arrayUnico = INPUT_TOTAL_INCOME043;  //  llamar del localStorage
        _arrayValues043 = JSON.parse(localStorage.getItem("TOTAL043"));  //  modificar
        let suma1 = parseInt(_arrayValues043) - parseInt(arrayUnico) ;
        TOTAL_INCOME043 = document.getElementById('043').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL043", JSON.stringify(suma1));
        localStorage.setItem("valores043", JSON.stringify(suma1)); } }
// 45
var INPUT_TOTAL_INCOME044;
var _arrayValues044;
var arrayValues044 = JSON.parse(localStorage.getItem("valores044")) || [];
var suma044 = JSON.parse(localStorage.getItem("TOTAL044"));
var TOTAL_INCOME044 = document.getElementById('044').innerText = `${suma044}`;
var elem = document.getElementById('valor-entrada044');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor044();}}
function agregarValor044 () {
    if(arrayValues044 != ' ' && arrayValues044 > 0){
        INPUT_TOTAL_INCOME044 = document.getElementById('valor-entrada044').value;
        var arrayUnico = INPUT_TOTAL_INCOME044;  //  llamar del localStorage
        _arrayValues044 = JSON.parse(localStorage.getItem("TOTAL044"));  //  modificar
        let suma1 = parseInt(_arrayValues044) + parseInt(arrayUnico) ;
        TOTAL_INCOME044 = document.getElementById('044').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL044", JSON.stringify(suma1));
        localStorage.setItem("valores044", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME044 = document.getElementById('valor-entrada044').value;
        arrayValues044 = INPUT_TOTAL_INCOME044;  // mandar al localStorage
        localStorage.setItem("valores044", JSON.stringify(arrayValues044));  // modificar total productos
        _arrayValues044 = JSON.parse(localStorage.getItem("valores044"));
        TOTAL_INCOME044 = document.getElementById('044').innerText = `${arrayValues044}` // mandar al localStorage
         localStorage.setItem("TOTAL044", JSON.stringify(INPUT_TOTAL_INCOME044));  }   }
function disminuirValor044 () {
    _arrayValues044 = JSON.parse(localStorage.getItem("TOTAL044"));
    suma044 = _arrayValues044;
    if(arrayValues044 != ' ' && arrayValues044 > 0){
        INPUT_TOTAL_INCOME044 = document.getElementById('valor-entrada044').value;
        var arrayUnico = INPUT_TOTAL_INCOME044;  //  llamar del localStorage
        _arrayValues044 = JSON.parse(localStorage.getItem("TOTAL044"));  //  modificar
        let suma1 = parseInt(_arrayValues044) - parseInt(arrayUnico) ;
        TOTAL_INCOME044 = document.getElementById('044').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL044", JSON.stringify(suma1));
        localStorage.setItem("valores044", JSON.stringify(suma1)); } }
// 46
var INPUT_TOTAL_INCOME045;
var _arrayValues045;
var arrayValues045 = JSON.parse(localStorage.getItem("valores045")) || [];
var suma045 = JSON.parse(localStorage.getItem("TOTAL045"));
var TOTAL_INCOME045 = document.getElementById('045').innerText = `${suma045}`;
var elem = document.getElementById('valor-entrada045');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor045();}}
function agregarValor045 () {
    if(arrayValues045 != ' ' && arrayValues045 > 0){
        INPUT_TOTAL_INCOME045 = document.getElementById('valor-entrada045').value;
        var arrayUnico = INPUT_TOTAL_INCOME045;  //  llamar del localStorage
        _arrayValues045 = JSON.parse(localStorage.getItem("TOTAL045"));  //  modificar
        let suma1 = parseInt(_arrayValues045) + parseInt(arrayUnico) ;
        TOTAL_INCOME045 = document.getElementById('045').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL045", JSON.stringify(suma1));
        localStorage.setItem("valores045", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME045 = document.getElementById('valor-entrada045').value;
        arrayValues045 = INPUT_TOTAL_INCOME045;  // mandar al localStorage
        localStorage.setItem("valores045", JSON.stringify(arrayValues045));  // modificar total productos
        _arrayValues045 = JSON.parse(localStorage.getItem("valores045"));
        TOTAL_INCOME045 = document.getElementById('045').innerText = `${arrayValues045}` // mandar al localStorage
         localStorage.setItem("TOTAL045", JSON.stringify(INPUT_TOTAL_INCOME045));  }   }
function disminuirValor045 () {
    _arrayValues045 = JSON.parse(localStorage.getItem("TOTAL045"));
    suma045 = _arrayValues045;
    if(arrayValues045 != ' ' && arrayValues045 > 0){
        INPUT_TOTAL_INCOME045 = document.getElementById('valor-entrada045').value;
        var arrayUnico = INPUT_TOTAL_INCOME045;  //  llamar del localStorage
        _arrayValues045 = JSON.parse(localStorage.getItem("TOTAL045"));  //  modificar
        let suma1 = parseInt(_arrayValues045) - parseInt(arrayUnico) ;
        TOTAL_INCOME045 = document.getElementById('045').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL045", JSON.stringify(suma1));
        localStorage.setItem("valores045", JSON.stringify(suma1)); } }
// 47
var INPUT_TOTAL_INCOME046;
var _arrayValues046;
var arrayValues046 = JSON.parse(localStorage.getItem("valores046")) || [];
var suma046 = JSON.parse(localStorage.getItem("TOTAL046"));
var TOTAL_INCOME046 = document.getElementById('046').innerText = `${suma046}`;
var elem = document.getElementById('valor-entrada046');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor046();}}
function agregarValor046 () {
    if(arrayValues046 != ' ' && arrayValues046 > 0){
        INPUT_TOTAL_INCOME046 = document.getElementById('valor-entrada046').value;
        var arrayUnico = INPUT_TOTAL_INCOME046;  //  llamar del localStorage
        _arrayValues046 = JSON.parse(localStorage.getItem("TOTAL046"));  //  modificar
        let suma1 = parseInt(_arrayValues046) + parseInt(arrayUnico) ;
        TOTAL_INCOME046 = document.getElementById('046').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL046", JSON.stringify(suma1));
        localStorage.setItem("valores046", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME046 = document.getElementById('valor-entrada046').value;
        arrayValues046 = INPUT_TOTAL_INCOME046;  // mandar al localStorage
        localStorage.setItem("valores046", JSON.stringify(arrayValues046));  // modificar total productos
        _arrayValues046 = JSON.parse(localStorage.getItem("valores046"));
        TOTAL_INCOME046 = document.getElementById('046').innerText = `${arrayValues046}` // mandar al localStorage
         localStorage.setItem("TOTAL046", JSON.stringify(INPUT_TOTAL_INCOME046));  }   }
function disminuirValor046 () {
    _arrayValues046 = JSON.parse(localStorage.getItem("TOTAL046"));
    suma046 = _arrayValues046;
    if(arrayValues046 != ' ' && arrayValues046 > 0){
        INPUT_TOTAL_INCOME046 = document.getElementById('valor-entrada046').value;
        var arrayUnico = INPUT_TOTAL_INCOME046;  //  llamar del localStorage
        _arrayValues046 = JSON.parse(localStorage.getItem("TOTAL046"));  //  modificar
        let suma1 = parseInt(_arrayValues046) - parseInt(arrayUnico) ;
        TOTAL_INCOME046 = document.getElementById('046').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL046", JSON.stringify(suma1));
        localStorage.setItem("valores046", JSON.stringify(suma1)); } }
// 48
var INPUT_TOTAL_INCOME047;
var _arrayValues047;
var arrayValues047 = JSON.parse(localStorage.getItem("valores047")) || [];
var suma047 = JSON.parse(localStorage.getItem("TOTAL047"));
var TOTAL_INCOME047 = document.getElementById('047').innerText = `${suma047}`;
var elem = document.getElementById('valor-entrada047');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor047();}}
function agregarValor047 () {
    if(arrayValues047 != ' ' && arrayValues047 > 0){
        INPUT_TOTAL_INCOME047 = document.getElementById('valor-entrada047').value;
        var arrayUnico = INPUT_TOTAL_INCOME047;  //  llamar del localStorage
        _arrayValues047 = JSON.parse(localStorage.getItem("TOTAL047"));  //  modificar
        let suma1 = parseInt(_arrayValues047) + parseInt(arrayUnico) ;
        TOTAL_INCOME047 = document.getElementById('047').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL047", JSON.stringify(suma1));
        localStorage.setItem("valores047", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME047 = document.getElementById('valor-entrada047').value;
        arrayValues047 = INPUT_TOTAL_INCOME047;  // mandar al localStorage
        localStorage.setItem("valores047", JSON.stringify(arrayValues047));  // modificar total productos
        _arrayValues047 = JSON.parse(localStorage.getItem("valores047"));
        TOTAL_INCOME047 = document.getElementById('047').innerText = `${arrayValues047}` // mandar al localStorage
         localStorage.setItem("TOTAL047", JSON.stringify(INPUT_TOTAL_INCOME047));  }   }
function disminuirValor047 () {
    _arrayValues047 = JSON.parse(localStorage.getItem("TOTAL047"));
    suma047 = _arrayValues047;
    if(arrayValues047 != ' ' && arrayValues047 > 0){
        INPUT_TOTAL_INCOME047 = document.getElementById('valor-entrada047').value;
        var arrayUnico = INPUT_TOTAL_INCOME047;  //  llamar del localStorage
        _arrayValues047 = JSON.parse(localStorage.getItem("TOTAL047"));  //  modificar
        let suma1 = parseInt(_arrayValues047) - parseInt(arrayUnico) ;
        TOTAL_INCOME047 = document.getElementById('047').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL047", JSON.stringify(suma1));
        localStorage.setItem("valores047", JSON.stringify(suma1)); } }
// 49
var INPUT_TOTAL_INCOME048;
var _arrayValues048;
var arrayValues048 = JSON.parse(localStorage.getItem("valores048")) || [];
var suma048 = JSON.parse(localStorage.getItem("TOTAL048"));
var TOTAL_INCOME048 = document.getElementById('048').innerText = `${suma048}`;
var elem = document.getElementById('valor-entrada048');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor048();}}
function agregarValor048 () {
    if(arrayValues048 != ' ' && arrayValues048 > 0){
        INPUT_TOTAL_INCOME048 = document.getElementById('valor-entrada048').value;
        var arrayUnico = INPUT_TOTAL_INCOME048;  //  llamar del localStorage
        _arrayValues048 = JSON.parse(localStorage.getItem("TOTAL048"));  //  modificar
        let suma1 = parseInt(_arrayValues048) + parseInt(arrayUnico) ;
        TOTAL_INCOME048 = document.getElementById('048').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL048", JSON.stringify(suma1));
        localStorage.setItem("valores048", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME048 = document.getElementById('valor-entrada048').value;
        arrayValues048 = INPUT_TOTAL_INCOME048;  // mandar al localStorage
        localStorage.setItem("valores048", JSON.stringify(arrayValues048));  // modificar total productos
        _arrayValues048 = JSON.parse(localStorage.getItem("valores048"));
        TOTAL_INCOME048 = document.getElementById('048').innerText = `${arrayValues048}` // mandar al localStorage
         localStorage.setItem("TOTAL048", JSON.stringify(INPUT_TOTAL_INCOME048));  }   }
function disminuirValor048 () {
    _arrayValues048 = JSON.parse(localStorage.getItem("TOTAL048"));
    suma048 = _arrayValues048;
    if(arrayValues048 != ' ' && arrayValues048 > 0){
        INPUT_TOTAL_INCOME048 = document.getElementById('valor-entrada048').value;
        var arrayUnico = INPUT_TOTAL_INCOME048;  //  llamar del localStorage
        _arrayValues048 = JSON.parse(localStorage.getItem("TOTAL048"));  //  modificar
        let suma1 = parseInt(_arrayValues048) - parseInt(arrayUnico) ;
        TOTAL_INCOME048 = document.getElementById('048').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL048", JSON.stringify(suma1));
        localStorage.setItem("valores048", JSON.stringify(suma1)); } }
// 50
var INPUT_TOTAL_INCOME049;
var _arrayValues049;
var arrayValues049 = JSON.parse(localStorage.getItem("valores049")) || [];
var suma049 = JSON.parse(localStorage.getItem("TOTAL049"));
var TOTAL_INCOME049 = document.getElementById('049').innerText = `${suma049}`;
var elem = document.getElementById('valor-entrada049');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor049();}}
function agregarValor049 () {
    if(arrayValues049 != ' ' && arrayValues049 > 0){
        INPUT_TOTAL_INCOME049 = document.getElementById('valor-entrada049').value;
        var arrayUnico = INPUT_TOTAL_INCOME049;  //  llamar del localStorage
        _arrayValues049 = JSON.parse(localStorage.getItem("TOTAL049"));  //  modificar
        let suma1 = parseInt(_arrayValues049) + parseInt(arrayUnico) ;
        TOTAL_INCOME049 = document.getElementById('049').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL049", JSON.stringify(suma1));
        localStorage.setItem("valores049", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME049 = document.getElementById('valor-entrada049').value;
        arrayValues049 = INPUT_TOTAL_INCOME049;  // mandar al localStorage
        localStorage.setItem("valores049", JSON.stringify(arrayValues049));  // modificar total productos
        _arrayValues049 = JSON.parse(localStorage.getItem("valores049"));
        TOTAL_INCOME049 = document.getElementById('049').innerText = `${arrayValues049}` // mandar al localStorage
         localStorage.setItem("TOTAL049", JSON.stringify(INPUT_TOTAL_INCOME049));  }   }
function disminuirValor049 () {
    _arrayValues049 = JSON.parse(localStorage.getItem("TOTAL049"));
    suma049 = _arrayValues049;
    if(arrayValues049 != ' ' && arrayValues049 > 0){
        INPUT_TOTAL_INCOME049 = document.getElementById('valor-entrada049').value;
        var arrayUnico = INPUT_TOTAL_INCOME049;  //  llamar del localStorage
        _arrayValues049 = JSON.parse(localStorage.getItem("TOTAL049"));  //  modificar
        let suma1 = parseInt(_arrayValues049) - parseInt(arrayUnico) ;
        TOTAL_INCOME049 = document.getElementById('049').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL049", JSON.stringify(suma1));
        localStorage.setItem("valores049", JSON.stringify(suma1)); } }
// 51
var INPUT_TOTAL_INCOME050;
var _arrayValues050;
var arrayValues050 = JSON.parse(localStorage.getItem("valores050")) || [];
var suma050 = JSON.parse(localStorage.getItem("TOTAL050"));
var TOTAL_INCOME050 = document.getElementById('050').innerText = `${suma050}`;
var elem = document.getElementById('valor-entrada050');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor050();}}
function agregarValor050 () {
    if(arrayValues050 != ' ' && arrayValues050 > 0){
        INPUT_TOTAL_INCOME050 = document.getElementById('valor-entrada050').value;
        var arrayUnico = INPUT_TOTAL_INCOME050;  //  llamar del localStorage
        _arrayValues050 = JSON.parse(localStorage.getItem("TOTAL050"));  //  modificar
        let suma1 = parseInt(_arrayValues050) + parseInt(arrayUnico) ;
        TOTAL_INCOME050 = document.getElementById('050').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL050", JSON.stringify(suma1));
        localStorage.setItem("valores050", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME050 = document.getElementById('valor-entrada050').value;
        arrayValues050 = INPUT_TOTAL_INCOME050;  // mandar al localStorage
        localStorage.setItem("valores050", JSON.stringify(arrayValues050));  // modificar total productos
        _arrayValues050 = JSON.parse(localStorage.getItem("valores050"));
        TOTAL_INCOME050 = document.getElementById('050').innerText = `${arrayValues050}` // mandar al localStorage
         localStorage.setItem("TOTAL050", JSON.stringify(INPUT_TOTAL_INCOME050));  }   }
function disminuirValor050 () {
    _arrayValues050 = JSON.parse(localStorage.getItem("TOTAL050"));
    suma050 = _arrayValues050;
    if(arrayValues050 != ' ' && arrayValues050 > 0){
        INPUT_TOTAL_INCOME050 = document.getElementById('valor-entrada050').value;
        var arrayUnico = INPUT_TOTAL_INCOME050;  //  llamar del localStorage
        _arrayValues050 = JSON.parse(localStorage.getItem("TOTAL050"));  //  modificar
        let suma1 = parseInt(_arrayValues050) - parseInt(arrayUnico) ;
        TOTAL_INCOME050 = document.getElementById('050').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL050", JSON.stringify(suma1));
        localStorage.setItem("valores050", JSON.stringify(suma1)); } }
// 52
var INPUT_TOTAL_INCOME051;
var _arrayValues051;
var arrayValues051 = JSON.parse(localStorage.getItem("valores051")) || [];
var suma051 = JSON.parse(localStorage.getItem("TOTAL051"));
var TOTAL_INCOME051 = document.getElementById('051').innerText = `${suma051}`;
var elem = document.getElementById('valor-entrada051');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor051();}}
function agregarValor051 () {
    if(arrayValues051 != ' ' && arrayValues051 > 0){
        INPUT_TOTAL_INCOME051 = document.getElementById('valor-entrada051').value;
        var arrayUnico = INPUT_TOTAL_INCOME051;  //  llamar del localStorage
        _arrayValues051 = JSON.parse(localStorage.getItem("TOTAL051"));  //  modificar
        let suma1 = parseInt(_arrayValues051) + parseInt(arrayUnico) ;
        TOTAL_INCOME051 = document.getElementById('051').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL051", JSON.stringify(suma1));
        localStorage.setItem("valores051", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME051 = document.getElementById('valor-entrada051').value;
        arrayValues051 = INPUT_TOTAL_INCOME051;  // mandar al localStorage
        localStorage.setItem("valores051", JSON.stringify(arrayValues051));  // modificar total productos
        _arrayValues051 = JSON.parse(localStorage.getItem("valores051"));
        TOTAL_INCOME051 = document.getElementById('051').innerText = `${arrayValues051}` // mandar al localStorage
         localStorage.setItem("TOTAL051", JSON.stringify(INPUT_TOTAL_INCOME051));  }   }
function disminuirValor051 () {
    _arrayValues051 = JSON.parse(localStorage.getItem("TOTAL051"));
    suma051 = _arrayValues051;
    if(arrayValues051 != ' ' && arrayValues051 > 0){
        INPUT_TOTAL_INCOME051 = document.getElementById('valor-entrada051').value;
        var arrayUnico = INPUT_TOTAL_INCOME051;  //  llamar del localStorage
        _arrayValues051 = JSON.parse(localStorage.getItem("TOTAL051"));  //  modificar
        let suma1 = parseInt(_arrayValues051) - parseInt(arrayUnico) ;
        TOTAL_INCOME051 = document.getElementById('051').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL051", JSON.stringify(suma1));
        localStorage.setItem("valores051", JSON.stringify(suma1)); } }
// 53
var INPUT_TOTAL_INCOME052;
var _arrayValues052;
var arrayValues052 = JSON.parse(localStorage.getItem("valores052")) || [];
var suma052 = JSON.parse(localStorage.getItem("TOTAL052"));
var TOTAL_INCOME052 = document.getElementById('052').innerText = `${suma052}`;
var elem = document.getElementById('valor-entrada052');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor052();}}
function agregarValor052 () {
    if(arrayValues052 != ' ' && arrayValues052 > 0){
        INPUT_TOTAL_INCOME052 = document.getElementById('valor-entrada052').value;
        var arrayUnico = INPUT_TOTAL_INCOME052;  //  llamar del localStorage
        _arrayValues052 = JSON.parse(localStorage.getItem("TOTAL052"));  //  modificar
        let suma1 = parseInt(_arrayValues052) + parseInt(arrayUnico) ;
        TOTAL_INCOME052 = document.getElementById('052').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL052", JSON.stringify(suma1));
        localStorage.setItem("valores052", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME052 = document.getElementById('valor-entrada052').value;
        arrayValues052 = INPUT_TOTAL_INCOME052;  // mandar al localStorage
        localStorage.setItem("valores052", JSON.stringify(arrayValues052));  // modificar total productos
        _arrayValues052 = JSON.parse(localStorage.getItem("valores052"));
        TOTAL_INCOME052 = document.getElementById('052').innerText = `${arrayValues052}` // mandar al localStorage
         localStorage.setItem("TOTAL052", JSON.stringify(INPUT_TOTAL_INCOME052));  }   }
function disminuirValor052 () {
    _arrayValues052 = JSON.parse(localStorage.getItem("TOTAL052"));
    suma052 = _arrayValues052;
    if(arrayValues052 != ' ' && arrayValues052 > 0){
        INPUT_TOTAL_INCOME052 = document.getElementById('valor-entrada052').value;
        var arrayUnico = INPUT_TOTAL_INCOME052;  //  llamar del localStorage
        _arrayValues052 = JSON.parse(localStorage.getItem("TOTAL052"));  //  modificar
        let suma1 = parseInt(_arrayValues052) - parseInt(arrayUnico) ;
        TOTAL_INCOME052 = document.getElementById('052').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL052", JSON.stringify(suma1));
        localStorage.setItem("valores052", JSON.stringify(suma1)); } }
// 54
var INPUT_TOTAL_INCOME053;
var _arrayValues053;
var arrayValues053 = JSON.parse(localStorage.getItem("valores053")) || [];
var suma053 = JSON.parse(localStorage.getItem("TOTAL053"));
var TOTAL_INCOME053 = document.getElementById('053').innerText = `${suma053}`;
var elem = document.getElementById('valor-entrada053');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor053();}}
function agregarValor053 () {
    if(arrayValues053 != ' ' && arrayValues053 > 0){
        INPUT_TOTAL_INCOME053 = document.getElementById('valor-entrada053').value;
        var arrayUnico = INPUT_TOTAL_INCOME053;  //  llamar del localStorage
        _arrayValues053 = JSON.parse(localStorage.getItem("TOTAL053"));  //  modificar
        let suma1 = parseInt(_arrayValues053) + parseInt(arrayUnico) ;
        TOTAL_INCOME053 = document.getElementById('053').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL053", JSON.stringify(suma1));
        localStorage.setItem("valores053", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME053 = document.getElementById('valor-entrada053').value;
        arrayValues053 = INPUT_TOTAL_INCOME053;  // mandar al localStorage
        localStorage.setItem("valores053", JSON.stringify(arrayValues053));  // modificar total productos
        _arrayValues053 = JSON.parse(localStorage.getItem("valores053"));
        TOTAL_INCOME053 = document.getElementById('053').innerText = `${arrayValues053}` // mandar al localStorage
         localStorage.setItem("TOTAL053", JSON.stringify(INPUT_TOTAL_INCOME053));  }   }
function disminuirValor053 () {
    _arrayValues053 = JSON.parse(localStorage.getItem("TOTAL053"));
    suma053 = _arrayValues053;
    if(arrayValues053 != ' ' && arrayValues053 > 0){
        INPUT_TOTAL_INCOME053 = document.getElementById('valor-entrada053').value;
        var arrayUnico = INPUT_TOTAL_INCOME053;  //  llamar del localStorage
        _arrayValues053 = JSON.parse(localStorage.getItem("TOTAL053"));  //  modificar
        let suma1 = parseInt(_arrayValues053) - parseInt(arrayUnico) ;
        TOTAL_INCOME053 = document.getElementById('053').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL053", JSON.stringify(suma1));
        localStorage.setItem("valores053", JSON.stringify(suma1)); } }
// 55
var INPUT_TOTAL_INCOME054;
var _arrayValues054;
var arrayValues054 = JSON.parse(localStorage.getItem("valores054")) || [];
var suma054 = JSON.parse(localStorage.getItem("TOTAL054"));
var TOTAL_INCOME054 = document.getElementById('054').innerText = `${suma054}`;
var elem = document.getElementById('valor-entrada054');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor054();}}
function agregarValor054 () {
    if(arrayValues054 != ' ' && arrayValues054 > 0){
        INPUT_TOTAL_INCOME054 = document.getElementById('valor-entrada054').value;
        var arrayUnico = INPUT_TOTAL_INCOME054;  //  llamar del localStorage
        _arrayValues054 = JSON.parse(localStorage.getItem("TOTAL054"));  //  modificar
        let suma1 = parseInt(_arrayValues054) + parseInt(arrayUnico) ;
        TOTAL_INCOME054 = document.getElementById('054').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL054", JSON.stringify(suma1));
        localStorage.setItem("valores054", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME054 = document.getElementById('valor-entrada054').value;
        arrayValues054 = INPUT_TOTAL_INCOME054;  // mandar al localStorage
        localStorage.setItem("valores054", JSON.stringify(arrayValues054));  // modificar total productos
        _arrayValues054 = JSON.parse(localStorage.getItem("valores054"));
        TOTAL_INCOME054 = document.getElementById('054').innerText = `${arrayValues054}` // mandar al localStorage
         localStorage.setItem("TOTAL054", JSON.stringify(INPUT_TOTAL_INCOME054));  }   }
function disminuirValor054 () {
    _arrayValues054 = JSON.parse(localStorage.getItem("TOTAL054"));
    suma054 = _arrayValues054;
    if(arrayValues054 != ' ' && arrayValues054 > 0){
        INPUT_TOTAL_INCOME054 = document.getElementById('valor-entrada054').value;
        var arrayUnico = INPUT_TOTAL_INCOME054;  //  llamar del localStorage
        _arrayValues054 = JSON.parse(localStorage.getItem("TOTAL054"));  //  modificar
        let suma1 = parseInt(_arrayValues054) - parseInt(arrayUnico) ;
        TOTAL_INCOME054 = document.getElementById('054').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL054", JSON.stringify(suma1));
        localStorage.setItem("valores054", JSON.stringify(suma1)); } }
// 56
var INPUT_TOTAL_INCOME055;
var _arrayValues055;
var arrayValues055 = JSON.parse(localStorage.getItem("valores055")) || [];
var suma055 = JSON.parse(localStorage.getItem("TOTAL055"));
var TOTAL_INCOME055 = document.getElementById('055').innerText = `${suma055}`;
var elem = document.getElementById('valor-entrada055');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor055();}}
function agregarValor055 () {
    if(arrayValues055 != ' ' && arrayValues055 > 0){
        INPUT_TOTAL_INCOME055 = document.getElementById('valor-entrada055').value;
        var arrayUnico = INPUT_TOTAL_INCOME055;  //  llamar del localStorage
        _arrayValues055 = JSON.parse(localStorage.getItem("TOTAL055"));  //  modificar
        let suma1 = parseInt(_arrayValues055) + parseInt(arrayUnico) ;
        TOTAL_INCOME055 = document.getElementById('055').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL055", JSON.stringify(suma1));
        localStorage.setItem("valores055", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME055 = document.getElementById('valor-entrada055').value;
        arrayValues055 = INPUT_TOTAL_INCOME055;  // mandar al localStorage
        localStorage.setItem("valores055", JSON.stringify(arrayValues055));  // modificar total productos
        _arrayValues055 = JSON.parse(localStorage.getItem("valores055"));
        TOTAL_INCOME055 = document.getElementById('055').innerText = `${arrayValues055}` // mandar al localStorage
         localStorage.setItem("TOTAL055", JSON.stringify(INPUT_TOTAL_INCOME055));  }   }
function disminuirValor055 () {
    _arrayValues055 = JSON.parse(localStorage.getItem("TOTAL055"));
    suma055 = _arrayValues055;
    if(arrayValues055 != ' ' && arrayValues055 > 0){
        INPUT_TOTAL_INCOME055 = document.getElementById('valor-entrada055').value;
        var arrayUnico = INPUT_TOTAL_INCOME055;  //  llamar del localStorage
        _arrayValues055 = JSON.parse(localStorage.getItem("TOTAL055"));  //  modificar
        let suma1 = parseInt(_arrayValues055) - parseInt(arrayUnico) ;
        TOTAL_INCOME055 = document.getElementById('055').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL055", JSON.stringify(suma1));
        localStorage.setItem("valores055", JSON.stringify(suma1)); } }
// 57
var INPUT_TOTAL_INCOME056;
var _arrayValues056;
var arrayValues056 = JSON.parse(localStorage.getItem("valores056")) || [];
var suma056 = JSON.parse(localStorage.getItem("TOTAL056"));
var TOTAL_INCOME056 = document.getElementById('056').innerText = `${suma056}`;
var elem = document.getElementById('valor-entrada056');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor056();}}
function agregarValor056 () {
    if(arrayValues056 != ' ' && arrayValues056 > 0){
        INPUT_TOTAL_INCOME056 = document.getElementById('valor-entrada056').value;
        var arrayUnico = INPUT_TOTAL_INCOME056;  //  llamar del localStorage
        _arrayValues056 = JSON.parse(localStorage.getItem("TOTAL056"));  //  modificar
        let suma1 = parseInt(_arrayValues056) + parseInt(arrayUnico) ;
        TOTAL_INCOME056 = document.getElementById('056').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL056", JSON.stringify(suma1));
        localStorage.setItem("valores056", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME056 = document.getElementById('valor-entrada056').value;
        arrayValues056 = INPUT_TOTAL_INCOME056;  // mandar al localStorage
        localStorage.setItem("valores056", JSON.stringify(arrayValues056));  // modificar total productos
        _arrayValues056 = JSON.parse(localStorage.getItem("valores056"));
        TOTAL_INCOME056 = document.getElementById('056').innerText = `${arrayValues056}` // mandar al localStorage
         localStorage.setItem("TOTAL056", JSON.stringify(INPUT_TOTAL_INCOME056));  }   }
function disminuirValor056 () {
    _arrayValues056 = JSON.parse(localStorage.getItem("TOTAL056"));
    suma056 = _arrayValues056;
    if(arrayValues056 != ' ' && arrayValues056 > 0){
        INPUT_TOTAL_INCOME056 = document.getElementById('valor-entrada056').value;
        var arrayUnico = INPUT_TOTAL_INCOME056;  //  llamar del localStorage
        _arrayValues056 = JSON.parse(localStorage.getItem("TOTAL056"));  //  modificar
        let suma1 = parseInt(_arrayValues056) - parseInt(arrayUnico) ;
        TOTAL_INCOME056 = document.getElementById('056').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL056", JSON.stringify(suma1));
        localStorage.setItem("valores056", JSON.stringify(suma1)); } }
// 58
var INPUT_TOTAL_INCOME057;
var _arrayValues057;
var arrayValues057 = JSON.parse(localStorage.getItem("valores057")) || [];
var suma057 = JSON.parse(localStorage.getItem("TOTAL057"));
var TOTAL_INCOME057 = document.getElementById('057').innerText = `${suma057}`;
var elem = document.getElementById('valor-entrada057');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor057();}}
function agregarValor057 () {
    if(arrayValues057 != ' ' && arrayValues057 > 0){
        INPUT_TOTAL_INCOME057 = document.getElementById('valor-entrada057').value;
        var arrayUnico = INPUT_TOTAL_INCOME057;  //  llamar del localStorage
        _arrayValues057 = JSON.parse(localStorage.getItem("TOTAL057"));  //  modificar
        let suma1 = parseInt(_arrayValues057) + parseInt(arrayUnico) ;
        TOTAL_INCOME057 = document.getElementById('057').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL057", JSON.stringify(suma1));
        localStorage.setItem("valores057", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME057 = document.getElementById('valor-entrada057').value;
        arrayValues057 = INPUT_TOTAL_INCOME057;  // mandar al localStorage
        localStorage.setItem("valores057", JSON.stringify(arrayValues057));  // modificar total productos
        _arrayValues057 = JSON.parse(localStorage.getItem("valores057"));
        TOTAL_INCOME057 = document.getElementById('057').innerText = `${arrayValues057}` // mandar al localStorage
         localStorage.setItem("TOTAL057", JSON.stringify(INPUT_TOTAL_INCOME057));  }   }
function disminuirValor057 () {
    _arrayValues057 = JSON.parse(localStorage.getItem("TOTAL057"));
    suma057 = _arrayValues057;
    if(arrayValues057 != ' ' && arrayValues057 > 0){
        INPUT_TOTAL_INCOME057 = document.getElementById('valor-entrada057').value;
        var arrayUnico = INPUT_TOTAL_INCOME057;  //  llamar del localStorage
        _arrayValues057 = JSON.parse(localStorage.getItem("TOTAL057"));  //  modificar
        let suma1 = parseInt(_arrayValues057) - parseInt(arrayUnico) ;
        TOTAL_INCOME057 = document.getElementById('057').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL057", JSON.stringify(suma1));
        localStorage.setItem("valores057", JSON.stringify(suma1)); } }
// 59
var INPUT_TOTAL_INCOME058;
var _arrayValues058;
var arrayValues058 = JSON.parse(localStorage.getItem("valores058")) || [];
var suma058 = JSON.parse(localStorage.getItem("TOTAL058"));
var TOTAL_INCOME058 = document.getElementById('058').innerText = `${suma058}`;
var elem = document.getElementById('valor-entrada058');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor058();}}
function agregarValor058 () {
    if(arrayValues058 != ' ' && arrayValues058 > 0){
        INPUT_TOTAL_INCOME058 = document.getElementById('valor-entrada058').value;
        var arrayUnico = INPUT_TOTAL_INCOME058;  //  llamar del localStorage
        _arrayValues058 = JSON.parse(localStorage.getItem("TOTAL058"));  //  modificar
        let suma1 = parseInt(_arrayValues058) + parseInt(arrayUnico) ;
        TOTAL_INCOME058 = document.getElementById('058').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL058", JSON.stringify(suma1));
        localStorage.setItem("valores058", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME058 = document.getElementById('valor-entrada058').value;
        arrayValues058 = INPUT_TOTAL_INCOME058;  // mandar al localStorage
        localStorage.setItem("valores058", JSON.stringify(arrayValues058));  // modificar total productos
        _arrayValues058 = JSON.parse(localStorage.getItem("valores058"));
        TOTAL_INCOME058 = document.getElementById('058').innerText = `${arrayValues058}` // mandar al localStorage
         localStorage.setItem("TOTAL058", JSON.stringify(INPUT_TOTAL_INCOME058));  }   }
function disminuirValor058 () {
    _arrayValues058 = JSON.parse(localStorage.getItem("TOTAL058"));
    suma058 = _arrayValues058;
    if(arrayValues058 != ' ' && arrayValues058 > 0){
        INPUT_TOTAL_INCOME058 = document.getElementById('valor-entrada058').value;
        var arrayUnico = INPUT_TOTAL_INCOME058;  //  llamar del localStorage
        _arrayValues058 = JSON.parse(localStorage.getItem("TOTAL058"));  //  modificar
        let suma1 = parseInt(_arrayValues058) - parseInt(arrayUnico) ;
        TOTAL_INCOME058 = document.getElementById('058').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL058", JSON.stringify(suma1));
        localStorage.setItem("valores058", JSON.stringify(suma1)); } }
// 60
var INPUT_TOTAL_INCOME059;
var _arrayValues059;
var arrayValues059 = JSON.parse(localStorage.getItem("valores059")) || [];
var suma059 = JSON.parse(localStorage.getItem("TOTAL059"));
var TOTAL_INCOME059 = document.getElementById('059').innerText = `${suma059}`;
var elem = document.getElementById('valor-entrada059');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor059();}}
function agregarValor059 () {
    if(arrayValues059 != ' ' && arrayValues059 > 0){
        INPUT_TOTAL_INCOME059 = document.getElementById('valor-entrada059').value;
        var arrayUnico = INPUT_TOTAL_INCOME059;  //  llamar del localStorage
        _arrayValues059 = JSON.parse(localStorage.getItem("TOTAL059"));  //  modificar
        let suma1 = parseInt(_arrayValues059) + parseInt(arrayUnico) ;
        TOTAL_INCOME059 = document.getElementById('059').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL059", JSON.stringify(suma1));
        localStorage.setItem("valores059", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME059 = document.getElementById('valor-entrada059').value;
        arrayValues059 = INPUT_TOTAL_INCOME059;  // mandar al localStorage
        localStorage.setItem("valores059", JSON.stringify(arrayValues059));  // modificar total productos
        _arrayValues059 = JSON.parse(localStorage.getItem("valores059"));
        TOTAL_INCOME059 = document.getElementById('059').innerText = `${arrayValues059}` // mandar al localStorage
         localStorage.setItem("TOTAL059", JSON.stringify(INPUT_TOTAL_INCOME059));  }   }
function disminuirValor059 () {
    _arrayValues059 = JSON.parse(localStorage.getItem("TOTAL059"));
    suma059 = _arrayValues059;
    if(arrayValues059 != ' ' && arrayValues059 > 0){
        INPUT_TOTAL_INCOME059 = document.getElementById('valor-entrada059').value;
        var arrayUnico = INPUT_TOTAL_INCOME059;  //  llamar del localStorage
        _arrayValues059 = JSON.parse(localStorage.getItem("TOTAL059"));  //  modificar
        let suma1 = parseInt(_arrayValues059) - parseInt(arrayUnico) ;
        TOTAL_INCOME059 = document.getElementById('059').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL059", JSON.stringify(suma1));
        localStorage.setItem("valores059", JSON.stringify(suma1)); } }
// 61
var INPUT_TOTAL_INCOME060;
var _arrayValues060;
var arrayValues060 = JSON.parse(localStorage.getItem("valores060")) || [];
var suma060 = JSON.parse(localStorage.getItem("TOTAL060"));
var TOTAL_INCOME060 = document.getElementById('060').innerText = `${suma060}`;
var elem = document.getElementById('valor-entrada060');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor060();}}
function agregarValor060 () {
    if(arrayValues060 != ' ' && arrayValues060 > 0){
        INPUT_TOTAL_INCOME060 = document.getElementById('valor-entrada060').value;
        var arrayUnico = INPUT_TOTAL_INCOME060;  //  llamar del localStorage
        _arrayValues060 = JSON.parse(localStorage.getItem("TOTAL060"));  //  modificar
        let suma1 = parseInt(_arrayValues060) + parseInt(arrayUnico) ;
        TOTAL_INCOME060 = document.getElementById('060').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL060", JSON.stringify(suma1));
        localStorage.setItem("valores060", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME060 = document.getElementById('valor-entrada060').value;
        arrayValues060 = INPUT_TOTAL_INCOME060;  // mandar al localStorage
        localStorage.setItem("valores060", JSON.stringify(arrayValues060));  // modificar total productos
        _arrayValues060 = JSON.parse(localStorage.getItem("valores060"));
        TOTAL_INCOME060 = document.getElementById('060').innerText = `${arrayValues060}` // mandar al localStorage
         localStorage.setItem("TOTAL060", JSON.stringify(INPUT_TOTAL_INCOME060));  }   }
function disminuirValor060 () {
    _arrayValues060 = JSON.parse(localStorage.getItem("TOTAL060"));
    suma060 = _arrayValues060;
    if(arrayValues060 != ' ' && arrayValues060 > 0){
        INPUT_TOTAL_INCOME060 = document.getElementById('valor-entrada060').value;
        var arrayUnico = INPUT_TOTAL_INCOME060;  //  llamar del localStorage
        _arrayValues060 = JSON.parse(localStorage.getItem("TOTAL060"));  //  modificar
        let suma1 = parseInt(_arrayValues060) - parseInt(arrayUnico) ;
        TOTAL_INCOME060 = document.getElementById('060').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL060", JSON.stringify(suma1));
        localStorage.setItem("valores060", JSON.stringify(suma1)); } }
// 62
var INPUT_TOTAL_INCOME061;
var _arrayValues061;
var arrayValues061 = JSON.parse(localStorage.getItem("valores061")) || [];
var suma061 = JSON.parse(localStorage.getItem("TOTAL061"));
var TOTAL_INCOME061 = document.getElementById('061').innerText = `${suma061}`;
var elem = document.getElementById('valor-entrada061');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor061();}}
function agregarValor061 () {
    if(arrayValues061 != ' ' && arrayValues061 > 0){
        INPUT_TOTAL_INCOME061 = document.getElementById('valor-entrada061').value;
        var arrayUnico = INPUT_TOTAL_INCOME061;  //  llamar del localStorage
        _arrayValues061 = JSON.parse(localStorage.getItem("TOTAL061"));  //  modificar
        let suma1 = parseInt(_arrayValues061) + parseInt(arrayUnico) ;
        TOTAL_INCOME061 = document.getElementById('061').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL061", JSON.stringify(suma1));
        localStorage.setItem("valores061", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME061 = document.getElementById('valor-entrada061').value;
        arrayValues061 = INPUT_TOTAL_INCOME061;  // mandar al localStorage
        localStorage.setItem("valores061", JSON.stringify(arrayValues061));  // modificar total productos
        _arrayValues061 = JSON.parse(localStorage.getItem("valores061"));
        TOTAL_INCOME061 = document.getElementById('061').innerText = `${arrayValues061}` // mandar al localStorage
         localStorage.setItem("TOTAL061", JSON.stringify(INPUT_TOTAL_INCOME061));  }   }
function disminuirValor061 () {
    _arrayValues061 = JSON.parse(localStorage.getItem("TOTAL061"));
    suma061 = _arrayValues061;
    if(arrayValues061 != ' ' && arrayValues061 > 0){
        INPUT_TOTAL_INCOME061 = document.getElementById('valor-entrada061').value;
        var arrayUnico = INPUT_TOTAL_INCOME061;  //  llamar del localStorage
        _arrayValues061 = JSON.parse(localStorage.getItem("TOTAL061"));  //  modificar
        let suma1 = parseInt(_arrayValues061) - parseInt(arrayUnico) ;
        TOTAL_INCOME061 = document.getElementById('061').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL061", JSON.stringify(suma1));
        localStorage.setItem("valores061", JSON.stringify(suma1)); } }
// 63
var INPUT_TOTAL_INCOME062;
var _arrayValues062;
var arrayValues062 = JSON.parse(localStorage.getItem("valores062")) || [];
var suma062 = JSON.parse(localStorage.getItem("TOTAL062"));
var TOTAL_INCOME062 = document.getElementById('062').innerText = `${suma062}`;
var elem = document.getElementById('valor-entrada062');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor062();}}
function agregarValor062 () {
    if(arrayValues062 != ' ' && arrayValues062 > 0){
        INPUT_TOTAL_INCOME062 = document.getElementById('valor-entrada062').value;
        var arrayUnico = INPUT_TOTAL_INCOME062;  //  llamar del localStorage
        _arrayValues062 = JSON.parse(localStorage.getItem("TOTAL062"));  //  modificar
        let suma1 = parseInt(_arrayValues062) + parseInt(arrayUnico) ;
        TOTAL_INCOME062 = document.getElementById('062').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL062", JSON.stringify(suma1));
        localStorage.setItem("valores062", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME062 = document.getElementById('valor-entrada062').value;
        arrayValues062 = INPUT_TOTAL_INCOME062;  // mandar al localStorage
        localStorage.setItem("valores062", JSON.stringify(arrayValues062));  // modificar total productos
        _arrayValues062 = JSON.parse(localStorage.getItem("valores062"));
        TOTAL_INCOME062 = document.getElementById('062').innerText = `${arrayValues062}` // mandar al localStorage
         localStorage.setItem("TOTAL062", JSON.stringify(INPUT_TOTAL_INCOME062));  }   }
function disminuirValor062 () {
    _arrayValues062 = JSON.parse(localStorage.getItem("TOTAL062"));
    suma062 = _arrayValues062;
    if(arrayValues062 != ' ' && arrayValues062 > 0){
        INPUT_TOTAL_INCOME062 = document.getElementById('valor-entrada062').value;
        var arrayUnico = INPUT_TOTAL_INCOME062;  //  llamar del localStorage
        _arrayValues062 = JSON.parse(localStorage.getItem("TOTAL062"));  //  modificar
        let suma1 = parseInt(_arrayValues062) - parseInt(arrayUnico) ;
        TOTAL_INCOME062 = document.getElementById('062').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL062", JSON.stringify(suma1));
        localStorage.setItem("valores062", JSON.stringify(suma1)); } }
// 64
var INPUT_TOTAL_INCOME063;
var _arrayValues063;
var arrayValues063 = JSON.parse(localStorage.getItem("valores063")) || [];
var suma063 = JSON.parse(localStorage.getItem("TOTAL063"));
var TOTAL_INCOME063 = document.getElementById('063').innerText = `${suma063}`;
var elem = document.getElementById('valor-entrada063');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor063();}}
function agregarValor063 () {
    if(arrayValues063 != ' ' && arrayValues063 > 0){
        INPUT_TOTAL_INCOME063 = document.getElementById('valor-entrada063').value;
        var arrayUnico = INPUT_TOTAL_INCOME063;  //  llamar del localStorage
        _arrayValues063 = JSON.parse(localStorage.getItem("TOTAL063"));  //  modificar
        let suma1 = parseInt(_arrayValues063) + parseInt(arrayUnico) ;
        TOTAL_INCOME063 = document.getElementById('063').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL063", JSON.stringify(suma1));
        localStorage.setItem("valores063", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME063 = document.getElementById('valor-entrada063').value;
        arrayValues063 = INPUT_TOTAL_INCOME063;  // mandar al localStorage
        localStorage.setItem("valores063", JSON.stringify(arrayValues063));  // modificar total productos
        _arrayValues063 = JSON.parse(localStorage.getItem("valores063"));
        TOTAL_INCOME063 = document.getElementById('063').innerText = `${arrayValues063}` // mandar al localStorage
         localStorage.setItem("TOTAL063", JSON.stringify(INPUT_TOTAL_INCOME063));  }   }
function disminuirValor063 () {
    _arrayValues063 = JSON.parse(localStorage.getItem("TOTAL063"));
    suma063 = _arrayValues063;
    if(arrayValues063 != ' ' && arrayValues063 > 0){
        INPUT_TOTAL_INCOME063 = document.getElementById('valor-entrada063').value;
        var arrayUnico = INPUT_TOTAL_INCOME063;  //  llamar del localStorage
        _arrayValues063 = JSON.parse(localStorage.getItem("TOTAL063"));  //  modificar
        let suma1 = parseInt(_arrayValues063) - parseInt(arrayUnico) ;
        TOTAL_INCOME063 = document.getElementById('063').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL063", JSON.stringify(suma1));
        localStorage.setItem("valores063", JSON.stringify(suma1)); } }
// 65
var INPUT_TOTAL_INCOME064;
var _arrayValues064;
var arrayValues064 = JSON.parse(localStorage.getItem("valores064")) || [];
var suma064 = JSON.parse(localStorage.getItem("TOTAL064"));
var TOTAL_INCOME064 = document.getElementById('064').innerText = `${suma064}`;
var elem = document.getElementById('valor-entrada064');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor064();}}
function agregarValor064 () {
    if(arrayValues064 != ' ' && arrayValues064 > 0){
        INPUT_TOTAL_INCOME064 = document.getElementById('valor-entrada064').value;
        var arrayUnico = INPUT_TOTAL_INCOME064;  //  llamar del localStorage
        _arrayValues064 = JSON.parse(localStorage.getItem("TOTAL064"));  //  modificar
        let suma1 = parseInt(_arrayValues064) + parseInt(arrayUnico) ;
        TOTAL_INCOME064 = document.getElementById('064').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL064", JSON.stringify(suma1));
        localStorage.setItem("valores064", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME064 = document.getElementById('valor-entrada064').value;
        arrayValues064 = INPUT_TOTAL_INCOME064;  // mandar al localStorage
        localStorage.setItem("valores064", JSON.stringify(arrayValues064));  // modificar total productos
        _arrayValues064 = JSON.parse(localStorage.getItem("valores064"));
        TOTAL_INCOME064 = document.getElementById('064').innerText = `${arrayValues064}` // mandar al localStorage
         localStorage.setItem("TOTAL064", JSON.stringify(INPUT_TOTAL_INCOME064));  }   }
function disminuirValor064 () {
    _arrayValues064 = JSON.parse(localStorage.getItem("TOTAL064"));
    suma064 = _arrayValues064;
    if(arrayValues064 != ' ' && arrayValues064 > 0){
        INPUT_TOTAL_INCOME064 = document.getElementById('valor-entrada064').value;
        var arrayUnico = INPUT_TOTAL_INCOME064;  //  llamar del localStorage
        _arrayValues064 = JSON.parse(localStorage.getItem("TOTAL064"));  //  modificar
        let suma1 = parseInt(_arrayValues064) - parseInt(arrayUnico) ;
        TOTAL_INCOME064 = document.getElementById('064').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL064", JSON.stringify(suma1));
        localStorage.setItem("valores064", JSON.stringify(suma1)); } }
// 66
var INPUT_TOTAL_INCOME065;
var _arrayValues065;
var arrayValues065 = JSON.parse(localStorage.getItem("valores065")) || [];
var suma065 = JSON.parse(localStorage.getItem("TOTAL065"));
var TOTAL_INCOME065 = document.getElementById('065').innerText = `${suma065}`;
var elem = document.getElementById('valor-entrada065');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor065();}}
function agregarValor065 () {
    if(arrayValues065 != ' ' && arrayValues065 > 0){
        INPUT_TOTAL_INCOME065 = document.getElementById('valor-entrada065').value;
        var arrayUnico = INPUT_TOTAL_INCOME065;  //  llamar del localStorage
        _arrayValues065 = JSON.parse(localStorage.getItem("TOTAL065"));  //  modificar
        let suma1 = parseInt(_arrayValues065) + parseInt(arrayUnico) ;
        TOTAL_INCOME065 = document.getElementById('065').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL065", JSON.stringify(suma1));
        localStorage.setItem("valores065", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME065 = document.getElementById('valor-entrada065').value;
        arrayValues065 = INPUT_TOTAL_INCOME065;  // mandar al localStorage
        localStorage.setItem("valores065", JSON.stringify(arrayValues065));  // modificar total productos
        _arrayValues065 = JSON.parse(localStorage.getItem("valores065"));
        TOTAL_INCOME065 = document.getElementById('065').innerText = `${arrayValues065}` // mandar al localStorage
         localStorage.setItem("TOTAL065", JSON.stringify(INPUT_TOTAL_INCOME065));  }   }
function disminuirValor065 () {
    _arrayValues065 = JSON.parse(localStorage.getItem("TOTAL065"));
    suma065 = _arrayValues065;
    if(arrayValues065 != ' ' && arrayValues065 > 0){
        INPUT_TOTAL_INCOME065 = document.getElementById('valor-entrada065').value;
        var arrayUnico = INPUT_TOTAL_INCOME065;  //  llamar del localStorage
        _arrayValues065 = JSON.parse(localStorage.getItem("TOTAL065"));  //  modificar
        let suma1 = parseInt(_arrayValues065) - parseInt(arrayUnico) ;
        TOTAL_INCOME065 = document.getElementById('065').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL065", JSON.stringify(suma1));
        localStorage.setItem("valores065", JSON.stringify(suma1)); } }
// 67
var INPUT_TOTAL_INCOME066;
var _arrayValues066;
var arrayValues066 = JSON.parse(localStorage.getItem("valores066")) || [];
var suma066 = JSON.parse(localStorage.getItem("TOTAL066"));
var TOTAL_INCOME066 = document.getElementById('066').innerText = `${suma066}`;
var elem = document.getElementById('valor-entrada066');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor066();}}
function agregarValor066 () {
    if(arrayValues066 != ' ' && arrayValues066 > 0){
        INPUT_TOTAL_INCOME066 = document.getElementById('valor-entrada066').value;
        var arrayUnico = INPUT_TOTAL_INCOME066;  //  llamar del localStorage
        _arrayValues066 = JSON.parse(localStorage.getItem("TOTAL066"));  //  modificar
        let suma1 = parseInt(_arrayValues066) + parseInt(arrayUnico) ;
        TOTAL_INCOME066 = document.getElementById('066').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL066", JSON.stringify(suma1));
        localStorage.setItem("valores066", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME066 = document.getElementById('valor-entrada066').value;
        arrayValues066 = INPUT_TOTAL_INCOME066;  // mandar al localStorage
        localStorage.setItem("valores066", JSON.stringify(arrayValues066));  // modificar total productos
        _arrayValues066 = JSON.parse(localStorage.getItem("valores066"));
        TOTAL_INCOME066 = document.getElementById('066').innerText = `${arrayValues066}` // mandar al localStorage
         localStorage.setItem("TOTAL066", JSON.stringify(INPUT_TOTAL_INCOME066));  }   }
function disminuirValor066 () {
    _arrayValues066 = JSON.parse(localStorage.getItem("TOTAL066"));
    suma066 = _arrayValues066;
    if(arrayValues066 != ' ' && arrayValues066 > 0){
        INPUT_TOTAL_INCOME066 = document.getElementById('valor-entrada066').value;
        var arrayUnico = INPUT_TOTAL_INCOME066;  //  llamar del localStorage
        _arrayValues066 = JSON.parse(localStorage.getItem("TOTAL066"));  //  modificar
        let suma1 = parseInt(_arrayValues066) - parseInt(arrayUnico) ;
        TOTAL_INCOME066 = document.getElementById('066').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL066", JSON.stringify(suma1));
        localStorage.setItem("valores066", JSON.stringify(suma1)); } }
// 68
var INPUT_TOTAL_INCOME067;
var _arrayValues067;
var arrayValues067 = JSON.parse(localStorage.getItem("valores067")) || [];
var suma067 = JSON.parse(localStorage.getItem("TOTAL067"));
var TOTAL_INCOME067 = document.getElementById('067').innerText = `${suma067}`;
var elem = document.getElementById('valor-entrada067');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor067();}}
function agregarValor067 () {
    if(arrayValues067 != ' ' && arrayValues067 > 0){
        INPUT_TOTAL_INCOME067 = document.getElementById('valor-entrada067').value;
        var arrayUnico = INPUT_TOTAL_INCOME067;  //  llamar del localStorage
        _arrayValues067 = JSON.parse(localStorage.getItem("TOTAL067"));  //  modificar
        let suma1 = parseInt(_arrayValues067) + parseInt(arrayUnico) ;
        TOTAL_INCOME067 = document.getElementById('067').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL067", JSON.stringify(suma1));
        localStorage.setItem("valores067", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME067 = document.getElementById('valor-entrada067').value;
        arrayValues067 = INPUT_TOTAL_INCOME067;  // mandar al localStorage
        localStorage.setItem("valores067", JSON.stringify(arrayValues067));  // modificar total productos
        _arrayValues067 = JSON.parse(localStorage.getItem("valores067"));
        TOTAL_INCOME067 = document.getElementById('067').innerText = `${arrayValues067}` // mandar al localStorage
         localStorage.setItem("TOTAL067", JSON.stringify(INPUT_TOTAL_INCOME067));  }   }
function disminuirValor067 () {
    _arrayValues067 = JSON.parse(localStorage.getItem("TOTAL067"));
    suma067 = _arrayValues067;
    if(arrayValues067 != ' ' && arrayValues067 > 0){
        INPUT_TOTAL_INCOME067 = document.getElementById('valor-entrada067').value;
        var arrayUnico = INPUT_TOTAL_INCOME067;  //  llamar del localStorage
        _arrayValues067 = JSON.parse(localStorage.getItem("TOTAL067"));  //  modificar
        let suma1 = parseInt(_arrayValues067) - parseInt(arrayUnico) ;
        TOTAL_INCOME067 = document.getElementById('067').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL067", JSON.stringify(suma1));
        localStorage.setItem("valores067", JSON.stringify(suma1)); } }
// 69
var INPUT_TOTAL_INCOME068;
var _arrayValues068;
var arrayValues068 = JSON.parse(localStorage.getItem("valores068")) || [];
var suma068 = JSON.parse(localStorage.getItem("TOTAL068"));
var TOTAL_INCOME068 = document.getElementById('068').innerText = `${suma068}`;
var elem = document.getElementById('valor-entrada068');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor068();}}
function agregarValor068 () {
    if(arrayValues068 != ' ' && arrayValues068 > 0){
        INPUT_TOTAL_INCOME068 = document.getElementById('valor-entrada068').value;
        var arrayUnico = INPUT_TOTAL_INCOME068;  //  llamar del localStorage
        _arrayValues068 = JSON.parse(localStorage.getItem("TOTAL068"));  //  modificar
        let suma1 = parseInt(_arrayValues068) + parseInt(arrayUnico) ;
        TOTAL_INCOME068 = document.getElementById('068').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL068", JSON.stringify(suma1));
        localStorage.setItem("valores068", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME068 = document.getElementById('valor-entrada068').value;
        arrayValues068 = INPUT_TOTAL_INCOME068;  // mandar al localStorage
        localStorage.setItem("valores068", JSON.stringify(arrayValues068));  // modificar total productos
        _arrayValues068 = JSON.parse(localStorage.getItem("valores068"));
        TOTAL_INCOME068 = document.getElementById('068').innerText = `${arrayValues068}` // mandar al localStorage
         localStorage.setItem("TOTAL068", JSON.stringify(INPUT_TOTAL_INCOME068));  }   }
function disminuirValor068 () {
    _arrayValues068 = JSON.parse(localStorage.getItem("TOTAL068"));
    suma068 = _arrayValues068;
    if(arrayValues068 != ' ' && arrayValues068 > 0){
        INPUT_TOTAL_INCOME068 = document.getElementById('valor-entrada068').value;
        var arrayUnico = INPUT_TOTAL_INCOME068;  //  llamar del localStorage
        _arrayValues068 = JSON.parse(localStorage.getItem("TOTAL068"));  //  modificar
        let suma1 = parseInt(_arrayValues068) - parseInt(arrayUnico) ;
        TOTAL_INCOME068 = document.getElementById('068').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL068", JSON.stringify(suma1));
        localStorage.setItem("valores068", JSON.stringify(suma1)); } }
// 70
var INPUT_TOTAL_INCOME069;
var _arrayValues069;
var arrayValues069 = JSON.parse(localStorage.getItem("valores069")) || [];
var suma069 = JSON.parse(localStorage.getItem("TOTAL069"));
var TOTAL_INCOME069 = document.getElementById('069').innerText = `${suma069}`;
var elem = document.getElementById('valor-entrada069');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor069();}}
function agregarValor069 () {
    if(arrayValues069 != ' ' && arrayValues069 > 0){
        INPUT_TOTAL_INCOME069 = document.getElementById('valor-entrada069').value;
        var arrayUnico = INPUT_TOTAL_INCOME069;  //  llamar del localStorage
        _arrayValues069 = JSON.parse(localStorage.getItem("TOTAL069"));  //  modificar
        let suma1 = parseInt(_arrayValues069) + parseInt(arrayUnico) ;
        TOTAL_INCOME069 = document.getElementById('069').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL069", JSON.stringify(suma1));
        localStorage.setItem("valores069", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME069 = document.getElementById('valor-entrada069').value;
        arrayValues069 = INPUT_TOTAL_INCOME069;  // mandar al localStorage
        localStorage.setItem("valores069", JSON.stringify(arrayValues069));  // modificar total productos
        _arrayValues069 = JSON.parse(localStorage.getItem("valores069"));
        TOTAL_INCOME069 = document.getElementById('069').innerText = `${arrayValues069}` // mandar al localStorage
         localStorage.setItem("TOTAL069", JSON.stringify(INPUT_TOTAL_INCOME069));  }   }
function disminuirValor069 () {
    _arrayValues069 = JSON.parse(localStorage.getItem("TOTAL069"));
    suma069 = _arrayValues069;
    if(arrayValues069 != ' ' && arrayValues069 > 0){
        INPUT_TOTAL_INCOME069 = document.getElementById('valor-entrada069').value;
        var arrayUnico = INPUT_TOTAL_INCOME069;  //  llamar del localStorage
        _arrayValues069 = JSON.parse(localStorage.getItem("TOTAL069"));  //  modificar
        let suma1 = parseInt(_arrayValues069) - parseInt(arrayUnico) ;
        TOTAL_INCOME069 = document.getElementById('069').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL069", JSON.stringify(suma1));
        localStorage.setItem("valores069", JSON.stringify(suma1)); } }
// 71
var INPUT_TOTAL_INCOME070;
var _arrayValues070;
var arrayValues070 = JSON.parse(localStorage.getItem("valores070")) || [];
var suma070 = JSON.parse(localStorage.getItem("TOTAL070"));
var TOTAL_INCOME070 = document.getElementById('070').innerText = `${suma070}`;
var elem = document.getElementById('valor-entrada070');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor070();}}
function agregarValor070 () {
    if(arrayValues070 != ' ' && arrayValues070 > 0){
        INPUT_TOTAL_INCOME070 = document.getElementById('valor-entrada070').value;
        var arrayUnico = INPUT_TOTAL_INCOME070;  //  llamar del localStorage
        _arrayValues070 = JSON.parse(localStorage.getItem("TOTAL070"));  //  modificar
        let suma1 = parseInt(_arrayValues070) + parseInt(arrayUnico) ;
        TOTAL_INCOME070 = document.getElementById('070').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL070", JSON.stringify(suma1));
        localStorage.setItem("valores070", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME070 = document.getElementById('valor-entrada070').value;
        arrayValues070 = INPUT_TOTAL_INCOME070;  // mandar al localStorage
        localStorage.setItem("valores070", JSON.stringify(arrayValues070));  // modificar total productos
        _arrayValues070 = JSON.parse(localStorage.getItem("valores070"));
        TOTAL_INCOME070 = document.getElementById('070').innerText = `${arrayValues070}` // mandar al localStorage
         localStorage.setItem("TOTAL070", JSON.stringify(INPUT_TOTAL_INCOME070));  }   }
function disminuirValor070 () {
    _arrayValues070 = JSON.parse(localStorage.getItem("TOTAL070"));
    suma070 = _arrayValues070;
    if(arrayValues070 != ' ' && arrayValues070 > 0){
        INPUT_TOTAL_INCOME070 = document.getElementById('valor-entrada070').value;
        var arrayUnico = INPUT_TOTAL_INCOME070;  //  llamar del localStorage
        _arrayValues070 = JSON.parse(localStorage.getItem("TOTAL070"));  //  modificar
        let suma1 = parseInt(_arrayValues070) - parseInt(arrayUnico) ;
        TOTAL_INCOME070 = document.getElementById('070').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL070", JSON.stringify(suma1));
        localStorage.setItem("valores070", JSON.stringify(suma1)); } }
// 72
var INPUT_TOTAL_INCOME071;
var _arrayValues071;
var arrayValues071 = JSON.parse(localStorage.getItem("valores071")) || [];
var suma071 = JSON.parse(localStorage.getItem("TOTAL071"));
var TOTAL_INCOME071 = document.getElementById('071').innerText = `${suma071}`;
var elem = document.getElementById('valor-entrada071');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor071();}}
function agregarValor071 () {
    if(arrayValues071 != ' ' && arrayValues071 > 0){
        INPUT_TOTAL_INCOME071 = document.getElementById('valor-entrada071').value;
        var arrayUnico = INPUT_TOTAL_INCOME071;  //  llamar del localStorage
        _arrayValues071 = JSON.parse(localStorage.getItem("TOTAL071"));  //  modificar
        let suma1 = parseInt(_arrayValues071) + parseInt(arrayUnico) ;
        TOTAL_INCOME071 = document.getElementById('071').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL071", JSON.stringify(suma1));
        localStorage.setItem("valores071", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME071 = document.getElementById('valor-entrada071').value;
        arrayValues071 = INPUT_TOTAL_INCOME071;  // mandar al localStorage
        localStorage.setItem("valores071", JSON.stringify(arrayValues071));  // modificar total productos
        _arrayValues071 = JSON.parse(localStorage.getItem("valores071"));
        TOTAL_INCOME071 = document.getElementById('071').innerText = `${arrayValues071}` // mandar al localStorage
         localStorage.setItem("TOTAL071", JSON.stringify(INPUT_TOTAL_INCOME071));  }   }
function disminuirValor071 () {
    _arrayValues071 = JSON.parse(localStorage.getItem("TOTAL071"));
    suma071 = _arrayValues071;
    if(arrayValues071 != ' ' && arrayValues071 > 0){
        INPUT_TOTAL_INCOME071 = document.getElementById('valor-entrada071').value;
        var arrayUnico = INPUT_TOTAL_INCOME071;  //  llamar del localStorage
        _arrayValues071 = JSON.parse(localStorage.getItem("TOTAL071"));  //  modificar
        let suma1 = parseInt(_arrayValues071) - parseInt(arrayUnico) ;
        TOTAL_INCOME071 = document.getElementById('071').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL071", JSON.stringify(suma1));
        localStorage.setItem("valores071", JSON.stringify(suma1)); } }
// 73
var INPUT_TOTAL_INCOME072;
var _arrayValues072;
var arrayValues072 = JSON.parse(localStorage.getItem("valores072")) || [];
var suma072 = JSON.parse(localStorage.getItem("TOTAL072"));
var TOTAL_INCOME072 = document.getElementById('072').innerText = `${suma072}`;
var elem = document.getElementById('valor-entrada072');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor072();}}
function agregarValor072 () {
    if(arrayValues072 != ' ' && arrayValues072 > 0){
        INPUT_TOTAL_INCOME072 = document.getElementById('valor-entrada072').value;
        var arrayUnico = INPUT_TOTAL_INCOME072;  //  llamar del localStorage
        _arrayValues072 = JSON.parse(localStorage.getItem("TOTAL072"));  //  modificar
        let suma1 = parseInt(_arrayValues072) + parseInt(arrayUnico) ;
        TOTAL_INCOME072 = document.getElementById('072').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL072", JSON.stringify(suma1));
        localStorage.setItem("valores072", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME072 = document.getElementById('valor-entrada072').value;
        arrayValues072 = INPUT_TOTAL_INCOME072;  // mandar al localStorage
        localStorage.setItem("valores072", JSON.stringify(arrayValues072));  // modificar total productos
        _arrayValues072 = JSON.parse(localStorage.getItem("valores072"));
        TOTAL_INCOME072 = document.getElementById('072').innerText = `${arrayValues072}` // mandar al localStorage
         localStorage.setItem("TOTAL072", JSON.stringify(INPUT_TOTAL_INCOME072));  }   }
function disminuirValor072 () {
    _arrayValues072 = JSON.parse(localStorage.getItem("TOTAL072"));
    suma072 = _arrayValues072;
    if(arrayValues072 != ' ' && arrayValues072 > 0){
        INPUT_TOTAL_INCOME072 = document.getElementById('valor-entrada072').value;
        var arrayUnico = INPUT_TOTAL_INCOME072;  //  llamar del localStorage
        _arrayValues072 = JSON.parse(localStorage.getItem("TOTAL072"));  //  modificar
        let suma1 = parseInt(_arrayValues072) - parseInt(arrayUnico) ;
        TOTAL_INCOME072 = document.getElementById('072').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL072", JSON.stringify(suma1));
        localStorage.setItem("valores072", JSON.stringify(suma1)); } }
// 74
var INPUT_TOTAL_INCOME073;
var _arrayValues073;
var arrayValues073 = JSON.parse(localStorage.getItem("valores073")) || [];
var suma073 = JSON.parse(localStorage.getItem("TOTAL073"));
var TOTAL_INCOME073 = document.getElementById('073').innerText = `${suma073}`;
var elem = document.getElementById('valor-entrada073');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor073();}}
function agregarValor073 () {
    if(arrayValues073 != ' ' && arrayValues073 > 0){
        INPUT_TOTAL_INCOME073 = document.getElementById('valor-entrada073').value;
        var arrayUnico = INPUT_TOTAL_INCOME073;  //  llamar del localStorage
        _arrayValues073 = JSON.parse(localStorage.getItem("TOTAL073"));  //  modificar
        let suma1 = parseInt(_arrayValues073) + parseInt(arrayUnico) ;
        TOTAL_INCOME073 = document.getElementById('073').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL073", JSON.stringify(suma1));
        localStorage.setItem("valores073", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME073 = document.getElementById('valor-entrada073').value;
        arrayValues073 = INPUT_TOTAL_INCOME073;  // mandar al localStorage
        localStorage.setItem("valores073", JSON.stringify(arrayValues073));  // modificar total productos
        _arrayValues073 = JSON.parse(localStorage.getItem("valores073"));
        TOTAL_INCOME073 = document.getElementById('073').innerText = `${arrayValues073}` // mandar al localStorage
         localStorage.setItem("TOTAL073", JSON.stringify(INPUT_TOTAL_INCOME073));  }   }
function disminuirValor073 () {
    _arrayValues073 = JSON.parse(localStorage.getItem("TOTAL073"));
    suma073 = _arrayValues073;
    if(arrayValues073 != ' ' && arrayValues073 > 0){
        INPUT_TOTAL_INCOME073 = document.getElementById('valor-entrada073').value;
        var arrayUnico = INPUT_TOTAL_INCOME073;  //  llamar del localStorage
        _arrayValues073 = JSON.parse(localStorage.getItem("TOTAL073"));  //  modificar
        let suma1 = parseInt(_arrayValues073) - parseInt(arrayUnico) ;
        TOTAL_INCOME073 = document.getElementById('073').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL073", JSON.stringify(suma1));
        localStorage.setItem("valores073", JSON.stringify(suma1)); } }
// 75
var INPUT_TOTAL_INCOME074;
var _arrayValues074;
var arrayValues074 = JSON.parse(localStorage.getItem("valores074")) || [];
var suma074 = JSON.parse(localStorage.getItem("TOTAL074"));
var TOTAL_INCOME074 = document.getElementById('074').innerText = `${suma074}`;
var elem = document.getElementById('valor-entrada074');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor074();}}
function agregarValor074 () {
    if(arrayValues074 != ' ' && arrayValues074 > 0){
        INPUT_TOTAL_INCOME074 = document.getElementById('valor-entrada074').value;
        var arrayUnico = INPUT_TOTAL_INCOME074;  //  llamar del localStorage
        _arrayValues074 = JSON.parse(localStorage.getItem("TOTAL074"));  //  modificar
        let suma1 = parseInt(_arrayValues074) + parseInt(arrayUnico) ;
        TOTAL_INCOME074 = document.getElementById('074').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL074", JSON.stringify(suma1));
        localStorage.setItem("valores074", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME074 = document.getElementById('valor-entrada074').value;
        arrayValues074 = INPUT_TOTAL_INCOME074;  // mandar al localStorage
        localStorage.setItem("valores074", JSON.stringify(arrayValues074));  // modificar total productos
        _arrayValues074 = JSON.parse(localStorage.getItem("valores074"));
        TOTAL_INCOME074 = document.getElementById('074').innerText = `${arrayValues074}` // mandar al localStorage
         localStorage.setItem("TOTAL074", JSON.stringify(INPUT_TOTAL_INCOME074));  }   }
function disminuirValor074 () {
    _arrayValues074 = JSON.parse(localStorage.getItem("TOTAL074"));
    suma074 = _arrayValues074;
    if(arrayValues074 != ' ' && arrayValues074 > 0){
        INPUT_TOTAL_INCOME074 = document.getElementById('valor-entrada074').value;
        var arrayUnico = INPUT_TOTAL_INCOME074;  //  llamar del localStorage
        _arrayValues074 = JSON.parse(localStorage.getItem("TOTAL074"));  //  modificar
        let suma1 = parseInt(_arrayValues074) - parseInt(arrayUnico) ;
        TOTAL_INCOME074 = document.getElementById('074').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL074", JSON.stringify(suma1));
        localStorage.setItem("valores074", JSON.stringify(suma1)); } }
// 76
var INPUT_TOTAL_INCOME075;
var _arrayValues075;
var arrayValues075 = JSON.parse(localStorage.getItem("valores075")) || [];
var suma075 = JSON.parse(localStorage.getItem("TOTAL075"));
var TOTAL_INCOME075 = document.getElementById('075').innerText = `${suma075}`;
var elem = document.getElementById('valor-entrada075');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor075();}}
function agregarValor075 () {
    if(arrayValues075 != ' ' && arrayValues075 > 0){
        INPUT_TOTAL_INCOME075 = document.getElementById('valor-entrada075').value;
        var arrayUnico = INPUT_TOTAL_INCOME075;  //  llamar del localStorage
        _arrayValues075 = JSON.parse(localStorage.getItem("TOTAL075"));  //  modificar
        let suma1 = parseInt(_arrayValues075) + parseInt(arrayUnico) ;
        TOTAL_INCOME075 = document.getElementById('075').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL075", JSON.stringify(suma1));
        localStorage.setItem("valores075", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME075 = document.getElementById('valor-entrada075').value;
        arrayValues075 = INPUT_TOTAL_INCOME075;  // mandar al localStorage
        localStorage.setItem("valores075", JSON.stringify(arrayValues075));  // modificar total productos
        _arrayValues075 = JSON.parse(localStorage.getItem("valores075"));
        TOTAL_INCOME075 = document.getElementById('075').innerText = `${arrayValues075}` // mandar al localStorage
         localStorage.setItem("TOTAL075", JSON.stringify(INPUT_TOTAL_INCOME075));  }   }
function disminuirValor075 () {
    _arrayValues075 = JSON.parse(localStorage.getItem("TOTAL075"));
    suma075 = _arrayValues075;
    if(arrayValues075 != ' ' && arrayValues075 > 0){
        INPUT_TOTAL_INCOME075 = document.getElementById('valor-entrada075').value;
        var arrayUnico = INPUT_TOTAL_INCOME075;  //  llamar del localStorage
        _arrayValues075 = JSON.parse(localStorage.getItem("TOTAL075"));  //  modificar
        let suma1 = parseInt(_arrayValues075) - parseInt(arrayUnico) ;
        TOTAL_INCOME075 = document.getElementById('075').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL075", JSON.stringify(suma1));
        localStorage.setItem("valores075", JSON.stringify(suma1)); } }
// 77
var INPUT_TOTAL_INCOME076;
var _arrayValues076;
var arrayValues076 = JSON.parse(localStorage.getItem("valores076")) || [];
var suma076 = JSON.parse(localStorage.getItem("TOTAL076"));
var TOTAL_INCOME076 = document.getElementById('076').innerText = `${suma076}`;
var elem = document.getElementById('valor-entrada076');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor076();}}
function agregarValor076 () {
    if(arrayValues076 != ' ' && arrayValues076 > 0){
        INPUT_TOTAL_INCOME076 = document.getElementById('valor-entrada076').value;
        var arrayUnico = INPUT_TOTAL_INCOME076;  //  llamar del localStorage
        _arrayValues076 = JSON.parse(localStorage.getItem("TOTAL076"));  //  modificar
        let suma1 = parseInt(_arrayValues076) + parseInt(arrayUnico) ;
        TOTAL_INCOME076 = document.getElementById('076').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL076", JSON.stringify(suma1));
        localStorage.setItem("valores076", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME076 = document.getElementById('valor-entrada076').value;
        arrayValues076 = INPUT_TOTAL_INCOME076;  // mandar al localStorage
        localStorage.setItem("valores076", JSON.stringify(arrayValues076));  // modificar total productos
        _arrayValues076 = JSON.parse(localStorage.getItem("valores076"));
        TOTAL_INCOME076 = document.getElementById('076').innerText = `${arrayValues076}` // mandar al localStorage
         localStorage.setItem("TOTAL076", JSON.stringify(INPUT_TOTAL_INCOME076));  }   }
function disminuirValor076 () {
    _arrayValues076 = JSON.parse(localStorage.getItem("TOTAL076"));
    suma076 = _arrayValues076;
    if(arrayValues076 != ' ' && arrayValues076 > 0){
        INPUT_TOTAL_INCOME076 = document.getElementById('valor-entrada076').value;
        var arrayUnico = INPUT_TOTAL_INCOME076;  //  llamar del localStorage
        _arrayValues076 = JSON.parse(localStorage.getItem("TOTAL076"));  //  modificar
        let suma1 = parseInt(_arrayValues076) - parseInt(arrayUnico) ;
        TOTAL_INCOME076 = document.getElementById('076').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL076", JSON.stringify(suma1));
        localStorage.setItem("valores076", JSON.stringify(suma1)); } }
// 78
var INPUT_TOTAL_INCOME077;
var _arrayValues077;
var arrayValues077 = JSON.parse(localStorage.getItem("valores077")) || [];
var suma077 = JSON.parse(localStorage.getItem("TOTAL077"));
var TOTAL_INCOME077 = document.getElementById('077').innerText = `${suma077}`;
var elem = document.getElementById('valor-entrada077');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor077();}}
function agregarValor077 () {
    if(arrayValues077 != ' ' && arrayValues077 > 0){
        INPUT_TOTAL_INCOME077 = document.getElementById('valor-entrada077').value;
        var arrayUnico = INPUT_TOTAL_INCOME077;  //  llamar del localStorage
        _arrayValues077 = JSON.parse(localStorage.getItem("TOTAL077"));  //  modificar
        let suma1 = parseInt(_arrayValues077) + parseInt(arrayUnico) ;
        TOTAL_INCOME077 = document.getElementById('077').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL077", JSON.stringify(suma1));
        localStorage.setItem("valores077", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME077 = document.getElementById('valor-entrada077').value;
        arrayValues077 = INPUT_TOTAL_INCOME077;  // mandar al localStorage
        localStorage.setItem("valores077", JSON.stringify(arrayValues077));  // modificar total productos
        _arrayValues077 = JSON.parse(localStorage.getItem("valores077"));
        TOTAL_INCOME077 = document.getElementById('077').innerText = `${arrayValues077}` // mandar al localStorage
         localStorage.setItem("TOTAL077", JSON.stringify(INPUT_TOTAL_INCOME077));  }   }
function disminuirValor077 () {
    _arrayValues077 = JSON.parse(localStorage.getItem("TOTAL077"));
    suma077 = _arrayValues077;
    if(arrayValues077 != ' ' && arrayValues077 > 0){
        INPUT_TOTAL_INCOME077 = document.getElementById('valor-entrada077').value;
        var arrayUnico = INPUT_TOTAL_INCOME077;  //  llamar del localStorage
        _arrayValues077 = JSON.parse(localStorage.getItem("TOTAL077"));  //  modificar
        let suma1 = parseInt(_arrayValues077) - parseInt(arrayUnico) ;
        TOTAL_INCOME077 = document.getElementById('077').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL077", JSON.stringify(suma1));
        localStorage.setItem("valores077", JSON.stringify(suma1)); } }
// 79
var INPUT_TOTAL_INCOME078;
var _arrayValues078;
var arrayValues078 = JSON.parse(localStorage.getItem("valores078")) || [];
var suma078 = JSON.parse(localStorage.getItem("TOTAL078"));
var TOTAL_INCOME078 = document.getElementById('078').innerText = `${suma078}`;
var elem = document.getElementById('valor-entrada078');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor078();}}
function agregarValor078 () {
    if(arrayValues078 != ' ' && arrayValues078 > 0){
        INPUT_TOTAL_INCOME078 = document.getElementById('valor-entrada078').value;
        var arrayUnico = INPUT_TOTAL_INCOME078;  //  llamar del localStorage
        _arrayValues078 = JSON.parse(localStorage.getItem("TOTAL078"));  //  modificar
        let suma1 = parseInt(_arrayValues078) + parseInt(arrayUnico) ;
        TOTAL_INCOME078 = document.getElementById('078').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL078", JSON.stringify(suma1));
        localStorage.setItem("valores078", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME078 = document.getElementById('valor-entrada078').value;
        arrayValues078 = INPUT_TOTAL_INCOME078;  // mandar al localStorage
        localStorage.setItem("valores078", JSON.stringify(arrayValues078));  // modificar total productos
        _arrayValues078 = JSON.parse(localStorage.getItem("valores078"));
        TOTAL_INCOME078 = document.getElementById('078').innerText = `${arrayValues078}` // mandar al localStorage
         localStorage.setItem("TOTAL078", JSON.stringify(INPUT_TOTAL_INCOME078));  }   }
function disminuirValor078 () {
    _arrayValues078 = JSON.parse(localStorage.getItem("TOTAL078"));
    suma078 = _arrayValues078;
    if(arrayValues078 != ' ' && arrayValues078 > 0){
        INPUT_TOTAL_INCOME078 = document.getElementById('valor-entrada078').value;
        var arrayUnico = INPUT_TOTAL_INCOME078;  //  llamar del localStorage
        _arrayValues078 = JSON.parse(localStorage.getItem("TOTAL078"));  //  modificar
        let suma1 = parseInt(_arrayValues078) - parseInt(arrayUnico) ;
        TOTAL_INCOME078 = document.getElementById('078').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL078", JSON.stringify(suma1));
        localStorage.setItem("valores078", JSON.stringify(suma1)); } }
// 80
var INPUT_TOTAL_INCOME079;
var _arrayValues079;
var arrayValues079 = JSON.parse(localStorage.getItem("valores079")) || [];
var suma079 = JSON.parse(localStorage.getItem("TOTAL079"));
var TOTAL_INCOME079 = document.getElementById('079').innerText = `${suma079}`;
var elem = document.getElementById('valor-entrada079');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor079();}}
function agregarValor079 () {
    if(arrayValues079 != ' ' && arrayValues079 > 0){
        INPUT_TOTAL_INCOME079 = document.getElementById('valor-entrada079').value;
        var arrayUnico = INPUT_TOTAL_INCOME079;  //  llamar del localStorage
        _arrayValues079 = JSON.parse(localStorage.getItem("TOTAL079"));  //  modificar
        let suma1 = parseInt(_arrayValues079) + parseInt(arrayUnico) ;
        TOTAL_INCOME079 = document.getElementById('079').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL079", JSON.stringify(suma1));
        localStorage.setItem("valores079", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME079 = document.getElementById('valor-entrada079').value;
        arrayValues079 = INPUT_TOTAL_INCOME079;  // mandar al localStorage
        localStorage.setItem("valores079", JSON.stringify(arrayValues079));  // modificar total productos
        _arrayValues079 = JSON.parse(localStorage.getItem("valores079"));
        TOTAL_INCOME079 = document.getElementById('079').innerText = `${arrayValues079}` // mandar al localStorage
         localStorage.setItem("TOTAL079", JSON.stringify(INPUT_TOTAL_INCOME079));  }   }
function disminuirValor079 () {
    _arrayValues079 = JSON.parse(localStorage.getItem("TOTAL079"));
    suma079 = _arrayValues079;
    if(arrayValues079 != ' ' && arrayValues079 > 0){
        INPUT_TOTAL_INCOME079 = document.getElementById('valor-entrada079').value;
        var arrayUnico = INPUT_TOTAL_INCOME079;  //  llamar del localStorage
        _arrayValues079 = JSON.parse(localStorage.getItem("TOTAL079"));  //  modificar
        let suma1 = parseInt(_arrayValues079) - parseInt(arrayUnico) ;
        TOTAL_INCOME079 = document.getElementById('079').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL079", JSON.stringify(suma1));
        localStorage.setItem("valores079", JSON.stringify(suma1)); } }
// 81
var INPUT_TOTAL_INCOME080;
var _arrayValues080;
var arrayValues080 = JSON.parse(localStorage.getItem("valores080")) || [];
var suma080 = JSON.parse(localStorage.getItem("TOTAL080"));
var TOTAL_INCOME080 = document.getElementById('080').innerText = `${suma080}`;
var elem = document.getElementById('valor-entrada080');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor080();}}
function agregarValor080 () {
    if(arrayValues080 != ' ' && arrayValues080 > 0){
        INPUT_TOTAL_INCOME080 = document.getElementById('valor-entrada080').value;
        var arrayUnico = INPUT_TOTAL_INCOME080;  //  llamar del localStorage
        _arrayValues080 = JSON.parse(localStorage.getItem("TOTAL080"));  //  modificar
        let suma1 = parseInt(_arrayValues080) + parseInt(arrayUnico) ;
        TOTAL_INCOME080 = document.getElementById('080').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL080", JSON.stringify(suma1));
        localStorage.setItem("valores080", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME080 = document.getElementById('valor-entrada080').value;
        arrayValues080 = INPUT_TOTAL_INCOME080;  // mandar al localStorage
        localStorage.setItem("valores080", JSON.stringify(arrayValues080));  // modificar total productos
        _arrayValues080 = JSON.parse(localStorage.getItem("valores080"));
        TOTAL_INCOME080 = document.getElementById('080').innerText = `${arrayValues080}` // mandar al localStorage
         localStorage.setItem("TOTAL080", JSON.stringify(INPUT_TOTAL_INCOME080));  }   }
function disminuirValor080 () {
    _arrayValues080 = JSON.parse(localStorage.getItem("TOTAL080"));
    suma080 = _arrayValues080;
    if(arrayValues080 != ' ' && arrayValues080 > 0){
        INPUT_TOTAL_INCOME080 = document.getElementById('valor-entrada080').value;
        var arrayUnico = INPUT_TOTAL_INCOME080;  //  llamar del localStorage
        _arrayValues080 = JSON.parse(localStorage.getItem("TOTAL080"));  //  modificar
        let suma1 = parseInt(_arrayValues080) - parseInt(arrayUnico) ;
        TOTAL_INCOME080 = document.getElementById('080').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL080", JSON.stringify(suma1));
        localStorage.setItem("valores080", JSON.stringify(suma1)); } }
// 82
var INPUT_TOTAL_INCOME081;
var _arrayValues081;
var arrayValues081 = JSON.parse(localStorage.getItem("valores081")) || [];
var suma081 = JSON.parse(localStorage.getItem("TOTAL081"));
var TOTAL_INCOME081 = document.getElementById('081').innerText = `${suma081}`;
var elem = document.getElementById('valor-entrada081');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor081();}}
function agregarValor081 () {
    if(arrayValues081 != ' ' && arrayValues081 > 0){
        INPUT_TOTAL_INCOME081 = document.getElementById('valor-entrada081').value;
        var arrayUnico = INPUT_TOTAL_INCOME081;  //  llamar del localStorage
        _arrayValues081 = JSON.parse(localStorage.getItem("TOTAL081"));  //  modificar
        let suma1 = parseInt(_arrayValues081) + parseInt(arrayUnico) ;
        TOTAL_INCOME081 = document.getElementById('081').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL081", JSON.stringify(suma1));
        localStorage.setItem("valores081", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME081 = document.getElementById('valor-entrada081').value;
        arrayValues081 = INPUT_TOTAL_INCOME081;  // mandar al localStorage
        localStorage.setItem("valores081", JSON.stringify(arrayValues081));  // modificar total productos
        _arrayValues081 = JSON.parse(localStorage.getItem("valores081"));
        TOTAL_INCOME081 = document.getElementById('081').innerText = `${arrayValues081}` // mandar al localStorage
         localStorage.setItem("TOTAL081", JSON.stringify(INPUT_TOTAL_INCOME081));  }   }
function disminuirValor081 () {
    _arrayValues081 = JSON.parse(localStorage.getItem("TOTAL081"));
    suma081 = _arrayValues081;
    if(arrayValues081 != ' ' && arrayValues081 > 0){
        INPUT_TOTAL_INCOME081 = document.getElementById('valor-entrada081').value;
        var arrayUnico = INPUT_TOTAL_INCOME081;  //  llamar del localStorage
        _arrayValues081 = JSON.parse(localStorage.getItem("TOTAL081"));  //  modificar
        let suma1 = parseInt(_arrayValues081) - parseInt(arrayUnico) ;
        TOTAL_INCOME081 = document.getElementById('081').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL081", JSON.stringify(suma1));
        localStorage.setItem("valores081", JSON.stringify(suma1)); } }
// 83
var INPUT_TOTAL_INCOME082;
var _arrayValues082;
var arrayValues082 = JSON.parse(localStorage.getItem("valores082")) || [];
var suma082 = JSON.parse(localStorage.getItem("TOTAL082"));
var TOTAL_INCOME082 = document.getElementById('082').innerText = `${suma082}`;
var elem = document.getElementById('valor-entrada082');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor082();}}
function agregarValor082 () {
    if(arrayValues082 != ' ' && arrayValues082 > 0){
        INPUT_TOTAL_INCOME082 = document.getElementById('valor-entrada082').value;
        var arrayUnico = INPUT_TOTAL_INCOME082;  //  llamar del localStorage
        _arrayValues082 = JSON.parse(localStorage.getItem("TOTAL082"));  //  modificar
        let suma1 = parseInt(_arrayValues082) + parseInt(arrayUnico) ;
        TOTAL_INCOME082 = document.getElementById('082').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL082", JSON.stringify(suma1));
        localStorage.setItem("valores082", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME082 = document.getElementById('valor-entrada082').value;
        arrayValues082 = INPUT_TOTAL_INCOME082;  // mandar al localStorage
        localStorage.setItem("valores082", JSON.stringify(arrayValues082));  // modificar total productos
        _arrayValues082 = JSON.parse(localStorage.getItem("valores082"));
        TOTAL_INCOME082 = document.getElementById('082').innerText = `${arrayValues082}` // mandar al localStorage
         localStorage.setItem("TOTAL082", JSON.stringify(INPUT_TOTAL_INCOME082));  }   }
function disminuirValor082 () {
    _arrayValues082 = JSON.parse(localStorage.getItem("TOTAL082"));
    suma082 = _arrayValues082;
    if(arrayValues082 != ' ' && arrayValues082 > 0){
        INPUT_TOTAL_INCOME082 = document.getElementById('valor-entrada082').value;
        var arrayUnico = INPUT_TOTAL_INCOME082;  //  llamar del localStorage
        _arrayValues082 = JSON.parse(localStorage.getItem("TOTAL082"));  //  modificar
        let suma1 = parseInt(_arrayValues082) - parseInt(arrayUnico) ;
        TOTAL_INCOME082 = document.getElementById('082').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL082", JSON.stringify(suma1));
        localStorage.setItem("valores082", JSON.stringify(suma1)); } }
// 84
var INPUT_TOTAL_INCOME083;
var _arrayValues083;
var arrayValues083 = JSON.parse(localStorage.getItem("valores083")) || [];
var suma083 = JSON.parse(localStorage.getItem("TOTAL083"));
var TOTAL_INCOME083 = document.getElementById('083').innerText = `${suma083}`;
var elem = document.getElementById('valor-entrada083');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor083();}}
function agregarValor083 () {
    if(arrayValues083 != ' ' && arrayValues083 > 0){
        INPUT_TOTAL_INCOME083 = document.getElementById('valor-entrada083').value;
        var arrayUnico = INPUT_TOTAL_INCOME083;  //  llamar del localStorage
        _arrayValues083 = JSON.parse(localStorage.getItem("TOTAL083"));  //  modificar
        let suma1 = parseInt(_arrayValues083) + parseInt(arrayUnico) ;
        TOTAL_INCOME083 = document.getElementById('083').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL083", JSON.stringify(suma1));
        localStorage.setItem("valores083", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME083 = document.getElementById('valor-entrada083').value;
        arrayValues083 = INPUT_TOTAL_INCOME083;  // mandar al localStorage
        localStorage.setItem("valores083", JSON.stringify(arrayValues083));  // modificar total productos
        _arrayValues083 = JSON.parse(localStorage.getItem("valores083"));
        TOTAL_INCOME083 = document.getElementById('083').innerText = `${arrayValues083}` // mandar al localStorage
         localStorage.setItem("TOTAL083", JSON.stringify(INPUT_TOTAL_INCOME083));  }   }
function disminuirValor083 () {
    _arrayValues083 = JSON.parse(localStorage.getItem("TOTAL083"));
    suma083 = _arrayValues083;
    if(arrayValues083 != ' ' && arrayValues083 > 0){
        INPUT_TOTAL_INCOME083 = document.getElementById('valor-entrada083').value;
        var arrayUnico = INPUT_TOTAL_INCOME083;  //  llamar del localStorage
        _arrayValues083 = JSON.parse(localStorage.getItem("TOTAL083"));  //  modificar
        let suma1 = parseInt(_arrayValues083) - parseInt(arrayUnico) ;
        TOTAL_INCOME083 = document.getElementById('083').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL083", JSON.stringify(suma1));
        localStorage.setItem("valores083", JSON.stringify(suma1)); } }
// 85
var INPUT_TOTAL_INCOME084;
var _arrayValues084;
var arrayValues084 = JSON.parse(localStorage.getItem("valores084")) || [];
var suma084 = JSON.parse(localStorage.getItem("TOTAL084"));
var TOTAL_INCOME084 = document.getElementById('084').innerText = `${suma084}`;
var elem = document.getElementById('valor-entrada084');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor084();}}
function agregarValor084 () {
    if(arrayValues084 != ' ' && arrayValues084 > 0){
        INPUT_TOTAL_INCOME084 = document.getElementById('valor-entrada084').value;
        var arrayUnico = INPUT_TOTAL_INCOME084;  //  llamar del localStorage
        _arrayValues084 = JSON.parse(localStorage.getItem("TOTAL084"));  //  modificar
        let suma1 = parseInt(_arrayValues084) + parseInt(arrayUnico) ;
        TOTAL_INCOME084 = document.getElementById('084').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL084", JSON.stringify(suma1));
        localStorage.setItem("valores084", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME084 = document.getElementById('valor-entrada084').value;
        arrayValues084 = INPUT_TOTAL_INCOME084;  // mandar al localStorage
        localStorage.setItem("valores084", JSON.stringify(arrayValues084));  // modificar total productos
        _arrayValues084 = JSON.parse(localStorage.getItem("valores084"));
        TOTAL_INCOME084 = document.getElementById('084').innerText = `${arrayValues084}` // mandar al localStorage
         localStorage.setItem("TOTAL084", JSON.stringify(INPUT_TOTAL_INCOME084));  }   }
function disminuirValor084 () {
    _arrayValues084 = JSON.parse(localStorage.getItem("TOTAL084"));
    suma084 = _arrayValues084;
    if(arrayValues084 != ' ' && arrayValues084 > 0){
        INPUT_TOTAL_INCOME084 = document.getElementById('valor-entrada084').value;
        var arrayUnico = INPUT_TOTAL_INCOME084;  //  llamar del localStorage
        _arrayValues084 = JSON.parse(localStorage.getItem("TOTAL084"));  //  modificar
        let suma1 = parseInt(_arrayValues084) - parseInt(arrayUnico) ;
        TOTAL_INCOME084 = document.getElementById('084').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL084", JSON.stringify(suma1));
        localStorage.setItem("valores084", JSON.stringify(suma1)); } }
// 86
var INPUT_TOTAL_INCOME085;
var _arrayValues085;
var arrayValues085 = JSON.parse(localStorage.getItem("valores085")) || [];
var suma085 = JSON.parse(localStorage.getItem("TOTAL085"));
var TOTAL_INCOME085 = document.getElementById('085').innerText = `${suma085}`;
var elem = document.getElementById('valor-entrada085');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor085();}}
function agregarValor085 () {
    if(arrayValues085 != ' ' && arrayValues085 > 0){
        INPUT_TOTAL_INCOME085 = document.getElementById('valor-entrada085').value;
        var arrayUnico = INPUT_TOTAL_INCOME085;  //  llamar del localStorage
        _arrayValues085 = JSON.parse(localStorage.getItem("TOTAL085"));  //  modificar
        let suma1 = parseInt(_arrayValues085) + parseInt(arrayUnico) ;
        TOTAL_INCOME085 = document.getElementById('085').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL085", JSON.stringify(suma1));
        localStorage.setItem("valores085", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME085 = document.getElementById('valor-entrada085').value;
        arrayValues085 = INPUT_TOTAL_INCOME085;  // mandar al localStorage
        localStorage.setItem("valores085", JSON.stringify(arrayValues085));  // modificar total productos
        _arrayValues085 = JSON.parse(localStorage.getItem("valores085"));
        TOTAL_INCOME085 = document.getElementById('085').innerText = `${arrayValues085}` // mandar al localStorage
         localStorage.setItem("TOTAL085", JSON.stringify(INPUT_TOTAL_INCOME085));  }   }
function disminuirValor085 () {
    _arrayValues085 = JSON.parse(localStorage.getItem("TOTAL085"));
    suma085 = _arrayValues085;
    if(arrayValues085 != ' ' && arrayValues085 > 0){
        INPUT_TOTAL_INCOME085 = document.getElementById('valor-entrada085').value;
        var arrayUnico = INPUT_TOTAL_INCOME085;  //  llamar del localStorage
        _arrayValues085 = JSON.parse(localStorage.getItem("TOTAL085"));  //  modificar
        let suma1 = parseInt(_arrayValues085) - parseInt(arrayUnico) ;
        TOTAL_INCOME085 = document.getElementById('085').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL085", JSON.stringify(suma1));
        localStorage.setItem("valores085", JSON.stringify(suma1)); } }
// 87
var INPUT_TOTAL_INCOME086;
var _arrayValues086;
var arrayValues086 = JSON.parse(localStorage.getItem("valores086")) || [];
var suma086 = JSON.parse(localStorage.getItem("TOTAL086"));
var TOTAL_INCOME086 = document.getElementById('086').innerText = `${suma086}`;
var elem = document.getElementById('valor-entrada086');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor086();}}
function agregarValor086 () {
    if(arrayValues086 != ' ' && arrayValues086 > 0){
        INPUT_TOTAL_INCOME086 = document.getElementById('valor-entrada086').value;
        var arrayUnico = INPUT_TOTAL_INCOME086;  //  llamar del localStorage
        _arrayValues086 = JSON.parse(localStorage.getItem("TOTAL086"));  //  modificar
        let suma1 = parseInt(_arrayValues086) + parseInt(arrayUnico) ;
        TOTAL_INCOME086 = document.getElementById('086').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL086", JSON.stringify(suma1));
        localStorage.setItem("valores086", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME086 = document.getElementById('valor-entrada086').value;
        arrayValues086 = INPUT_TOTAL_INCOME086;  // mandar al localStorage
        localStorage.setItem("valores086", JSON.stringify(arrayValues086));  // modificar total productos
        _arrayValues086 = JSON.parse(localStorage.getItem("valores086"));
        TOTAL_INCOME086 = document.getElementById('086').innerText = `${arrayValues086}` // mandar al localStorage
         localStorage.setItem("TOTAL086", JSON.stringify(INPUT_TOTAL_INCOME086));  }   }
function disminuirValor086 () {
    _arrayValues086 = JSON.parse(localStorage.getItem("TOTAL086"));
    suma086 = _arrayValues086;
    if(arrayValues086 != ' ' && arrayValues086 > 0){
        INPUT_TOTAL_INCOME086 = document.getElementById('valor-entrada086').value;
        var arrayUnico = INPUT_TOTAL_INCOME086;  //  llamar del localStorage
        _arrayValues086 = JSON.parse(localStorage.getItem("TOTAL086"));  //  modificar
        let suma1 = parseInt(_arrayValues086) - parseInt(arrayUnico) ;
        TOTAL_INCOME086 = document.getElementById('086').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL086", JSON.stringify(suma1));
        localStorage.setItem("valores086", JSON.stringify(suma1)); } }
// 88
var INPUT_TOTAL_INCOME087;
var _arrayValues087;
var arrayValues087 = JSON.parse(localStorage.getItem("valores087")) || [];
var suma087 = JSON.parse(localStorage.getItem("TOTAL087"));
var TOTAL_INCOME087 = document.getElementById('087').innerText = `${suma087}`;
var elem = document.getElementById('valor-entrada087');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor087();}}
function agregarValor087 () {
    if(arrayValues087 != ' ' && arrayValues087 > 0){
        INPUT_TOTAL_INCOME087 = document.getElementById('valor-entrada087').value;
        var arrayUnico = INPUT_TOTAL_INCOME087;  //  llamar del localStorage
        _arrayValues087 = JSON.parse(localStorage.getItem("TOTAL087"));  //  modificar
        let suma1 = parseInt(_arrayValues087) + parseInt(arrayUnico) ;
        TOTAL_INCOME087 = document.getElementById('087').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL087", JSON.stringify(suma1));
        localStorage.setItem("valores087", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME087 = document.getElementById('valor-entrada087').value;
        arrayValues087 = INPUT_TOTAL_INCOME087;  // mandar al localStorage
        localStorage.setItem("valores087", JSON.stringify(arrayValues087));  // modificar total productos
        _arrayValues087 = JSON.parse(localStorage.getItem("valores087"));
        TOTAL_INCOME087 = document.getElementById('087').innerText = `${arrayValues087}` // mandar al localStorage
         localStorage.setItem("TOTAL087", JSON.stringify(INPUT_TOTAL_INCOME087));  }   }
function disminuirValor087 () {
    _arrayValues087 = JSON.parse(localStorage.getItem("TOTAL087"));
    suma087 = _arrayValues087;
    if(arrayValues087 != ' ' && arrayValues087 > 0){
        INPUT_TOTAL_INCOME087 = document.getElementById('valor-entrada087').value;
        var arrayUnico = INPUT_TOTAL_INCOME087;  //  llamar del localStorage
        _arrayValues087 = JSON.parse(localStorage.getItem("TOTAL087"));  //  modificar
        let suma1 = parseInt(_arrayValues087) - parseInt(arrayUnico) ;
        TOTAL_INCOME087 = document.getElementById('087').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL087", JSON.stringify(suma1));
        localStorage.setItem("valores087", JSON.stringify(suma1)); } }
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
// 100
var INPUT_TOTAL_INCOME099;
var _arrayValues099;
var arrayValues099 = JSON.parse(localStorage.getItem("valores099")) || [];
var suma099 = JSON.parse(localStorage.getItem("TOTAL099"));
var TOTAL_INCOME099 = document.getElementById('099').innerText = `${suma099}`;
var elem = document.getElementById('valor-entrada099');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor099();}}
function agregarValor099 () {
    if(arrayValues099 != ' ' && arrayValues099 > 0){
        INPUT_TOTAL_INCOME099 = document.getElementById('valor-entrada099').value;
        var arrayUnico = INPUT_TOTAL_INCOME099;  //  llamar del localStorage
        _arrayValues099 = JSON.parse(localStorage.getItem("TOTAL099"));  //  modificar
        let suma1 = parseInt(_arrayValues099) + parseInt(arrayUnico) ;
        TOTAL_INCOME099 = document.getElementById('099').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL099", JSON.stringify(suma1));
        localStorage.setItem("valores099", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME099 = document.getElementById('valor-entrada099').value;
        arrayValues099 = INPUT_TOTAL_INCOME099;  // mandar al localStorage
        localStorage.setItem("valores099", JSON.stringify(arrayValues099));  // modificar total productos
        _arrayValues099 = JSON.parse(localStorage.getItem("valores099"));
        TOTAL_INCOME099 = document.getElementById('099').innerText = `${arrayValues099}` // mandar al localStorage
         localStorage.setItem("TOTAL099", JSON.stringify(INPUT_TOTAL_INCOME099));  }   }
function disminuirValor099 () {
    _arrayValues099 = JSON.parse(localStorage.getItem("TOTAL099"));
    suma099 = _arrayValues099;
    if(arrayValues099 != ' ' && arrayValues099 > 0){
        INPUT_TOTAL_INCOME099 = document.getElementById('valor-entrada099').value;
        var arrayUnico = INPUT_TOTAL_INCOME099;  //  llamar del localStorage
        _arrayValues099 = JSON.parse(localStorage.getItem("TOTAL099"));  //  modificar
        let suma1 = parseInt(_arrayValues099) - parseInt(arrayUnico) ;
        TOTAL_INCOME099 = document.getElementById('099').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL099", JSON.stringify(suma1));
        localStorage.setItem("valores099", JSON.stringify(suma1)); } }
// 101
var INPUT_TOTAL_INCOME100;
var _arrayValues100;
var arrayValues100 = JSON.parse(localStorage.getItem("valores100")) || [];
var suma100 = JSON.parse(localStorage.getItem("TOTAL100"));
var TOTAL_INCOME100 = document.getElementById('100').innerText = `${suma100}`;
var elem = document.getElementById('valor-entrada100');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor100();}}
function agregarValor100 () {
    if(arrayValues100 != ' ' && arrayValues100 > 0){
        INPUT_TOTAL_INCOME100 = document.getElementById('valor-entrada100').value;
        var arrayUnico = INPUT_TOTAL_INCOME100;  //  llamar del localStorage
        _arrayValues100 = JSON.parse(localStorage.getItem("TOTAL100"));  //  modificar
        let suma1 = parseInt(_arrayValues100) + parseInt(arrayUnico) ;
        TOTAL_INCOME100 = document.getElementById('100').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL100", JSON.stringify(suma1));
        localStorage.setItem("valores100", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME100 = document.getElementById('valor-entrada100').value;
        arrayValues100 = INPUT_TOTAL_INCOME100;  // mandar al localStorage
        localStorage.setItem("valores100", JSON.stringify(arrayValues100));  // modificar total productos
        _arrayValues100 = JSON.parse(localStorage.getItem("valores100"));
        TOTAL_INCOME100 = document.getElementById('100').innerText = `${arrayValues100}` // mandar al localStorage
         localStorage.setItem("TOTAL100", JSON.stringify(INPUT_TOTAL_INCOME100));  }   }
function disminuirValor100 () {
    _arrayValues100 = JSON.parse(localStorage.getItem("TOTAL100"));
    suma100 = _arrayValues100;
    if(arrayValues100 != ' ' && arrayValues100 > 0){
        INPUT_TOTAL_INCOME100 = document.getElementById('valor-entrada100').value;
        var arrayUnico = INPUT_TOTAL_INCOME100;  //  llamar del localStorage
        _arrayValues100 = JSON.parse(localStorage.getItem("TOTAL100"));  //  modificar
        let suma1 = parseInt(_arrayValues100) - parseInt(arrayUnico) ;
        TOTAL_INCOME100 = document.getElementById('100').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL100", JSON.stringify(suma1));
        localStorage.setItem("valores100", JSON.stringify(suma1)); } }
// 102
var INPUT_TOTAL_INCOME101;
var _arrayValues101;
var arrayValues101 = JSON.parse(localStorage.getItem("valores101")) || [];
var suma101 = JSON.parse(localStorage.getItem("TOTAL101"));
var TOTAL_INCOME101 = document.getElementById('101').innerText = `${suma101}`;
var elem = document.getElementById('valor-entrada101');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor101();}}
function agregarValor101 () {
    if(arrayValues101 != ' ' && arrayValues101 > 0){
        INPUT_TOTAL_INCOME101 = document.getElementById('valor-entrada101').value;
        var arrayUnico = INPUT_TOTAL_INCOME101;  //  llamar del localStorage
        _arrayValues101 = JSON.parse(localStorage.getItem("TOTAL101"));  //  modificar
        let suma1 = parseInt(_arrayValues101) + parseInt(arrayUnico) ;
        TOTAL_INCOME101 = document.getElementById('101').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL101", JSON.stringify(suma1));
        localStorage.setItem("valores101", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME101 = document.getElementById('valor-entrada101').value;
        arrayValues101 = INPUT_TOTAL_INCOME101;  // mandar al localStorage
        localStorage.setItem("valores101", JSON.stringify(arrayValues101));  // modificar total productos
        _arrayValues101 = JSON.parse(localStorage.getItem("valores101"));
        TOTAL_INCOME101 = document.getElementById('101').innerText = `${arrayValues101}` // mandar al localStorage
         localStorage.setItem("TOTAL101", JSON.stringify(INPUT_TOTAL_INCOME101));  }   }
function disminuirValor101 () {
    _arrayValues101 = JSON.parse(localStorage.getItem("TOTAL101"));
    suma101 = _arrayValues101;
    if(arrayValues101 != ' ' && arrayValues101 > 0){
        INPUT_TOTAL_INCOME101 = document.getElementById('valor-entrada101').value;
        var arrayUnico = INPUT_TOTAL_INCOME101;  //  llamar del localStorage
        _arrayValues101 = JSON.parse(localStorage.getItem("TOTAL101"));  //  modificar
        let suma1 = parseInt(_arrayValues101) - parseInt(arrayUnico) ;
        TOTAL_INCOME101 = document.getElementById('101').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL101", JSON.stringify(suma1));
        localStorage.setItem("valores101", JSON.stringify(suma1)); } }
// 103
var INPUT_TOTAL_INCOME102;
var _arrayValues102;
var arrayValues102 = JSON.parse(localStorage.getItem("valores102")) || [];
var suma102 = JSON.parse(localStorage.getItem("TOTAL102"));
var TOTAL_INCOME102 = document.getElementById('102').innerText = `${suma102}`;
var elem = document.getElementById('valor-entrada102');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor102();}}
function agregarValor102 () {
    if(arrayValues102 != ' ' && arrayValues102 > 0){
        INPUT_TOTAL_INCOME102 = document.getElementById('valor-entrada102').value;
        var arrayUnico = INPUT_TOTAL_INCOME102;  //  llamar del localStorage
        _arrayValues102 = JSON.parse(localStorage.getItem("TOTAL102"));  //  modificar
        let suma1 = parseInt(_arrayValues102) + parseInt(arrayUnico) ;
        TOTAL_INCOME102 = document.getElementById('102').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL102", JSON.stringify(suma1));
        localStorage.setItem("valores102", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME102 = document.getElementById('valor-entrada102').value;
        arrayValues102 = INPUT_TOTAL_INCOME102;  // mandar al localStorage
        localStorage.setItem("valores102", JSON.stringify(arrayValues102));  // modificar total productos
        _arrayValues102 = JSON.parse(localStorage.getItem("valores102"));
        TOTAL_INCOME102 = document.getElementById('102').innerText = `${arrayValues102}` // mandar al localStorage
         localStorage.setItem("TOTAL102", JSON.stringify(INPUT_TOTAL_INCOME102));  }   }
function disminuirValor102 () {
    _arrayValues102 = JSON.parse(localStorage.getItem("TOTAL102"));
    suma102 = _arrayValues102;
    if(arrayValues102 != ' ' && arrayValues102 > 0){
        INPUT_TOTAL_INCOME102 = document.getElementById('valor-entrada102').value;
        var arrayUnico = INPUT_TOTAL_INCOME102;  //  llamar del localStorage
        _arrayValues102 = JSON.parse(localStorage.getItem("TOTAL102"));  //  modificar
        let suma1 = parseInt(_arrayValues102) - parseInt(arrayUnico) ;
        TOTAL_INCOME102 = document.getElementById('102').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL102", JSON.stringify(suma1));
        localStorage.setItem("valores102", JSON.stringify(suma1)); } }
// 104
var INPUT_TOTAL_INCOME103;
var _arrayValues103;
var arrayValues103 = JSON.parse(localStorage.getItem("valores103")) || [];
var suma103 = JSON.parse(localStorage.getItem("TOTAL103"));
var TOTAL_INCOME103 = document.getElementById('103').innerText = `${suma103}`;
var elem = document.getElementById('valor-entrada103');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor103();}}
function agregarValor103 () {
    if(arrayValues103 != ' ' && arrayValues103 > 0){
        INPUT_TOTAL_INCOME103 = document.getElementById('valor-entrada103').value;
        var arrayUnico = INPUT_TOTAL_INCOME103;  //  llamar del localStorage
        _arrayValues103 = JSON.parse(localStorage.getItem("TOTAL103"));  //  modificar
        let suma1 = parseInt(_arrayValues103) + parseInt(arrayUnico) ;
        TOTAL_INCOME103 = document.getElementById('103').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL103", JSON.stringify(suma1));
        localStorage.setItem("valores103", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME103 = document.getElementById('valor-entrada103').value;
        arrayValues103 = INPUT_TOTAL_INCOME103;  // mandar al localStorage
        localStorage.setItem("valores103", JSON.stringify(arrayValues103));  // modificar total productos
        _arrayValues103 = JSON.parse(localStorage.getItem("valores103"));
        TOTAL_INCOME103 = document.getElementById('103').innerText = `${arrayValues103}` // mandar al localStorage
         localStorage.setItem("TOTAL103", JSON.stringify(INPUT_TOTAL_INCOME103));  }   }
function disminuirValor103 () {
    _arrayValues103 = JSON.parse(localStorage.getItem("TOTAL103"));
    suma103 = _arrayValues103;
    if(arrayValues103 != ' ' && arrayValues103 > 0){
        INPUT_TOTAL_INCOME103 = document.getElementById('valor-entrada103').value;
        var arrayUnico = INPUT_TOTAL_INCOME103;  //  llamar del localStorage
        _arrayValues103 = JSON.parse(localStorage.getItem("TOTAL103"));  //  modificar
        let suma1 = parseInt(_arrayValues103) - parseInt(arrayUnico) ;
        TOTAL_INCOME103 = document.getElementById('103').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL103", JSON.stringify(suma1));
        localStorage.setItem("valores103", JSON.stringify(suma1)); } }
// 105
var INPUT_TOTAL_INCOME104;
var _arrayValues104;
var arrayValues104 = JSON.parse(localStorage.getItem("valores104")) || [];
var suma104 = JSON.parse(localStorage.getItem("TOTAL104"));
var TOTAL_INCOME104 = document.getElementById('104').innerText = `${suma104}`;
var elem = document.getElementById('valor-entrada104');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor104();}}
function agregarValor104 () {
    if(arrayValues104 != ' ' && arrayValues104 > 0){
        INPUT_TOTAL_INCOME104 = document.getElementById('valor-entrada104').value;
        var arrayUnico = INPUT_TOTAL_INCOME104;  //  llamar del localStorage
        _arrayValues104 = JSON.parse(localStorage.getItem("TOTAL104"));  //  modificar
        let suma1 = parseInt(_arrayValues104) + parseInt(arrayUnico) ;
        TOTAL_INCOME104 = document.getElementById('104').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL104", JSON.stringify(suma1));
        localStorage.setItem("valores104", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME104 = document.getElementById('valor-entrada104').value;
        arrayValues104 = INPUT_TOTAL_INCOME104;  // mandar al localStorage
        localStorage.setItem("valores104", JSON.stringify(arrayValues104));  // modificar total productos
        _arrayValues104 = JSON.parse(localStorage.getItem("valores104"));
        TOTAL_INCOME104 = document.getElementById('104').innerText = `${arrayValues104}` // mandar al localStorage
         localStorage.setItem("TOTAL104", JSON.stringify(INPUT_TOTAL_INCOME104));  }   }
function disminuirValor104 () {
    _arrayValues104 = JSON.parse(localStorage.getItem("TOTAL104"));
    suma104 = _arrayValues104;
    if(arrayValues104 != ' ' && arrayValues104 > 0){
        INPUT_TOTAL_INCOME104 = document.getElementById('valor-entrada104').value;
        var arrayUnico = INPUT_TOTAL_INCOME104;  //  llamar del localStorage
        _arrayValues104 = JSON.parse(localStorage.getItem("TOTAL104"));  //  modificar
        let suma1 = parseInt(_arrayValues104) - parseInt(arrayUnico) ;
        TOTAL_INCOME104 = document.getElementById('104').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL104", JSON.stringify(suma1));
        localStorage.setItem("valores104", JSON.stringify(suma1)); } }
// 106
var INPUT_TOTAL_INCOME105;
var _arrayValues105;
var arrayValues105 = JSON.parse(localStorage.getItem("valores105")) || [];
var suma105 = JSON.parse(localStorage.getItem("TOTAL105"));
var TOTAL_INCOME105 = document.getElementById('105').innerText = `${suma105}`;
var elem = document.getElementById('valor-entrada105');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor105();}}
function agregarValor105 () {
    if(arrayValues105 != ' ' && arrayValues105 > 0){
        INPUT_TOTAL_INCOME105 = document.getElementById('valor-entrada105').value;
        var arrayUnico = INPUT_TOTAL_INCOME105;  //  llamar del localStorage
        _arrayValues105 = JSON.parse(localStorage.getItem("TOTAL105"));  //  modificar
        let suma1 = parseInt(_arrayValues105) + parseInt(arrayUnico) ;
        TOTAL_INCOME105 = document.getElementById('105').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL105", JSON.stringify(suma1));
        localStorage.setItem("valores105", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME105 = document.getElementById('valor-entrada105').value;
        arrayValues105 = INPUT_TOTAL_INCOME105;  // mandar al localStorage
        localStorage.setItem("valores105", JSON.stringify(arrayValues105));  // modificar total productos
        _arrayValues105 = JSON.parse(localStorage.getItem("valores105"));
        TOTAL_INCOME105 = document.getElementById('105').innerText = `${arrayValues105}` // mandar al localStorage
         localStorage.setItem("TOTAL105", JSON.stringify(INPUT_TOTAL_INCOME105));  }   }
function disminuirValor105 () {
    _arrayValues105 = JSON.parse(localStorage.getItem("TOTAL105"));
    suma105 = _arrayValues105;
    if(arrayValues105 != ' ' && arrayValues105 > 0){
        INPUT_TOTAL_INCOME105 = document.getElementById('valor-entrada105').value;
        var arrayUnico = INPUT_TOTAL_INCOME105;  //  llamar del localStorage
        _arrayValues105 = JSON.parse(localStorage.getItem("TOTAL105"));  //  modificar
        let suma1 = parseInt(_arrayValues105) - parseInt(arrayUnico) ;
        TOTAL_INCOME105 = document.getElementById('105').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL105", JSON.stringify(suma1));
        localStorage.setItem("valores105", JSON.stringify(suma1)); } }
// 107
var INPUT_TOTAL_INCOME106;
var _arrayValues106;
var arrayValues106 = JSON.parse(localStorage.getItem("valores106")) || [];
var suma106 = JSON.parse(localStorage.getItem("TOTAL106"));
var TOTAL_INCOME106 = document.getElementById('106').innerText = `${suma106}`;
var elem = document.getElementById('valor-entrada106');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor106();}}
function agregarValor106 () {
    if(arrayValues106 != ' ' && arrayValues106 > 0){
        INPUT_TOTAL_INCOME106 = document.getElementById('valor-entrada106').value;
        var arrayUnico = INPUT_TOTAL_INCOME106;  //  llamar del localStorage
        _arrayValues106 = JSON.parse(localStorage.getItem("TOTAL106"));  //  modificar
        let suma1 = parseInt(_arrayValues106) + parseInt(arrayUnico) ;
        TOTAL_INCOME106 = document.getElementById('106').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL106", JSON.stringify(suma1));
        localStorage.setItem("valores106", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME106 = document.getElementById('valor-entrada106').value;
        arrayValues106 = INPUT_TOTAL_INCOME106;  // mandar al localStorage
        localStorage.setItem("valores106", JSON.stringify(arrayValues106));  // modificar total productos
        _arrayValues106 = JSON.parse(localStorage.getItem("valores106"));
        TOTAL_INCOME106 = document.getElementById('106').innerText = `${arrayValues106}` // mandar al localStorage
         localStorage.setItem("TOTAL106", JSON.stringify(INPUT_TOTAL_INCOME106));  }   }
function disminuirValor106 () {
    _arrayValues106 = JSON.parse(localStorage.getItem("TOTAL106"));
    suma106 = _arrayValues106;
    if(arrayValues106 != ' ' && arrayValues106 > 0){
        INPUT_TOTAL_INCOME106 = document.getElementById('valor-entrada106').value;
        var arrayUnico = INPUT_TOTAL_INCOME106;  //  llamar del localStorage
        _arrayValues106 = JSON.parse(localStorage.getItem("TOTAL106"));  //  modificar
        let suma1 = parseInt(_arrayValues106) - parseInt(arrayUnico) ;
        TOTAL_INCOME106 = document.getElementById('106').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL106", JSON.stringify(suma1));
        localStorage.setItem("valores106", JSON.stringify(suma1)); } }
// 108
var INPUT_TOTAL_INCOME107;
var _arrayValues107;
var arrayValues107 = JSON.parse(localStorage.getItem("valores107")) || [];
var suma107 = JSON.parse(localStorage.getItem("TOTAL107"));
var TOTAL_INCOME107 = document.getElementById('107').innerText = `${suma107}`;
var elem = document.getElementById('valor-entrada107');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor107();}}
function agregarValor107 () {
    if(arrayValues107 != ' ' && arrayValues107 > 0){
        INPUT_TOTAL_INCOME107 = document.getElementById('valor-entrada107').value;
        var arrayUnico = INPUT_TOTAL_INCOME107;  //  llamar del localStorage
        _arrayValues107 = JSON.parse(localStorage.getItem("TOTAL107"));  //  modificar
        let suma1 = parseInt(_arrayValues107) + parseInt(arrayUnico) ;
        TOTAL_INCOME107 = document.getElementById('107').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL107", JSON.stringify(suma1));
        localStorage.setItem("valores107", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME107 = document.getElementById('valor-entrada107').value;
        arrayValues107 = INPUT_TOTAL_INCOME107;  // mandar al localStorage
        localStorage.setItem("valores107", JSON.stringify(arrayValues107));  // modificar total productos
        _arrayValues107 = JSON.parse(localStorage.getItem("valores107"));
        TOTAL_INCOME107 = document.getElementById('107').innerText = `${arrayValues107}` // mandar al localStorage
         localStorage.setItem("TOTAL107", JSON.stringify(INPUT_TOTAL_INCOME107));  }   }
function disminuirValor107 () {
    _arrayValues107 = JSON.parse(localStorage.getItem("TOTAL107"));
    suma107 = _arrayValues107;
    if(arrayValues107 != ' ' && arrayValues107 > 0){
        INPUT_TOTAL_INCOME107 = document.getElementById('valor-entrada107').value;
        var arrayUnico = INPUT_TOTAL_INCOME107;  //  llamar del localStorage
        _arrayValues107 = JSON.parse(localStorage.getItem("TOTAL107"));  //  modificar
        let suma1 = parseInt(_arrayValues107) - parseInt(arrayUnico) ;
        TOTAL_INCOME107 = document.getElementById('107').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL107", JSON.stringify(suma1));
        localStorage.setItem("valores107", JSON.stringify(suma1)); } }
// 109
var INPUT_TOTAL_INCOME108;
var _arrayValues108;
var arrayValues108 = JSON.parse(localStorage.getItem("valores108")) || [];
var suma108 = JSON.parse(localStorage.getItem("TOTAL108"));
var TOTAL_INCOME108 = document.getElementById('108').innerText = `${suma108}`;
var elem = document.getElementById('valor-entrada108');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor108();}}
function agregarValor108 () {
    if(arrayValues108 != ' ' && arrayValues108 > 0){
        INPUT_TOTAL_INCOME108 = document.getElementById('valor-entrada108').value;
        var arrayUnico = INPUT_TOTAL_INCOME108;  //  llamar del localStorage
        _arrayValues108 = JSON.parse(localStorage.getItem("TOTAL108"));  //  modificar
        let suma1 = parseInt(_arrayValues108) + parseInt(arrayUnico) ;
        TOTAL_INCOME108 = document.getElementById('108').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL108", JSON.stringify(suma1));
        localStorage.setItem("valores108", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME108 = document.getElementById('valor-entrada108').value;
        arrayValues108 = INPUT_TOTAL_INCOME108;  // mandar al localStorage
        localStorage.setItem("valores108", JSON.stringify(arrayValues108));  // modificar total productos
        _arrayValues108 = JSON.parse(localStorage.getItem("valores108"));
        TOTAL_INCOME108 = document.getElementById('108').innerText = `${arrayValues108}` // mandar al localStorage
         localStorage.setItem("TOTAL108", JSON.stringify(INPUT_TOTAL_INCOME108));  }   }
function disminuirValor108 () {
    _arrayValues108 = JSON.parse(localStorage.getItem("TOTAL108"));
    suma108 = _arrayValues108;
    if(arrayValues108 != ' ' && arrayValues108 > 0){
        INPUT_TOTAL_INCOME108 = document.getElementById('valor-entrada108').value;
        var arrayUnico = INPUT_TOTAL_INCOME108;  //  llamar del localStorage
        _arrayValues108 = JSON.parse(localStorage.getItem("TOTAL108"));  //  modificar
        let suma1 = parseInt(_arrayValues108) - parseInt(arrayUnico) ;
        TOTAL_INCOME108 = document.getElementById('108').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL108", JSON.stringify(suma1));
        localStorage.setItem("valores108", JSON.stringify(suma1)); } }
// 110
var INPUT_TOTAL_INCOME109;
var _arrayValues109;
var arrayValues109 = JSON.parse(localStorage.getItem("valores109")) || [];
var suma109 = JSON.parse(localStorage.getItem("TOTAL109"));
var TOTAL_INCOME109 = document.getElementById('109').innerText = `${suma109}`;
var elem = document.getElementById('valor-entrada109');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor109();}}
function agregarValor109 () {
    if(arrayValues109 != ' ' && arrayValues109 > 0){
        INPUT_TOTAL_INCOME109 = document.getElementById('valor-entrada109').value;
        var arrayUnico = INPUT_TOTAL_INCOME109;  //  llamar del localStorage
        _arrayValues109 = JSON.parse(localStorage.getItem("TOTAL109"));  //  modificar
        let suma1 = parseInt(_arrayValues109) + parseInt(arrayUnico) ;
        TOTAL_INCOME109 = document.getElementById('109').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL109", JSON.stringify(suma1));
        localStorage.setItem("valores109", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME109 = document.getElementById('valor-entrada109').value;
        arrayValues109 = INPUT_TOTAL_INCOME109;  // mandar al localStorage
        localStorage.setItem("valores109", JSON.stringify(arrayValues109));  // modificar total productos
        _arrayValues109 = JSON.parse(localStorage.getItem("valores109"));
        TOTAL_INCOME109 = document.getElementById('109').innerText = `${arrayValues109}` // mandar al localStorage
         localStorage.setItem("TOTAL109", JSON.stringify(INPUT_TOTAL_INCOME109));  }   }
function disminuirValor109 () {
    _arrayValues109 = JSON.parse(localStorage.getItem("TOTAL109"));
    suma109 = _arrayValues109;
    if(arrayValues109 != ' ' && arrayValues109 > 0){
        INPUT_TOTAL_INCOME109 = document.getElementById('valor-entrada109').value;
        var arrayUnico = INPUT_TOTAL_INCOME109;  //  llamar del localStorage
        _arrayValues109 = JSON.parse(localStorage.getItem("TOTAL109"));  //  modificar
        let suma1 = parseInt(_arrayValues109) - parseInt(arrayUnico) ;
        TOTAL_INCOME109 = document.getElementById('109').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL109", JSON.stringify(suma1));
        localStorage.setItem("valores109", JSON.stringify(suma1)); } }
// 111
var INPUT_TOTAL_INCOME110;
var _arrayValues110;
var arrayValues110 = JSON.parse(localStorage.getItem("valores110")) || [];
var suma110 = JSON.parse(localStorage.getItem("TOTAL110"));
var TOTAL_INCOME110 = document.getElementById('110').innerText = `${suma110}`;
var elem = document.getElementById('valor-entrada110');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor110();}}
function agregarValor110 () {
    if(arrayValues110 != ' ' && arrayValues110 > 0){
        INPUT_TOTAL_INCOME110 = document.getElementById('valor-entrada110').value;
        var arrayUnico = INPUT_TOTAL_INCOME110;  //  llamar del localStorage
        _arrayValues110 = JSON.parse(localStorage.getItem("TOTAL110"));  //  modificar
        let suma1 = parseInt(_arrayValues110) + parseInt(arrayUnico) ;
        TOTAL_INCOME110 = document.getElementById('110').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL110", JSON.stringify(suma1));
        localStorage.setItem("valores110", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME110 = document.getElementById('valor-entrada110').value;
        arrayValues110 = INPUT_TOTAL_INCOME110;  // mandar al localStorage
        localStorage.setItem("valores110", JSON.stringify(arrayValues110));  // modificar total productos
        _arrayValues110 = JSON.parse(localStorage.getItem("valores110"));
        TOTAL_INCOME110 = document.getElementById('110').innerText = `${arrayValues110}` // mandar al localStorage
         localStorage.setItem("TOTAL110", JSON.stringify(INPUT_TOTAL_INCOME110));  }   }
function disminuirValor110 () {
    _arrayValues110 = JSON.parse(localStorage.getItem("TOTAL110"));
    suma110 = _arrayValues110;
    if(arrayValues110 != ' ' && arrayValues110 > 0){
        INPUT_TOTAL_INCOME110 = document.getElementById('valor-entrada110').value;
        var arrayUnico = INPUT_TOTAL_INCOME110;  //  llamar del localStorage
        _arrayValues110 = JSON.parse(localStorage.getItem("TOTAL110"));  //  modificar
        let suma1 = parseInt(_arrayValues110) - parseInt(arrayUnico) ;
        TOTAL_INCOME110 = document.getElementById('110').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL110", JSON.stringify(suma1));
        localStorage.setItem("valores110", JSON.stringify(suma1)); } }
// 112
var INPUT_TOTAL_INCOME111;
var _arrayValues111;
var arrayValues111 = JSON.parse(localStorage.getItem("valores111")) || [];
var suma111 = JSON.parse(localStorage.getItem("TOTAL111"));
var TOTAL_INCOME111 = document.getElementById('111').innerText = `${suma111}`;
var elem = document.getElementById('valor-entrada111');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor111();}}
function agregarValor111 () {
    if(arrayValues111 != ' ' && arrayValues111 > 0){
        INPUT_TOTAL_INCOME111 = document.getElementById('valor-entrada111').value;
        var arrayUnico = INPUT_TOTAL_INCOME111;  //  llamar del localStorage
        _arrayValues111 = JSON.parse(localStorage.getItem("TOTAL111"));  //  modificar
        let suma1 = parseInt(_arrayValues111) + parseInt(arrayUnico) ;
        TOTAL_INCOME111 = document.getElementById('111').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL111", JSON.stringify(suma1));
        localStorage.setItem("valores111", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME111 = document.getElementById('valor-entrada111').value;
        arrayValues111 = INPUT_TOTAL_INCOME111;  // mandar al localStorage
        localStorage.setItem("valores111", JSON.stringify(arrayValues111));  // modificar total productos
        _arrayValues111 = JSON.parse(localStorage.getItem("valores111"));
        TOTAL_INCOME111 = document.getElementById('111').innerText = `${arrayValues111}` // mandar al localStorage
         localStorage.setItem("TOTAL111", JSON.stringify(INPUT_TOTAL_INCOME111));  }   }
function disminuirValor111 () {
    _arrayValues111 = JSON.parse(localStorage.getItem("TOTAL111"));
    suma111 = _arrayValues111;
    if(arrayValues111 != ' ' && arrayValues111 > 0){
        INPUT_TOTAL_INCOME111 = document.getElementById('valor-entrada111').value;
        var arrayUnico = INPUT_TOTAL_INCOME111;  //  llamar del localStorage
        _arrayValues111 = JSON.parse(localStorage.getItem("TOTAL111"));  //  modificar
        let suma1 = parseInt(_arrayValues111) - parseInt(arrayUnico) ;
        TOTAL_INCOME111 = document.getElementById('111').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL111", JSON.stringify(suma1));
        localStorage.setItem("valores111", JSON.stringify(suma1)); } }
// 113
var INPUT_TOTAL_INCOME112;
var _arrayValues112;
var arrayValues112 = JSON.parse(localStorage.getItem("valores112")) || [];
var suma112 = JSON.parse(localStorage.getItem("TOTAL112"));
var TOTAL_INCOME112 = document.getElementById('112').innerText = `${suma112}`;
var elem = document.getElementById('valor-entrada112');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor112();}}
function agregarValor112 () {
    if(arrayValues112 != ' ' && arrayValues112 > 0){
        INPUT_TOTAL_INCOME112 = document.getElementById('valor-entrada112').value;
        var arrayUnico = INPUT_TOTAL_INCOME112;  //  llamar del localStorage
        _arrayValues112 = JSON.parse(localStorage.getItem("TOTAL112"));  //  modificar
        let suma1 = parseInt(_arrayValues112) + parseInt(arrayUnico) ;
        TOTAL_INCOME112 = document.getElementById('112').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL112", JSON.stringify(suma1));
        localStorage.setItem("valores112", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME112 = document.getElementById('valor-entrada112').value;
        arrayValues112 = INPUT_TOTAL_INCOME112;  // mandar al localStorage
        localStorage.setItem("valores112", JSON.stringify(arrayValues112));  // modificar total productos
        _arrayValues112 = JSON.parse(localStorage.getItem("valores112"));
        TOTAL_INCOME112 = document.getElementById('112').innerText = `${arrayValues112}` // mandar al localStorage
         localStorage.setItem("TOTAL112", JSON.stringify(INPUT_TOTAL_INCOME112));  }   }
function disminuirValor112 () {
    _arrayValues112 = JSON.parse(localStorage.getItem("TOTAL112"));
    suma112 = _arrayValues112;
    if(arrayValues112 != ' ' && arrayValues112 > 0){
        INPUT_TOTAL_INCOME112 = document.getElementById('valor-entrada112').value;
        var arrayUnico = INPUT_TOTAL_INCOME112;  //  llamar del localStorage
        _arrayValues112 = JSON.parse(localStorage.getItem("TOTAL112"));  //  modificar
        let suma1 = parseInt(_arrayValues112) - parseInt(arrayUnico) ;
        TOTAL_INCOME112 = document.getElementById('112').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL112", JSON.stringify(suma1));
        localStorage.setItem("valores112", JSON.stringify(suma1)); } }
// 114
var INPUT_TOTAL_INCOME113;
var _arrayValues113;
var arrayValues113 = JSON.parse(localStorage.getItem("valores113")) || [];
var suma113 = JSON.parse(localStorage.getItem("TOTAL113"));
var TOTAL_INCOME113 = document.getElementById('113').innerText = `${suma113}`;
var elem = document.getElementById('valor-entrada113');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor113();}}
function agregarValor113 () {
    if(arrayValues113 != ' ' && arrayValues113 > 0){
        INPUT_TOTAL_INCOME113 = document.getElementById('valor-entrada113').value;
        var arrayUnico = INPUT_TOTAL_INCOME113;  //  llamar del localStorage
        _arrayValues113 = JSON.parse(localStorage.getItem("TOTAL113"));  //  modificar
        let suma1 = parseInt(_arrayValues113) + parseInt(arrayUnico) ;
        TOTAL_INCOME113 = document.getElementById('113').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL113", JSON.stringify(suma1));
        localStorage.setItem("valores113", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME113 = document.getElementById('valor-entrada113').value;
        arrayValues113 = INPUT_TOTAL_INCOME113;  // mandar al localStorage
        localStorage.setItem("valores113", JSON.stringify(arrayValues113));  // modificar total productos
        _arrayValues113 = JSON.parse(localStorage.getItem("valores113"));
        TOTAL_INCOME113 = document.getElementById('113').innerText = `${arrayValues113}` // mandar al localStorage
         localStorage.setItem("TOTAL113", JSON.stringify(INPUT_TOTAL_INCOME113));  }   }
function disminuirValor113 () {
    _arrayValues113 = JSON.parse(localStorage.getItem("TOTAL113"));
    suma113 = _arrayValues113;
    if(arrayValues113 != ' ' && arrayValues113 > 0){
        INPUT_TOTAL_INCOME113 = document.getElementById('valor-entrada113').value;
        var arrayUnico = INPUT_TOTAL_INCOME113;  //  llamar del localStorage
        _arrayValues113 = JSON.parse(localStorage.getItem("TOTAL113"));  //  modificar
        let suma1 = parseInt(_arrayValues113) - parseInt(arrayUnico) ;
        TOTAL_INCOME113 = document.getElementById('113').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL113", JSON.stringify(suma1));
        localStorage.setItem("valores113", JSON.stringify(suma1)); } }
// 115
var INPUT_TOTAL_INCOME114;
var _arrayValues114;
var arrayValues114 = JSON.parse(localStorage.getItem("valores114")) || [];
var suma114 = JSON.parse(localStorage.getItem("TOTAL114"));
var TOTAL_INCOME114 = document.getElementById('114').innerText = `${suma114}`;
var elem = document.getElementById('valor-entrada114');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor114();}}
function agregarValor114 () {
    if(arrayValues114 != ' ' && arrayValues114 > 0){
        INPUT_TOTAL_INCOME114 = document.getElementById('valor-entrada114').value;
        var arrayUnico = INPUT_TOTAL_INCOME114;  //  llamar del localStorage
        _arrayValues114 = JSON.parse(localStorage.getItem("TOTAL114"));  //  modificar
        let suma1 = parseInt(_arrayValues114) + parseInt(arrayUnico) ;
        TOTAL_INCOME114 = document.getElementById('114').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL114", JSON.stringify(suma1));
        localStorage.setItem("valores114", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME114 = document.getElementById('valor-entrada114').value;
        arrayValues114 = INPUT_TOTAL_INCOME114;  // mandar al localStorage
        localStorage.setItem("valores114", JSON.stringify(arrayValues114));  // modificar total productos
        _arrayValues114 = JSON.parse(localStorage.getItem("valores114"));
        TOTAL_INCOME114 = document.getElementById('114').innerText = `${arrayValues114}` // mandar al localStorage
         localStorage.setItem("TOTAL114", JSON.stringify(INPUT_TOTAL_INCOME114));  }   }
function disminuirValor114 () {
    _arrayValues114 = JSON.parse(localStorage.getItem("TOTAL114"));
    suma114 = _arrayValues114;
    if(arrayValues114 != ' ' && arrayValues114 > 0){
        INPUT_TOTAL_INCOME114 = document.getElementById('valor-entrada114').value;
        var arrayUnico = INPUT_TOTAL_INCOME114;  //  llamar del localStorage
        _arrayValues114 = JSON.parse(localStorage.getItem("TOTAL114"));  //  modificar
        let suma1 = parseInt(_arrayValues114) - parseInt(arrayUnico) ;
        TOTAL_INCOME114 = document.getElementById('114').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL114", JSON.stringify(suma1));
        localStorage.setItem("valores114", JSON.stringify(suma1)); } }
// 116
var INPUT_TOTAL_INCOME115;
var _arrayValues115;
var arrayValues115 = JSON.parse(localStorage.getItem("valores115")) || [];
var suma115 = JSON.parse(localStorage.getItem("TOTAL115"));
var TOTAL_INCOME115 = document.getElementById('115').innerText = `${suma115}`;
var elem = document.getElementById('valor-entrada115');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor115();}}
function agregarValor115 () {
    if(arrayValues115 != ' ' && arrayValues115 > 0){
        INPUT_TOTAL_INCOME115 = document.getElementById('valor-entrada115').value;
        var arrayUnico = INPUT_TOTAL_INCOME115;  //  llamar del localStorage
        _arrayValues115 = JSON.parse(localStorage.getItem("TOTAL115"));  //  modificar
        let suma1 = parseInt(_arrayValues115) + parseInt(arrayUnico) ;
        TOTAL_INCOME115 = document.getElementById('115').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL115", JSON.stringify(suma1));
        localStorage.setItem("valores115", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME115 = document.getElementById('valor-entrada115').value;
        arrayValues115 = INPUT_TOTAL_INCOME115;  // mandar al localStorage
        localStorage.setItem("valores115", JSON.stringify(arrayValues115));  // modificar total productos
        _arrayValues115 = JSON.parse(localStorage.getItem("valores115"));
        TOTAL_INCOME115 = document.getElementById('115').innerText = `${arrayValues115}` // mandar al localStorage
         localStorage.setItem("TOTAL115", JSON.stringify(INPUT_TOTAL_INCOME115));  }   }
function disminuirValor115 () {
    _arrayValues115 = JSON.parse(localStorage.getItem("TOTAL115"));
    suma115 = _arrayValues115;
    if(arrayValues115 != ' ' && arrayValues115 > 0){
        INPUT_TOTAL_INCOME115 = document.getElementById('valor-entrada115').value;
        var arrayUnico = INPUT_TOTAL_INCOME115;  //  llamar del localStorage
        _arrayValues115 = JSON.parse(localStorage.getItem("TOTAL115"));  //  modificar
        let suma1 = parseInt(_arrayValues115) - parseInt(arrayUnico) ;
        TOTAL_INCOME115 = document.getElementById('115').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL115", JSON.stringify(suma1));
        localStorage.setItem("valores115", JSON.stringify(suma1)); } }
// 117
var INPUT_TOTAL_INCOME116;
var _arrayValues116;
var arrayValues116 = JSON.parse(localStorage.getItem("valores116")) || [];
var suma116 = JSON.parse(localStorage.getItem("TOTAL116"));
var TOTAL_INCOME116 = document.getElementById('116').innerText = `${suma116}`;
var elem = document.getElementById('valor-entrada116');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor116();}}
function agregarValor116 () {
    if(arrayValues116 != ' ' && arrayValues116 > 0){
        INPUT_TOTAL_INCOME116 = document.getElementById('valor-entrada116').value;
        var arrayUnico = INPUT_TOTAL_INCOME116;  //  llamar del localStorage
        _arrayValues116 = JSON.parse(localStorage.getItem("TOTAL116"));  //  modificar
        let suma1 = parseInt(_arrayValues116) + parseInt(arrayUnico) ;
        TOTAL_INCOME116 = document.getElementById('116').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL116", JSON.stringify(suma1));
        localStorage.setItem("valores116", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME116 = document.getElementById('valor-entrada116').value;
        arrayValues116 = INPUT_TOTAL_INCOME116;  // mandar al localStorage
        localStorage.setItem("valores116", JSON.stringify(arrayValues116));  // modificar total productos
        _arrayValues116 = JSON.parse(localStorage.getItem("valores116"));
        TOTAL_INCOME116 = document.getElementById('116').innerText = `${arrayValues116}` // mandar al localStorage
         localStorage.setItem("TOTAL116", JSON.stringify(INPUT_TOTAL_INCOME116));  }   }
function disminuirValor116 () {
    _arrayValues116 = JSON.parse(localStorage.getItem("TOTAL116"));
    suma116 = _arrayValues116;
    if(arrayValues116 != ' ' && arrayValues116 > 0){
        INPUT_TOTAL_INCOME116 = document.getElementById('valor-entrada116').value;
        var arrayUnico = INPUT_TOTAL_INCOME116;  //  llamar del localStorage
        _arrayValues116 = JSON.parse(localStorage.getItem("TOTAL116"));  //  modificar
        let suma1 = parseInt(_arrayValues116) - parseInt(arrayUnico) ;
        TOTAL_INCOME116 = document.getElementById('116').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL116", JSON.stringify(suma1));
        localStorage.setItem("valores116", JSON.stringify(suma1)); } }
// 118
var INPUT_TOTAL_INCOME117;
var _arrayValues117;
var arrayValues117 = JSON.parse(localStorage.getItem("valores117")) || [];
var suma117 = JSON.parse(localStorage.getItem("TOTAL117"));
var TOTAL_INCOME117 = document.getElementById('117').innerText = `${suma117}`;
var elem = document.getElementById('valor-entrada117');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor117();}}
function agregarValor117 () {
    if(arrayValues117 != ' ' && arrayValues117 > 0){
        INPUT_TOTAL_INCOME117 = document.getElementById('valor-entrada117').value;
        var arrayUnico = INPUT_TOTAL_INCOME117;  //  llamar del localStorage
        _arrayValues117 = JSON.parse(localStorage.getItem("TOTAL117"));  //  modificar
        let suma1 = parseInt(_arrayValues117) + parseInt(arrayUnico) ;
        TOTAL_INCOME117 = document.getElementById('117').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL117", JSON.stringify(suma1));
        localStorage.setItem("valores117", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME117 = document.getElementById('valor-entrada117').value;
        arrayValues117 = INPUT_TOTAL_INCOME117;  // mandar al localStorage
        localStorage.setItem("valores117", JSON.stringify(arrayValues117));  // modificar total productos
        _arrayValues117 = JSON.parse(localStorage.getItem("valores117"));
        TOTAL_INCOME117 = document.getElementById('117').innerText = `${arrayValues117}` // mandar al localStorage
         localStorage.setItem("TOTAL117", JSON.stringify(INPUT_TOTAL_INCOME117));  }   }
function disminuirValor117 () {
    _arrayValues117 = JSON.parse(localStorage.getItem("TOTAL117"));
    suma117 = _arrayValues117;
    if(arrayValues117 != ' ' && arrayValues117 > 0){
        INPUT_TOTAL_INCOME117 = document.getElementById('valor-entrada117').value;
        var arrayUnico = INPUT_TOTAL_INCOME117;  //  llamar del localStorage
        _arrayValues117 = JSON.parse(localStorage.getItem("TOTAL117"));  //  modificar
        let suma1 = parseInt(_arrayValues117) - parseInt(arrayUnico) ;
        TOTAL_INCOME117 = document.getElementById('117').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL117", JSON.stringify(suma1));
        localStorage.setItem("valores117", JSON.stringify(suma1)); } }
// 119
var INPUT_TOTAL_INCOME118;
var _arrayValues118;
var arrayValues118 = JSON.parse(localStorage.getItem("valores118")) || [];
var suma118 = JSON.parse(localStorage.getItem("TOTAL118"));
var TOTAL_INCOME118 = document.getElementById('118').innerText = `${suma118}`;
var elem = document.getElementById('valor-entrada118');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor118();}}
function agregarValor118 () {
    if(arrayValues118 != ' ' && arrayValues118 > 0){
        INPUT_TOTAL_INCOME118 = document.getElementById('valor-entrada118').value;
        var arrayUnico = INPUT_TOTAL_INCOME118;  //  llamar del localStorage
        _arrayValues118 = JSON.parse(localStorage.getItem("TOTAL118"));  //  modificar
        let suma1 = parseInt(_arrayValues118) + parseInt(arrayUnico) ;
        TOTAL_INCOME118 = document.getElementById('118').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL118", JSON.stringify(suma1));
        localStorage.setItem("valores118", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME118 = document.getElementById('valor-entrada118').value;
        arrayValues118 = INPUT_TOTAL_INCOME118;  // mandar al localStorage
        localStorage.setItem("valores118", JSON.stringify(arrayValues118));  // modificar total productos
        _arrayValues118 = JSON.parse(localStorage.getItem("valores118"));
        TOTAL_INCOME118 = document.getElementById('118').innerText = `${arrayValues118}` // mandar al localStorage
         localStorage.setItem("TOTAL118", JSON.stringify(INPUT_TOTAL_INCOME118));  }   }
function disminuirValor118 () {
    _arrayValues118 = JSON.parse(localStorage.getItem("TOTAL118"));
    suma118 = _arrayValues118;
    if(arrayValues118 != ' ' && arrayValues118 > 0){
        INPUT_TOTAL_INCOME118 = document.getElementById('valor-entrada118').value;
        var arrayUnico = INPUT_TOTAL_INCOME118;  //  llamar del localStorage
        _arrayValues118 = JSON.parse(localStorage.getItem("TOTAL118"));  //  modificar
        let suma1 = parseInt(_arrayValues118) - parseInt(arrayUnico) ;
        TOTAL_INCOME118 = document.getElementById('118').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL118", JSON.stringify(suma1));
        localStorage.setItem("valores118", JSON.stringify(suma1)); } }
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