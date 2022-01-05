var INPUT_TOTAL_INCOME;
var _arrayValues;
var suma = JSON.parse(localStorage.getItem("TOTAL"));
var TOTAL_INCOME = document.getElementById('000').innerHTML = `${suma}`;
var arrayValues = JSON.parse(localStorage.getItem("TOTAL")) || [];
var elem = document.getElementById('valor-entrada');
var alert000 = JSON.parse(localStorage.getItem("TOTAL"));
if (alert000 < 13){
    alert(` ! ALERTA !   CERO GRAMM 1000 ML.  ${alert000} UNIDADES`)
}
elem.onkeyup = function(e){
    if(e.keyCode == 13){
        agregarValor();}}
function agregarValor () {
    if(arrayValues != '' && arrayValues > 0){ 
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
var alert001 = JSON.parse(localStorage.getItem("TOTAL001"));
if (alert001 < 5){
    alert(` ! ALERTA !   CERO GRAMM 500 ML.  ${alert001} UNIDADES`)
}
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
var alert002 = JSON.parse(localStorage.getItem("TOTAL002"));
if (alert002 < 5){
    alert(` ! ALERTA !   CERO GRAMM 250 ML.  ${alert002} UNIDADES`);
}
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
var alert003 = JSON.parse(localStorage.getItem("TOTAL003"));
if (alert003 < 13){
    alert(` ! ALERTA !  CERO BAC FORTE CHICA   ${alert003} UNIDADES`)
}
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
var alert004 = JSON.parse(localStorage.getItem("TOTAL004"));
if (alert004 < 13){
    alert(` ! ALERTA !  CERO BAC FORTE GRANDE   ${alert004} UNIDADES`)
}
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
var alert005 = JSON.parse(localStorage.getItem("TOTAL005"));
if (alert005 < 11){
    alert(` ! ALERTA !  CICLOFUSION CHICO   ${alert005} UNIDADES`)
}
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
var alert006 = JSON.parse(localStorage.getItem("TOTAL006"));
if (alert006 < 15){
    alert(` ! ALERTA !  CICLOFUSION GRANDE   ${alert006} UNIDADES`)
}
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
var alert007 = JSON.parse(localStorage.getItem("TOTAL007"));
if (alert007 < 5){
    alert(` ! ALERTA !  CUARZO FINO   ${alert007} UNIDADES`)
}
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
var alert008 = JSON.parse(localStorage.getItem("TOTAL008"));
if (alert008 < 15){
    alert(` ! ALERTA !   DESBRIK GRANDE   ${alert008} UNIDADES`)
}
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
var alert009 = JSON.parse(localStorage.getItem("TOTAL009"));
if (alert009 < 11){
    alert(` ! ALERTA !   DESBRIK CHICO   ${alert009} UNIDADES`)
}
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
var alert010 = JSON.parse(localStorage.getItem("TOTAL010"));
if (alert010 < 9){
    alert(` ! ALERTA !   DEPORT PLUS   ${alert010} UNIDADES`)
}
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
var alert011 = JSON.parse(localStorage.getItem("TOTAL011"));
if (alert011 < 13){
    alert(` ! ALERTA !   EMI BLATT F-10   ${alert011} UNIDADES`)
}
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
var alert012 = JSON.parse(localStorage.getItem("TOTAL012"));
if (alert012 < 11){
    alert(` ! ALERTA !   EPIDERMAX GRANDE   ${alert012} UNIDADES`)
}
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
var alert013 = JSON.parse(localStorage.getItem("TOTAL013"));
if (alert013 < 13){
    alert(` ! ALERTA !   EPIDERBLAN 1000 ML.  ${alert013} UNIDADES`)
}
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
var alert014 = JSON.parse(localStorage.getItem("TOTAL014"));
if (alert014 < 8 ){
    alert(` ! ALERTA !   EPIDERBLAN 500 ML.   ${alert014} UNIDADES`)
}
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
var alert015 = JSON.parse(localStorage.getItem("TOTAL015"));
if (alert015 < 6 ){
    alert(` ! ALERTA !   EPIDERBLAN 250 ML.   ${alert015} UNIDADES`)
}
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
var alert016 = JSON.parse(localStorage.getItem("TOTAL016"));
if (alert016 < 7 ){
    alert(` ! ALERTA !   FUNG TALK AEROSOL   ${alert016} UNIDADES`)
}
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
var alert017 = JSON.parse(localStorage.getItem("TOTAL017"));
if (alert017 < 7 ){
    alert(` ! ALERTA !   FUNG TALK POLVO   ${alert017} UNIDADES`)
}
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
var alert018 = JSON.parse(localStorage.getItem("TOTAL018"));
if (alert018 < 11 ){
    alert(` ! ALERTA !   HUMELASTIC 250 GR.   ${alert018} UNIDADES`)
}
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
var alert019 = JSON.parse(localStorage.getItem("TOTAL019"));
if (alert019 < 11 ){
    alert(` ! ALERTA !   HUMELASTIC 60 GR.   ${alert019} UNIDADES`)
}
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
var alert020 = JSON.parse(localStorage.getItem("TOTAL020"));
if (alert020 < 7 ){
    alert(` ! ALERTA !   INTER POLTAC    ${alert020} UNIDADES`)
}
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
var alert021 = JSON.parse(localStorage.getItem("TOTAL021"));
if (alert021 < 13){
    alert(` ! ALERTA !   LOCIDER 1000 ML.  ${alert021} UNIDADES`)
}
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
var alert022 = JSON.parse(localStorage.getItem("TOTAL022"));
if (alert022 < 7){
    alert(` ! ALERTA !   LOCIDER 500 ML.  ${alert022} UNIDADES`)
}
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
var alert023 = JSON.parse(localStorage.getItem("TOTAL023"));
if (alert023 < 6){
    alert(` ! ALERTA !   LOCIDER 250 ML.  ${alert023} UNIDADES`)
}
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
var alert024 = JSON.parse(localStorage.getItem("TOTAL024"));
if (alert024 < 6){
    alert(` ! ALERTA !   MONOMERO  ${alert024} UNIDADES`)
}
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
var alert025 = JSON.parse(localStorage.getItem("TOTAL025"));
if (alert025 < 6){
    alert(` ! ALERTA !   OLEO FORTALECEDOR   ${alert025} UNIDADES`)
}
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
var alert026 = JSON.parse(localStorage.getItem("TOTAL026"));
if (alert026 < 3){
    alert(` ! ALERTA !   PASTA PAE KIT   ${alert026} UNIDADES`)
}
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
var alert027 = JSON.parse(localStorage.getItem("TOTAL027"));
if (alert027 < 5){
    alert(` ! ALERTA !   PASTA PAE REPUESTO   ${alert027} UNIDADES`)
}
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
var alert028 = JSON.parse(localStorage.getItem("TOTAL028"));
if (alert028 < 4){
    alert(` ! ALERTA !   PASTA IODOFORMADA   ${alert028} UNIDADES`)
}
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
var alert029 = JSON.parse(localStorage.getItem("TOTAL029"));
if (alert029 < 6){
    alert(` ! ALERTA !   POLIMERO ACRIL SPEIN   ${alert029} UNIDADES`)
}
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
var alert030 = JSON.parse(localStorage.getItem("TOTAL030"));
if (alert030 < 9){
    alert(` ! ALERTA !   POLIMERO EGEO   ${alert030} UNIDADES`)
}
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
var alert031 = JSON.parse(localStorage.getItem("TOTAL031"));
if (alert031 < 5){
    alert(` ! ALERTA !   POLSEC 4 GR.   ${alert031} UNIDADES`)
}
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

// 34
var INPUT_TOTAL_INCOME033;
var _arrayValues033;
var arrayValues033 = JSON.parse(localStorage.getItem("valores033")) || [];
var suma033 = JSON.parse(localStorage.getItem("TOTAL033"));
var TOTAL_INCOME033 = document.getElementById('033').innerText = `${suma033}`;
var elem = document.getElementById('valor-entrada033');
var alert033 = JSON.parse(localStorage.getItem("TOTAL033"));
if (alert033 < 2){
    alert(` ! ALERTA !   PROTECTOR DERMICO SKIN   ${alert033} UNIDADES`)
}
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
var alert034 = JSON.parse(localStorage.getItem("TOTAL034"));
if (alert034 < 9){
    alert(` ! ALERTA !   PROTEDER PLUS CHICA   ${alert034} UNIDADES`)
}
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
var alert035 = JSON.parse(localStorage.getItem("TOTAL035"));
if (alert035 < 9){
    alert(` ! ALERTA !   PROTEDER PLUS GRANDE   ${alert035} UNIDADES`)
}
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
var alert036 = JSON.parse(localStorage.getItem("TOTAL036"));
if (alert036 < 13){
    alert(` ! ALERTA !   RS-15 GRANDE   ${alert036} UNIDADES`)
}
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
var alert037 = JSON.parse(localStorage.getItem("TOTAL037"));
if (alert037 < 11){
    alert(` ! ALERTA !   RS-15 CHICO   ${alert037} UNIDADES`)
}
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

// 40
var INPUT_TOTAL_INCOME039;
var _arrayValues039;
var arrayValues039 = JSON.parse(localStorage.getItem("valores039")) || [];
var suma039 = JSON.parse(localStorage.getItem("TOTAL039"));
var TOTAL_INCOME039 = document.getElementById('039').innerText = `${suma039}`;
var elem = document.getElementById('valor-entrada039');
var alert039 = JSON.parse(localStorage.getItem("TOTAL039"));
if (alert039 < 6){
    alert(` ! ALERTA !   CREMA SUAVE PIE 60 GR.   ${alert039} UNIDADES`)
}
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
var alert040 = JSON.parse(localStorage.getItem("TOTAL040"));
if (alert040 < 6){
    alert(` ! ALERTA !   CREMA SUAVE PIE 100 GR.   ${alert040} UNIDADES`)
}
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
var alert041 = JSON.parse(localStorage.getItem("TOTAL041"));
if (alert041 < 6){
    alert(` ! ALERTA !   CREMA SUAVE PIE 250 GR.   ${alert041} UNIDADES`);
}
elem.onkeyup = function (e){
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
const productos = [
{nombre:'Cero Grams 1000ml.',valor:suma,idValor:'000',function:'agregarValor()',function1: 'disminuirValor()',entrada:"valor-entrada"},
{nombre:'Cero Grams 500ml.',valor:suma001,idValor:'001',function:'agregarValor001()',function1:'disminuirValor001()',entrada: "valor-entrada001"},
{nombre:'Cero Grams 250ml.',valor:suma002,idValor:'002',function:'agregarValor002()',function1:'disminuirValor002()',entrada: "valor-entrada002"},
{nombre:'Cerobac Forte Chica',valor:suma003,idValor:'003',function:'agregarValor003()',function1:'disminuirValor003()',entrada: "valor-entrada003"},
{nombre:'Cerobac Forte 100gr.',valor:suma004,idValor:'004',function:'agregarValor004()',function1:'disminuirValor004()',entrada: "valor-entrada004"},
{nombre:'Ciclofusion Chico',valor:suma005,idValor:'005',function:'agregarValor005()',function1:'disminuirValor005()',entrada: "valor-entrada005"},
{nombre:'Ciclofusion 14ml.',valor:suma006,idValor:'006',function:'agregarValor006()',function1:'disminuirValor006()',entrada: "valor-entrada006"},
{nombre:'Cuarzo Fino',valor:suma007,idValor:'007',function:'agregarValor007()',function1:'disminuirValor007()',entrada: "valor-entrada007"},
{nombre:'Desbrik Chico',valor:suma008,idValor:'008',function:'agregarValor008()',function1:'disminuirValor008()',entrada: "valor-entrada008"},
{nombre:'Desbrik 14ml.',valor:suma009,idValor:'009',function:'agregarValor009()',function1:'disminuirValor009()',entrada: "valor-entrada009"},
{nombre:'Deport Plus',valor:suma010,idValor:'010',function:'agregarValor010()',function1:'disminuirValor010()',entrada: "valor-entrada010"},
{nombre:'Emi Blatt F-10',valor:suma011,idValor:'011',function:'agregarValor011()',function1:'disminuirValor011()',entrada: "valor-entrada011"},
{nombre:'Epidermax 100gr.',valor:suma012,idValor:'012',function:'agregarValor012()',function1:'disminuirValor012()',entrada: "valor-entrada012"},
{nombre:'Epiderblan 1000ml.',valor:suma013,idValor:'013',function:'agregarValor013()',function1:'disminuirValor013()',entrada: "valor-entrada013"},
{nombre:'Epiderblan 500ml.',valor:suma014,idValor:'014',function:'agregarValor014()',function1:'disminuirValor014()',entrada: "valor-entrada014"},
{nombre:'Epiderblan 250ml.',valor:suma015,idValor:'015',function:'agregarValor015()',function1:'disminuirValor015()',entrada: "valor-entrada015"},
{nombre:'Fung Talk Aero',valor:suma016,idValor:'016',function:'agregarValor016()',function1:'disminuirValor016()',entrada: "valor-entrada016"},
{nombre:'Fung Talk Polvo 100gr.',valor:suma017,idValor:'017',function:'agregarValor017()',function1:'disminuirValor017()',entrada: "valor-entrada017"},
{nombre:'Humelastic 250gr.',valor:suma018,idValor:'018',function:'agregarValor018()',function1:'disminuirValor018()',entrada: "valor-entrada018"},
{nombre:'Humelastic 60gr.',valor:suma019,idValor:'019',function:'agregarValor019()',function1:'disminuirValor019()',entrada: "valor-entrada019"},
{nombre:'Inter Poltac 30gr.',valor:suma020,idValor:'020',function:'agregarValor020()',function1:'disminuirValor020()',entrada: "valor-entrada020"},
{nombre:'Locider 1000ml.',valor:suma021,idValor:'021',function:'agregarValor021()',function1:'disminuirValor021()',entrada: "valor-entrada021"},
{nombre:'Locider 500ml.',valor:suma022,idValor:'022',function:'agregarValor022()',function1:'disminuirValor022()',entrada: "valor-entrada022"},
{nombre:'Locider 250ml.',valor:suma023,idValor:'023',function:'agregarValor023()',function1:'disminuirValor023()',entrada: "valor-entrada023"},
{nombre:'Monomero 50mm',valor:suma024,idValor:'024',function:'agregarValor024()',function1:'disminuirValor024()',entrada: "valor-entrada024"},
{nombre:'Oleo Fortalecedor Libra',valor:suma025,idValor:'025',function:'agregarValor025()',function1:'disminuirValor025()',entrada: "valor-entrada025"},
{nombre:'Pasta Pae Kit',valor:suma026,idValor:'026',function:'agregarValor026()',function1:'disminuirValor026()',entrada: "valor-entrada026"},
{nombre:'Pasta Pae Repuesto',valor:suma027,idValor:'027',function:'agregarValor027()',function1:'disminuirValor027()',entrada: "valor-entrada027"},
{nombre:'Pasta Iodoformada',valor:suma028,idValor:'028',function:'agregarValor028()',function1:'disminuirValor028()',entrada: "valor-entrada028"},
{nombre:'Polimero Acril-Spein',valor:suma029,idValor:'029',function:'agregarValor029()',function1:'disminuirValor029()',entrada: "valor-entrada029"},
{nombre:'Polimero Egeo',valor:suma030,idValor:'030',function:'agregarValor030()',function1:'disminuirValor030()',entrada: "valor-entrada030"},
{nombre:'Polsec 4gr.',valor:suma031,idValor:'031',function:'agregarValor031()',function1:'disminuirValor031()',entrada: "valor-entrada031"},
{nombre:'Protector Dermico Skin',valor:suma033,idValor:'033',function:'agregarValor033()',function1:'disminuirValor033()',entrada: "valor-entrada033"},
{nombre:'Proteder Plus Chica',valor:suma034,idValor:'034',function:'agregarValor034()',function1:'disminuirValor034()',entrada: "valor-entrada034"},
{nombre:'Proteder Plus 60gr.',valor:suma035,idValor:'035',function:'agregarValor035()',function1:'disminuirValor035()',entrada: "valor-entrada035"},
{nombre:'Rs 15 Chico',valor:suma036,idValor:'036',function:'agregarValor036()',function1:'disminuirValor036()',entrada: "valor-entrada036"},
{nombre:'Rs 15 14ml.',valor:suma037,idValor:'037',function:'agregarValor037()',function1:'disminuirValor037()',entrada: "valor-entrada037"},
{nombre:'Crema Pedica Suavepie 60gr.',valor:suma039,idValor:'039',function:'agregarValor039()',function1:'disminuirValor039()',entrada: "valor-entrada039"},
{nombre:'Crema Pedica Suavepie 100gr.',valor:suma040,idValor:'040',function:'agregarValor040()',function1:'disminuirValor040()',entrada: "valor-entrada040"},
{nombre:'Crema Pedica Suavepie 250gr.',valor:suma041,idValor:'041',function:'agregarValor041()',function1:'disminuirValor041()',entrada: "valor-entrada041"},
     
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
