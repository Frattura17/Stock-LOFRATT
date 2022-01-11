// 43
var INPUT_TOTAL_INCOME042;
var _arrayValues042;
var arrayValues042 = JSON.parse(localStorage.getItem("valores042")) || [];
var suma042 = JSON.parse(localStorage.getItem("TOTAL042"));
var TOTAL_INCOME042 = document.getElementById('042').innerText = `${suma042}`;
var elem = document.getElementById('valor-entrada042');
var alert042 = JSON.parse(localStorage.getItem("TOTAL042"));
if (alert042 < 3){
    alert(` ! ALERTA !   ALICATE MUNDIAL UÑA ENCAR.   ${alert042} UNIDADES`);
}
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
var alert043 = JSON.parse(localStorage.getItem("TOTAL043"));
if (alert043 < 3){
    alert(` ! ALERTA !   ALICATE MUNDIAL ART. 776   ${alert043} UNIDADES`);
}
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

// 46
var INPUT_TOTAL_INCOME045;
var _arrayValues045;
var arrayValues045 = JSON.parse(localStorage.getItem("valores045")) || [];
var suma045 = JSON.parse(localStorage.getItem("TOTAL045"));
var TOTAL_INCOME045 = document.getElementById('045').innerText = `${suma045}`;
var elem = document.getElementById('valor-entrada045');
var alert045 = JSON.parse(localStorage.getItem("TOTAL045"));
if (alert045 < 3){
    alert(` ! ALERTA !   ALGODONERO ACERO   ${alert045} UNIDADES`);
}
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
var alert046 = JSON.parse(localStorage.getItem("TOTAL046"));
if (alert046 < 5){
    alert(` ! ALERTA !   APLICADOR DE PASTA   ${alert046} UNIDADES`);
}
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor046();}}
function agregarValor046 () {
    if(arrayValues046 != ' ' && arrayValues046 > 0){
        INPUT_TOTAL_INCOME046 = document.getElementById('valor-entrada046').value;
        var arrayUnico = INPUT_TOTAL_INCOME047;  //  llamar del localStorage
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
var alert047 = JSON.parse(localStorage.getItem("TOTAL047"));
if (alert047 < 3){
    alert(` ! ALERTA !   BANDEJA ACANALADA   ${alert047} UNIDADES`);
}
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
var alert048 = JSON.parse(localStorage.getItem("TOTAL048"));
if (alert048 < 5){
    alert(` ! ALERTA !   BANDEJA PISAPIE   ${alert048} UNIDADES`);
}
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

// 51
var INPUT_TOTAL_INCOME050;
var _arrayValues050;
var arrayValues050 = JSON.parse(localStorage.getItem("valores050")) || [];
var suma050 = JSON.parse(localStorage.getItem("TOTAL050"));
var TOTAL_INCOME050 = document.getElementById('050').innerText = `${suma050}`;
var elem = document.getElementById('valor-entrada050');
var alert050 = JSON.parse(localStorage.getItem("TOTAL050"));
if (alert050 < 1){
    alert(` ! ALERTA !   DEDOS PLASTICOS   ${alert050} UNIDADES`);
}
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
var alert051 = JSON.parse(localStorage.getItem("TOTAL051"));
if (alert051 < 2){
    alert(` ! ALERTA !   CAJA INSTRUM. ACERO   ${alert051} UNIDADES`);
}
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
var alert052 = JSON.parse(localStorage.getItem("TOTAL052"));
if (alert052 < 2){
    alert(` ! ALERTA !   CORTA UÑAS BOLSILLO   ${alert052} UNIDADES`);
}
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
// num
var INPUT_TOTAL_INCOME053;
var _arrayValues053;
var arrayValues053 = JSON.parse(localStorage.getItem("valores053")) || [];
var suma053 = JSON.parse(localStorage.getItem("TOTAL053"));
var TOTAL_INCOME053 = document.getElementById('053').innerText = `${suma053}`;
var elem = document.getElementById('valor-entrada053');
var alert053 = JSON.parse(localStorage.getItem("TOTAL053"));
if (alert053 < 3){
    alert(` ! ALERTA !   CURETA CUCHARITA   ${alert053} UNIDADES`);
}
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
// 54
var INPUT_TOTAL_INCOME054;
var _arrayValues054;
var arrayValues054 = JSON.parse(localStorage.getItem("valores054")) || [];
var suma054 = JSON.parse(localStorage.getItem("TOTAL054"));
var TOTAL_INCOME054 = document.getElementById('054').innerText = `${suma054}`;
var elem = document.getElementById('valor-entrada054');
var alert054 = JSON.parse(localStorage.getItem("TOTAL054"));
if (alert054 < 4){
    alert(` ! ALERTA !   ELEVADOR ESPICULAR   ${alert054} UNIDADES`);
}
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
// 55
var INPUT_TOTAL_INCOME055;
var _arrayValues055;
var arrayValues055 = JSON.parse(localStorage.getItem("valores055")) || [];
var suma055 = JSON.parse(localStorage.getItem("TOTAL055"));
var TOTAL_INCOME055 = document.getElementById('055').innerText = `${suma055}`;
var elem = document.getElementById('valor-entrada055');
var alert055 = JSON.parse(localStorage.getItem("TOTAL055"));
if (alert055 < 10){
    alert(` ! ALERTA !   FIBRA SPAN UNIDAD    ${alert055} UNIDADES`);
}
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
// 56
var INPUT_TOTAL_INCOME056;
var _arrayValues056;
var arrayValues056 = JSON.parse(localStorage.getItem("valores056")) || [];
var suma056 = JSON.parse(localStorage.getItem("TOTAL056"));
var TOTAL_INCOME056 = document.getElementById('056').innerText = `${suma056}`;
var elem = document.getElementById('valor-entrada056');
var alert056 = JSON.parse(localStorage.getItem("TOTAL056"));
if (alert056 < 2){
    alert(` ! ALERTA !   FIBRA SPAN X 10    ${alert056} UNIDADES`);
}
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
// 57
var INPUT_TOTAL_INCOME057;
var _arrayValues057;
var arrayValues057 = JSON.parse(localStorage.getItem("valores057")) || [];
var suma057 = JSON.parse(localStorage.getItem("TOTAL057"));
var TOTAL_INCOME057 = document.getElementById('057').innerText = `${suma057}`;
var elem = document.getElementById('valor-entrada057');
var alert057 = JSON.parse(localStorage.getItem("TOTAL057"));
if (alert057 < 4){
    alert(` ! ALERTA !   FORMON FILO CURVO    ${alert057} UNIDADES`);
}
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
// 58
var INPUT_TOTAL_INCOME058;
var _arrayValues058;
var arrayValues058 = JSON.parse(localStorage.getItem("valores058")) || [];
var suma058 = JSON.parse(localStorage.getItem("TOTAL058"));
var TOTAL_INCOME058 = document.getElementById('058').innerText = `${suma058}`;
var elem = document.getElementById('valor-entrada058');
var alert058 = JSON.parse(localStorage.getItem("TOTAL058"));
if (alert058 < 3){
    alert(` ! ALERTA !    FRESA DIAMANTE CHICA    ${alert058} UNIDADES`);
}
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
// 59
var INPUT_TOTAL_INCOME059;
var _arrayValues059;
var arrayValues059 = JSON.parse(localStorage.getItem("valores059")) || [];
var suma059 = JSON.parse(localStorage.getItem("TOTAL059"));
var TOTAL_INCOME059 = document.getElementById('059').innerText = `${suma059}`;
var elem = document.getElementById('valor-entrada059');
var alert059 = JSON.parse(localStorage.getItem("TOTAL059"));
if (alert059 < 3){
    alert(` ! ALERTA !    FRESA DIAMANTE GRANDE    ${alert059} UNIDADES`);
}
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
// 60
var INPUT_TOTAL_INCOME060;
var _arrayValues060;
var arrayValues060 = JSON.parse(localStorage.getItem("valores060")) || [];
var suma060 = JSON.parse(localStorage.getItem("TOTAL060"));
var TOTAL_INCOME060 = document.getElementById('060').innerText = `${suma060}`;
var elem = document.getElementById('valor-entrada060');
var alert060 = JSON.parse(localStorage.getItem("TOTAL060"));
if (alert060 < 3){
    alert(` ! ALERTA !    FRESA DE PIEDRA    ${alert060} UNIDADES`);
}
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
// 61
var INPUT_TOTAL_INCOME061;
var _arrayValues061;
var arrayValues061 = JSON.parse(localStorage.getItem("valores061")) || [];
var suma061 = JSON.parse(localStorage.getItem("TOTAL061"));
var TOTAL_INCOME061 = document.getElementById('061').innerText = `${suma061}`;
var elem = document.getElementById('valor-entrada061');
var alert061 = JSON.parse(localStorage.getItem("TOTAL061"));
if (alert061 < 4){
    alert(` ! ALERTA !    FRESA K4    ${alert061} UNIDADES`);
}
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
// 62
// 1
var INPUT_TOTAL_INCOME044;
var _arrayValues044;
var arrayValues044 = JSON.parse(localStorage.getItem("valores044")) || [];
var suma044 = JSON.parse(localStorage.getItem("TOTAL044"));
var TOTAL_INCOME044 = document.getElementById('044').innerText = `${suma044}`;
var elem = document.getElementById('valor-entrada044');
var alert044 = JSON.parse(localStorage.getItem("TOTAL044"));
if (alert044 < 4){
    alert(` ! ALERTA !    FRESAS K8    ${alert044} UNIDADES`);
}
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
// 2
var INPUT_TOTAL_INCOME049;
var _arrayValues049;
var arrayValues049 = JSON.parse(localStorage.getItem("valores049")) || [];
var suma049 = JSON.parse(localStorage.getItem("TOTAL049"));
var TOTAL_INCOME049 = document.getElementById('049').innerText = `${suma049}`;
var elem = document.getElementById('valor-entrada049');
var alert049 = JSON.parse(localStorage.getItem("TOTAL049"));
if (alert049 < 4){
    alert(` ! ALERTA !    FRESAS K6    ${alert049} UNIDADES`);
}
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
// 3
var INPUT_TOTAL_INCOME062;
var _arrayValues062;
var arrayValues062 = JSON.parse(localStorage.getItem("valores062")) || [];
var suma062 = JSON.parse(localStorage.getItem("TOTAL062"));
var TOTAL_INCOME062 = document.getElementById('062').innerText = `${suma062}`;
var elem = document.getElementById('valor-entrada062');
var alert062 = JSON.parse(localStorage.getItem("TOTAL062"));
if (alert062 < 2){
    alert(` ! ALERTA !    FRESA ACERO K8 EJE LARGO    ${alert062} UNIDADES`);
}
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
// 63
var INPUT_TOTAL_INCOME063;
var _arrayValues063;
var arrayValues063 = JSON.parse(localStorage.getItem("valores063")) || [];
var suma063 = JSON.parse(localStorage.getItem("TOTAL063"));
var TOTAL_INCOME063 = document.getElementById('063').innerText = `${suma063}`;
var elem = document.getElementById('valor-entrada063');
var alert063 = JSON.parse(localStorage.getItem("TOTAL063"));
if (alert063 < 2){
    alert(` ! ALERTA !    FRESERO REDONDO    ${alert063} UNIDADES`);
}
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
// 64
var INPUT_TOTAL_INCOME064;
var _arrayValues064;
var arrayValues064 = JSON.parse(localStorage.getItem("valores064")) || [];
var suma064 = JSON.parse(localStorage.getItem("TOTAL064"));
var TOTAL_INCOME064 = document.getElementById('064').innerText = `${suma064}`;
var elem = document.getElementById('valor-entrada064');
var alert064 = JSON.parse(localStorage.getItem("TOTAL064"));
if (alert064 < 3){
    alert(` ! ALERTA !    FRESON DE ACERO    ${alert064} UNIDADES`);
}
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
// 65
var INPUT_TOTAL_INCOME065;
var _arrayValues065;
var arrayValues065 = JSON.parse(localStorage.getItem("valores065")) || [];
var suma065 = JSON.parse(localStorage.getItem("TOTAL065"));
var TOTAL_INCOME065 = document.getElementById('065').innerText = `${suma065}`;
var elem = document.getElementById('valor-entrada065');
var alert065 = JSON.parse(localStorage.getItem("TOTAL065"));
if (alert065 < 2){
    alert(` ! ALERTA !    FRESON DE GOMA    ${alert065} UNIDADES`);
}
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
var alert066 = JSON.parse(localStorage.getItem("TOTAL066"));
if (alert066 < 7){
    alert(` ! ALERTA !    FRESON DE CERAMICA    ${alert066} UNIDADES`);
}
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
// 67
var INPUT_TOTAL_INCOME067;
var _arrayValues067;
var arrayValues067 = JSON.parse(localStorage.getItem("valores067")) || [];
var suma067 = JSON.parse(localStorage.getItem("TOTAL067"));
var TOTAL_INCOME067 = document.getElementById('067').innerText = `${suma067}`;
var elem = document.getElementById('valor-entrada067');
var alert067 = JSON.parse(localStorage.getItem("TOTAL067"));
if (alert067 < 3){
    alert(` ! ALERTA !    FRESON DE ACERO LARGO    ${alert067} UNIDADES`);
}
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
// 68
var INPUT_TOTAL_INCOME068;
var _arrayValues068;
var arrayValues068 = JSON.parse(localStorage.getItem("valores068")) || [];
var suma068 = JSON.parse(localStorage.getItem("TOTAL068"));
var TOTAL_INCOME068 = document.getElementById('068').innerText = `${suma068}`;
var elem = document.getElementById('valor-entrada068');
var alert068 = JSON.parse(localStorage.getItem("TOTAL068"));
if (alert068 < 5){
    alert(` ! ALERTA !    GUBIA    ${alert068} UNIDADES`);
}
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
// 69
var INPUT_TOTAL_INCOME069;
var _arrayValues069;
var arrayValues069 = JSON.parse(localStorage.getItem("valores069")) || [];
var suma069 = JSON.parse(localStorage.getItem("TOTAL069"));
var TOTAL_INCOME069 = document.getElementById('069').innerText = `${suma069}`;
var elem = document.getElementById('valor-entrada069');
var alert069 = JSON.parse(localStorage.getItem("TOTAL069"));
if (alert069 < 3){
    alert(` ! ALERTA !    MANGO BISTURI 3    ${alert069} UNIDADES`);
}
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
// 70
var INPUT_TOTAL_INCOME070;
var _arrayValues070;
var arrayValues070 = JSON.parse(localStorage.getItem("valores070")) || [];
var suma070 = JSON.parse(localStorage.getItem("TOTAL070"));
var TOTAL_INCOME070 = document.getElementById('070').innerText = `${suma070}`;
var elem = document.getElementById('valor-entrada070');
var alert070 = JSON.parse(localStorage.getItem("TOTAL070"));
if (alert070 < 2){
    alert(` ! ALERTA !    MORDAZA PARA TORNO    ${alert070} UNIDADES`);
}
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
// 71
var INPUT_TOTAL_INCOME071;
var _arrayValues071;
var arrayValues071 = JSON.parse(localStorage.getItem("valores071")) || [];
var suma071 = JSON.parse(localStorage.getItem("TOTAL071"));
var TOTAL_INCOME071 = document.getElementById('071').innerText = `${suma071}`;
var elem = document.getElementById('valor-entrada071');
var alert071 = JSON.parse(localStorage.getItem("TOTAL071"));
if (alert071 < 1){
    alert(` ! ALERTA !    PALO DE GOLF    ${alert071} UNIDADES`);
}
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
// 72
var INPUT_TOTAL_INCOME072;
var _arrayValues072;
var arrayValues072 = JSON.parse(localStorage.getItem("valores072")) || [];
var suma072 = JSON.parse(localStorage.getItem("TOTAL072"));
var TOTAL_INCOME072 = document.getElementById('072').innerText = `${suma072}`;
var elem = document.getElementById('valor-entrada072');
var alert072 = JSON.parse(localStorage.getItem("TOTAL072"));
if (alert072 < 1){
    alert(` ! ALERTA !    PALITO DE NARANJO    ${alert072} UNIDADES`);
}
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
// 73
var INPUT_TOTAL_INCOME073;
var _arrayValues073;
var arrayValues073 = JSON.parse(localStorage.getItem("valores073")) || [];
var suma073 = JSON.parse(localStorage.getItem("TOTAL073"));
var TOTAL_INCOME073 = document.getElementById('073').innerText = `${suma073}`;
var elem = document.getElementById('valor-entrada073');
var alert073 = JSON.parse(localStorage.getItem("TOTAL073"));
if (alert073 < 1){
    alert(` ! ALERTA !    PEGAMENTO PARA CLIP    ${alert073} UNIDADES`);
}
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
// 74
var INPUT_TOTAL_INCOME074;
var _arrayValues074;
var arrayValues074 = JSON.parse(localStorage.getItem("valores074")) || [];
var suma074 = JSON.parse(localStorage.getItem("TOTAL074"));
var TOTAL_INCOME074 = document.getElementById('074').innerText = `${suma074}`;
var elem = document.getElementById('valor-entrada074');
var alert074 = JSON.parse(localStorage.getItem("TOTAL074"));
if (alert074 < 1){
    alert(` ! ALERTA !    PINZA MOSQUITO    ${alert074} UNIDADES`);
}
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
// 75
var INPUT_TOTAL_INCOME075;
var _arrayValues075;
var arrayValues075 = JSON.parse(localStorage.getItem("valores075")) || [];
var suma075 = JSON.parse(localStorage.getItem("TOTAL075"));
var TOTAL_INCOME075 = document.getElementById('075').innerText = `${suma075}`;
var elem = document.getElementById('valor-entrada075');
var alert075 = JSON.parse(localStorage.getItem("TOTAL075"));
if (alert075 < 5){
    alert(` ! ALERTA !    SMERIL SOPORTE X 10 REP.    ${alert075} UNIDADES`);
}
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
// 76
var INPUT_TOTAL_INCOME076;
var _arrayValues076;
var arrayValues076 = JSON.parse(localStorage.getItem("valores076")) || [];
var suma076 = JSON.parse(localStorage.getItem("TOTAL076"));
var TOTAL_INCOME076 = document.getElementById('076').innerText = `${suma076}`;
var elem = document.getElementById('valor-entrada076');
var alert076 = JSON.parse(localStorage.getItem("TOTAL076"));
if (alert076 < 5){
    alert(` ! ALERTA !    SMERIL EJE SOPORTE X 10 REP.    ${alert076} UNIDADES`);
}
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
// 77
var INPUT_TOTAL_INCOME077;
var _arrayValues077;
var arrayValues077 = JSON.parse(localStorage.getItem("valores077")) || [];
var suma077 = JSON.parse(localStorage.getItem("TOTAL077"));
var TOTAL_INCOME077 = document.getElementById('077').innerText = `${suma077}`;
var elem = document.getElementById('valor-entrada077');
var alert077 = JSON.parse(localStorage.getItem("TOTAL077"));
if (alert077 < 2){
    alert(` ! ALERTA !    SMERIL 10 REP.    ${alert077} UNIDADES`);
}
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
// 78
var INPUT_TOTAL_INCOME078;
var _arrayValues078;
var arrayValues078 = JSON.parse(localStorage.getItem("valores078")) || [];
var suma078 = JSON.parse(localStorage.getItem("TOTAL078"));
var TOTAL_INCOME078 = document.getElementById('078').innerText = `${suma078}`;
var elem = document.getElementById('valor-entrada078');
var alert078 = JSON.parse(localStorage.getItem("TOTAL078"));
if (alert078 < 1){
    alert(` ! ALERTA !    TIJERITA CHICA    ${alert078} UNIDADES`);
}
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
// 79
var INPUT_TOTAL_INCOME079;
var _arrayValues079;
var arrayValues079 = JSON.parse(localStorage.getItem("valores079")) || [];
var suma079 = JSON.parse(localStorage.getItem("TOTAL079"));
var TOTAL_INCOME079 = document.getElementById('079').innerText = `${suma079}`;
var elem = document.getElementById('valor-entrada079');
var alert079 = JSON.parse(localStorage.getItem("TOTAL079"));
if (alert079 < 3){
    alert(` ! ALERTA !    VASO DAPPEN COMUN    ${alert079} UNIDADES`);
}
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
// 80
var INPUT_TOTAL_INCOME080;
var _arrayValues080;
var arrayValues080 = JSON.parse(localStorage.getItem("valores080")) || [];
var suma080 = JSON.parse(localStorage.getItem("TOTAL080"));
var TOTAL_INCOME080 = document.getElementById('080').innerText = `${suma080}`;
var elem = document.getElementById('valor-entrada080');
var alert080 = JSON.parse(localStorage.getItem("TOTAL080"));
if (alert080 < 1){
    alert(` ! ALERTA !    VASO DAPPEN CAJA FRESAS    ${alert080} UNIDADES`);
}
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
// 81
var INPUT_TOTAL_INCOME081;
var _arrayValues081;
var arrayValues081 = JSON.parse(localStorage.getItem("valores081")) || [];
var suma081 = JSON.parse(localStorage.getItem("TOTAL081"));
var TOTAL_INCOME081 = document.getElementById('081').innerText = `${suma081}`;
var elem = document.getElementById('valor-entrada081');
var alert081 = JSON.parse(localStorage.getItem("TOTAL081"));
if (alert081 < 2){
    alert(` ! ALERTA !    FOSFOROS HEMOSTATICOS    ${alert081} UNIDADES`);
}
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
// 82
var INPUT_TOTAL_INCOME082;
var _arrayValues082;
var arrayValues082 = JSON.parse(localStorage.getItem("valores082")) || [];
var suma082 = JSON.parse(localStorage.getItem("TOTAL082"));
var TOTAL_INCOME082 = document.getElementById('082').innerText = `${suma082}`;
var elem = document.getElementById('valor-entrada082');
var alert082 = JSON.parse(localStorage.getItem("TOTAL082"));
if (alert082 < 2){
    alert(` ! ALERTA !    SEPARADOR HELOMAS    ${alert082} UNIDADES`);
}
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
// 83
var INPUT_TOTAL_INCOME083;
var _arrayValues083;
var arrayValues083 = JSON.parse(localStorage.getItem("valores083")) || [];
var suma083 = JSON.parse(localStorage.getItem("TOTAL083"));
var TOTAL_INCOME083 = document.getElementById('083').innerText = `${suma083}`;
var elem = document.getElementById('valor-entrada083');
var alert083 = JSON.parse(localStorage.getItem("TOTAL083"));
if (alert083 < 3){
    alert(` ! ALERTA !    APLICADOR GASA TUBULAR    ${alert083} UNIDADES`);
}
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
// 84
var INPUT_TOTAL_INCOME084;
var _arrayValues084;
var arrayValues084 = JSON.parse(localStorage.getItem("valores084")) || [];
var suma084 = JSON.parse(localStorage.getItem("TOTAL084"));
var TOTAL_INCOME084 = document.getElementById('084').innerText = `${suma084}`;
var elem = document.getElementById('valor-entrada084');
var alert084 = JSON.parse(localStorage.getItem("TOTAL084"));
if (alert084 < 1){
    alert(` ! ALERTA !    GASAS TUBULAR X 2 MT.    ${alert084} UNIDADES`);
}
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
// 85
var INPUT_TOTAL_INCOME085;
var _arrayValues085;
var arrayValues085 = JSON.parse(localStorage.getItem("valores085")) || [];
var suma085 = JSON.parse(localStorage.getItem("TOTAL085"));
var TOTAL_INCOME085 = document.getElementById('085').innerText = `${suma085}`;
var elem = document.getElementById('valor-entrada085');
var alert085 = JSON.parse(localStorage.getItem("TOTAL085"));
if (alert085 < 1){
    alert(` ! ALERTA !    GASA TUBULAR X 1 MT.    ${alert085} UNIDADES`);
}
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
// 86
var INPUT_TOTAL_INCOME086;
var _arrayValues086;
var arrayValues086 = JSON.parse(localStorage.getItem("valores086")) || [];
var suma086 = JSON.parse(localStorage.getItem("TOTAL086"));
var TOTAL_INCOME086 = document.getElementById('086').innerText = `${suma086}`;
var elem = document.getElementById('valor-entrada086');
var alert086 = JSON.parse(localStorage.getItem("TOTAL086"));
if (alert086 < 1){
    alert(` ! ALERTA !    VENDA TUBULAR X 2 MT.    ${alert086} UNIDADES`);
}
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
// 87
var INPUT_TOTAL_INCOME087;
var _arrayValues087;
var arrayValues087 = JSON.parse(localStorage.getItem("valores087")) || [];
var suma087 = JSON.parse(localStorage.getItem("TOTAL087"));
var TOTAL_INCOME087 = document.getElementById('087').innerText = `${suma087}`;
var elem = document.getElementById('valor-entrada087');
var alert087 = JSON.parse(localStorage.getItem("TOTAL087"));
if (alert087 < 1){
    alert(` ! ALERTA !    VENDA TUBULAR X 4 MT.    ${alert087} UNIDADES`);
}
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
// 88
var INPUT_TOTAL_INCOME088;
var _arrayValues088;
var arrayValues088 = JSON.parse(localStorage.getItem("valores088")) || [];
var suma088 = JSON.parse(localStorage.getItem("TOTAL088"));
var TOTAL_INCOME088 = document.getElementById('088').innerText = `${suma088}`;
var elem = document.getElementById('valor-entrada088');
var alert088 = JSON.parse(localStorage.getItem("TOTAL088"));
if (alert088 < 1){
    alert(` ! ALERTA !    FORMON MEIER    ${alert088} UNIDADES`);
}
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
// 89
var INPUT_TOTAL_INCOME089;
var _arrayValues089;
var arrayValues089 = JSON.parse(localStorage.getItem("valores089")) || [];
var suma089 = JSON.parse(localStorage.getItem("TOTAL089"));
var TOTAL_INCOME089 = document.getElementById('089').innerText = `${suma089}`;
var elem = document.getElementById('valor-entrada089');
var alert089 = JSON.parse(localStorage.getItem("TOTAL089"));
if (alert089 < 1){
    alert(` ! ALERTA !    FORMON MEIER    ${alert089} UNIDADES`);
}
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
// 90
var INPUT_TOTAL_INCOME090;
var _arrayValues090;
var arrayValues090 = JSON.parse(localStorage.getItem("valores090")) || [];
var suma090 = JSON.parse(localStorage.getItem("TOTAL090"));
var TOTAL_INCOME090 = document.getElementById('090').innerText = `${suma090}`;
var elem = document.getElementById('valor-entrada090');
var alert090 = JSON.parse(localStorage.getItem("TOTAL090"));
if (alert090 < 2){
    alert(` ! ALERTA !    APLICADOR DE CLIP    ${alert090} UNIDADES`);
}
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
// 91
var INPUT_TOTAL_INCOME150;
var _arrayValues150;
var arrayValues150 = JSON.parse(localStorage.getItem("valores150")) || [];
var suma150 = JSON.parse(localStorage.getItem("TOTAL150"));
var TOTAL_INCOME150 = document.getElementById('150').innerText = `${suma150}`;
var elem = document.getElementById('valor-entrada150');
var alert150 = JSON.parse(localStorage.getItem("TOTAL150"));
if (alert150 < 2){
    alert(` ! ALERTA !    MANGO BISTURI 4    ${alert150} UNIDADES`);
}
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor150();}}
function agregarValor150 () {
    if(arrayValues150 != ' ' && arrayValues150 > 0){
        INPUT_TOTAL_INCOME150 = document.getElementById('valor-entrada150').value;
        var arrayUnico = INPUT_TOTAL_INCOME150;  //  llamar del localStorage
        _arrayValues150 = JSON.parse(localStorage.getItem("TOTAL150"));  //  modificar
        let suma1 = parseInt(_arrayValues150) + parseInt(arrayUnico) ;
        TOTAL_INCOME150 = document.getElementById('150').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL150", JSON.stringify(suma1));
        localStorage.setItem("valores150", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME150 = document.getElementById('valor-entrada150').value;
        arrayValues150 = INPUT_TOTAL_INCOME150;  // mandar al localStorage
        localStorage.setItem("valores150", JSON.stringify(arrayValues150));  // modificar total productos
        _arrayValues150 = JSON.parse(localStorage.getItem("valores150"));
        TOTAL_INCOME150 = document.getElementById('150').innerText = `${arrayValues150}` // mandar al localStorage
         localStorage.setItem("TOTAL150", JSON.stringify(INPUT_TOTAL_INCOME150));  }   }
function disminuirValor150 () {
    _arrayValues150 = JSON.parse(localStorage.getItem("TOTAL150"));
    suma150 = _arrayValues150;
    if(arrayValues150 != ' ' && arrayValues150 > 0){
        INPUT_TOTAL_INCOME150 = document.getElementById('valor-entrada150').value;
        var arrayUnico = INPUT_TOTAL_INCOME150;  //  llamar del localStorage
        _arrayValues150 = JSON.parse(localStorage.getItem("TOTAL150"));  //  modificar
        let suma1 = parseInt(_arrayValues150) - parseInt(arrayUnico) ;
        TOTAL_INCOME150 = document.getElementById('150').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL150", JSON.stringify(suma1));
        localStorage.setItem("valores150", JSON.stringify(suma1)); } }
// 248
var INPUT_TOTAL_INCOME247;
var _arrayValues247;
var arrayValues247 = JSON.parse(localStorage.getItem("valores247")) || [];
var suma247 = JSON.parse(localStorage.getItem("TOTAL247"));
var TOTAL_INCOME247 = document.getElementById('247').innerText = `${suma247}`;
var elem = document.getElementById('valor-entrada247');
var alert247 = JSON.parse(localStorage.getItem("TOTAL247"));
if (alert247 < 1){
    alert(` ! ALERTA !   ESPATULA DOBLE/SIMPLE    ${alert247} UNIDADES`);
}
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor247();}}
function agregarValor247 () {
    if(arrayValues247 != ' ' && arrayValues247 > 0){
        INPUT_TOTAL_INCOME247 = document.getElementById('valor-entrada247').value;
        var arrayUnico = INPUT_TOTAL_INCOME247;  //  llamar del localStorage
        _arrayValues247 = JSON.parse(localStorage.getItem("TOTAL247"));  //  modificar
        let suma1 = parseInt(_arrayValues247) + parseInt(arrayUnico) ;
        TOTAL_INCOME247 = document.getElementById('247').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL247", JSON.stringify(suma1));
        localStorage.setItem("valores247", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME247 = document.getElementById('valor-entrada247').value;
        arrayValues247 = INPUT_TOTAL_INCOME247;  // mandar al localStorage
        localStorage.setItem("valores247", JSON.stringify(arrayValues247));  // modificar total productos
        _arrayValues247 = JSON.parse(localStorage.getItem("valores247"));
        TOTAL_INCOME247 = document.getElementById('247').innerText = `${arrayValues247}` // mandar al localStorage
         localStorage.setItem("TOTAL247", JSON.stringify(INPUT_TOTAL_INCOME247));  }   }
function disminuirValor247 () {
    _arrayValues247 = JSON.parse(localStorage.getItem("TOTAL247"));
    suma247 = _arrayValues247;
    if(arrayValues247 != ' ' && arrayValues247 > 0){
        INPUT_TOTAL_INCOME247 = document.getElementById('valor-entrada247').value;
        var arrayUnico = INPUT_TOTAL_INCOME247;  //  llamar del localStorage
        _arrayValues247 = JSON.parse(localStorage.getItem("TOTAL247"));  //  modificar
        let suma1 = parseInt(_arrayValues247) - parseInt(arrayUnico) ;
        TOTAL_INCOME247 = document.getElementById('247').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL247", JSON.stringify(suma1));
        localStorage.setItem("valores247", JSON.stringify(suma1)); } }
// 249
var INPUT_TOTAL_INCOME248;
var _arrayValues248;
var arrayValues248 = JSON.parse(localStorage.getItem("valores248")) || [];
var suma248 = JSON.parse(localStorage.getItem("TOTAL248"));
var TOTAL_INCOME248 = document.getElementById('248').innerText = `${suma248}`;
var elem = document.getElementById('valor-entrada248');
var alert248 = JSON.parse(localStorage.getItem("TOTAL248"));
if (alert248 < 1){
    alert(` ! ALERTA !   PINZA ADSON C/DIENTE    ${alert248} UNIDADES`);
}
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor248();}}
function agregarValor248 () {
    if(arrayValues248 != ' ' && arrayValues248 > 0){
        INPUT_TOTAL_INCOME248 = document.getElementById('valor-entrada248').value;
        var arrayUnico = INPUT_TOTAL_INCOME248;  //  llamar del localStorage
        _arrayValues248 = JSON.parse(localStorage.getItem("TOTAL248"));  //  modificar
        let suma1 = parseInt(_arrayValues248) + parseInt(arrayUnico) ;
        TOTAL_INCOME248 = document.getElementById('248').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL248", JSON.stringify(suma1));
        localStorage.setItem("valores248", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME248 = document.getElementById('valor-entrada248').value;
        arrayValues248 = INPUT_TOTAL_INCOME248;  // mandar al localStorage
        localStorage.setItem("valores248", JSON.stringify(arrayValues248));  // modificar total productos
        _arrayValues248 = JSON.parse(localStorage.getItem("valores248"));
        TOTAL_INCOME248 = document.getElementById('248').innerText = `${arrayValues248}` // mandar al localStorage
         localStorage.setItem("TOTAL248", JSON.stringify(INPUT_TOTAL_INCOME248));  }   }
function disminuirValor248 () {
    _arrayValues248 = JSON.parse(localStorage.getItem("TOTAL248"));
    suma248 = _arrayValues248;
    if(arrayValues248 != ' ' && arrayValues248 > 0){
        INPUT_TOTAL_INCOME248 = document.getElementById('valor-entrada248').value;
        var arrayUnico = INPUT_TOTAL_INCOME248;  //  llamar del localStorage
        _arrayValues248 = JSON.parse(localStorage.getItem("TOTAL248"));  //  modificar
        let suma1 = parseInt(_arrayValues248) - parseInt(arrayUnico) ;
        TOTAL_INCOME248 = document.getElementById('248').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL248", JSON.stringify(suma1));
        localStorage.setItem("valores248", JSON.stringify(suma1)); } }



const productos = [
{nombre:'Alicate Uña Encarnada Mundial',valor:suma042,idValor:'042',function:'agregarValor042()',function1:'disminuirValor042()',entrada: "valor-entrada042"},
{nombre:'Alicate Mundial Art. 776',valor:suma043,idValor:'043',function:'agregarValor043()',function1:'disminuirValor043()',entrada: "valor-entrada043"},
{nombre:'Fresa K8',valor:suma044,idValor:'044',function:'agregarValor044()',function1:'disminuirValor044()',entrada: "valor-entrada044"},
{nombre:'Algodonero Acero',valor:suma045,idValor:'045',function:'agregarValor045()',function1:'disminuirValor045()',entrada: "valor-entrada045"},
{nombre:'Aplicador de Pasta',valor:suma046,idValor:'046',function:'agregarValor046()',function1:'disminuirValor046()',entrada: "valor-entrada046"},
{nombre:'Bandeja Acanalada',valor:suma047,idValor:'047',function:'agregarValor047()',function1:'disminuirValor047()',entrada: "valor-entrada047"},
{nombre:'Bandeja Posapie Aymara',valor:suma048,idValor:'048',function:'agregarValor048()',function1:'disminuirValor048()',entrada: "valor-entrada048"},
{nombre:'Fresa K6',valor:suma049,idValor:'049',function:'agregarValor049()',function1:'disminuirValor049()',entrada: "valor-entrada049"},
{nombre:'Dedos Plasticos',valor:suma050,idValor:'050',function:'agregarValor050()',function1:'disminuirValor050()',entrada: "valor-entrada050"},
{nombre:'Caja Instrum. Acero 17x7x3',valor:suma051,idValor:'051',function:'agregarValor051()',function1:'disminuirValor051()',entrada: "valor-entrada051"},
{nombre:'Corta Uñas Bolsillo',valor:suma052,idValor:'052',function:'agregarValor052()',function1:'disminuirValor052()',entrada: "valor-entrada052"},
{nombre:'Cureta Cucharita',valor:suma053,idValor:'053',function:'agregarValor053()',function1:'disminuirValor053()',entrada: "valor-entrada053"},
{nombre:'Elevador Espicular',valor:suma054,idValor:'054',function:'agregarValor054()',function1:'disminuirValor054()',entrada: "valor-entrada054"},
{nombre:'Fibraspan x1',valor:suma055,idValor:'055',function:'agregarValor055()',function1:'disminuirValor055()',entrada: "valor-entrada055"},
{nombre:'Fibraspan x10',valor:suma056,idValor:'056',function:'agregarValor056()',function1:'disminuirValor056()',entrada: "valor-entrada056"},
{nombre:'Formon Filo Curvo 3mm',valor:suma057,idValor:'057',function:'agregarValor057()',function1:'disminuirValor057()',entrada: "valor-entrada057"},
{nombre:'Fresa Diamante Chica',valor:suma058,idValor:'058',function:'agregarValor058()',function1:'disminuirValor058()',entrada: "valor-entrada058"},
{nombre:'Fresa Diamante Grande',valor:suma059,idValor:'059',function:'agregarValor059()',function1:'disminuirValor059()',entrada: "valor-entrada059"},
{nombre:'Fresa de Piedra',valor:suma060,idValor:'060',function:'agregarValor060()',function1:'disminuirValor060()',entrada: "valor-entrada060"},
{nombre:'Fresas K4',valor:suma061,idValor:'061',function:'agregarValor061()',function1:'disminuirValor061()',entrada: "valor-entrada061"},
{nombre:'Fresa Acero K8 Eje Largo',valor:suma062,idValor:'062',function:'agregarValor062()',function1:'disminuirValor062()',entrada: "valor-entrada062"},
{nombre:'Fresero Redondo',valor:suma063,idValor:'063',function:'agregarValor063()',function1:'disminuirValor063()',entrada: "valor-entrada063"},
{nombre:'Freson Acero comun',valor:suma064,idValor:'064',function:'agregarValor064()',function1:'disminuirValor064()',entrada: "valor-entrada064"},
{nombre:'Freson de Goma',valor:suma065,idValor:'065',function:'agregarValor065()',function1:'disminuirValor065()',entrada: "valor-entrada065"},
{nombre:'Freson Tungsteno/Ceramica',valor:suma066,idValor:'066',function:'agregarValor066()',function1:'disminuirValor066()',entrada: "valor-entrada066"},
{nombre:'Freson Acero largo',valor:suma067,idValor:'067',function:'agregarValor067()',function1:'disminuirValor067()',entrada: "valor-entrada067"},
{nombre:'Gubia',valor:suma068,idValor:'068',function:'agregarValor068()',function1:'disminuirValor068()',entrada: "valor-entrada068"},
{nombre:'Mango Bisturi 3',valor:suma069,idValor:'069',function:'agregarValor069()',function1:'disminuirValor069()',entrada: "valor-entrada069"},
{nombre:'Mango Bisturi 4',valor:suma150,idValor:'150',function:'agregarValor150()',function1:'disminuirValor150()',entrada: "valor-entrada150"},
{nombre:'Mordaza para Torno',valor:suma070,idValor:'070',function:'agregarValor070()',function1:'disminuirValor070()',entrada: "valor-entrada070"},
{nombre:'Palo de Golf',valor:suma071,idValor:'071',function:'agregarValor071()',function1:'disminuirValor071()',entrada: "valor-entrada071"},
{nombre:'Pinza Mosquito',valor:suma072,idValor:'072',function:'agregarValor072()',function1:'disminuirValor072()',entrada: "valor-entrada072"},
{nombre:'Smeril Press Soporte c/10 Repuesto',valor:suma073,idValor:'073',function:'agregarValor073()',function1:'disminuirValor073()',entrada: "valor-entrada073"},
{nombre:'Smeril Press 10 Repuesto',valor:suma074,idValor:'074',function:'agregarValor074()',function1:'disminuirValor074()',entrada: "valor-entrada074"},
{nombre:'Tijerita Chica',valor:suma075,idValor:'075',function:'agregarValor075()',function1:'disminuirValor075()',entrada: "valor-entrada075"},
{nombre:'Vaso Dappen Comun',valor:suma076,idValor:'076',function:'agregarValor076()',function1:'disminuirValor076()',entrada: "valor-entrada076"},
{nombre:'Vaso Dappen Caja p/Fresas',valor:suma077,idValor:'077',function:'agregarValor077()',function1:'disminuirValor077()',entrada: "valor-entrada077"},
{nombre:'Fosforos Hemostaticos x6',valor:suma078,idValor:'078',function:'agregarValor078()',function1:'disminuirValor078()',entrada: "valor-entrada078"},
{nombre:'Separador Interdig. Helomas',valor:suma079,idValor:'079',function:'agregarValor079()',function1:'disminuirValor079()',entrada: "valor-entrada079"},
{nombre:'Aplicador Gasa Tubular',valor:suma080,idValor:'080',function:'agregarValor080()',function1:'disminuirValor080()',entrada: "valor-entrada080"},
{nombre:'Gasa Tubular x2 MT',valor:suma081,idValor:'081',function:'agregarValor081()',function1:'disminuirValor081()',entrada: "valor-entrada081"},
{nombre:'Gasa Tubular x1 MT',valor:suma082,idValor:'082',function:'agregarValor082()',function1:'disminuirValor082()',entrada: "valor-entrada082"},
{nombre:'Venda Tubular Elastisada x2 MT',valor:suma083,idValor:'083',function:'agregarValor083()',function1:'disminuirValor083()',entrada: "valor-entrada083"},
{nombre:'Venda Tubular Elastisada x4 MT',valor:suma084,idValor:'084',function:'agregarValor084()',function1:'disminuirValor084()',entrada: "valor-entrada084"},
{nombre:'Formon Meier',valor:suma085,idValor:'085',function:'agregarValor085()',function1:'disminuirValor085()',entrada: "valor-entrada085"},
{nombre:'Aplicador de Clip',valor:suma086,idValor:'086',function:'agregarValor086()',function1:'disminuirValor086()',entrada: "valor-entrada086"},
{nombre:'Pie Didactico',valor:suma087,idValor:'087',function:'agregarValor087()',function1:'disminuirValor087()',entrada: "valor-entrada087"},
{nombre:'ESPATULA DOBLE/SIMPLE',valor:suma247,idValor:'247',function:'agregarValor247()',function1:'disminuirValor247()',entrada: "valor-entrada247"},
{nombre:'PINZA ADSON C/DIENTE',valor:suma248,idValor:'248',function:'agregarValor248()',function1:'disminuirValor248()',entrada: "valor-entrada248"}
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