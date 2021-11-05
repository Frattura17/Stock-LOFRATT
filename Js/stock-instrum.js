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