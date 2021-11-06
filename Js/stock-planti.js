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
// 120
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
var INPUT_TOTAL_INCOME120;
var _arrayValues120;
var arrayValues120 = JSON.parse(localStorage.getItem("valores120")) || [];
var suma120 = JSON.parse(localStorage.getItem("TOTAL120"));
var TOTAL_INCOME120 = document.getElementById('120').innerText = `${suma120}`;
var elem = document.getElementById('valor-entrada120');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor120();}}
function agregarValor120 () {
    if(arrayValues120 != ' ' && arrayValues120 > 0){
        INPUT_TOTAL_INCOME120 = document.getElementById('valor-entrada120').value;
        var arrayUnico = INPUT_TOTAL_INCOME120;  //  llamar del localStorage
        _arrayValues120 = JSON.parse(localStorage.getItem("TOTAL120"));  //  modificar
        let suma1 = parseInt(_arrayValues120) + parseInt(arrayUnico) ;
        TOTAL_INCOME120 = document.getElementById('120').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL120", JSON.stringify(suma1));
        localStorage.setItem("valores120", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME120 = document.getElementById('valor-entrada120').value;
        arrayValues120 = INPUT_TOTAL_INCOME120;  // mandar al localStorage
        localStorage.setItem("valores120", JSON.stringify(arrayValues120));  // modificar total productos
        _arrayValues120 = JSON.parse(localStorage.getItem("valores120"));
        TOTAL_INCOME120 = document.getElementById('120').innerText = `${arrayValues120}` // mandar al localStorage
         localStorage.setItem("TOTAL120", JSON.stringify(INPUT_TOTAL_INCOME120));  }   }
function disminuirValor120 () {
    _arrayValues120 = JSON.parse(localStorage.getItem("TOTAL120"));
    suma120 = _arrayValues120;
    if(arrayValues120 != ' ' && arrayValues120 > 0){
        INPUT_TOTAL_INCOME120 = document.getElementById('valor-entrada120').value;
        var arrayUnico = INPUT_TOTAL_INCOME120;  //  llamar del localStorage
        _arrayValues120 = JSON.parse(localStorage.getItem("TOTAL120"));  //  modificar
        let suma1 = parseInt(_arrayValues120) - parseInt(arrayUnico) ;
        TOTAL_INCOME120 = document.getElementById('120').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL120", JSON.stringify(suma1));
        localStorage.setItem("valores120", JSON.stringify(suma1)); } }
// 122
var INPUT_TOTAL_INCOME121;
var _arrayValues121;
var arrayValues121 = JSON.parse(localStorage.getItem("valores121")) || [];
var suma121 = JSON.parse(localStorage.getItem("TOTAL121"));
var TOTAL_INCOME121 = document.getElementById('121').innerText = `${suma121}`;
var elem = document.getElementById('valor-entrada121');
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor121();}}
function agregarValor121 () {
    if(arrayValues121 != ' ' && arrayValues121 > 0){
        INPUT_TOTAL_INCOME121 = document.getElementById('valor-entrada121').value;
        var arrayUnico = INPUT_TOTAL_INCOME121;  //  llamar del localStorage
        _arrayValues121 = JSON.parse(localStorage.getItem("TOTAL121"));  //  modificar
        let suma1 = parseInt(_arrayValues121) + parseInt(arrayUnico) ;
        TOTAL_INCOME121 = document.getElementById('121').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL121", JSON.stringify(suma1));
        localStorage.setItem("valores121", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME121 = document.getElementById('valor-entrada121').value;
        arrayValues121 = INPUT_TOTAL_INCOME121;  // mandar al localStorage
        localStorage.setItem("valores121", JSON.stringify(arrayValues121));  // modificar total productos
        _arrayValues121 = JSON.parse(localStorage.getItem("valores121"));
        TOTAL_INCOME121 = document.getElementById('121').innerText = `${arrayValues121}` // mandar al localStorage
         localStorage.setItem("TOTAL121", JSON.stringify(INPUT_TOTAL_INCOME121));  }   }
function disminuirValor121 () {
    _arrayValues121 = JSON.parse(localStorage.getItem("TOTAL121"));
    suma121 = _arrayValues121;
    if(arrayValues121 != ' ' && arrayValues121 > 0){
        INPUT_TOTAL_INCOME121 = document.getElementById('valor-entrada121').value;
        var arrayUnico = INPUT_TOTAL_INCOME121;  //  llamar del localStorage
        _arrayValues121 = JSON.parse(localStorage.getItem("TOTAL121"));  //  modificar
        let suma1 = parseInt(_arrayValues121) - parseInt(arrayUnico) ;
        TOTAL_INCOME121 = document.getElementById('121').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL121", JSON.stringify(suma1));
        localStorage.setItem("valores121", JSON.stringify(suma1)); } }