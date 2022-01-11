var INPUT_TOTAL_INCOME150;
var _arrayValues150;
var arrayValues150 = JSON.parse(localStorage.getItem("valores150")) || [];
var suma150 = JSON.parse(localStorage.getItem("TOTAL150"));
var TOTAL_INCOME150 = document.getElementById('150').innerText = `${suma150}`;
var elem = document.getElementById('valor-entrada150');
var alert150 = JSON.parse(localStorage.getItem("TOTAL150"));
if (alert150 < 1) {
    alert(` ! ALERTA !     ART. 504      ${alert150} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor150(); }
}
function agregarValor150() {
    if (arrayValues150 != ' ' && arrayValues150 > 0) {
        INPUT_TOTAL_INCOME150 = document.getElementById('valor-entrada150').value;
        var arrayUnico = INPUT_TOTAL_INCOME150;  //  llamar del localStorage
        _arrayValues150 = JSON.parse(localStorage.getItem("TOTAL150"));  //  modificar
        let suma1 = parseInt(_arrayValues150) + parseInt(arrayUnico);
        TOTAL_INCOME150 = document.getElementById('150').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL150", JSON.stringify(suma1));
        localStorage.setItem("valores150", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME150 = document.getElementById('valor-entrada150').value;
        arrayValues150 = INPUT_TOTAL_INCOME150;  // mandar al localStorage
        localStorage.setItem("valores150", JSON.stringify(arrayValues150));  // modificar total productos
        _arrayValues150 = JSON.parse(localStorage.getItem("valores150"));
        TOTAL_INCOME150 = document.getElementById('150').innerText = `${arrayValues150}` // mandar al localStorage
        localStorage.setItem("TOTAL150", JSON.stringify(INPUT_TOTAL_INCOME150));
    }
}
function disminuirValor150() {
    _arrayValues150 = JSON.parse(localStorage.getItem("TOTAL150"));
    suma150 = _arrayValues150;
    if (arrayValues150 != ' ' && arrayValues150 > 0) {
        INPUT_TOTAL_INCOME150 = document.getElementById('valor-entrada150').value;
        var arrayUnico = INPUT_TOTAL_INCOME150;  //  llamar del localStorage
        _arrayValues150 = JSON.parse(localStorage.getItem("TOTAL150"));  //  modificar
        let suma1 = parseInt(_arrayValues150) - parseInt(arrayUnico);
        TOTAL_INCOME150 = document.getElementById('150').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL150", JSON.stringify(suma1));
        localStorage.setItem("valores150", JSON.stringify(suma1));
    }
}
// 152
var INPUT_TOTAL_INCOME151;
var _arrayValues151;
var arrayValues151 = JSON.parse(localStorage.getItem("valores151")) || [];
var suma151 = JSON.parse(localStorage.getItem("TOTAL151"));
var TOTAL_INCOME151 = document.getElementById('151').innerText = `${suma151}`;
var elem = document.getElementById('valor-entrada151');
var alert151 = JSON.parse(localStorage.getItem("TOTAL151"));
if (alert151 < 1) {
    alert(` ! ALERTA !    ART. 1101      ${alert151} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor151(); }
}
function agregarValor151() {
    if (arrayValues151 != ' ' && arrayValues151 > 0) {
        INPUT_TOTAL_INCOME151 = document.getElementById('valor-entrada151').value;
        var arrayUnico = INPUT_TOTAL_INCOME151;  //  llamar del localStorage
        _arrayValues151 = JSON.parse(localStorage.getItem("TOTAL151"));  //  modificar
        let suma1 = parseInt(_arrayValues151) + parseInt(arrayUnico);
        TOTAL_INCOME151 = document.getElementById('151').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL151", JSON.stringify(suma1));
        localStorage.setItem("valores151", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME151 = document.getElementById('valor-entrada151').value;
        arrayValues151 = INPUT_TOTAL_INCOME151;  // mandar al localStorage
        localStorage.setItem("valores151", JSON.stringify(arrayValues151));  // modificar total productos
        _arrayValues151 = JSON.parse(localStorage.getItem("valores151"));
        TOTAL_INCOME151 = document.getElementById('151').innerText = `${arrayValues151}` // mandar al localStorage
        localStorage.setItem("TOTAL151", JSON.stringify(INPUT_TOTAL_INCOME151));
    }
}
function disminuirValor151() {
    _arrayValues151 = JSON.parse(localStorage.getItem("TOTAL151"));
    suma151 = _arrayValues151;
    if (arrayValues151 != ' ' && arrayValues151 > 0) {
        INPUT_TOTAL_INCOME151 = document.getElementById('valor-entrada151').value;
        var arrayUnico = INPUT_TOTAL_INCOME151;  //  llamar del localStorage
        _arrayValues151 = JSON.parse(localStorage.getItem("TOTAL151"));  //  modificar
        let suma1 = parseInt(_arrayValues151) - parseInt(arrayUnico);
        TOTAL_INCOME151 = document.getElementById('151').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL151", JSON.stringify(suma1));
        localStorage.setItem("valores151", JSON.stringify(suma1));
    }
}
// 153
var INPUT_TOTAL_INCOME152;
var _arrayValues152;
var arrayValues152 = JSON.parse(localStorage.getItem("valores152")) || [];
var suma152 = JSON.parse(localStorage.getItem("TOTAL152"));
var TOTAL_INCOME152 = document.getElementById('152').innerText = `${suma152}`;
var elem = document.getElementById('valor-entrada152');
var alert152 = JSON.parse(localStorage.getItem("TOTAL152"));
if (alert152 < 1) {
    alert(` ! ALERTA !    ART. 1128      ${alert152} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor152(); }
}
function agregarValor152() {
    if (arrayValues152 != ' ' && arrayValues152 > 0) {
        INPUT_TOTAL_INCOME152 = document.getElementById('valor-entrada152').value;
        var arrayUnico = INPUT_TOTAL_INCOME152;  //  llamar del localStorage
        _arrayValues152 = JSON.parse(localStorage.getItem("TOTAL152"));  //  modificar
        let suma1 = parseInt(_arrayValues152) + parseInt(arrayUnico);
        TOTAL_INCOME152 = document.getElementById('152').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL152", JSON.stringify(suma1));
        localStorage.setItem("valores152", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME152 = document.getElementById('valor-entrada152').value;
        arrayValues152 = INPUT_TOTAL_INCOME152;  // mandar al localStorage
        localStorage.setItem("valores152", JSON.stringify(arrayValues152));  // modificar total productos
        _arrayValues152 = JSON.parse(localStorage.getItem("valores152"));
        TOTAL_INCOME152 = document.getElementById('152').innerText = `${arrayValues152}` // mandar al localStorage
        localStorage.setItem("TOTAL152", JSON.stringify(INPUT_TOTAL_INCOME152));
    }
}
function disminuirValor152() {
    _arrayValues152 = JSON.parse(localStorage.getItem("TOTAL152"));
    suma152 = _arrayValues152;
    if (arrayValues152 != ' ' && arrayValues152 > 0) {
        INPUT_TOTAL_INCOME152 = document.getElementById('valor-entrada152').value;
        var arrayUnico = INPUT_TOTAL_INCOME152;  //  llamar del localStorage
        _arrayValues152 = JSON.parse(localStorage.getItem("TOTAL152"));  //  modificar
        let suma1 = parseInt(_arrayValues152) - parseInt(arrayUnico);
        TOTAL_INCOME152 = document.getElementById('152').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL152", JSON.stringify(suma1));
        localStorage.setItem("valores152", JSON.stringify(suma1));
    }
}
// 154
var INPUT_TOTAL_INCOME153;
var _arrayValues153;
var arrayValues153 = JSON.parse(localStorage.getItem("valores153")) || [];
var suma153 = JSON.parse(localStorage.getItem("TOTAL153"));
var TOTAL_INCOME153 = document.getElementById('153').innerText = `${suma153}`;
var elem = document.getElementById('valor-entrada153');
var alert153 = JSON.parse(localStorage.getItem("TOTAL153"));
if (alert153 < 1) {
    alert(` ! ALERTA !    ART. 1102      ${alert153} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor153(); }
}
function agregarValor153() {
    if (arrayValues153 != ' ' && arrayValues153 > 0) {
        INPUT_TOTAL_INCOME153 = document.getElementById('valor-entrada153').value;
        var arrayUnico = INPUT_TOTAL_INCOME153;  //  llamar del localStorage
        _arrayValues153 = JSON.parse(localStorage.getItem("TOTAL153"));  //  modificar
        let suma1 = parseInt(_arrayValues153) + parseInt(arrayUnico);
        TOTAL_INCOME153 = document.getElementById('153').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL153", JSON.stringify(suma1));
        localStorage.setItem("valores153", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME153 = document.getElementById('valor-entrada153').value;
        arrayValues153 = INPUT_TOTAL_INCOME153;  // mandar al localStorage
        localStorage.setItem("valores153", JSON.stringify(arrayValues153));  // modificar total productos
        _arrayValues153 = JSON.parse(localStorage.getItem("valores153"));
        TOTAL_INCOME153 = document.getElementById('153').innerText = `${arrayValues153}` // mandar al localStorage
        localStorage.setItem("TOTAL153", JSON.stringify(INPUT_TOTAL_INCOME153));
    }
}
function disminuirValor153() {
    _arrayValues153 = JSON.parse(localStorage.getItem("TOTAL153"));
    suma153 = _arrayValues153;
    if (arrayValues153 != ' ' && arrayValues153 > 0) {
        INPUT_TOTAL_INCOME153 = document.getElementById('valor-entrada153').value;
        var arrayUnico = INPUT_TOTAL_INCOME153;  //  llamar del localStorage
        _arrayValues153 = JSON.parse(localStorage.getItem("TOTAL153"));  //  modificar
        let suma1 = parseInt(_arrayValues153) - parseInt(arrayUnico);
        TOTAL_INCOME153 = document.getElementById('153').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL153", JSON.stringify(suma1));
        localStorage.setItem("valores153", JSON.stringify(suma1));
    }
}
// 155
var INPUT_TOTAL_INCOME154;
var _arrayValues154;
var arrayValues154 = JSON.parse(localStorage.getItem("valores154")) || [];
var suma154 = JSON.parse(localStorage.getItem("TOTAL154"));
var TOTAL_INCOME154 = document.getElementById('154').innerText = `${suma154}`;
var elem = document.getElementById('valor-entrada154');
var alert154 = JSON.parse(localStorage.getItem("TOTAL154"));
if (alert154 < 1) {
    alert(` ! ALERTA !    ART. 1149      ${alert154} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor154(); }
}
function agregarValor154() {
    if (arrayValues154 != ' ' && arrayValues154 > 0) {
        INPUT_TOTAL_INCOME154 = document.getElementById('valor-entrada154').value;
        var arrayUnico = INPUT_TOTAL_INCOME154;  //  llamar del localStorage
        _arrayValues154 = JSON.parse(localStorage.getItem("TOTAL154"));  //  modificar
        let suma1 = parseInt(_arrayValues154) + parseInt(arrayUnico);
        TOTAL_INCOME154 = document.getElementById('154').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL154", JSON.stringify(suma1));
        localStorage.setItem("valores154", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME154 = document.getElementById('valor-entrada154').value;
        arrayValues154 = INPUT_TOTAL_INCOME154;  // mandar al localStorage
        localStorage.setItem("valores154", JSON.stringify(arrayValues154));  // modificar total productos
        _arrayValues154 = JSON.parse(localStorage.getItem("valores154"));
        TOTAL_INCOME154 = document.getElementById('154').innerText = `${arrayValues154}` // mandar al localStorage
        localStorage.setItem("TOTAL154", JSON.stringify(INPUT_TOTAL_INCOME154));
    }
}
function disminuirValor154() {
    _arrayValues154 = JSON.parse(localStorage.getItem("TOTAL154"));
    suma154 = _arrayValues154;
    if (arrayValues154 != ' ' && arrayValues154 > 0) {
        INPUT_TOTAL_INCOME154 = document.getElementById('valor-entrada154').value;
        var arrayUnico = INPUT_TOTAL_INCOME154;  //  llamar del localStorage
        _arrayValues154 = JSON.parse(localStorage.getItem("TOTAL154"));  //  modificar
        let suma1 = parseInt(_arrayValues154) - parseInt(arrayUnico);
        TOTAL_INCOME154 = document.getElementById('154').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL154", JSON.stringify(suma1));
        localStorage.setItem("valores154", JSON.stringify(suma1));
    }
}
// 156
var INPUT_TOTAL_INCOME155;
var _arrayValues155;
var arrayValues155 = JSON.parse(localStorage.getItem("valores155")) || [];
var suma155 = JSON.parse(localStorage.getItem("TOTAL155"));
var TOTAL_INCOME155 = document.getElementById('155').innerText = `${suma155}`;
var elem = document.getElementById('valor-entrada155');
var alert155 = JSON.parse(localStorage.getItem("TOTAL155"));
if (alert155 < 1) {
    alert(` ! ALERTA !    ART. 1103      ${alert155} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor155(); }
}
function agregarValor155() {
    if (arrayValues155 != ' ' && arrayValues155 > 0) {
        INPUT_TOTAL_INCOME155 = document.getElementById('valor-entrada155').value;
        var arrayUnico = INPUT_TOTAL_INCOME155;  //  llamar del localStorage
        _arrayValues155 = JSON.parse(localStorage.getItem("TOTAL155"));  //  modificar
        let suma1 = parseInt(_arrayValues155) + parseInt(arrayUnico);
        TOTAL_INCOME155 = document.getElementById('155').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL155", JSON.stringify(suma1));
        localStorage.setItem("valores155", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME155 = document.getElementById('valor-entrada155').value;
        arrayValues155 = INPUT_TOTAL_INCOME155;  // mandar al localStorage
        localStorage.setItem("valores155", JSON.stringify(arrayValues155));  // modificar total productos
        _arrayValues155 = JSON.parse(localStorage.getItem("valores155"));
        TOTAL_INCOME155 = document.getElementById('155').innerText = `${arrayValues155}` // mandar al localStorage
        localStorage.setItem("TOTAL155", JSON.stringify(INPUT_TOTAL_INCOME155));
    }
}
function disminuirValor155() {
    _arrayValues155 = JSON.parse(localStorage.getItem("TOTAL155"));
    suma155 = _arrayValues155;
    if (arrayValues155 != ' ' && arrayValues155 > 0) {
        INPUT_TOTAL_INCOME155 = document.getElementById('valor-entrada155').value;
        var arrayUnico = INPUT_TOTAL_INCOME155;  //  llamar del localStorage
        _arrayValues155 = JSON.parse(localStorage.getItem("TOTAL155"));  //  modificar
        let suma1 = parseInt(_arrayValues155) - parseInt(arrayUnico);
        TOTAL_INCOME155 = document.getElementById('155').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL155", JSON.stringify(suma1));
        localStorage.setItem("valores155", JSON.stringify(suma1));
    }
}
// 157
var INPUT_TOTAL_INCOME156;
var _arrayValues156;
var arrayValues156 = JSON.parse(localStorage.getItem("valores156")) || [];
var suma156 = JSON.parse(localStorage.getItem("TOTAL156"));
var TOTAL_INCOME156 = document.getElementById('156').innerText = `${suma156}`;
var elem = document.getElementById('valor-entrada156');
var alert156 = JSON.parse(localStorage.getItem("TOTAL156"));
if (alert156 < 1) {
    alert(` ! ALERTA !    ART. 1137      ${alert156} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor156(); }
}
function agregarValor156() {
    if (arrayValues156 != ' ' && arrayValues156 > 0) {
        INPUT_TOTAL_INCOME156 = document.getElementById('valor-entrada156').value;
        var arrayUnico = INPUT_TOTAL_INCOME156;  //  llamar del localStorage
        _arrayValues156 = JSON.parse(localStorage.getItem("TOTAL156"));  //  modificar
        let suma1 = parseInt(_arrayValues156) + parseInt(arrayUnico);
        TOTAL_INCOME156 = document.getElementById('156').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL156", JSON.stringify(suma1));
        localStorage.setItem("valores156", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME156 = document.getElementById('valor-entrada156').value;
        arrayValues156 = INPUT_TOTAL_INCOME156;  // mandar al localStorage
        localStorage.setItem("valores156", JSON.stringify(arrayValues156));  // modificar total productos
        _arrayValues156 = JSON.parse(localStorage.getItem("valores156"));
        TOTAL_INCOME156 = document.getElementById('156').innerText = `${arrayValues156}` // mandar al localStorage
        localStorage.setItem("TOTAL156", JSON.stringify(INPUT_TOTAL_INCOME156));
    }
}
function disminuirValor156() {
    _arrayValues156 = JSON.parse(localStorage.getItem("TOTAL156"));
    suma156 = _arrayValues156;
    if (arrayValues156 != ' ' && arrayValues156 > 0) {
        INPUT_TOTAL_INCOME156 = document.getElementById('valor-entrada156').value;
        var arrayUnico = INPUT_TOTAL_INCOME156;  //  llamar del localStorage
        _arrayValues156 = JSON.parse(localStorage.getItem("TOTAL156"));  //  modificar
        let suma1 = parseInt(_arrayValues156) - parseInt(arrayUnico);
        TOTAL_INCOME156 = document.getElementById('156').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL156", JSON.stringify(suma1));
        localStorage.setItem("valores156", JSON.stringify(suma1));
    }
}
// 233
var INPUT_TOTAL_INCOME157;
var _arrayValues157;
var arrayValues157 = JSON.parse(localStorage.getItem("valores157")) || [];
var suma157 = JSON.parse(localStorage.getItem("TOTAL157"));
var TOTAL_INCOME157 = document.getElementById('157').innerText = `${suma157}`;
var elem = document.getElementById('valor-entrada157');
var alert157 = JSON.parse(localStorage.getItem("TOTAL157"));
if (alert157 < 1) {
    alert(` ! ALERTA !    ART. 1250      ${alert157} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor157(); }
}
function agregarValor157() {
    if (arrayValues157 != ' ' && arrayValues157 > 0) {
        INPUT_TOTAL_INCOME157 = document.getElementById('valor-entrada157').value;
        var arrayUnico = INPUT_TOTAL_INCOME157;  //  llamar del localStorage
        _arrayValues157 = JSON.parse(localStorage.getItem("TOTAL157"));  //  modificar
        let suma1 = parseInt(_arrayValues157) + parseInt(arrayUnico);
        TOTAL_INCOME157 = document.getElementById('157').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL157", JSON.stringify(suma1));
        localStorage.setItem("valores157", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME157 = document.getElementById('valor-entrada157').value;
        arrayValues157 = INPUT_TOTAL_INCOME157;  // mandar al localStorage
        localStorage.setItem("valores157", JSON.stringify(arrayValues157));  // modificar total productos
        _arrayValues157 = JSON.parse(localStorage.getItem("valores157"));
        TOTAL_INCOME157 = document.getElementById('157').innerText = `${arrayValues157}` // mandar al localStorage
        localStorage.setItem("TOTAL157", JSON.stringify(INPUT_TOTAL_INCOME157));
    }
}
function disminuirValor157() {
    _arrayValues157 = JSON.parse(localStorage.getItem("TOTAL157"));
    suma157 = _arrayValues157;
    if (arrayValues157 != ' ' && arrayValues157 > 0) {
        INPUT_TOTAL_INCOME157 = document.getElementById('valor-entrada157').value;
        var arrayUnico = INPUT_TOTAL_INCOME157;  //  llamar del localStorage
        _arrayValues157 = JSON.parse(localStorage.getItem("TOTAL157"));  //  modificar
        let suma1 = parseInt(_arrayValues157) - parseInt(arrayUnico);
        TOTAL_INCOME157 = document.getElementById('157').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL157", JSON.stringify(suma1));
        localStorage.setItem("valores157", JSON.stringify(suma1));
    }
}
// 158
var INPUT_TOTAL_INCOME158;
var _arrayValues158;
var arrayValues158 = JSON.parse(localStorage.getItem("valores158")) || [];
var suma158 = JSON.parse(localStorage.getItem("TOTAL158"));
var TOTAL_INCOME158 = document.getElementById('158').innerText = `${suma158}`;
var elem = document.getElementById('valor-entrada158');
var alert158 = JSON.parse(localStorage.getItem("TOTAL158"));
if (alert158 < 1) {
    alert(` ! ALERTA !    ART. 1270      ${alert158} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor158(); }
}
function agregarValor158() {
    if (arrayValues158 != ' ' && arrayValues158 > 0) {
        INPUT_TOTAL_INCOME158 = document.getElementById('valor-entrada158').value;
        var arrayUnico = INPUT_TOTAL_INCOME158;  //  llamar del localStorage
        _arrayValues158 = JSON.parse(localStorage.getItem("TOTAL158"));  //  modificar
        let suma1 = parseInt(_arrayValues158) + parseInt(arrayUnico);
        TOTAL_INCOME158 = document.getElementById('158').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL158", JSON.stringify(suma1));
        localStorage.setItem("valores158", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME158 = document.getElementById('valor-entrada158').value;
        arrayValues158 = INPUT_TOTAL_INCOME158;  // mandar al localStorage
        localStorage.setItem("valores158", JSON.stringify(arrayValues158));  // modificar total productos
        _arrayValues158 = JSON.parse(localStorage.getItem("valores158"));
        TOTAL_INCOME158 = document.getElementById('158').innerText = `${arrayValues158}` // mandar al localStorage
        localStorage.setItem("TOTAL158", JSON.stringify(INPUT_TOTAL_INCOME158));
    }
}
function disminuirValor158() {
    _arrayValues158 = JSON.parse(localStorage.getItem("TOTAL158"));
    suma158 = _arrayValues158;
    if (arrayValues158 != ' ' && arrayValues158 > 0) {
        INPUT_TOTAL_INCOME158 = document.getElementById('valor-entrada158').value;
        var arrayUnico = INPUT_TOTAL_INCOME158;  //  llamar del localStorage
        _arrayValues158 = JSON.parse(localStorage.getItem("TOTAL158"));  //  modificar
        let suma1 = parseInt(_arrayValues158) - parseInt(arrayUnico);
        TOTAL_INCOME158 = document.getElementById('158').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL158", JSON.stringify(suma1));
        localStorage.setItem("valores158", JSON.stringify(suma1));
    }
}
// 233
var INPUT_TOTAL_INCOME233;
var _arrayValues233;
var arrayValues233 = JSON.parse(localStorage.getItem("valores233")) || [];
var suma233 = JSON.parse(localStorage.getItem("TOTAL233"));
var TOTAL_INCOME233 = document.getElementById('233').innerText = `${suma233}`;
var elem = document.getElementById('valor-entrada233');
var alert233 = JSON.parse(localStorage.getItem("TOTAL233"));
if (alert233 < 1) {
    alert(` ! ALERTA !    ACOLCHADO SEPARADOR      ${alert233} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor233(); }
}
function agregarValor233() {
    if (arrayValues233 != ' ' && arrayValues233 > 0) {
        INPUT_TOTAL_INCOME233 = document.getElementById('valor-entrada233').value;
        var arrayUnico = INPUT_TOTAL_INCOME233;  //  llamar del localStorage
        _arrayValues233 = JSON.parse(localStorage.getItem("TOTAL233"));  //  modificar
        let suma1 = parseInt(_arrayValues233) + parseInt(arrayUnico);
        TOTAL_INCOME233 = document.getElementById('233').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL233", JSON.stringify(suma1));
        localStorage.setItem("valores233", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME233 = document.getElementById('valor-entrada233').value;
        arrayValues233 = INPUT_TOTAL_INCOME233;  // mandar al localStorage
        localStorage.setItem("valores233", JSON.stringify(arrayValues233));  // modificar total productos
        _arrayValues233 = JSON.parse(localStorage.getItem("valores233"));
        TOTAL_INCOME233 = document.getElementById('233').innerText = `${arrayValues233}` // mandar al localStorage
        localStorage.setItem("TOTAL233", JSON.stringify(INPUT_TOTAL_INCOME233));
    }
}
function disminuirValor233() {
    _arrayValues233 = JSON.parse(localStorage.getItem("TOTAL233"));
    suma233 = _arrayValues233;
    if (arrayValues233 != ' ' && arrayValues233 > 0) {
        INPUT_TOTAL_INCOME233 = document.getElementById('valor-entrada233').value;
        var arrayUnico = INPUT_TOTAL_INCOME233;  //  llamar del localStorage
        _arrayValues233 = JSON.parse(localStorage.getItem("TOTAL233"));  //  modificar
        let suma1 = parseInt(_arrayValues233) - parseInt(arrayUnico);
        TOTAL_INCOME233 = document.getElementById('233').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL233", JSON.stringify(suma1));
        localStorage.setItem("valores233", JSON.stringify(suma1));
    }
}
// 159
var INPUT_TOTAL_INCOME159;
var _arrayValues159;
var arrayValues159 = JSON.parse(localStorage.getItem("valores159")) || [];
var suma159 = JSON.parse(localStorage.getItem("TOTAL159"));
var TOTAL_INCOME159 = document.getElementById('159').innerText = `${suma159}`;
var elem = document.getElementById('valor-entrada159');
var alert159 = JSON.parse(localStorage.getItem("TOTAL159"));
if (alert159 < 1) {
    alert(` ! ALERTA !    ART. 1281      ${alert159} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor159(); }
}
function agregarValor159() {
    if (arrayValues159 != ' ' && arrayValues159 > 0) {
        INPUT_TOTAL_INCOME159 = document.getElementById('valor-entrada159').value;
        var arrayUnico = INPUT_TOTAL_INCOME159;  //  llamar del localStorage
        _arrayValues159 = JSON.parse(localStorage.getItem("TOTAL159"));  //  modificar
        let suma1 = parseInt(_arrayValues159) + parseInt(arrayUnico);
        TOTAL_INCOME159 = document.getElementById('159').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL159", JSON.stringify(suma1));
        localStorage.setItem("valores159", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME159 = document.getElementById('valor-entrada159').value;
        arrayValues159 = INPUT_TOTAL_INCOME159;  // mandar al localStorage
        localStorage.setItem("valores159", JSON.stringify(arrayValues159));  // modificar total productos
        _arrayValues159 = JSON.parse(localStorage.getItem("valores159"));
        TOTAL_INCOME159 = document.getElementById('159').innerText = `${arrayValues159}` // mandar al localStorage
        localStorage.setItem("TOTAL159", JSON.stringify(INPUT_TOTAL_INCOME159));
    }
}
function disminuirValor159() {
    _arrayValues159 = JSON.parse(localStorage.getItem("TOTAL159"));
    suma159 = _arrayValues159;
    if (arrayValues159 != ' ' && arrayValues159 > 0) {
        INPUT_TOTAL_INCOME159 = document.getElementById('valor-entrada159').value;
        var arrayUnico = INPUT_TOTAL_INCOME159;  //  llamar del localStorage
        _arrayValues159 = JSON.parse(localStorage.getItem("TOTAL159"));  //  modificar
        let suma1 = parseInt(_arrayValues159) - parseInt(arrayUnico);
        TOTAL_INCOME159 = document.getElementById('159').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL159", JSON.stringify(suma1));
        localStorage.setItem("valores159", JSON.stringify(suma1));
    }
}
// 160
var INPUT_TOTAL_INCOME160;
var _arrayValues160;
var arrayValues160 = JSON.parse(localStorage.getItem("valores160")) || [];
var suma160 = JSON.parse(localStorage.getItem("TOTAL160"));
var TOTAL_INCOME160 = document.getElementById('160').innerText = `${suma160}`;
var elem = document.getElementById('valor-entrada160');
var alert160 = JSON.parse(localStorage.getItem("TOTAL160"));
if (alert160 < 1) {
    alert(` ! ALERTA !    ART. 1500      ${alert160} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor160(); }
}
function agregarValor160() {
    if (arrayValues160 != ' ' && arrayValues160 > 0) {
        INPUT_TOTAL_INCOME160 = document.getElementById('valor-entrada160').value;
        var arrayUnico = INPUT_TOTAL_INCOME160;  //  llamar del localStorage
        _arrayValues160 = JSON.parse(localStorage.getItem("TOTAL160"));  //  modificar
        let suma1 = parseInt(_arrayValues160) + parseInt(arrayUnico);
        TOTAL_INCOME160 = document.getElementById('160').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL160", JSON.stringify(suma1));
        localStorage.setItem("valores160", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME160 = document.getElementById('valor-entrada160').value;
        arrayValues160 = INPUT_TOTAL_INCOME160;  // mandar al localStorage
        localStorage.setItem("valores160", JSON.stringify(arrayValues160));  // modificar total productos
        _arrayValues160 = JSON.parse(localStorage.getItem("valores160"));
        TOTAL_INCOME160 = document.getElementById('160').innerText = `${arrayValues160}` // mandar al localStorage
        localStorage.setItem("TOTAL160", JSON.stringify(INPUT_TOTAL_INCOME160));
    }
}
function disminuirValor160() {
    _arrayValues160 = JSON.parse(localStorage.getItem("TOTAL160"));
    suma160 = _arrayValues160;
    if (arrayValues160 != ' ' && arrayValues160 > 0) {
        INPUT_TOTAL_INCOME160 = document.getElementById('valor-entrada160').value;
        var arrayUnico = INPUT_TOTAL_INCOME160;  //  llamar del localStorage
        _arrayValues160 = JSON.parse(localStorage.getItem("TOTAL160"));  //  modificar
        let suma1 = parseInt(_arrayValues160) - parseInt(arrayUnico);
        TOTAL_INCOME160 = document.getElementById('160').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL160", JSON.stringify(suma1));
        localStorage.setItem("valores160", JSON.stringify(suma1));
    }
}
// 161

// 162
var INPUT_TOTAL_INCOME161;
var _arrayValues161;
var arrayValues161 = JSON.parse(localStorage.getItem("valores161")) || [];
var suma161 = JSON.parse(localStorage.getItem("TOTAL161"));
var TOTAL_INCOME161 = document.getElementById('161').innerText = `${suma161}`;
var elem = document.getElementById('valor-entrada161');
var alert161 = JSON.parse(localStorage.getItem("TOTAL161"));
if (alert161 < 1) {
    alert(` ! ALERTA !    ART. 1501      ${alert161} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor161(); }
}
function agregarValor161() {
    if (arrayValues161 != ' ' && arrayValues161 > 0) {
        INPUT_TOTAL_INCOME161 = document.getElementById('valor-entrada161').value;
        var arrayUnico = INPUT_TOTAL_INCOME161;  //  llamar del localStorage
        _arrayValues161 = JSON.parse(localStorage.getItem("TOTAL161"));  //  modificar
        let suma1 = parseInt(_arrayValues161) + parseInt(arrayUnico);
        TOTAL_INCOME161 = document.getElementById('161').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL161", JSON.stringify(suma1));
        localStorage.setItem("valores161", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME161 = document.getElementById('valor-entrada161').value;
        arrayValues161 = INPUT_TOTAL_INCOME161;  // mandar al localStorage
        localStorage.setItem("valores161", JSON.stringify(arrayValues161));  // modificar total productos
        _arrayValues161 = JSON.parse(localStorage.getItem("valores161"));
        TOTAL_INCOME161 = document.getElementById('161').innerText = `${arrayValues161}` // mandar al localStorage
        localStorage.setItem("TOTAL161", JSON.stringify(INPUT_TOTAL_INCOME161));
    }
}
function disminuirValor161() {
    _arrayValues161 = JSON.parse(localStorage.getItem("TOTAL161"));
    suma161 = _arrayValues161;
    if (arrayValues161 != ' ' && arrayValues161 > 0) {
        INPUT_TOTAL_INCOME161 = document.getElementById('valor-entrada161').value;
        var arrayUnico = INPUT_TOTAL_INCOME161;  //  llamar del localStorage
        _arrayValues161 = JSON.parse(localStorage.getItem("TOTAL161"));  //  modificar
        let suma1 = parseInt(_arrayValues161) - parseInt(arrayUnico);
        TOTAL_INCOME161 = document.getElementById('161').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL161", JSON.stringify(suma1));
        localStorage.setItem("valores161", JSON.stringify(suma1));
    }
}
// 163
var INPUT_TOTAL_INCOME162;
var _arrayValues162;
var arrayValues162 = JSON.parse(localStorage.getItem("valores162")) || [];
var suma162 = JSON.parse(localStorage.getItem("TOTAL162"));
var TOTAL_INCOME162 = document.getElementById('162').innerText = `${suma162}`;
var elem = document.getElementById('valor-entrada162');
var alert162 = JSON.parse(localStorage.getItem("TOTAL162"));
if (alert162 < 1) {
    alert(` ! ALERTA !    ART. 1552      ${alert162} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor162(); }
}
function agregarValor162() {
    if (arrayValues162 != ' ' && arrayValues162 > 0) {
        INPUT_TOTAL_INCOME162 = document.getElementById('valor-entrada162').value;
        var arrayUnico = INPUT_TOTAL_INCOME162;  //  llamar del localStorage
        _arrayValues162 = JSON.parse(localStorage.getItem("TOTAL162"));  //  modificar
        let suma1 = parseInt(_arrayValues162) + parseInt(arrayUnico);
        TOTAL_INCOME162 = document.getElementById('162').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL162", JSON.stringify(suma1));
        localStorage.setItem("valores162", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME162 = document.getElementById('valor-entrada162').value;
        arrayValues162 = INPUT_TOTAL_INCOME162;  // mandar al localStorage
        localStorage.setItem("valores162", JSON.stringify(arrayValues162));  // modificar total productos
        _arrayValues162 = JSON.parse(localStorage.getItem("valores162"));
        TOTAL_INCOME162 = document.getElementById('162').innerText = `${arrayValues162}` // mandar al localStorage
        localStorage.setItem("TOTAL162", JSON.stringify(INPUT_TOTAL_INCOME162));
    }
}
function disminuirValor162() {
    _arrayValues162 = JSON.parse(localStorage.getItem("TOTAL162"));
    suma162 = _arrayValues162;
    if (arrayValues162 != ' ' && arrayValues162 > 0) {
        INPUT_TOTAL_INCOME162 = document.getElementById('valor-entrada162').value;
        var arrayUnico = INPUT_TOTAL_INCOME162;  //  llamar del localStorage
        _arrayValues162 = JSON.parse(localStorage.getItem("TOTAL162"));  //  modificar
        let suma1 = parseInt(_arrayValues162) - parseInt(arrayUnico);
        TOTAL_INCOME162 = document.getElementById('162').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL162", JSON.stringify(suma1));
        localStorage.setItem("valores162", JSON.stringify(suma1));
    }
}
// 164
var INPUT_TOTAL_INCOME163;
var _arrayValues163;
var arrayValues163 = JSON.parse(localStorage.getItem("valores163")) || [];
var suma163 = JSON.parse(localStorage.getItem("TOTAL163"));
var TOTAL_INCOME163 = document.getElementById('163').innerText = `${suma163}`;
var elem = document.getElementById('valor-entrada163');
var alert163 = JSON.parse(localStorage.getItem("TOTAL163"));
if (alert163 < 1) {
    alert(` ! ALERTA !    ART. 1553      ${alert163} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor163(); }
}
function agregarValor163() {
    if (arrayValues163 != ' ' && arrayValues163 > 0) {
        INPUT_TOTAL_INCOME163 = document.getElementById('valor-entrada163').value;
        var arrayUnico = INPUT_TOTAL_INCOME163;  //  llamar del localStorage
        _arrayValues163 = JSON.parse(localStorage.getItem("TOTAL163"));  //  modificar
        let suma1 = parseInt(_arrayValues163) + parseInt(arrayUnico);
        TOTAL_INCOME163 = document.getElementById('163').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL163", JSON.stringify(suma1));
        localStorage.setItem("valores163", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME163 = document.getElementById('valor-entrada163').value;
        arrayValues163 = INPUT_TOTAL_INCOME163;  // mandar al localStorage
        localStorage.setItem("valores163", JSON.stringify(arrayValues163));  // modificar total productos
        _arrayValues163 = JSON.parse(localStorage.getItem("valores163"));
        TOTAL_INCOME163 = document.getElementById('163').innerText = `${arrayValues163}` // mandar al localStorage
        localStorage.setItem("TOTAL163", JSON.stringify(INPUT_TOTAL_INCOME163));
    }
}
function disminuirValor163() {
    _arrayValues163 = JSON.parse(localStorage.getItem("TOTAL163"));
    suma163 = _arrayValues163;
    if (arrayValues163 != ' ' && arrayValues163 > 0) {
        INPUT_TOTAL_INCOME163 = document.getElementById('valor-entrada163').value;
        var arrayUnico = INPUT_TOTAL_INCOME163;  //  llamar del localStorage
        _arrayValues163 = JSON.parse(localStorage.getItem("TOTAL163"));  //  modificar
        let suma1 = parseInt(_arrayValues163) - parseInt(arrayUnico);
        TOTAL_INCOME163 = document.getElementById('163').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL163", JSON.stringify(suma1));
        localStorage.setItem("valores163", JSON.stringify(suma1));
    }
}
// 165
var INPUT_TOTAL_INCOME164;
var _arrayValues164;
var arrayValues164 = JSON.parse(localStorage.getItem("valores164")) || [];
var suma164 = JSON.parse(localStorage.getItem("TOTAL164"));
var TOTAL_INCOME164 = document.getElementById('164').innerText = `${suma164}`;
var elem = document.getElementById('valor-entrada164');
var alert164 = JSON.parse(localStorage.getItem("TOTAL164"));
if (alert164 < 1) {
    alert(` ! ALERTA !    ART. 1554      ${alert164} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor164(); }
}
function agregarValor164() {
    if (arrayValues164 != ' ' && arrayValues164 > 0) {
        INPUT_TOTAL_INCOME164 = document.getElementById('valor-entrada164').value;
        var arrayUnico = INPUT_TOTAL_INCOME164;  //  llamar del localStorage
        _arrayValues164 = JSON.parse(localStorage.getItem("TOTAL164"));  //  modificar
        let suma1 = parseInt(_arrayValues164) + parseInt(arrayUnico);
        TOTAL_INCOME164 = document.getElementById('164').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL164", JSON.stringify(suma1));
        localStorage.setItem("valores164", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME164 = document.getElementById('valor-entrada164').value;
        arrayValues164 = INPUT_TOTAL_INCOME164;  // mandar al localStorage
        localStorage.setItem("valores164", JSON.stringify(arrayValues164));  // modificar total productos
        _arrayValues164 = JSON.parse(localStorage.getItem("valores164"));
        TOTAL_INCOME164 = document.getElementById('164').innerText = `${arrayValues164}` // mandar al localStorage
        localStorage.setItem("TOTAL164", JSON.stringify(INPUT_TOTAL_INCOME164));
    }
}
function disminuirValor164() {
    _arrayValues164 = JSON.parse(localStorage.getItem("TOTAL164"));
    suma164 = _arrayValues164;
    if (arrayValues164 != ' ' && arrayValues164 > 0) {
        INPUT_TOTAL_INCOME164 = document.getElementById('valor-entrada164').value;
        var arrayUnico = INPUT_TOTAL_INCOME164;  //  llamar del localStorage
        _arrayValues164 = JSON.parse(localStorage.getItem("TOTAL164"));  //  modificar
        let suma1 = parseInt(_arrayValues164) - parseInt(arrayUnico);
        TOTAL_INCOME164 = document.getElementById('164').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL164", JSON.stringify(suma1));
        localStorage.setItem("valores164", JSON.stringify(suma1));
    }
}
// 166
var INPUT_TOTAL_INCOME165;
var _arrayValues165;
var arrayValues165 = JSON.parse(localStorage.getItem("valores165")) || [];
var suma165 = JSON.parse(localStorage.getItem("TOTAL165"));
var TOTAL_INCOME165 = document.getElementById('165').innerText = `${suma165}`;
var elem = document.getElementById('valor-entrada165');
var alert165 = JSON.parse(localStorage.getItem("TOTAL165"));
if (alert165 < 1) {
    alert(` ! ALERTA !    ART. 1594      ${alert165} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor165(); }
}
function agregarValor165() {
    if (arrayValues165 != ' ' && arrayValues165 > 0) {
        INPUT_TOTAL_INCOME165 = document.getElementById('valor-entrada165').value;
        var arrayUnico = INPUT_TOTAL_INCOME165;  //  llamar del localStorage
        _arrayValues165 = JSON.parse(localStorage.getItem("TOTAL165"));  //  modificar
        let suma1 = parseInt(_arrayValues165) + parseInt(arrayUnico);
        TOTAL_INCOME165 = document.getElementById('165').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL165", JSON.stringify(suma1));
        localStorage.setItem("valores165", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME165 = document.getElementById('valor-entrada165').value;
        arrayValues165 = INPUT_TOTAL_INCOME165;  // mandar al localStorage
        localStorage.setItem("valores165", JSON.stringify(arrayValues165));  // modificar total productos
        _arrayValues165 = JSON.parse(localStorage.getItem("valores165"));
        TOTAL_INCOME165 = document.getElementById('165').innerText = `${arrayValues165}` // mandar al localStorage
        localStorage.setItem("TOTAL165", JSON.stringify(INPUT_TOTAL_INCOME165));
    }
}
function disminuirValor165() {
    _arrayValues165 = JSON.parse(localStorage.getItem("TOTAL165"));
    suma165 = _arrayValues165;
    if (arrayValues165 != ' ' && arrayValues165 > 0) {
        INPUT_TOTAL_INCOME165 = document.getElementById('valor-entrada165').value;
        var arrayUnico = INPUT_TOTAL_INCOME165;  //  llamar del localStorage
        _arrayValues165 = JSON.parse(localStorage.getItem("TOTAL165"));  //  modificar
        let suma1 = parseInt(_arrayValues165) - parseInt(arrayUnico);
        TOTAL_INCOME165 = document.getElementById('165').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL165", JSON.stringify(suma1));
        localStorage.setItem("valores165", JSON.stringify(suma1));
    }
}
// 167
var INPUT_TOTAL_INCOME166;
var _arrayValues166;
var arrayValues166 = JSON.parse(localStorage.getItem("valores166")) || [];
var suma166 = JSON.parse(localStorage.getItem("TOTAL166"));
var TOTAL_INCOME166 = document.getElementById('166').innerText = `${suma166}`;
var elem = document.getElementById('valor-entrada166');
var alert166 = JSON.parse(localStorage.getItem("TOTAL166"));
if (alert166 < 1) {
    alert(` ! ALERTA !    ART. 1599      ${alert166} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor166(); }
}
function agregarValor166() {
    if (arrayValues166 != ' ' && arrayValues166 > 0) {
        INPUT_TOTAL_INCOME166 = document.getElementById('valor-entrada166').value;
        var arrayUnico = INPUT_TOTAL_INCOME166;  //  llamar del localStorage
        _arrayValues166 = JSON.parse(localStorage.getItem("TOTAL166"));  //  modificar
        let suma1 = parseInt(_arrayValues166) + parseInt(arrayUnico);
        TOTAL_INCOME166 = document.getElementById('166').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL166", JSON.stringify(suma1));
        localStorage.setItem("valores166", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME166 = document.getElementById('valor-entrada166').value;
        arrayValues166 = INPUT_TOTAL_INCOME166;  // mandar al localStorage
        localStorage.setItem("valores166", JSON.stringify(arrayValues166));  // modificar total productos
        _arrayValues166 = JSON.parse(localStorage.getItem("valores166"));
        TOTAL_INCOME166 = document.getElementById('166').innerText = `${arrayValues166}` // mandar al localStorage
        localStorage.setItem("TOTAL166", JSON.stringify(INPUT_TOTAL_INCOME166));
    }
}
function disminuirValor166() {
    _arrayValues166 = JSON.parse(localStorage.getItem("TOTAL166"));
    suma166 = _arrayValues166;
    if (arrayValues166 != ' ' && arrayValues166 > 0) {
        INPUT_TOTAL_INCOME166 = document.getElementById('valor-entrada166').value;
        var arrayUnico = INPUT_TOTAL_INCOME166;  //  llamar del localStorage
        _arrayValues166 = JSON.parse(localStorage.getItem("TOTAL166"));  //  modificar
        let suma1 = parseInt(_arrayValues166) - parseInt(arrayUnico);
        TOTAL_INCOME166 = document.getElementById('166').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL166", JSON.stringify(suma1));
        localStorage.setItem("valores166", JSON.stringify(suma1));
    }
}
// 168
var INPUT_TOTAL_INCOME167;
var _arrayValues167;
var arrayValues167 = JSON.parse(localStorage.getItem("valores167")) || [];
var suma167 = JSON.parse(localStorage.getItem("TOTAL167"));
var TOTAL_INCOME167 = document.getElementById('167').innerText = `${suma167}`;
var elem = document.getElementById('valor-entrada167');
var alert167 = JSON.parse(localStorage.getItem("TOTAL167"));
if (alert167 < 1) {
    alert(` ! ALERTA !    ART. 1610      ${alert167} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor167(); }
}
function agregarValor167() {
    if (arrayValues167 != ' ' && arrayValues167 > 0) {
        INPUT_TOTAL_INCOME167 = document.getElementById('valor-entrada167').value;
        var arrayUnico = INPUT_TOTAL_INCOME167;  //  llamar del localStorage
        _arrayValues167 = JSON.parse(localStorage.getItem("TOTAL167"));  //  modificar
        let suma1 = parseInt(_arrayValues167) + parseInt(arrayUnico);
        TOTAL_INCOME167 = document.getElementById('167').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL167", JSON.stringify(suma1));
        localStorage.setItem("valores167", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME167 = document.getElementById('valor-entrada167').value;
        arrayValues167 = INPUT_TOTAL_INCOME167;  // mandar al localStorage
        localStorage.setItem("valores167", JSON.stringify(arrayValues167));  // modificar total productos
        _arrayValues167 = JSON.parse(localStorage.getItem("valores167"));
        TOTAL_INCOME167 = document.getElementById('167').innerText = `${arrayValues167}` // mandar al localStorage
        localStorage.setItem("TOTAL167", JSON.stringify(INPUT_TOTAL_INCOME167));
    }
}
function disminuirValor167() {
    _arrayValues167 = JSON.parse(localStorage.getItem("TOTAL167"));
    suma167 = _arrayValues167;
    if (arrayValues167 != ' ' && arrayValues167 > 0) {
        INPUT_TOTAL_INCOME167 = document.getElementById('valor-entrada167').value;
        var arrayUnico = INPUT_TOTAL_INCOME167;  //  llamar del localStorage
        _arrayValues167 = JSON.parse(localStorage.getItem("TOTAL167"));  //  modificar
        let suma1 = parseInt(_arrayValues167) - parseInt(arrayUnico);
        TOTAL_INCOME167 = document.getElementById('167').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL167", JSON.stringify(suma1));
        localStorage.setItem("valores167", JSON.stringify(suma1));
    }
}
// 169
var INPUT_TOTAL_INCOME168;
var _arrayValues168;
var arrayValues168 = JSON.parse(localStorage.getItem("valores168")) || [];
var suma168 = JSON.parse(localStorage.getItem("TOTAL168"));
var TOTAL_INCOME168 = document.getElementById('168').innerText = `${suma168}`;
var elem = document.getElementById('valor-entrada168');
var alert168 = JSON.parse(localStorage.getItem("TOTAL168"));
if (alert168 < 1) {
    alert(` ! ALERTA !    ART. 2252      ${alert168} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor168(); }
}
function agregarValor168() {
    if (arrayValues168 != ' ' && arrayValues168 > 0) {
        INPUT_TOTAL_INCOME168 = document.getElementById('valor-entrada168').value;
        var arrayUnico = INPUT_TOTAL_INCOME168;  //  llamar del localStorage
        _arrayValues168 = JSON.parse(localStorage.getItem("TOTAL168"));  //  modificar
        let suma1 = parseInt(_arrayValues168) + parseInt(arrayUnico);
        TOTAL_INCOME168 = document.getElementById('168').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL168", JSON.stringify(suma1));
        localStorage.setItem("valores168", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME168 = document.getElementById('valor-entrada168').value;
        arrayValues168 = INPUT_TOTAL_INCOME168;  // mandar al localStorage
        localStorage.setItem("valores168", JSON.stringify(arrayValues168));  // modificar total productos
        _arrayValues168 = JSON.parse(localStorage.getItem("valores168"));
        TOTAL_INCOME168 = document.getElementById('168').innerText = `${arrayValues168}` // mandar al localStorage
        localStorage.setItem("TOTAL168", JSON.stringify(INPUT_TOTAL_INCOME168));
    }
}
function disminuirValor168() {
    _arrayValues168 = JSON.parse(localStorage.getItem("TOTAL168"));
    suma168 = _arrayValues168;
    if (arrayValues168 != ' ' && arrayValues168 > 0) {
        INPUT_TOTAL_INCOME168 = document.getElementById('valor-entrada168').value;
        var arrayUnico = INPUT_TOTAL_INCOME168;  //  llamar del localStorage
        _arrayValues168 = JSON.parse(localStorage.getItem("TOTAL168"));  //  modificar
        let suma1 = parseInt(_arrayValues168) - parseInt(arrayUnico);
        TOTAL_INCOME168 = document.getElementById('168').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL168", JSON.stringify(suma1));
        localStorage.setItem("valores168", JSON.stringify(suma1));
    }
}
// 170
var INPUT_TOTAL_INCOME169;
var _arrayValues169;
var arrayValues169 = JSON.parse(localStorage.getItem("valores169")) || [];
var suma169 = JSON.parse(localStorage.getItem("TOTAL169"));
var TOTAL_INCOME169 = document.getElementById('169').innerText = `${suma169}`;
var elem = document.getElementById('valor-entrada169');
var alert169 = JSON.parse(localStorage.getItem("TOTAL169"));
if (alert169 < 1) {
    alert(` ! ALERTA !    ART. 2253      ${alert169} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor169(); }
}
function agregarValor169() {
    if (arrayValues169 != ' ' && arrayValues169 > 0) {
        INPUT_TOTAL_INCOME169 = document.getElementById('valor-entrada169').value;
        var arrayUnico = INPUT_TOTAL_INCOME169;  //  llamar del localStorage
        _arrayValues169 = JSON.parse(localStorage.getItem("TOTAL169"));  //  modificar
        let suma1 = parseInt(_arrayValues169) + parseInt(arrayUnico);
        TOTAL_INCOME169 = document.getElementById('169').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL169", JSON.stringify(suma1));
        localStorage.setItem("valores169", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME169 = document.getElementById('valor-entrada169').value;
        arrayValues169 = INPUT_TOTAL_INCOME169;  // mandar al localStorage
        localStorage.setItem("valores169", JSON.stringify(arrayValues169));  // modificar total productos
        _arrayValues169 = JSON.parse(localStorage.getItem("valores169"));
        TOTAL_INCOME169 = document.getElementById('169').innerText = `${arrayValues169}` // mandar al localStorage
        localStorage.setItem("TOTAL169", JSON.stringify(INPUT_TOTAL_INCOME169));
    }
}
function disminuirValor169() {
    _arrayValues169 = JSON.parse(localStorage.getItem("TOTAL169"));
    suma169 = _arrayValues169;
    if (arrayValues169 != ' ' && arrayValues169 > 0) {
        INPUT_TOTAL_INCOME169 = document.getElementById('valor-entrada169').value;
        var arrayUnico = INPUT_TOTAL_INCOME169;  //  llamar del localStorage
        _arrayValues169 = JSON.parse(localStorage.getItem("TOTAL169"));  //  modificar
        let suma1 = parseInt(_arrayValues169) - parseInt(arrayUnico);
        TOTAL_INCOME169 = document.getElementById('169').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL169", JSON.stringify(suma1));
        localStorage.setItem("valores169", JSON.stringify(suma1));
    }
}
// 171
var INPUT_TOTAL_INCOME170;
var _arrayValues170;
var arrayValues170 = JSON.parse(localStorage.getItem("valores170")) || [];
var suma170 = JSON.parse(localStorage.getItem("TOTAL170"));
var TOTAL_INCOME170 = document.getElementById('170').innerText = `${suma170}`;
var elem = document.getElementById('valor-entrada170');
var alert170 = JSON.parse(localStorage.getItem("TOTAL170"));
if (alert170 < 1) {
    alert(` ! ALERTA !    ART. 2254      ${alert170} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor170(); }
}
function agregarValor170() {
    if (arrayValues170 != ' ' && arrayValues170 > 0) {
        INPUT_TOTAL_INCOME170 = document.getElementById('valor-entrada170').value;
        var arrayUnico = INPUT_TOTAL_INCOME170;  //  llamar del localStorage
        _arrayValues170 = JSON.parse(localStorage.getItem("TOTAL170"));  //  modificar
        let suma1 = parseInt(_arrayValues170) + parseInt(arrayUnico);
        TOTAL_INCOME170 = document.getElementById('170').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL170", JSON.stringify(suma1));
        localStorage.setItem("valores170", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME170 = document.getElementById('valor-entrada170').value;
        arrayValues170 = INPUT_TOTAL_INCOME170;  // mandar al localStorage
        localStorage.setItem("valores170", JSON.stringify(arrayValues170));  // modificar total productos
        _arrayValues170 = JSON.parse(localStorage.getItem("valores170"));
        TOTAL_INCOME170 = document.getElementById('170').innerText = `${arrayValues170}` // mandar al localStorage
        localStorage.setItem("TOTAL170", JSON.stringify(INPUT_TOTAL_INCOME170));
    }
}
function disminuirValor170() {
    _arrayValues170 = JSON.parse(localStorage.getItem("TOTAL170"));
    suma170 = _arrayValues170;
    if (arrayValues170 != ' ' && arrayValues170 > 0) {
        INPUT_TOTAL_INCOME170 = document.getElementById('valor-entrada170').value;
        var arrayUnico = INPUT_TOTAL_INCOME170;  //  llamar del localStorage
        _arrayValues170 = JSON.parse(localStorage.getItem("TOTAL170"));  //  modificar
        let suma1 = parseInt(_arrayValues170) - parseInt(arrayUnico);
        TOTAL_INCOME170 = document.getElementById('170').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL170", JSON.stringify(suma1));
        localStorage.setItem("valores170", JSON.stringify(suma1));
    }
}
// 172
var INPUT_TOTAL_INCOME171;
var _arrayValues171;
var arrayValues171 = JSON.parse(localStorage.getItem("valores171")) || [];
var suma171 = JSON.parse(localStorage.getItem("TOTAL171"));
var TOTAL_INCOME171 = document.getElementById('171').innerText = `${suma171}`;
var elem = document.getElementById('valor-entrada171');
var alert171 = JSON.parse(localStorage.getItem("TOTAL171"));
if (alert171 < 1) {
    alert(` ! ALERTA !    ART. 2270      ${alert171} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor171(); }
}
function agregarValor171() {
    if (arrayValues171 != ' ' && arrayValues171 > 0) {
        INPUT_TOTAL_INCOME171 = document.getElementById('valor-entrada171').value;
        var arrayUnico = INPUT_TOTAL_INCOME171;  //  llamar del localStorage
        _arrayValues171 = JSON.parse(localStorage.getItem("TOTAL171"));  //  modificar
        let suma1 = parseInt(_arrayValues171) + parseInt(arrayUnico);
        TOTAL_INCOME171 = document.getElementById('171').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL171", JSON.stringify(suma1));
        localStorage.setItem("valores171", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME171 = document.getElementById('valor-entrada171').value;
        arrayValues171 = INPUT_TOTAL_INCOME171;  // mandar al localStorage
        localStorage.setItem("valores171", JSON.stringify(arrayValues171));  // modificar total productos
        _arrayValues171 = JSON.parse(localStorage.getItem("valores171"));
        TOTAL_INCOME171 = document.getElementById('171').innerText = `${arrayValues171}` // mandar al localStorage
        localStorage.setItem("TOTAL171", JSON.stringify(INPUT_TOTAL_INCOME171));
    }
}
function disminuirValor171() {
    _arrayValues171 = JSON.parse(localStorage.getItem("TOTAL171"));
    suma171 = _arrayValues171;
    if (arrayValues171 != ' ' && arrayValues171 > 0) {
        INPUT_TOTAL_INCOME171 = document.getElementById('valor-entrada171').value;
        var arrayUnico = INPUT_TOTAL_INCOME171;  //  llamar del localStorage
        _arrayValues171 = JSON.parse(localStorage.getItem("TOTAL171"));  //  modificar
        let suma1 = parseInt(_arrayValues171) - parseInt(arrayUnico);
        TOTAL_INCOME171 = document.getElementById('171').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL171", JSON.stringify(suma1));
        localStorage.setItem("valores171", JSON.stringify(suma1));
    }
}
// 173
var INPUT_TOTAL_INCOME172;
var _arrayValues172;
var arrayValues172 = JSON.parse(localStorage.getItem("valores172")) || [];
var suma172 = JSON.parse(localStorage.getItem("TOTAL172"));
var TOTAL_INCOME172 = document.getElementById('172').innerText = `${suma172}`;
var elem = document.getElementById('valor-entrada172');
var alert172 = JSON.parse(localStorage.getItem("TOTAL172"));
if (alert172 < 1) {
    alert(` ! ALERTA !    ART. 2271      ${alert172} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor172(); }
}
function agregarValor172() {
    if (arrayValues172 != ' ' && arrayValues172 > 0) {
        INPUT_TOTAL_INCOME172 = document.getElementById('valor-entrada172').value;
        var arrayUnico = INPUT_TOTAL_INCOME172;  //  llamar del localStorage
        _arrayValues172 = JSON.parse(localStorage.getItem("TOTAL172"));  //  modificar
        let suma1 = parseInt(_arrayValues172) + parseInt(arrayUnico);
        TOTAL_INCOME172 = document.getElementById('172').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL172", JSON.stringify(suma1));
        localStorage.setItem("valores172", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME172 = document.getElementById('valor-entrada172').value;
        arrayValues172 = INPUT_TOTAL_INCOME172;  // mandar al localStorage
        localStorage.setItem("valores172", JSON.stringify(arrayValues172));  // modificar total productos
        _arrayValues172 = JSON.parse(localStorage.getItem("valores172"));
        TOTAL_INCOME172 = document.getElementById('172').innerText = `${arrayValues172}` // mandar al localStorage
        localStorage.setItem("TOTAL172", JSON.stringify(INPUT_TOTAL_INCOME172));
    }
}
function disminuirValor172() {
    _arrayValues172 = JSON.parse(localStorage.getItem("TOTAL172"));
    suma172 = _arrayValues172;
    if (arrayValues172 != ' ' && arrayValues172 > 0) {
        INPUT_TOTAL_INCOME172 = document.getElementById('valor-entrada172').value;
        var arrayUnico = INPUT_TOTAL_INCOME172;  //  llamar del localStorage
        _arrayValues172 = JSON.parse(localStorage.getItem("TOTAL172"));  //  modificar
        let suma1 = parseInt(_arrayValues172) - parseInt(arrayUnico);
        TOTAL_INCOME172 = document.getElementById('172').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL172", JSON.stringify(suma1));
        localStorage.setItem("valores172", JSON.stringify(suma1));
    }
}
// 174
var INPUT_TOTAL_INCOME173;
var _arrayValues173;
var arrayValues173 = JSON.parse(localStorage.getItem("valores173")) || [];
var suma173 = JSON.parse(localStorage.getItem("TOTAL173"));
var TOTAL_INCOME173 = document.getElementById('173').innerText = `${suma173}`;
var elem = document.getElementById('valor-entrada173');
var alert173 = JSON.parse(localStorage.getItem("TOTAL173"));
if (alert173 < 1) {
    alert(` ! ALERTA !    ART. 2272      ${alert173} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor173(); }
}
function agregarValor173() {
    if (arrayValues173 != ' ' && arrayValues173 > 0) {
        INPUT_TOTAL_INCOME173 = document.getElementById('valor-entrada173').value;
        var arrayUnico = INPUT_TOTAL_INCOME173;  //  llamar del localStorage
        _arrayValues173 = JSON.parse(localStorage.getItem("TOTAL173"));  //  modificar
        let suma1 = parseInt(_arrayValues173) + parseInt(arrayUnico);
        TOTAL_INCOME173 = document.getElementById('173').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL173", JSON.stringify(suma1));
        localStorage.setItem("valores173", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME173 = document.getElementById('valor-entrada173').value;
        arrayValues173 = INPUT_TOTAL_INCOME173;  // mandar al localStorage
        localStorage.setItem("valores173", JSON.stringify(arrayValues173));  // modificar total productos
        _arrayValues173 = JSON.parse(localStorage.getItem("valores173"));
        TOTAL_INCOME173 = document.getElementById('173').innerText = `${arrayValues173}` // mandar al localStorage
        localStorage.setItem("TOTAL173", JSON.stringify(INPUT_TOTAL_INCOME173));
    }
}
function disminuirValor173() {
    _arrayValues173 = JSON.parse(localStorage.getItem("TOTAL173"));
    suma173 = _arrayValues173;
    if (arrayValues173 != ' ' && arrayValues173 > 0) {
        INPUT_TOTAL_INCOME173 = document.getElementById('valor-entrada173').value;
        var arrayUnico = INPUT_TOTAL_INCOME173;  //  llamar del localStorage
        _arrayValues173 = JSON.parse(localStorage.getItem("TOTAL173"));  //  modificar
        let suma1 = parseInt(_arrayValues173) - parseInt(arrayUnico);
        TOTAL_INCOME173 = document.getElementById('173').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL173", JSON.stringify(suma1));
        localStorage.setItem("valores173", JSON.stringify(suma1));
    }
}
// 175
var INPUT_TOTAL_INCOME174;
var _arrayValues174;
var arrayValues174 = JSON.parse(localStorage.getItem("valores174")) || [];
var suma174 = JSON.parse(localStorage.getItem("TOTAL174"));
var TOTAL_INCOME174 = document.getElementById('174').innerText = `${suma174}`;
var elem = document.getElementById('valor-entrada174');
var alert174 = JSON.parse(localStorage.getItem("TOTAL174"));
if (alert174 < 1) {
    alert(` ! ALERTA !   ART. 2273    ${alert174} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor174(); }
}
function agregarValor174() {
    if (arrayValues174 != ' ' && arrayValues174 > 0) {
        INPUT_TOTAL_INCOME174 = document.getElementById('valor-entrada174').value;
        var arrayUnico = INPUT_TOTAL_INCOME174;  //  llamar del localStorage
        _arrayValues174 = JSON.parse(localStorage.getItem("TOTAL174"));  //  modificar
        let suma1 = parseInt(_arrayValues174) + parseInt(arrayUnico);
        TOTAL_INCOME174 = document.getElementById('174').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL174", JSON.stringify(suma1));
        localStorage.setItem("valores174", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME174 = document.getElementById('valor-entrada174').value;
        arrayValues174 = INPUT_TOTAL_INCOME174;  // mandar al localStorage
        localStorage.setItem("valores174", JSON.stringify(arrayValues174));  // modificar total productos
        _arrayValues174 = JSON.parse(localStorage.getItem("valores174"));
        TOTAL_INCOME174 = document.getElementById('174').innerText = `${arrayValues174}` // mandar al localStorage
        localStorage.setItem("TOTAL174", JSON.stringify(INPUT_TOTAL_INCOME174));
    }
}
function disminuirValor174() {
    _arrayValues174 = JSON.parse(localStorage.getItem("TOTAL174"));
    suma174 = _arrayValues174;
    if (arrayValues174 != ' ' && arrayValues174 > 0) {
        INPUT_TOTAL_INCOME174 = document.getElementById('valor-entrada174').value;
        var arrayUnico = INPUT_TOTAL_INCOME174;  //  llamar del localStorage
        _arrayValues174 = JSON.parse(localStorage.getItem("TOTAL174"));  //  modificar
        let suma1 = parseInt(_arrayValues174) - parseInt(arrayUnico);
        TOTAL_INCOME174 = document.getElementById('174').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL174", JSON.stringify(suma1));
        localStorage.setItem("valores174", JSON.stringify(suma1));
    }
}
// 176
var INPUT_TOTAL_INCOME175;
var _arrayValues175;
var arrayValues175 = JSON.parse(localStorage.getItem("valores175")) || [];
var suma175 = JSON.parse(localStorage.getItem("TOTAL175"));
var TOTAL_INCOME175 = document.getElementById('175').innerText = `${suma175}`;
var elem = document.getElementById('valor-entrada175');
var alert175 = JSON.parse(localStorage.getItem("TOTAL175"));
if (alert175 < 1) {
    alert(` ! ALERTA !   ART. 2275    ${alert175} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor175(); }
}
function agregarValor175() {
    if (arrayValues175 != ' ' && arrayValues175 > 0) {
        INPUT_TOTAL_INCOME175 = document.getElementById('valor-entrada175').value;
        var arrayUnico = INPUT_TOTAL_INCOME175;  //  llamar del localStorage
        _arrayValues175 = JSON.parse(localStorage.getItem("TOTAL175"));  //  modificar
        let suma1 = parseInt(_arrayValues175) + parseInt(arrayUnico);
        TOTAL_INCOME175 = document.getElementById('175').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL175", JSON.stringify(suma1));
        localStorage.setItem("valores175", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME175 = document.getElementById('valor-entrada175').value;
        arrayValues175 = INPUT_TOTAL_INCOME175;  // mandar al localStorage
        localStorage.setItem("valores175", JSON.stringify(arrayValues175));  // modificar total productos
        _arrayValues175 = JSON.parse(localStorage.getItem("valores175"));
        TOTAL_INCOME175 = document.getElementById('175').innerText = `${arrayValues175}` // mandar al localStorage
        localStorage.setItem("TOTAL175", JSON.stringify(INPUT_TOTAL_INCOME175));
    }
}
function disminuirValor175() {
    _arrayValues175 = JSON.parse(localStorage.getItem("TOTAL175"));
    suma175 = _arrayValues175;
    if (arrayValues175 != ' ' && arrayValues175 > 0) {
        INPUT_TOTAL_INCOME175 = document.getElementById('valor-entrada175').value;
        var arrayUnico = INPUT_TOTAL_INCOME175;  //  llamar del localStorage
        _arrayValues175 = JSON.parse(localStorage.getItem("TOTAL175"));  //  modificar
        let suma1 = parseInt(_arrayValues175) - parseInt(arrayUnico);
        TOTAL_INCOME175 = document.getElementById('175').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL175", JSON.stringify(suma1));
        localStorage.setItem("valores175", JSON.stringify(suma1));
    }
}
// 177
var INPUT_TOTAL_INCOME176;
var _arrayValues176;
var arrayValues176 = JSON.parse(localStorage.getItem("valores176")) || [];
var suma176 = JSON.parse(localStorage.getItem("TOTAL176"));
var TOTAL_INCOME176 = document.getElementById('176').innerText = `${suma176}`;
var elem = document.getElementById('valor-entrada176');
var alert176 = JSON.parse(localStorage.getItem("TOTAL176"));
if (alert176 < 1) {
    alert(` ! ALERTA !   ART. 2276    ${alert176} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor176(); }
}
function agregarValor176() {
    if (arrayValues176 != ' ' && arrayValues176 > 0) {
        INPUT_TOTAL_INCOME176 = document.getElementById('valor-entrada176').value;
        var arrayUnico = INPUT_TOTAL_INCOME176;  //  llamar del localStorage
        _arrayValues176 = JSON.parse(localStorage.getItem("TOTAL176"));  //  modificar
        let suma1 = parseInt(_arrayValues176) + parseInt(arrayUnico);
        TOTAL_INCOME176 = document.getElementById('176').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL176", JSON.stringify(suma1));
        localStorage.setItem("valores176", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME176 = document.getElementById('valor-entrada176').value;
        arrayValues176 = INPUT_TOTAL_INCOME176;  // mandar al localStorage
        localStorage.setItem("valores176", JSON.stringify(arrayValues176));  // modificar total productos
        _arrayValues176 = JSON.parse(localStorage.getItem("valores176"));
        TOTAL_INCOME176 = document.getElementById('176').innerText = `${arrayValues176}` // mandar al localStorage
        localStorage.setItem("TOTAL176", JSON.stringify(INPUT_TOTAL_INCOME176));
    }
}
function disminuirValor176() {
    _arrayValues176 = JSON.parse(localStorage.getItem("TOTAL176"));
    suma176 = _arrayValues176;
    if (arrayValues176 != ' ' && arrayValues176 > 0) {
        INPUT_TOTAL_INCOME176 = document.getElementById('valor-entrada176').value;
        var arrayUnico = INPUT_TOTAL_INCOME176;  //  llamar del localStorage
        _arrayValues176 = JSON.parse(localStorage.getItem("TOTAL176"));  //  modificar
        let suma1 = parseInt(_arrayValues176) - parseInt(arrayUnico);
        TOTAL_INCOME176 = document.getElementById('176').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL176", JSON.stringify(suma1));
        localStorage.setItem("valores176", JSON.stringify(suma1));
    }
}
// 178
var INPUT_TOTAL_INCOME177;
var _arrayValues177;
var arrayValues177 = JSON.parse(localStorage.getItem("valores177")) || [];
var suma177 = JSON.parse(localStorage.getItem("TOTAL177"));
var TOTAL_INCOME177 = document.getElementById('177').innerText = `${suma177}`;
var elem = document.getElementById('valor-entrada177');
var alert177 = JSON.parse(localStorage.getItem("TOTAL177"));
if (alert177 < 1) {
    alert(` ! ALERTA !   ART. 2277    ${alert177} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor177(); }
}
function agregarValor177() {
    if (arrayValues177 != ' ' && arrayValues177 > 0) {
        INPUT_TOTAL_INCOME177 = document.getElementById('valor-entrada177').value;
        var arrayUnico = INPUT_TOTAL_INCOME177;  //  llamar del localStorage
        _arrayValues177 = JSON.parse(localStorage.getItem("TOTAL177"));  //  modificar
        let suma1 = parseInt(_arrayValues177) + parseInt(arrayUnico);
        TOTAL_INCOME177 = document.getElementById('177').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL177", JSON.stringify(suma1));
        localStorage.setItem("valores177", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME177 = document.getElementById('valor-entrada177').value;
        arrayValues177 = INPUT_TOTAL_INCOME177;  // mandar al localStorage
        localStorage.setItem("valores177", JSON.stringify(arrayValues177));  // modificar total productos
        _arrayValues177 = JSON.parse(localStorage.getItem("valores177"));
        TOTAL_INCOME177 = document.getElementById('177').innerText = `${arrayValues177}` // mandar al localStorage
        localStorage.setItem("TOTAL177", JSON.stringify(INPUT_TOTAL_INCOME177));
    }
}
function disminuirValor177() {
    _arrayValues177 = JSON.parse(localStorage.getItem("TOTAL177"));
    suma177 = _arrayValues177;
    if (arrayValues177 != ' ' && arrayValues177 > 0) {
        INPUT_TOTAL_INCOME177 = document.getElementById('valor-entrada177').value;
        var arrayUnico = INPUT_TOTAL_INCOME177;  //  llamar del localStorage
        _arrayValues177 = JSON.parse(localStorage.getItem("TOTAL177"));  //  modificar
        let suma1 = parseInt(_arrayValues177) - parseInt(arrayUnico);
        TOTAL_INCOME177 = document.getElementById('177').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL177", JSON.stringify(suma1));
        localStorage.setItem("valores177", JSON.stringify(suma1));
    }
}
// 179
var INPUT_TOTAL_INCOME178;
var _arrayValues178;
var arrayValues178 = JSON.parse(localStorage.getItem("valores178")) || [];
var suma178 = JSON.parse(localStorage.getItem("TOTAL178"));
var TOTAL_INCOME178 = document.getElementById('178').innerText = `${suma178}`;
var elem = document.getElementById('valor-entrada178');
var alert178 = JSON.parse(localStorage.getItem("TOTAL178"));
if (alert178 < 1) {
    alert(` ! ALERTA !   ART. 2279    ${alert178} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor178(); }
}
function agregarValor178() {
    if (arrayValues178 != ' ' && arrayValues178 > 0) {
        INPUT_TOTAL_INCOME178 = document.getElementById('valor-entrada178').value;
        var arrayUnico = INPUT_TOTAL_INCOME178;  //  llamar del localStorage
        _arrayValues178 = JSON.parse(localStorage.getItem("TOTAL178"));  //  modificar
        let suma1 = parseInt(_arrayValues178) + parseInt(arrayUnico);
        TOTAL_INCOME178 = document.getElementById('178').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL178", JSON.stringify(suma1));
        localStorage.setItem("valores178", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME178 = document.getElementById('valor-entrada178').value;
        arrayValues178 = INPUT_TOTAL_INCOME178;  // mandar al localStorage
        localStorage.setItem("valores178", JSON.stringify(arrayValues178));  // modificar total productos
        _arrayValues178 = JSON.parse(localStorage.getItem("valores178"));
        TOTAL_INCOME178 = document.getElementById('178').innerText = `${arrayValues178}` // mandar al localStorage
        localStorage.setItem("TOTAL178", JSON.stringify(INPUT_TOTAL_INCOME178));
    }
}
function disminuirValor178() {
    _arrayValues178 = JSON.parse(localStorage.getItem("TOTAL178"));
    suma178 = _arrayValues178;
    if (arrayValues178 != ' ' && arrayValues178 > 0) {
        INPUT_TOTAL_INCOME178 = document.getElementById('valor-entrada178').value;
        var arrayUnico = INPUT_TOTAL_INCOME178;  //  llamar del localStorage
        _arrayValues178 = JSON.parse(localStorage.getItem("TOTAL178"));  //  modificar
        let suma1 = parseInt(_arrayValues178) - parseInt(arrayUnico);
        TOTAL_INCOME178 = document.getElementById('178').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL178", JSON.stringify(suma1));
        localStorage.setItem("valores178", JSON.stringify(suma1));
    }
}
// 180
var INPUT_TOTAL_INCOME179;
var _arrayValues179;
var arrayValues179 = JSON.parse(localStorage.getItem("valores179")) || [];
var suma179 = JSON.parse(localStorage.getItem("TOTAL179"));
var TOTAL_INCOME179 = document.getElementById('179').innerText = `${suma179}`;
var elem = document.getElementById('valor-entrada179');
var alert179 = JSON.parse(localStorage.getItem("TOTAL179"));
if (alert179 < 1) {
    alert(` ! ALERTA !   ART. 2280    ${alert179} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor179(); }
}
function agregarValor179() {
    if (arrayValues179 != ' ' && arrayValues179 > 0) {
        INPUT_TOTAL_INCOME179 = document.getElementById('valor-entrada179').value;
        var arrayUnico = INPUT_TOTAL_INCOME179;  //  llamar del localStorage
        _arrayValues179 = JSON.parse(localStorage.getItem("TOTAL179"));  //  modificar
        let suma1 = parseInt(_arrayValues179) + parseInt(arrayUnico);
        TOTAL_INCOME179 = document.getElementById('179').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL179", JSON.stringify(suma1));
        localStorage.setItem("valores179", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME179 = document.getElementById('valor-entrada179').value;
        arrayValues179 = INPUT_TOTAL_INCOME179;  // mandar al localStorage
        localStorage.setItem("valores179", JSON.stringify(arrayValues179));  // modificar total productos
        _arrayValues179 = JSON.parse(localStorage.getItem("valores179"));
        TOTAL_INCOME179 = document.getElementById('179').innerText = `${arrayValues179}` // mandar al localStorage
        localStorage.setItem("TOTAL179", JSON.stringify(INPUT_TOTAL_INCOME179));
    }
}
function disminuirValor179() {
    _arrayValues179 = JSON.parse(localStorage.getItem("TOTAL179"));
    suma179 = _arrayValues179;
    if (arrayValues179 != ' ' && arrayValues179 > 0) {
        INPUT_TOTAL_INCOME179 = document.getElementById('valor-entrada179').value;
        var arrayUnico = INPUT_TOTAL_INCOME179;  //  llamar del localStorage
        _arrayValues179 = JSON.parse(localStorage.getItem("TOTAL179"));  //  modificar
        let suma1 = parseInt(_arrayValues179) - parseInt(arrayUnico);
        TOTAL_INCOME179 = document.getElementById('179').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL179", JSON.stringify(suma1));
        localStorage.setItem("valores179", JSON.stringify(suma1));
    }
}
// 181
var INPUT_TOTAL_INCOME180;
var _arrayValues180;
var arrayValues180 = JSON.parse(localStorage.getItem("valores180")) || [];
var suma180 = JSON.parse(localStorage.getItem("TOTAL180"));
var TOTAL_INCOME180 = document.getElementById('180').innerText = `${suma180}`;
var elem = document.getElementById('valor-entrada180');
var alert180 = JSON.parse(localStorage.getItem("TOTAL180"));
if (alert180 < 1) {
    alert(` ! ALERTA !   ART. 2281    ${alert180} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor180(); }
}
function agregarValor180() {
    if (arrayValues180 != ' ' && arrayValues180 > 0) {
        INPUT_TOTAL_INCOME180 = document.getElementById('valor-entrada180').value;
        var arrayUnico = INPUT_TOTAL_INCOME180;  //  llamar del localStorage
        _arrayValues180 = JSON.parse(localStorage.getItem("TOTAL180"));  //  modificar
        let suma1 = parseInt(_arrayValues180) + parseInt(arrayUnico);
        TOTAL_INCOME180 = document.getElementById('180').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL180", JSON.stringify(suma1));
        localStorage.setItem("valores180", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME180 = document.getElementById('valor-entrada180').value;
        arrayValues180 = INPUT_TOTAL_INCOME180;  // mandar al localStorage
        localStorage.setItem("valores180", JSON.stringify(arrayValues180));  // modificar total productos
        _arrayValues180 = JSON.parse(localStorage.getItem("valores180"));
        TOTAL_INCOME180 = document.getElementById('180').innerText = `${arrayValues180}` // mandar al localStorage
        localStorage.setItem("TOTAL180", JSON.stringify(INPUT_TOTAL_INCOME180));
    }
}
function disminuirValor180() {
    _arrayValues180 = JSON.parse(localStorage.getItem("TOTAL180"));
    suma180 = _arrayValues180;
    if (arrayValues180 != ' ' && arrayValues180 > 0) {
        INPUT_TOTAL_INCOME180 = document.getElementById('valor-entrada180').value;
        var arrayUnico = INPUT_TOTAL_INCOME180;  //  llamar del localStorage
        _arrayValues180 = JSON.parse(localStorage.getItem("TOTAL180"));  //  modificar
        let suma1 = parseInt(_arrayValues180) - parseInt(arrayUnico);
        TOTAL_INCOME180 = document.getElementById('180').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL180", JSON.stringify(suma1));
        localStorage.setItem("valores180", JSON.stringify(suma1));
    }
}
// 182
// 122
var INPUT_TOTAL_INCOME181;
var _arrayValues181;
var arrayValues181 = JSON.parse(localStorage.getItem("valores181")) || [];
var suma181 = JSON.parse(localStorage.getItem("TOTAL181"));
var TOTAL_INCOME181 = document.getElementById('181').innerText = `${suma181}`;
var elem = document.getElementById('valor-entrada181');
var alert181 = JSON.parse(localStorage.getItem("TOTAL181"));
if (alert181 < 1) {
    alert(` ! ALERTA !    ART. 2282      ${alert181} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor181(); }
}
function agregarValor181() {
    if (arrayValues181 != ' ' && arrayValues181 > 0) {
        INPUT_TOTAL_INCOME181 = document.getElementById('valor-entrada181').value;
        var arrayUnico = INPUT_TOTAL_INCOME181;  //  llamar del localStorage
        _arrayValues181 = JSON.parse(localStorage.getItem("TOTAL181"));  //  modificar
        let suma1 = parseInt(_arrayValues181) + parseInt(arrayUnico);
        TOTAL_INCOME181 = document.getElementById('181').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL181", JSON.stringify(suma1));
        localStorage.setItem("valores181", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME181 = document.getElementById('valor-entrada181').value;
        arrayValues181 = INPUT_TOTAL_INCOME181;  // mandar al localStorage
        localStorage.setItem("valores181", JSON.stringify(arrayValues181));  // modificar total productos
        _arrayValues181 = JSON.parse(localStorage.getItem("valores181"));
        TOTAL_INCOME181 = document.getElementById('181').innerText = `${arrayValues181}` // mandar al localStorage
        localStorage.setItem("TOTAL181", JSON.stringify(INPUT_TOTAL_INCOME181));
    }
}
function disminuirValor181() {
    _arrayValues181 = JSON.parse(localStorage.getItem("TOTAL181"));
    suma181 = _arrayValues181;
    if (arrayValues181 != ' ' && arrayValues181 > 0) {
        INPUT_TOTAL_INCOME181 = document.getElementById('valor-entrada181').value;
        var arrayUnico = INPUT_TOTAL_INCOME181;  //  llamar del localStorage
        _arrayValues181 = JSON.parse(localStorage.getItem("TOTAL181"));  //  modificar
        let suma1 = parseInt(_arrayValues181) - parseInt(arrayUnico);
        TOTAL_INCOME181 = document.getElementById('181').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL181", JSON.stringify(suma1));
        localStorage.setItem("valores181", JSON.stringify(suma1));
    }
}
// 183
var INPUT_TOTAL_INCOME182;
var _arrayValues182;
var arrayValues182 = JSON.parse(localStorage.getItem("valores182")) || [];
var suma182 = JSON.parse(localStorage.getItem("TOTAL182"));
var TOTAL_INCOME182 = document.getElementById('182').innerText = `${suma182}`;
var elem = document.getElementById('valor-entrada182');
var alert182 = JSON.parse(localStorage.getItem("TOTAL182"));
if (alert182 < 1) {
    alert(` ! ALERTA !    ART. 2290      ${alert182} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor182(); }
}
function agregarValor182() {
    if (arrayValues182 != ' ' && arrayValues182 > 0) {
        INPUT_TOTAL_INCOME182 = document.getElementById('valor-entrada182').value;
        var arrayUnico = INPUT_TOTAL_INCOME182;  //  llamar del localStorage
        _arrayValues182 = JSON.parse(localStorage.getItem("TOTAL182"));  //  modificar
        let suma1 = parseInt(_arrayValues182) + parseInt(arrayUnico);
        TOTAL_INCOME182 = document.getElementById('182').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL182", JSON.stringify(suma1));
        localStorage.setItem("valores182", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME182 = document.getElementById('valor-entrada182').value;
        arrayValues182 = INPUT_TOTAL_INCOME182;  // mandar al localStorage
        localStorage.setItem("valores182", JSON.stringify(arrayValues182));  // modificar total productos
        _arrayValues182 = JSON.parse(localStorage.getItem("valores182"));
        TOTAL_INCOME182 = document.getElementById('182').innerText = `${arrayValues182}` // mandar al localStorage
        localStorage.setItem("TOTAL182", JSON.stringify(INPUT_TOTAL_INCOME182));
    }
}
function disminuirValor182() {
    _arrayValues182 = JSON.parse(localStorage.getItem("TOTAL182"));
    suma182 = _arrayValues182;
    if (arrayValues182 != ' ' && arrayValues182 > 0) {
        INPUT_TOTAL_INCOME182 = document.getElementById('valor-entrada182').value;
        var arrayUnico = INPUT_TOTAL_INCOME182;  //  llamar del localStorage
        _arrayValues182 = JSON.parse(localStorage.getItem("TOTAL182"));  //  modificar
        let suma1 = parseInt(_arrayValues182) - parseInt(arrayUnico);
        TOTAL_INCOME182 = document.getElementById('182').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL182", JSON.stringify(suma1));
        localStorage.setItem("valores182", JSON.stringify(suma1));
    }
}
// 184
var INPUT_TOTAL_INCOME183;
var _arrayValues183;
var arrayValues183 = JSON.parse(localStorage.getItem("valores183")) || [];
var suma183 = JSON.parse(localStorage.getItem("TOTAL183"));
var TOTAL_INCOME183 = document.getElementById('183').innerText = `${suma183}`;
var elem = document.getElementById('valor-entrada183');
var alert183 = JSON.parse(localStorage.getItem("TOTAL183"));
if (alert183 < 1) {
    alert(` ! ALERTA !    ART. 2291      ${alert183} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor183(); }
}
function agregarValor183() {
    if (arrayValues183 != ' ' && arrayValues183 > 0) {
        INPUT_TOTAL_INCOME183 = document.getElementById('valor-entrada183').value;
        var arrayUnico = INPUT_TOTAL_INCOME183;  //  llamar del localStorage
        _arrayValues183 = JSON.parse(localStorage.getItem("TOTAL183"));  //  modificar
        let suma1 = parseInt(_arrayValues183) + parseInt(arrayUnico);
        TOTAL_INCOME183 = document.getElementById('183').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL183", JSON.stringify(suma1));
        localStorage.setItem("valores183", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME183 = document.getElementById('valor-entrada183').value;
        arrayValues183 = INPUT_TOTAL_INCOME183;  // mandar al localStorage
        localStorage.setItem("valores183", JSON.stringify(arrayValues183));  // modificar total productos
        _arrayValues183 = JSON.parse(localStorage.getItem("valores183"));
        TOTAL_INCOME183 = document.getElementById('183').innerText = `${arrayValues183}` // mandar al localStorage
        localStorage.setItem("TOTAL183", JSON.stringify(INPUT_TOTAL_INCOME183));
    }
}
function disminuirValor183() {
    _arrayValues183 = JSON.parse(localStorage.getItem("TOTAL183"));
    suma183 = _arrayValues183;
    if (arrayValues183 != ' ' && arrayValues183 > 0) {
        INPUT_TOTAL_INCOME183 = document.getElementById('valor-entrada183').value;
        var arrayUnico = INPUT_TOTAL_INCOME183;  //  llamar del localStorage
        _arrayValues183 = JSON.parse(localStorage.getItem("TOTAL183"));  //  modificar
        let suma1 = parseInt(_arrayValues183) - parseInt(arrayUnico);
        TOTAL_INCOME183 = document.getElementById('183').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL183", JSON.stringify(suma1));
        localStorage.setItem("valores183", JSON.stringify(suma1));
    }
}
// 185
var INPUT_TOTAL_INCOME184;
var _arrayValues184;
var arrayValues184 = JSON.parse(localStorage.getItem("valores184")) || [];
var suma184 = JSON.parse(localStorage.getItem("TOTAL184"));
var TOTAL_INCOME184 = document.getElementById('184').innerText = `${suma184}`;
var elem = document.getElementById('valor-entrada184');
var alert184 = JSON.parse(localStorage.getItem("TOTAL184"));
if (alert184 < 1) {
    alert(` ! ALERTA !    ART. 2296      ${alert184} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor184(); }
}
function agregarValor184() {
    if (arrayValues184 != ' ' && arrayValues184 > 0) {
        INPUT_TOTAL_INCOME184 = document.getElementById('valor-entrada184').value;
        var arrayUnico = INPUT_TOTAL_INCOME184;  //  llamar del localStorage
        _arrayValues184 = JSON.parse(localStorage.getItem("TOTAL184"));  //  modificar
        let suma1 = parseInt(_arrayValues184) + parseInt(arrayUnico);
        TOTAL_INCOME184 = document.getElementById('184').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL184", JSON.stringify(suma1));
        localStorage.setItem("valores184", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME184 = document.getElementById('valor-entrada184').value;
        arrayValues184 = INPUT_TOTAL_INCOME184;  // mandar al localStorage
        localStorage.setItem("valores184", JSON.stringify(arrayValues184));  // modificar total productos
        _arrayValues184 = JSON.parse(localStorage.getItem("valores184"));
        TOTAL_INCOME184 = document.getElementById('184').innerText = `${arrayValues184}` // mandar al localStorage
        localStorage.setItem("TOTAL184", JSON.stringify(INPUT_TOTAL_INCOME184));
    }
}
function disminuirValor184() {
    _arrayValues184 = JSON.parse(localStorage.getItem("TOTAL184"));
    suma184 = _arrayValues184;
    if (arrayValues184 != ' ' && arrayValues184 > 0) {
        INPUT_TOTAL_INCOME184 = document.getElementById('valor-entrada184').value;
        var arrayUnico = INPUT_TOTAL_INCOME184;  //  llamar del localStorage
        _arrayValues184 = JSON.parse(localStorage.getItem("TOTAL184"));  //  modificar
        let suma1 = parseInt(_arrayValues184) - parseInt(arrayUnico);
        TOTAL_INCOME184 = document.getElementById('184').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL184", JSON.stringify(suma1));
        localStorage.setItem("valores184", JSON.stringify(suma1));
    }
}
// 186
var INPUT_TOTAL_INCOME185;
var _arrayValues185;
var arrayValues185 = JSON.parse(localStorage.getItem("valores185")) || [];
var suma185 = JSON.parse(localStorage.getItem("TOTAL185"));
var TOTAL_INCOME185 = document.getElementById('185').innerText = `${suma185}`;
var elem = document.getElementById('valor-entrada185');
var alert185 = JSON.parse(localStorage.getItem("TOTAL185"));
if (alert185 < 1) {
    alert(` ! ALERTA !    ART. 2297      ${alert185} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor185(); }
}
function agregarValor185() {
    if (arrayValues185 != ' ' && arrayValues185 > 0) {
        INPUT_TOTAL_INCOME185 = document.getElementById('valor-entrada185').value;
        var arrayUnico = INPUT_TOTAL_INCOME185;  //  llamar del localStorage
        _arrayValues185 = JSON.parse(localStorage.getItem("TOTAL185"));  //  modificar
        let suma1 = parseInt(_arrayValues185) + parseInt(arrayUnico);
        TOTAL_INCOME185 = document.getElementById('185').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL185", JSON.stringify(suma1));
        localStorage.setItem("valores185", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME185 = document.getElementById('valor-entrada185').value;
        arrayValues185 = INPUT_TOTAL_INCOME185;  // mandar al localStorage
        localStorage.setItem("valores185", JSON.stringify(arrayValues185));  // modificar total productos
        _arrayValues185 = JSON.parse(localStorage.getItem("valores185"));
        TOTAL_INCOME185 = document.getElementById('185').innerText = `${arrayValues185}` // mandar al localStorage
        localStorage.setItem("TOTAL185", JSON.stringify(INPUT_TOTAL_INCOME185));
    }
}
function disminuirValor185() {
    _arrayValues185 = JSON.parse(localStorage.getItem("TOTAL185"));
    suma185 = _arrayValues185;
    if (arrayValues185 != ' ' && arrayValues185 > 0) {
        INPUT_TOTAL_INCOME185 = document.getElementById('valor-entrada185').value;
        var arrayUnico = INPUT_TOTAL_INCOME185;  //  llamar del localStorage
        _arrayValues185 = JSON.parse(localStorage.getItem("TOTAL185"));  //  modificar
        let suma1 = parseInt(_arrayValues185) - parseInt(arrayUnico);
        TOTAL_INCOME185 = document.getElementById('185').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL185", JSON.stringify(suma1));
        localStorage.setItem("valores185", JSON.stringify(suma1));
    }
}
// 187
var INPUT_TOTAL_INCOME186;
var _arrayValues186;
var arrayValues186 = JSON.parse(localStorage.getItem("valores186")) || [];
var suma186 = JSON.parse(localStorage.getItem("TOTAL186"));
var TOTAL_INCOME186 = document.getElementById('186').innerText = `${suma186}`;
var elem = document.getElementById('valor-entrada186');
var alert186 = JSON.parse(localStorage.getItem("TOTAL186"));
if (alert186 < 1) {
    alert(` ! ALERTA !    ART. 2298      ${alert186} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor186(); }
}
function agregarValor186() {
    if (arrayValues186 != ' ' && arrayValues186 > 0) {
        INPUT_TOTAL_INCOME186 = document.getElementById('valor-entrada186').value;
        var arrayUnico = INPUT_TOTAL_INCOME186;  //  llamar del localStorage
        _arrayValues186 = JSON.parse(localStorage.getItem("TOTAL186"));  //  modificar
        let suma1 = parseInt(_arrayValues186) + parseInt(arrayUnico);
        TOTAL_INCOME186 = document.getElementById('186').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL186", JSON.stringify(suma1));
        localStorage.setItem("valores186", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME186 = document.getElementById('valor-entrada186').value;
        arrayValues186 = INPUT_TOTAL_INCOME186;  // mandar al localStorage
        localStorage.setItem("valores186", JSON.stringify(arrayValues186));  // modificar total productos
        _arrayValues186 = JSON.parse(localStorage.getItem("valores186"));
        TOTAL_INCOME186 = document.getElementById('186').innerText = `${arrayValues186}` // mandar al localStorage
        localStorage.setItem("TOTAL186", JSON.stringify(INPUT_TOTAL_INCOME186));
    }
}
function disminuirValor186() {
    _arrayValues186 = JSON.parse(localStorage.getItem("TOTAL186"));
    suma186 = _arrayValues186;
    if (arrayValues186 != ' ' && arrayValues186 > 0) {
        INPUT_TOTAL_INCOME186 = document.getElementById('valor-entrada186').value;
        var arrayUnico = INPUT_TOTAL_INCOME186;  //  llamar del localStorage
        _arrayValues186 = JSON.parse(localStorage.getItem("TOTAL186"));  //  modificar
        let suma1 = parseInt(_arrayValues186) - parseInt(arrayUnico);
        TOTAL_INCOME186 = document.getElementById('186').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL186", JSON.stringify(suma1));
        localStorage.setItem("valores186", JSON.stringify(suma1));
    }
}
// 188
var INPUT_TOTAL_INCOME187;
var _arrayValues187;
var arrayValues187 = JSON.parse(localStorage.getItem("valores187")) || [];
var suma187 = JSON.parse(localStorage.getItem("TOTAL187"));
var TOTAL_INCOME187 = document.getElementById('187').innerText = `${suma187}`;
var elem = document.getElementById('valor-entrada187');
var alert187 = JSON.parse(localStorage.getItem("TOTAL187"));
if (alert187 < 1) {
    alert(` ! ALERTA !    ART. 2299      ${alert187} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor187(); }
}
function agregarValor187() {
    if (arrayValues187 != ' ' && arrayValues187 > 0) {
        INPUT_TOTAL_INCOME187 = document.getElementById('valor-entrada187').value;
        var arrayUnico = INPUT_TOTAL_INCOME187;  //  llamar del localStorage
        _arrayValues187 = JSON.parse(localStorage.getItem("TOTAL187"));  //  modificar
        let suma1 = parseInt(_arrayValues187) + parseInt(arrayUnico);
        TOTAL_INCOME187 = document.getElementById('187').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL187", JSON.stringify(suma1));
        localStorage.setItem("valores187", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME187 = document.getElementById('valor-entrada187').value;
        arrayValues187 = INPUT_TOTAL_INCOME187;  // mandar al localStorage
        localStorage.setItem("valores187", JSON.stringify(arrayValues187));  // modificar total productos
        _arrayValues187 = JSON.parse(localStorage.getItem("valores187"));
        TOTAL_INCOME187 = document.getElementById('187').innerText = `${arrayValues187}` // mandar al localStorage
        localStorage.setItem("TOTAL187", JSON.stringify(INPUT_TOTAL_INCOME187));
    }
}
function disminuirValor187() {
    _arrayValues187 = JSON.parse(localStorage.getItem("TOTAL187"));
    suma187 = _arrayValues187;
    if (arrayValues187 != ' ' && arrayValues187 > 0) {
        INPUT_TOTAL_INCOME187 = document.getElementById('valor-entrada187').value;
        var arrayUnico = INPUT_TOTAL_INCOME187;  //  llamar del localStorage
        _arrayValues187 = JSON.parse(localStorage.getItem("TOTAL187"));  //  modificar
        let suma1 = parseInt(_arrayValues187) - parseInt(arrayUnico);
        TOTAL_INCOME187 = document.getElementById('187').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL187", JSON.stringify(suma1));
        localStorage.setItem("valores187", JSON.stringify(suma1));
    }
}
// 189
var INPUT_TOTAL_INCOME188;
var _arrayValues188;
var arrayValues188 = JSON.parse(localStorage.getItem("valores188")) || [];
var suma188 = JSON.parse(localStorage.getItem("TOTAL188"));
var TOTAL_INCOME188 = document.getElementById('188').innerText = `${suma188}`;
var elem = document.getElementById('valor-entrada188');
var alert188 = JSON.parse(localStorage.getItem("TOTAL188"));
if (alert188 < 1) {
    alert(` ! ALERTA !    ART. 2310      ${alert188} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor188(); }
}
function agregarValor188() {
    if (arrayValues188 != ' ' && arrayValues188 > 0) {
        INPUT_TOTAL_INCOME188 = document.getElementById('valor-entrada188').value;
        var arrayUnico = INPUT_TOTAL_INCOME188;  //  llamar del localStorage
        _arrayValues188 = JSON.parse(localStorage.getItem("TOTAL188"));  //  modificar
        let suma1 = parseInt(_arrayValues188) + parseInt(arrayUnico);
        TOTAL_INCOME188 = document.getElementById('188').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL188", JSON.stringify(suma1));
        localStorage.setItem("valores188", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME188 = document.getElementById('valor-entrada188').value;
        arrayValues188 = INPUT_TOTAL_INCOME188;  // mandar al localStorage
        localStorage.setItem("valores188", JSON.stringify(arrayValues188));  // modificar total productos
        _arrayValues188 = JSON.parse(localStorage.getItem("valores188"));
        TOTAL_INCOME188 = document.getElementById('188').innerText = `${arrayValues188}` // mandar al localStorage
        localStorage.setItem("TOTAL188", JSON.stringify(INPUT_TOTAL_INCOME188));
    }
}
function disminuirValor188() {
    _arrayValues188 = JSON.parse(localStorage.getItem("TOTAL188"));
    suma188 = _arrayValues188;
    if (arrayValues188 != ' ' && arrayValues188 > 0) {
        INPUT_TOTAL_INCOME188 = document.getElementById('valor-entrada188').value;
        var arrayUnico = INPUT_TOTAL_INCOME188;  //  llamar del localStorage
        _arrayValues188 = JSON.parse(localStorage.getItem("TOTAL188"));  //  modificar
        let suma1 = parseInt(_arrayValues188) - parseInt(arrayUnico);
        TOTAL_INCOME188 = document.getElementById('188').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL188", JSON.stringify(suma1));
        localStorage.setItem("valores188", JSON.stringify(suma1));
    }
}
// 190
var INPUT_TOTAL_INCOME189;
var _arrayValues189;
var arrayValues189 = JSON.parse(localStorage.getItem("valores189")) || [];
var suma189 = JSON.parse(localStorage.getItem("TOTAL189"));
var TOTAL_INCOME189 = document.getElementById('189').innerText = `${suma189}`;
var elem = document.getElementById('valor-entrada189');
var alert189 = JSON.parse(localStorage.getItem("TOTAL189"));
if (alert189 < 1) {
    alert(` ! ALERTA !    ART. 2311      ${alert189} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor189(); }
}
function agregarValor189() {
    if (arrayValues189 != ' ' && arrayValues189 > 0) {
        INPUT_TOTAL_INCOME189 = document.getElementById('valor-entrada189').value;
        var arrayUnico = INPUT_TOTAL_INCOME189;  //  llamar del localStorage
        _arrayValues189 = JSON.parse(localStorage.getItem("TOTAL189"));  //  modificar
        let suma1 = parseInt(_arrayValues189) + parseInt(arrayUnico);
        TOTAL_INCOME189 = document.getElementById('189').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL189", JSON.stringify(suma1));
        localStorage.setItem("valores189", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME189 = document.getElementById('valor-entrada189').value;
        arrayValues189 = INPUT_TOTAL_INCOME189;  // mandar al localStorage
        localStorage.setItem("valores189", JSON.stringify(arrayValues189));  // modificar total productos
        _arrayValues189 = JSON.parse(localStorage.getItem("valores189"));
        TOTAL_INCOME189 = document.getElementById('189').innerText = `${arrayValues189}` // mandar al localStorage
        localStorage.setItem("TOTAL189", JSON.stringify(INPUT_TOTAL_INCOME189));
    }
}
function disminuirValor189() {
    _arrayValues189 = JSON.parse(localStorage.getItem("TOTAL189"));
    suma189 = _arrayValues189;
    if (arrayValues189 != ' ' && arrayValues189 > 0) {
        INPUT_TOTAL_INCOME189 = document.getElementById('valor-entrada189').value;
        var arrayUnico = INPUT_TOTAL_INCOME189;  //  llamar del localStorage
        _arrayValues189 = JSON.parse(localStorage.getItem("TOTAL189"));  //  modificar
        let suma1 = parseInt(_arrayValues189) - parseInt(arrayUnico);
        TOTAL_INCOME189 = document.getElementById('189').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL189", JSON.stringify(suma1));
        localStorage.setItem("valores189", JSON.stringify(suma1));
    }
}
// 191
var INPUT_TOTAL_INCOME190;
var _arrayValues190;
var arrayValues190 = JSON.parse(localStorage.getItem("valores190")) || [];
var suma190 = JSON.parse(localStorage.getItem("TOTAL190"));
var TOTAL_INCOME190 = document.getElementById('190').innerText = `${suma190}`;
var elem = document.getElementById('valor-entrada190');
var alert190 = JSON.parse(localStorage.getItem("TOTAL190"));
if (alert190 < 1) {
    alert(` ! ALERTA !    ART. 2312      ${alert190} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor190(); }
}
function agregarValor190() {
    if (arrayValues190 != ' ' && arrayValues190 > 0) {
        INPUT_TOTAL_INCOME190 = document.getElementById('valor-entrada190').value;
        var arrayUnico = INPUT_TOTAL_INCOME190;  //  llamar del localStorage
        _arrayValues190 = JSON.parse(localStorage.getItem("TOTAL190"));  //  modificar
        let suma1 = parseInt(_arrayValues190) + parseInt(arrayUnico);
        TOTAL_INCOME190 = document.getElementById('190').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL190", JSON.stringify(suma1));
        localStorage.setItem("valores190", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME190 = document.getElementById('valor-entrada190').value;
        arrayValues190 = INPUT_TOTAL_INCOME190;  // mandar al localStorage
        localStorage.setItem("valores190", JSON.stringify(arrayValues190));  // modificar total productos
        _arrayValues190 = JSON.parse(localStorage.getItem("valores190"));
        TOTAL_INCOME190 = document.getElementById('190').innerText = `${arrayValues190}` // mandar al localStorage
        localStorage.setItem("TOTAL190", JSON.stringify(INPUT_TOTAL_INCOME190));
    }
}
function disminuirValor190() {
    _arrayValues190 = JSON.parse(localStorage.getItem("TOTAL190"));
    suma190 = _arrayValues190;
    if (arrayValues190 != ' ' && arrayValues190 > 0) {
        INPUT_TOTAL_INCOME190 = document.getElementById('valor-entrada190').value;
        var arrayUnico = INPUT_TOTAL_INCOME190;  //  llamar del localStorage
        _arrayValues190 = JSON.parse(localStorage.getItem("TOTAL190"));  //  modificar
        let suma1 = parseInt(_arrayValues190) - parseInt(arrayUnico);
        TOTAL_INCOME190 = document.getElementById('190').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL190", JSON.stringify(suma1));
        localStorage.setItem("valores190", JSON.stringify(suma1));
    }
}
// 192
var INPUT_TOTAL_INCOME191;
var _arrayValues191;
var arrayValues191 = JSON.parse(localStorage.getItem("valores191")) || [];
var suma191 = JSON.parse(localStorage.getItem("TOTAL191"));
var TOTAL_INCOME191 = document.getElementById('191').innerText = `${suma191}`;
var elem = document.getElementById('valor-entrada191');
var alert191 = JSON.parse(localStorage.getItem("TOTAL191"));
if (alert191 < 1) {
    alert(` ! ALERTA !    ART. 4223      ${alert191} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor191(); }
}
function agregarValor191() {
    if (arrayValues191 != ' ' && arrayValues191 > 0) {
        INPUT_TOTAL_INCOME191 = document.getElementById('valor-entrada191').value;
        var arrayUnico = INPUT_TOTAL_INCOME191;  //  llamar del localStorage
        _arrayValues191 = JSON.parse(localStorage.getItem("TOTAL191"));  //  modificar
        let suma1 = parseInt(_arrayValues191) + parseInt(arrayUnico);
        TOTAL_INCOME191 = document.getElementById('191').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL191", JSON.stringify(suma1));
        localStorage.setItem("valores191", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME191 = document.getElementById('valor-entrada191').value;
        arrayValues191 = INPUT_TOTAL_INCOME191;  // mandar al localStorage
        localStorage.setItem("valores191", JSON.stringify(arrayValues191));  // modificar total productos
        _arrayValues191 = JSON.parse(localStorage.getItem("valores191"));
        TOTAL_INCOME191 = document.getElementById('191').innerText = `${arrayValues191}` // mandar al localStorage
        localStorage.setItem("TOTAL191", JSON.stringify(INPUT_TOTAL_INCOME191));
    }
}
function disminuirValor191() {
    _arrayValues191 = JSON.parse(localStorage.getItem("TOTAL191"));
    suma191 = _arrayValues191;
    if (arrayValues191 != ' ' && arrayValues191 > 0) {
        INPUT_TOTAL_INCOME191 = document.getElementById('valor-entrada191').value;
        var arrayUnico = INPUT_TOTAL_INCOME191;  //  llamar del localStorage
        _arrayValues191 = JSON.parse(localStorage.getItem("TOTAL191"));  //  modificar
        let suma1 = parseInt(_arrayValues191) - parseInt(arrayUnico);
        TOTAL_INCOME191 = document.getElementById('191').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL191", JSON.stringify(suma1));
        localStorage.setItem("valores191", JSON.stringify(suma1));
    }
}
// 193
var INPUT_TOTAL_INCOME192;
var _arrayValues192;
var arrayValues192 = JSON.parse(localStorage.getItem("valores192")) || [];
var suma192 = JSON.parse(localStorage.getItem("TOTAL192"));
var TOTAL_INCOME192 = document.getElementById('192').innerText = `${suma192}`;
var elem = document.getElementById('valor-entrada192');
var alert192 = JSON.parse(localStorage.getItem("TOTAL192"));
if (alert192 < 1) {
    alert(` ! ALERTA !    ART. 4015      ${alert192} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor192(); }
}
function agregarValor192() {
    if (arrayValues192 != ' ' && arrayValues192 > 0) {
        INPUT_TOTAL_INCOME192 = document.getElementById('valor-entrada192').value;
        var arrayUnico = INPUT_TOTAL_INCOME192;  //  llamar del localStorage
        _arrayValues192 = JSON.parse(localStorage.getItem("TOTAL192"));  //  modificar
        let suma1 = parseInt(_arrayValues192) + parseInt(arrayUnico);
        TOTAL_INCOME192 = document.getElementById('192').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL192", JSON.stringify(suma1));
        localStorage.setItem("valores192", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME192 = document.getElementById('valor-entrada192').value;
        arrayValues192 = INPUT_TOTAL_INCOME192;  // mandar al localStorage
        localStorage.setItem("valores192", JSON.stringify(arrayValues192));  // modificar total productos
        _arrayValues192 = JSON.parse(localStorage.getItem("valores192"));
        TOTAL_INCOME192 = document.getElementById('192').innerText = `${arrayValues192}` // mandar al localStorage
        localStorage.setItem("TOTAL192", JSON.stringify(INPUT_TOTAL_INCOME192));
    }
}
function disminuirValor192() {
    _arrayValues192 = JSON.parse(localStorage.getItem("TOTAL192"));
    suma192 = _arrayValues192;
    if (arrayValues192 != ' ' && arrayValues192 > 0) {
        INPUT_TOTAL_INCOME192 = document.getElementById('valor-entrada192').value;
        var arrayUnico = INPUT_TOTAL_INCOME192;  //  llamar del localStorage
        _arrayValues192 = JSON.parse(localStorage.getItem("TOTAL192"));  //  modificar
        let suma1 = parseInt(_arrayValues192) - parseInt(arrayUnico);
        TOTAL_INCOME192 = document.getElementById('192').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL192", JSON.stringify(suma1));
        localStorage.setItem("valores192", JSON.stringify(suma1));
    }
}
// 194
var INPUT_TOTAL_INCOME193;
var _arrayValues193;
var arrayValues193 = JSON.parse(localStorage.getItem("valores193")) || [];
var suma193 = JSON.parse(localStorage.getItem("TOTAL193"));
var TOTAL_INCOME193 = document.getElementById('193').innerText = `${suma193}`;
var elem = document.getElementById('valor-entrada193');
var alert193 = JSON.parse(localStorage.getItem("TOTAL193"));
if (alert193 < 1) {
    alert(` ! ALERTA !    ART. 4025      ${alert193} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor193(); }
}
function agregarValor193() {
    if (arrayValues193 != ' ' && arrayValues193 > 0) {
        INPUT_TOTAL_INCOME193 = document.getElementById('valor-entrada193').value;
        var arrayUnico = INPUT_TOTAL_INCOME193;  //  llamar del localStorage
        _arrayValues193 = JSON.parse(localStorage.getItem("TOTAL193"));  //  modificar
        let suma1 = parseInt(_arrayValues193) + parseInt(arrayUnico);
        TOTAL_INCOME193 = document.getElementById('193').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL193", JSON.stringify(suma1));
        localStorage.setItem("valores193", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME193 = document.getElementById('valor-entrada193').value;
        arrayValues193 = INPUT_TOTAL_INCOME193;  // mandar al localStorage
        localStorage.setItem("valores193", JSON.stringify(arrayValues193));  // modificar total productos
        _arrayValues193 = JSON.parse(localStorage.getItem("valores193"));
        TOTAL_INCOME193 = document.getElementById('193').innerText = `${arrayValues193}` // mandar al localStorage
        localStorage.setItem("TOTAL193", JSON.stringify(INPUT_TOTAL_INCOME193));
    }
}
function disminuirValor193() {
    _arrayValues193 = JSON.parse(localStorage.getItem("TOTAL193"));
    suma193 = _arrayValues193;
    if (arrayValues193 != ' ' && arrayValues193 > 0) {
        INPUT_TOTAL_INCOME193 = document.getElementById('valor-entrada193').value;
        var arrayUnico = INPUT_TOTAL_INCOME193;  //  llamar del localStorage
        _arrayValues193 = JSON.parse(localStorage.getItem("TOTAL193"));  //  modificar
        let suma1 = parseInt(_arrayValues193) - parseInt(arrayUnico);
        TOTAL_INCOME193 = document.getElementById('193').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL193", JSON.stringify(suma1));
        localStorage.setItem("valores193", JSON.stringify(suma1));
    }
}
// 195
var INPUT_TOTAL_INCOME194;
var _arrayValues194;
var arrayValues194 = JSON.parse(localStorage.getItem("valores194")) || [];
var suma194 = JSON.parse(localStorage.getItem("TOTAL194"));
var TOTAL_INCOME194 = document.getElementById('194').innerText = `${suma194}`;
var elem = document.getElementById('valor-entrada194');
var alert194 = JSON.parse(localStorage.getItem("TOTAL194"));
if (alert194 < 1) {
    alert(` ! ALERTA !    ART. 4030      ${alert194} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor194(); }
}
function agregarValor194() {
    if (arrayValues194 != ' ' && arrayValues194 > 0) {
        INPUT_TOTAL_INCOME194 = document.getElementById('valor-entrada194').value;
        var arrayUnico = INPUT_TOTAL_INCOME194;  //  llamar del localStorage
        _arrayValues194 = JSON.parse(localStorage.getItem("TOTAL194"));  //  modificar
        let suma1 = parseInt(_arrayValues194) + parseInt(arrayUnico);
        TOTAL_INCOME194 = document.getElementById('194').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL194", JSON.stringify(suma1));
        localStorage.setItem("valores194", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME194 = document.getElementById('valor-entrada194').value;
        arrayValues194 = INPUT_TOTAL_INCOME194;  // mandar al localStorage
        localStorage.setItem("valores194", JSON.stringify(arrayValues194));  // modificar total productos
        _arrayValues194 = JSON.parse(localStorage.getItem("valores194"));
        TOTAL_INCOME194 = document.getElementById('194').innerText = `${arrayValues194}` // mandar al localStorage
        localStorage.setItem("TOTAL194", JSON.stringify(INPUT_TOTAL_INCOME194));
    }
}
function disminuirValor194() {
    _arrayValues194 = JSON.parse(localStorage.getItem("TOTAL194"));
    suma194 = _arrayValues194;
    if (arrayValues194 != ' ' && arrayValues194 > 0) {
        INPUT_TOTAL_INCOME194 = document.getElementById('valor-entrada194').value;
        var arrayUnico = INPUT_TOTAL_INCOME194;  //  llamar del localStorage
        _arrayValues194 = JSON.parse(localStorage.getItem("TOTAL194"));  //  modificar
        let suma1 = parseInt(_arrayValues194) - parseInt(arrayUnico);
        TOTAL_INCOME194 = document.getElementById('194').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL194", JSON.stringify(suma1));
        localStorage.setItem("valores194", JSON.stringify(suma1));
    }
}
// 196
var INPUT_TOTAL_INCOME195;
var _arrayValues195;
var arrayValues195 = JSON.parse(localStorage.getItem("valores195")) || [];
var suma195 = JSON.parse(localStorage.getItem("TOTAL195"));
var TOTAL_INCOME195 = document.getElementById('195').innerText = `${suma195}`;
var elem = document.getElementById('valor-entrada195');
var alert195 = JSON.parse(localStorage.getItem("TOTAL195"));
if (alert195 < 1) {
    alert(` ! ALERTA !    ART. 4035      ${alert195} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor195(); }
}
function agregarValor195() {
    if (arrayValues195 != ' ' && arrayValues195 > 0) {
        INPUT_TOTAL_INCOME195 = document.getElementById('valor-entrada195').value;
        var arrayUnico = INPUT_TOTAL_INCOME195;  //  llamar del localStorage
        _arrayValues195 = JSON.parse(localStorage.getItem("TOTAL195"));  //  modificar
        let suma1 = parseInt(_arrayValues195) + parseInt(arrayUnico);
        TOTAL_INCOME195 = document.getElementById('195').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL195", JSON.stringify(suma1));
        localStorage.setItem("valores195", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME195 = document.getElementById('valor-entrada195').value;
        arrayValues195 = INPUT_TOTAL_INCOME195;  // mandar al localStorage
        localStorage.setItem("valores195", JSON.stringify(arrayValues195));  // modificar total productos
        _arrayValues195 = JSON.parse(localStorage.getItem("valores195"));
        TOTAL_INCOME195 = document.getElementById('195').innerText = `${arrayValues195}` // mandar al localStorage
        localStorage.setItem("TOTAL195", JSON.stringify(INPUT_TOTAL_INCOME195));
    }
}
function disminuirValor195() {
    _arrayValues195 = JSON.parse(localStorage.getItem("TOTAL195"));
    suma195 = _arrayValues195;
    if (arrayValues195 != ' ' && arrayValues195 > 0) {
        INPUT_TOTAL_INCOME195 = document.getElementById('valor-entrada195').value;
        var arrayUnico = INPUT_TOTAL_INCOME195;  //  llamar del localStorage
        _arrayValues195 = JSON.parse(localStorage.getItem("TOTAL195"));  //  modificar
        let suma1 = parseInt(_arrayValues195) - parseInt(arrayUnico);
        TOTAL_INCOME195 = document.getElementById('195').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL195", JSON.stringify(suma1));
        localStorage.setItem("valores195", JSON.stringify(suma1));
    }
}
// 197
var INPUT_TOTAL_INCOME196;
var _arrayValues196;
var arrayValues196 = JSON.parse(localStorage.getItem("valores196")) || [];
var suma196 = JSON.parse(localStorage.getItem("TOTAL196"));
var TOTAL_INCOME196 = document.getElementById('196').innerText = `${suma196}`;
var elem = document.getElementById('valor-entrada196');
var alert196 = JSON.parse(localStorage.getItem("TOTAL196"));
if (alert196 < 1) {
    alert(` ! ALERTA !    ART. 4045      ${alert196} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor196(); }
}
function agregarValor196() {
    if (arrayValues196 != ' ' && arrayValues196 > 0) {
        INPUT_TOTAL_INCOME196 = document.getElementById('valor-entrada196').value;
        var arrayUnico = INPUT_TOTAL_INCOME196;  //  llamar del localStorage
        _arrayValues196 = JSON.parse(localStorage.getItem("TOTAL196"));  //  modificar
        let suma1 = parseInt(_arrayValues196) + parseInt(arrayUnico);
        TOTAL_INCOME196 = document.getElementById('196').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL196", JSON.stringify(suma1));
        localStorage.setItem("valores196", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME196 = document.getElementById('valor-entrada196').value;
        arrayValues196 = INPUT_TOTAL_INCOME196;  // mandar al localStorage
        localStorage.setItem("valores196", JSON.stringify(arrayValues196));  // modificar total productos
        _arrayValues196 = JSON.parse(localStorage.getItem("valores196"));
        TOTAL_INCOME196 = document.getElementById('196').innerText = `${arrayValues196}` // mandar al localStorage
        localStorage.setItem("TOTAL196", JSON.stringify(INPUT_TOTAL_INCOME196));
    }
}
function disminuirValor196() {
    _arrayValues196 = JSON.parse(localStorage.getItem("TOTAL196"));
    suma196 = _arrayValues196;
    if (arrayValues196 != ' ' && arrayValues196 > 0) {
        INPUT_TOTAL_INCOME196 = document.getElementById('valor-entrada196').value;
        var arrayUnico = INPUT_TOTAL_INCOME196;  //  llamar del localStorage
        _arrayValues196 = JSON.parse(localStorage.getItem("TOTAL196"));  //  modificar
        let suma1 = parseInt(_arrayValues196) - parseInt(arrayUnico);
        TOTAL_INCOME196 = document.getElementById('196').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL196", JSON.stringify(suma1));
        localStorage.setItem("valores196", JSON.stringify(suma1));
    }
}
// 198
var INPUT_TOTAL_INCOME197;
var _arrayValues197;
var arrayValues197 = JSON.parse(localStorage.getItem("valores197")) || [];
var suma197 = JSON.parse(localStorage.getItem("TOTAL197"));
var TOTAL_INCOME197 = document.getElementById('197').innerText = `${suma197}`;
var elem = document.getElementById('valor-entrada197');
var alert197 = JSON.parse(localStorage.getItem("TOTAL197"));
if (alert197 < 1) {
    alert(` ! ALERTA !    ART. 4050      ${alert197} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor197(); }
}
function agregarValor197() {
    if (arrayValues197 != ' ' && arrayValues197 > 0) {
        INPUT_TOTAL_INCOME197 = document.getElementById('valor-entrada197').value;
        var arrayUnico = INPUT_TOTAL_INCOME197;  //  llamar del localStorage
        _arrayValues197 = JSON.parse(localStorage.getItem("TOTAL197"));  //  modificar
        let suma1 = parseInt(_arrayValues197) + parseInt(arrayUnico);
        TOTAL_INCOME197 = document.getElementById('197').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL197", JSON.stringify(suma1));
        localStorage.setItem("valores197", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME197 = document.getElementById('valor-entrada197').value;
        arrayValues197 = INPUT_TOTAL_INCOME197;  // mandar al localStorage
        localStorage.setItem("valores197", JSON.stringify(arrayValues197));  // modificar total productos
        _arrayValues197 = JSON.parse(localStorage.getItem("valores197"));
        TOTAL_INCOME197 = document.getElementById('197').innerText = `${arrayValues197}` // mandar al localStorage
        localStorage.setItem("TOTAL197", JSON.stringify(INPUT_TOTAL_INCOME197));
    }
}
function disminuirValor197() {
    _arrayValues197 = JSON.parse(localStorage.getItem("TOTAL197"));
    suma197 = _arrayValues197;
    if (arrayValues197 != ' ' && arrayValues197 > 0) {
        INPUT_TOTAL_INCOME197 = document.getElementById('valor-entrada197').value;
        var arrayUnico = INPUT_TOTAL_INCOME197;  //  llamar del localStorage
        _arrayValues197 = JSON.parse(localStorage.getItem("TOTAL197"));  //  modificar
        let suma1 = parseInt(_arrayValues197) - parseInt(arrayUnico);
        TOTAL_INCOME197 = document.getElementById('197').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL197", JSON.stringify(suma1));
        localStorage.setItem("valores197", JSON.stringify(suma1));
    }
}
// 199
var INPUT_TOTAL_INCOME198;
var _arrayValues198;
var arrayValues198 = JSON.parse(localStorage.getItem("valores198")) || [];
var suma198 = JSON.parse(localStorage.getItem("TOTAL198"));
var TOTAL_INCOME198 = document.getElementById('198').innerText = `${suma198}`;
var elem = document.getElementById('valor-entrada198');
var alert198 = JSON.parse(localStorage.getItem("TOTAL198"));
if (alert198 < 1) {
    alert(` ! ALERTA !    ART. 4055      ${alert198} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor198(); }
}
function agregarValor198() {
    if (arrayValues198 != ' ' && arrayValues198 > 0) {
        INPUT_TOTAL_INCOME198 = document.getElementById('valor-entrada198').value;
        var arrayUnico = INPUT_TOTAL_INCOME198;  //  llamar del localStorage
        _arrayValues198 = JSON.parse(localStorage.getItem("TOTAL198"));  //  modificar
        let suma1 = parseInt(_arrayValues198) + parseInt(arrayUnico);
        TOTAL_INCOME198 = document.getElementById('198').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL198", JSON.stringify(suma1));
        localStorage.setItem("valores198", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME198 = document.getElementById('valor-entrada198').value;
        arrayValues198 = INPUT_TOTAL_INCOME198;  // mandar al localStorage
        localStorage.setItem("valores198", JSON.stringify(arrayValues198));  // modificar total productos
        _arrayValues198 = JSON.parse(localStorage.getItem("valores198"));
        TOTAL_INCOME198 = document.getElementById('198').innerText = `${arrayValues198}` // mandar al localStorage
        localStorage.setItem("TOTAL198", JSON.stringify(INPUT_TOTAL_INCOME198));
    }
}
function disminuirValor198() {
    _arrayValues198 = JSON.parse(localStorage.getItem("TOTAL198"));
    suma198 = _arrayValues198;
    if (arrayValues198 != ' ' && arrayValues198 > 0) {
        INPUT_TOTAL_INCOME198 = document.getElementById('valor-entrada198').value;
        var arrayUnico = INPUT_TOTAL_INCOME198;  //  llamar del localStorage
        _arrayValues198 = JSON.parse(localStorage.getItem("TOTAL198"));  //  modificar
        let suma1 = parseInt(_arrayValues198) - parseInt(arrayUnico);
        TOTAL_INCOME198 = document.getElementById('198').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL198", JSON.stringify(suma1));
        localStorage.setItem("valores198", JSON.stringify(suma1));
    }
}
// 200
var INPUT_TOTAL_INCOME199;
var _arrayValues199;
var arrayValues199 = JSON.parse(localStorage.getItem("valores199")) || [];
var suma199 = JSON.parse(localStorage.getItem("TOTAL199"));
var TOTAL_INCOME199 = document.getElementById('199').innerText = `${suma199}`;
var elem = document.getElementById('valor-entrada199');
var alert199 = JSON.parse(localStorage.getItem("TOTAL199"));
if (alert199 < 1) {
    alert(` ! ALERTA !    ART. 4056      ${alert199} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor199(); }
}
function agregarValor199() {
    if (arrayValues199 != ' ' && arrayValues199 > 0) {
        INPUT_TOTAL_INCOME199 = document.getElementById('valor-entrada199').value;
        var arrayUnico = INPUT_TOTAL_INCOME199;  //  llamar del localStorage
        _arrayValues199 = JSON.parse(localStorage.getItem("TOTAL199"));  //  modificar
        let suma1 = parseInt(_arrayValues199) + parseInt(arrayUnico);
        TOTAL_INCOME199 = document.getElementById('199').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL199", JSON.stringify(suma1));
        localStorage.setItem("valores199", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME199 = document.getElementById('valor-entrada199').value;
        arrayValues199 = INPUT_TOTAL_INCOME199;  // mandar al localStorage
        localStorage.setItem("valores199", JSON.stringify(arrayValues199));  // modificar total productos
        _arrayValues199 = JSON.parse(localStorage.getItem("valores199"));
        TOTAL_INCOME199 = document.getElementById('199').innerText = `${arrayValues199}` // mandar al localStorage
        localStorage.setItem("TOTAL199", JSON.stringify(INPUT_TOTAL_INCOME199));
    }
}
function disminuirValor199() {
    _arrayValues199 = JSON.parse(localStorage.getItem("TOTAL199"));
    suma199 = _arrayValues199;
    if (arrayValues199 != ' ' && arrayValues199 > 0) {
        INPUT_TOTAL_INCOME199 = document.getElementById('valor-entrada199').value;
        var arrayUnico = INPUT_TOTAL_INCOME199;  //  llamar del localStorage
        _arrayValues199 = JSON.parse(localStorage.getItem("TOTAL199"));  //  modificar
        let suma1 = parseInt(_arrayValues199) - parseInt(arrayUnico);
        TOTAL_INCOME199 = document.getElementById('199').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL199", JSON.stringify(suma1));
        localStorage.setItem("valores199", JSON.stringify(suma1));
    }
}
// 201
var INPUT_TOTAL_INCOME200;
var _arrayValues200;
var arrayValues200 = JSON.parse(localStorage.getItem("valores200")) || [];
var suma200 = JSON.parse(localStorage.getItem("TOTAL200"));
var TOTAL_INCOME200 = document.getElementById('200').innerText = `${suma200}`;
var elem = document.getElementById('valor-entrada200');
var alert200 = JSON.parse(localStorage.getItem("TOTAL200"));
if (alert200 < 1) {
    alert(` ! ALERTA !    ART. 4057      ${alert200} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor200(); }
}
function agregarValor200() {
    if (arrayValues200 != ' ' && arrayValues200 > 0) {
        INPUT_TOTAL_INCOME200 = document.getElementById('valor-entrada200').value;
        var arrayUnico = INPUT_TOTAL_INCOME200;  //  llamar del localStorage
        _arrayValues200 = JSON.parse(localStorage.getItem("TOTAL200"));  //  modificar
        let suma1 = parseInt(_arrayValues200) + parseInt(arrayUnico);
        TOTAL_INCOME200 = document.getElementById('200').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL200", JSON.stringify(suma1));
        localStorage.setItem("valores200", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME200 = document.getElementById('valor-entrada200').value;
        arrayValues200 = INPUT_TOTAL_INCOME200;  // mandar al localStorage
        localStorage.setItem("valores200", JSON.stringify(arrayValues200));  // modificar total productos
        _arrayValues200 = JSON.parse(localStorage.getItem("valores200"));
        TOTAL_INCOME200 = document.getElementById('200').innerText = `${arrayValues200}` // mandar al localStorage
        localStorage.setItem("TOTAL200", JSON.stringify(INPUT_TOTAL_INCOME200));
    }
}
function disminuirValor200() {
    _arrayValues200 = JSON.parse(localStorage.getItem("TOTAL200"));
    suma200 = _arrayValues200;
    if (arrayValues200 != ' ' && arrayValues200 > 0) {
        INPUT_TOTAL_INCOME200 = document.getElementById('valor-entrada200').value;
        var arrayUnico = INPUT_TOTAL_INCOME200;  //  llamar del localStorage
        _arrayValues200 = JSON.parse(localStorage.getItem("TOTAL200"));  //  modificar
        let suma1 = parseInt(_arrayValues200) - parseInt(arrayUnico);
        TOTAL_INCOME200 = document.getElementById('200').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL200", JSON.stringify(suma1));
        localStorage.setItem("valores200", JSON.stringify(suma1));
    }
}
// 202
var INPUT_TOTAL_INCOME201;
var _arrayValues201;
var arrayValues201 = JSON.parse(localStorage.getItem("valores201")) || [];
var suma201 = JSON.parse(localStorage.getItem("TOTAL201"));
var TOTAL_INCOME201 = document.getElementById('201').innerText = `${suma201}`;
var elem = document.getElementById('valor-entrada201');
var alert201 = JSON.parse(localStorage.getItem("TOTAL201"));
if (alert201 < 1) {
    alert(` ! ALERTA !    ART. 4058      ${alert201} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor201(); }
}
function agregarValor201() {
    if (arrayValues201 != ' ' && arrayValues201 > 0) {
        INPUT_TOTAL_INCOME201 = document.getElementById('valor-entrada201').value;
        var arrayUnico = INPUT_TOTAL_INCOME201;  //  llamar del localStorage
        _arrayValues201 = JSON.parse(localStorage.getItem("TOTAL201"));  //  modificar
        let suma1 = parseInt(_arrayValues201) + parseInt(arrayUnico);
        TOTAL_INCOME201 = document.getElementById('201').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL201", JSON.stringify(suma1));
        localStorage.setItem("valores201", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME201 = document.getElementById('valor-entrada201').value;
        arrayValues201 = INPUT_TOTAL_INCOME201;  // mandar al localStorage
        localStorage.setItem("valores201", JSON.stringify(arrayValues201));  // modificar total productos
        _arrayValues201 = JSON.parse(localStorage.getItem("valores201"));
        TOTAL_INCOME201 = document.getElementById('201').innerText = `${arrayValues201}` // mandar al localStorage
        localStorage.setItem("TOTAL201", JSON.stringify(INPUT_TOTAL_INCOME201));
    }
}
function disminuirValor201() {
    _arrayValues201 = JSON.parse(localStorage.getItem("TOTAL201"));
    suma201 = _arrayValues201;
    if (arrayValues201 != ' ' && arrayValues201 > 0) {
        INPUT_TOTAL_INCOME201 = document.getElementById('valor-entrada201').value;
        var arrayUnico = INPUT_TOTAL_INCOME201;  //  llamar del localStorage
        _arrayValues201 = JSON.parse(localStorage.getItem("TOTAL201"));  //  modificar
        let suma1 = parseInt(_arrayValues201) - parseInt(arrayUnico);
        TOTAL_INCOME201 = document.getElementById('201').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL201", JSON.stringify(suma1));
        localStorage.setItem("valores201", JSON.stringify(suma1));
    }
}
// 203
var INPUT_TOTAL_INCOME202;
var _arrayValues202;
var arrayValues202 = JSON.parse(localStorage.getItem("valores202")) || [];
var suma202 = JSON.parse(localStorage.getItem("TOTAL202"));
var TOTAL_INCOME202 = document.getElementById('202').innerText = `${suma202}`;
var elem = document.getElementById('valor-entrada202');
var alert202 = JSON.parse(localStorage.getItem("TOTAL202"));
if (alert202 < 1) {
    alert(` ! ALERTA !    ART. 5025      ${alert202} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor202(); }
}
function agregarValor202() {
    if (arrayValues202 != ' ' && arrayValues202 > 0) {
        INPUT_TOTAL_INCOME202 = document.getElementById('valor-entrada202').value;
        var arrayUnico = INPUT_TOTAL_INCOME202;  //  llamar del localStorage
        _arrayValues202 = JSON.parse(localStorage.getItem("TOTAL202"));  //  modificar
        let suma1 = parseInt(_arrayValues202) + parseInt(arrayUnico);
        TOTAL_INCOME202 = document.getElementById('202').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL202", JSON.stringify(suma1));
        localStorage.setItem("valores202", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME202 = document.getElementById('valor-entrada202').value;
        arrayValues202 = INPUT_TOTAL_INCOME202;  // mandar al localStorage
        localStorage.setItem("valores202", JSON.stringify(arrayValues202));  // modificar total productos
        _arrayValues202 = JSON.parse(localStorage.getItem("valores202"));
        TOTAL_INCOME202 = document.getElementById('202').innerText = `${arrayValues202}` // mandar al localStorage
        localStorage.setItem("TOTAL202", JSON.stringify(INPUT_TOTAL_INCOME202));
    }
}
function disminuirValor202() {
    _arrayValues202 = JSON.parse(localStorage.getItem("TOTAL202"));
    suma202 = _arrayValues202;
    if (arrayValues202 != ' ' && arrayValues202 > 0) {
        INPUT_TOTAL_INCOME202 = document.getElementById('valor-entrada202').value;
        var arrayUnico = INPUT_TOTAL_INCOME202;  //  llamar del localStorage
        _arrayValues202 = JSON.parse(localStorage.getItem("TOTAL202"));  //  modificar
        let suma1 = parseInt(_arrayValues202) - parseInt(arrayUnico);
        TOTAL_INCOME202 = document.getElementById('202').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL202", JSON.stringify(suma1));
        localStorage.setItem("valores202", JSON.stringify(suma1));
    }
}
// 204
var INPUT_TOTAL_INCOME203;
var _arrayValues203;
var arrayValues203 = JSON.parse(localStorage.getItem("valores203")) || [];
var suma203 = JSON.parse(localStorage.getItem("TOTAL203"));
var TOTAL_INCOME203 = document.getElementById('203').innerText = `${suma203}`;
var elem = document.getElementById('valor-entrada203');
var alert203 = JSON.parse(localStorage.getItem("TOTAL203"));
if (alert203 < 1) {
    alert(` ! ALERTA !    ART. 5030      ${alert203} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor203(); }
}
function agregarValor203() {
    if (arrayValues203 != ' ' && arrayValues203 > 0) {
        INPUT_TOTAL_INCOME203 = document.getElementById('valor-entrada203').value;
        var arrayUnico = INPUT_TOTAL_INCOME203;  //  llamar del localStorage
        _arrayValues203 = JSON.parse(localStorage.getItem("TOTAL203"));  //  modificar
        let suma1 = parseInt(_arrayValues203) + parseInt(arrayUnico);
        TOTAL_INCOME203 = document.getElementById('203').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL203", JSON.stringify(suma1));
        localStorage.setItem("valores203", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME203 = document.getElementById('valor-entrada203').value;
        arrayValues203 = INPUT_TOTAL_INCOME203;  // mandar al localStorage
        localStorage.setItem("valores203", JSON.stringify(arrayValues203));  // modificar total productos
        _arrayValues203 = JSON.parse(localStorage.getItem("valores203"));
        TOTAL_INCOME203 = document.getElementById('203').innerText = `${arrayValues203}` // mandar al localStorage
        localStorage.setItem("TOTAL203", JSON.stringify(INPUT_TOTAL_INCOME203));
    }
}
function disminuirValor203() {
    _arrayValues203 = JSON.parse(localStorage.getItem("TOTAL203"));
    suma203 = _arrayValues203;
    if (arrayValues203 != ' ' && arrayValues203 > 0) {
        INPUT_TOTAL_INCOME203 = document.getElementById('valor-entrada203').value;
        var arrayUnico = INPUT_TOTAL_INCOME203;  //  llamar del localStorage
        _arrayValues203 = JSON.parse(localStorage.getItem("TOTAL203"));  //  modificar
        let suma1 = parseInt(_arrayValues203) - parseInt(arrayUnico);
        TOTAL_INCOME203 = document.getElementById('203').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL203", JSON.stringify(suma1));
        localStorage.setItem("valores203", JSON.stringify(suma1));
    }
}
// 205
var INPUT_TOTAL_INCOME204;
var _arrayValues204;
var arrayValues204 = JSON.parse(localStorage.getItem("valores204")) || [];
var suma204 = JSON.parse(localStorage.getItem("TOTAL204"));
var TOTAL_INCOME204 = document.getElementById('204').innerText = `${suma204}`;
var elem = document.getElementById('valor-entrada204');
var alert204 = JSON.parse(localStorage.getItem("TOTAL204"));
if (alert204 < 1) {
    alert(` ! ALERTA !    ART. 5035      ${alert204} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor204(); }
}
function agregarValor204() {
    if (arrayValues204 != ' ' && arrayValues204 > 0) {
        INPUT_TOTAL_INCOME204 = document.getElementById('valor-entrada204').value;
        var arrayUnico = INPUT_TOTAL_INCOME204;  //  llamar del localStorage
        _arrayValues204 = JSON.parse(localStorage.getItem("TOTAL204"));  //  modificar
        let suma1 = parseInt(_arrayValues204) + parseInt(arrayUnico);
        TOTAL_INCOME204 = document.getElementById('204').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL204", JSON.stringify(suma1));
        localStorage.setItem("valores204", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME204 = document.getElementById('valor-entrada204').value;
        arrayValues204 = INPUT_TOTAL_INCOME204;  // mandar al localStorage
        localStorage.setItem("valores204", JSON.stringify(arrayValues204));  // modificar total productos
        _arrayValues204 = JSON.parse(localStorage.getItem("valores204"));
        TOTAL_INCOME204 = document.getElementById('204').innerText = `${arrayValues204}` // mandar al localStorage
        localStorage.setItem("TOTAL204", JSON.stringify(INPUT_TOTAL_INCOME204));
    }
}
function disminuirValor204() {
    _arrayValues204 = JSON.parse(localStorage.getItem("TOTAL204"));
    suma204 = _arrayValues204;
    if (arrayValues204 != ' ' && arrayValues204 > 0) {
        INPUT_TOTAL_INCOME204 = document.getElementById('valor-entrada204').value;
        var arrayUnico = INPUT_TOTAL_INCOME204;  //  llamar del localStorage
        _arrayValues204 = JSON.parse(localStorage.getItem("TOTAL204"));  //  modificar
        let suma1 = parseInt(_arrayValues204) - parseInt(arrayUnico);
        TOTAL_INCOME204 = document.getElementById('204').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL204", JSON.stringify(suma1));
        localStorage.setItem("valores204", JSON.stringify(suma1));
    }
}
// 206
var INPUT_TOTAL_INCOME205;
var _arrayValues205;
var arrayValues205 = JSON.parse(localStorage.getItem("valores205")) || [];
var suma205 = JSON.parse(localStorage.getItem("TOTAL205"));
var TOTAL_INCOME205 = document.getElementById('205').innerText = `${suma205}`;
var elem = document.getElementById('valor-entrada205');
var alert205 = JSON.parse(localStorage.getItem("TOTAL205"));
if (alert205 < 1) {
    alert(` ! ALERTA !    ART. 5050      ${alert205} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor205(); }
}
function agregarValor205() {
    if (arrayValues205 != ' ' && arrayValues205 > 0) {
        INPUT_TOTAL_INCOME205 = document.getElementById('valor-entrada205').value;
        var arrayUnico = INPUT_TOTAL_INCOME205;  //  llamar del localStorage
        _arrayValues205 = JSON.parse(localStorage.getItem("TOTAL205"));  //  modificar
        let suma1 = parseInt(_arrayValues205) + parseInt(arrayUnico);
        TOTAL_INCOME205 = document.getElementById('205').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL205", JSON.stringify(suma1));
        localStorage.setItem("valores205", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME205 = document.getElementById('valor-entrada205').value;
        arrayValues205 = INPUT_TOTAL_INCOME205;  // mandar al localStorage
        localStorage.setItem("valores205", JSON.stringify(arrayValues205));  // modificar total productos
        _arrayValues205 = JSON.parse(localStorage.getItem("valores205"));
        TOTAL_INCOME205 = document.getElementById('205').innerText = `${arrayValues205}` // mandar al localStorage
        localStorage.setItem("TOTAL205", JSON.stringify(INPUT_TOTAL_INCOME205));
    }
}
function disminuirValor205() {
    _arrayValues205 = JSON.parse(localStorage.getItem("TOTAL205"));
    suma205 = _arrayValues205;
    if (arrayValues205 != ' ' && arrayValues205 > 0) {
        INPUT_TOTAL_INCOME205 = document.getElementById('valor-entrada205').value;
        var arrayUnico = INPUT_TOTAL_INCOME205;  //  llamar del localStorage
        _arrayValues205 = JSON.parse(localStorage.getItem("TOTAL205"));  //  modificar
        let suma1 = parseInt(_arrayValues205) - parseInt(arrayUnico);
        TOTAL_INCOME205 = document.getElementById('205').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL205", JSON.stringify(suma1));
        localStorage.setItem("valores205", JSON.stringify(suma1));
    }
}
// 207
var INPUT_TOTAL_INCOME206;
var _arrayValues206;
var arrayValues206 = JSON.parse(localStorage.getItem("valores206")) || [];
var suma206 = JSON.parse(localStorage.getItem("TOTAL206"));
var TOTAL_INCOME206 = document.getElementById('206').innerText = `${suma206}`;
var elem = document.getElementById('valor-entrada206');
var alert206 = JSON.parse(localStorage.getItem("TOTAL206"));
if (alert206 < 1) {
    alert(` ! ALERTA !    ART. 5070      ${alert206} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor206(); }
}
function agregarValor206() {
    if (arrayValues206 != ' ' && arrayValues206 > 0) {
        INPUT_TOTAL_INCOME206 = document.getElementById('valor-entrada206').value;
        var arrayUnico = INPUT_TOTAL_INCOME206;  //  llamar del localStorage
        _arrayValues206 = JSON.parse(localStorage.getItem("TOTAL206"));  //  modificar
        let suma1 = parseInt(_arrayValues206) + parseInt(arrayUnico);
        TOTAL_INCOME206 = document.getElementById('206').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL206", JSON.stringify(suma1));
        localStorage.setItem("valores206", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME206 = document.getElementById('valor-entrada206').value;
        arrayValues206 = INPUT_TOTAL_INCOME206;  // mandar al localStorage
        localStorage.setItem("valores206", JSON.stringify(arrayValues206));  // modificar total productos
        _arrayValues206 = JSON.parse(localStorage.getItem("valores206"));
        TOTAL_INCOME206 = document.getElementById('206').innerText = `${arrayValues206}` // mandar al localStorage
        localStorage.setItem("TOTAL206", JSON.stringify(INPUT_TOTAL_INCOME206));
    }
}
function disminuirValor206() {
    _arrayValues206 = JSON.parse(localStorage.getItem("TOTAL206"));
    suma206 = _arrayValues206;
    if (arrayValues206 != ' ' && arrayValues206 > 0) {
        INPUT_TOTAL_INCOME206 = document.getElementById('valor-entrada206').value;
        var arrayUnico = INPUT_TOTAL_INCOME206;  //  llamar del localStorage
        _arrayValues206 = JSON.parse(localStorage.getItem("TOTAL206"));  //  modificar
        let suma1 = parseInt(_arrayValues206) - parseInt(arrayUnico);
        TOTAL_INCOME206 = document.getElementById('206').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL206", JSON.stringify(suma1));
        localStorage.setItem("valores206", JSON.stringify(suma1));
    }
}
// 208
var INPUT_TOTAL_INCOME207;
var _arrayValues207;
var arrayValues207 = JSON.parse(localStorage.getItem("valores207")) || [];
var suma207 = JSON.parse(localStorage.getItem("TOTAL207"));
var TOTAL_INCOME207 = document.getElementById('207').innerText = `${suma207}`;
var elem = document.getElementById('valor-entrada207');
var alert207 = JSON.parse(localStorage.getItem("TOTAL207"));
if (alert207 < 1) {
    alert(` ! ALERTA !    ART. 6005      ${alert207} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor207(); }
}
function agregarValor207() {
    if (arrayValues207 != ' ' && arrayValues207 > 0) {
        INPUT_TOTAL_INCOME207 = document.getElementById('valor-entrada207').value;
        var arrayUnico = INPUT_TOTAL_INCOME207;  //  llamar del localStorage
        _arrayValues207 = JSON.parse(localStorage.getItem("TOTAL207"));  //  modificar
        let suma1 = parseInt(_arrayValues207) + parseInt(arrayUnico);
        TOTAL_INCOME207 = document.getElementById('207').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL207", JSON.stringify(suma1));
        localStorage.setItem("valores207", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME207 = document.getElementById('valor-entrada207').value;
        arrayValues207 = INPUT_TOTAL_INCOME207;  // mandar al localStorage
        localStorage.setItem("valores207", JSON.stringify(arrayValues207));  // modificar total productos
        _arrayValues207 = JSON.parse(localStorage.getItem("valores207"));
        TOTAL_INCOME207 = document.getElementById('207').innerText = `${arrayValues207}` // mandar al localStorage
        localStorage.setItem("TOTAL207", JSON.stringify(INPUT_TOTAL_INCOME207));
    }
}
function disminuirValor207() {
    _arrayValues207 = JSON.parse(localStorage.getItem("TOTAL207"));
    suma207 = _arrayValues207;
    if (arrayValues207 != ' ' && arrayValues207 > 0) {
        INPUT_TOTAL_INCOME207 = document.getElementById('valor-entrada207').value;
        var arrayUnico = INPUT_TOTAL_INCOME207;  //  llamar del localStorage
        _arrayValues207 = JSON.parse(localStorage.getItem("TOTAL207"));  //  modificar
        let suma1 = parseInt(_arrayValues207) - parseInt(arrayUnico);
        TOTAL_INCOME207 = document.getElementById('207').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL207", JSON.stringify(suma1));
        localStorage.setItem("valores207", JSON.stringify(suma1));
    }
}
// 209
var INPUT_TOTAL_INCOME208;
var _arrayValues208;
var arrayValues208 = JSON.parse(localStorage.getItem("valores208")) || [];
var suma208 = JSON.parse(localStorage.getItem("TOTAL208"));
var TOTAL_INCOME208 = document.getElementById('208').innerText = `${suma208}`;
var elem = document.getElementById('valor-entrada208');
var alert208 = JSON.parse(localStorage.getItem("TOTAL208"));
if (alert208 < 1) {
    alert(` ! ALERTA !    ART. 6010      ${alert208} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor208(); }
}
function agregarValor208() {
    if (arrayValues208 != ' ' && arrayValues208 > 0) {
        INPUT_TOTAL_INCOME208 = document.getElementById('valor-entrada208').value;
        var arrayUnico = INPUT_TOTAL_INCOME208;  //  llamar del localStorage
        _arrayValues208 = JSON.parse(localStorage.getItem("TOTAL208"));  //  modificar
        let suma1 = parseInt(_arrayValues208) + parseInt(arrayUnico);
        TOTAL_INCOME208 = document.getElementById('208').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL208", JSON.stringify(suma1));
        localStorage.setItem("valores208", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME208 = document.getElementById('valor-entrada208').value;
        arrayValues208 = INPUT_TOTAL_INCOME208;  // mandar al localStorage
        localStorage.setItem("valores208", JSON.stringify(arrayValues208));  // modificar total productos
        _arrayValues208 = JSON.parse(localStorage.getItem("valores208"));
        TOTAL_INCOME208 = document.getElementById('208').innerText = `${arrayValues208}` // mandar al localStorage
        localStorage.setItem("TOTAL208", JSON.stringify(INPUT_TOTAL_INCOME208));
    }
}
function disminuirValor208() {
    _arrayValues208 = JSON.parse(localStorage.getItem("TOTAL208"));
    suma208 = _arrayValues208;
    if (arrayValues208 != ' ' && arrayValues208 > 0) {
        INPUT_TOTAL_INCOME208 = document.getElementById('valor-entrada208').value;
        var arrayUnico = INPUT_TOTAL_INCOME208;  //  llamar del localStorage
        _arrayValues208 = JSON.parse(localStorage.getItem("TOTAL208"));  //  modificar
        let suma1 = parseInt(_arrayValues208) - parseInt(arrayUnico);
        TOTAL_INCOME208 = document.getElementById('208').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL208", JSON.stringify(suma1));
        localStorage.setItem("valores208", JSON.stringify(suma1));
    }
}
// 210
var INPUT_TOTAL_INCOME209;
var _arrayValues209;
var arrayValues209 = JSON.parse(localStorage.getItem("valores209")) || [];
var suma209 = JSON.parse(localStorage.getItem("TOTAL209"));
var TOTAL_INCOME209 = document.getElementById('209').innerText = `${suma209}`;
var elem = document.getElementById('valor-entrada209');
var alert209 = JSON.parse(localStorage.getItem("TOTAL209"));
if (alert209 < 1) {
    alert(` ! ALERTA !    ART. 6015      ${alert209} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor209(); }
}
function agregarValor209() {
    if (arrayValues209 != ' ' && arrayValues209 > 0) {
        INPUT_TOTAL_INCOME209 = document.getElementById('valor-entrada209').value;
        var arrayUnico = INPUT_TOTAL_INCOME209;  //  llamar del localStorage
        _arrayValues209 = JSON.parse(localStorage.getItem("TOTAL209"));  //  modificar
        let suma1 = parseInt(_arrayValues209) + parseInt(arrayUnico);
        TOTAL_INCOME209 = document.getElementById('209').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL209", JSON.stringify(suma1));
        localStorage.setItem("valores209", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME209 = document.getElementById('valor-entrada209').value;
        arrayValues209 = INPUT_TOTAL_INCOME209;  // mandar al localStorage
        localStorage.setItem("valores209", JSON.stringify(arrayValues209));  // modificar total productos
        _arrayValues209 = JSON.parse(localStorage.getItem("valores209"));
        TOTAL_INCOME209 = document.getElementById('209').innerText = `${arrayValues209}` // mandar al localStorage
        localStorage.setItem("TOTAL209", JSON.stringify(INPUT_TOTAL_INCOME209));
    }
}
function disminuirValor209() {
    _arrayValues209 = JSON.parse(localStorage.getItem("TOTAL209"));
    suma209 = _arrayValues209;
    if (arrayValues209 != ' ' && arrayValues209 > 0) {
        INPUT_TOTAL_INCOME209 = document.getElementById('valor-entrada209').value;
        var arrayUnico = INPUT_TOTAL_INCOME209;  //  llamar del localStorage
        _arrayValues209 = JSON.parse(localStorage.getItem("TOTAL209"));  //  modificar
        let suma1 = parseInt(_arrayValues209) - parseInt(arrayUnico);
        TOTAL_INCOME209 = document.getElementById('209').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL209", JSON.stringify(suma1));
        localStorage.setItem("valores209", JSON.stringify(suma1));
    }
}
// 211
var INPUT_TOTAL_INCOME210;
var _arrayValues210;
var arrayValues210 = JSON.parse(localStorage.getItem("valores210")) || [];
var suma210 = JSON.parse(localStorage.getItem("TOTAL210"));
var TOTAL_INCOME210 = document.getElementById('210').innerText = `${suma210}`;
var elem = document.getElementById('valor-entrada210');
var alert210 = JSON.parse(localStorage.getItem("TOTAL210"));
if (alert210 < 1) {
    alert(` ! ALERTA !    ART. 8001      ${alert210} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor210(); }
}
function agregarValor210() {
    if (arrayValues210 != ' ' && arrayValues210 > 0) {
        INPUT_TOTAL_INCOME210 = document.getElementById('valor-entrada210').value;
        var arrayUnico = INPUT_TOTAL_INCOME210;  //  llamar del localStorage
        _arrayValues210 = JSON.parse(localStorage.getItem("TOTAL210"));  //  modificar
        let suma1 = parseInt(_arrayValues210) + parseInt(arrayUnico);
        TOTAL_INCOME210 = document.getElementById('210').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL210", JSON.stringify(suma1));
        localStorage.setItem("valores210", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME210 = document.getElementById('valor-entrada210').value;
        arrayValues210 = INPUT_TOTAL_INCOME210;  // mandar al localStorage
        localStorage.setItem("valores210", JSON.stringify(arrayValues210));  // modificar total productos
        _arrayValues210 = JSON.parse(localStorage.getItem("valores210"));
        TOTAL_INCOME210 = document.getElementById('210').innerText = `${arrayValues210}` // mandar al localStorage
        localStorage.setItem("TOTAL210", JSON.stringify(INPUT_TOTAL_INCOME210));
    }
}
function disminuirValor210() {
    _arrayValues210 = JSON.parse(localStorage.getItem("TOTAL210"));
    suma210 = _arrayValues210;
    if (arrayValues210 != ' ' && arrayValues210 > 0) {
        INPUT_TOTAL_INCOME210 = document.getElementById('valor-entrada210').value;
        var arrayUnico = INPUT_TOTAL_INCOME210;  //  llamar del localStorage
        _arrayValues210 = JSON.parse(localStorage.getItem("TOTAL210"));  //  modificar
        let suma1 = parseInt(_arrayValues210) - parseInt(arrayUnico);
        TOTAL_INCOME210 = document.getElementById('210').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL210", JSON.stringify(suma1));
        localStorage.setItem("valores210", JSON.stringify(suma1));
    }
}
// 212
var INPUT_TOTAL_INCOME211;
var _arrayValues211;
var arrayValues211 = JSON.parse(localStorage.getItem("valores211")) || [];
var suma211 = JSON.parse(localStorage.getItem("TOTAL211"));
var TOTAL_INCOME211 = document.getElementById('211').innerText = `${suma211}`;
var elem = document.getElementById('valor-entrada211');
var alert211 = JSON.parse(localStorage.getItem("TOTAL211"));
if (alert211 < 1) {
    alert(` ! ALERTA !    ART. 601      ${alert211} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor211(); }
}
function agregarValor211() {
    if (arrayValues211 != ' ' && arrayValues211 > 0) {
        INPUT_TOTAL_INCOME211 = document.getElementById('valor-entrada211').value;
        var arrayUnico = INPUT_TOTAL_INCOME211;  //  llamar del localStorage
        _arrayValues211 = JSON.parse(localStorage.getItem("TOTAL211"));  //  modificar
        let suma1 = parseInt(_arrayValues211) + parseInt(arrayUnico);
        TOTAL_INCOME211 = document.getElementById('211').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL211", JSON.stringify(suma1));
        localStorage.setItem("valores211", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME211 = document.getElementById('valor-entrada211').value;
        arrayValues211 = INPUT_TOTAL_INCOME211;  // mandar al localStorage
        localStorage.setItem("valores211", JSON.stringify(arrayValues211));  // modificar total productos
        _arrayValues211 = JSON.parse(localStorage.getItem("valores211"));
        TOTAL_INCOME211 = document.getElementById('211').innerText = `${arrayValues211}` // mandar al localStorage
        localStorage.setItem("TOTAL211", JSON.stringify(INPUT_TOTAL_INCOME211));
    }
}
function disminuirValor211() {
    _arrayValues211 = JSON.parse(localStorage.getItem("TOTAL211"));
    suma211 = _arrayValues211;
    if (arrayValues211 != ' ' && arrayValues211 > 0) {
        INPUT_TOTAL_INCOME211 = document.getElementById('valor-entrada211').value;
        var arrayUnico = INPUT_TOTAL_INCOME211;  //  llamar del localStorage
        _arrayValues211 = JSON.parse(localStorage.getItem("TOTAL211"));  //  modificar
        let suma1 = parseInt(_arrayValues211) - parseInt(arrayUnico);
        TOTAL_INCOME211 = document.getElementById('211').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL211", JSON.stringify(suma1));
        localStorage.setItem("valores211", JSON.stringify(suma1));
    }
}
// 213
var INPUT_TOTAL_INCOME212;
var _arrayValues212;
var arrayValues212 = JSON.parse(localStorage.getItem("valores212")) || [];
var suma212 = JSON.parse(localStorage.getItem("TOTAL212"));
var TOTAL_INCOME212 = document.getElementById('212').innerText = `${suma212}`;
var elem = document.getElementById('valor-entrada212');
var alert212 = JSON.parse(localStorage.getItem("TOTAL212"));
if (alert212 < 1) {
    alert(` ! ALERTA !    ART. 602      ${alert212} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor212(); }
}
function agregarValor212() {
    if (arrayValues212 != ' ' && arrayValues212 > 0) {
        INPUT_TOTAL_INCOME212 = document.getElementById('valor-entrada212').value;
        var arrayUnico = INPUT_TOTAL_INCOME212;  //  llamar del localStorage
        _arrayValues212 = JSON.parse(localStorage.getItem("TOTAL212"));  //  modificar
        let suma1 = parseInt(_arrayValues212) + parseInt(arrayUnico);
        TOTAL_INCOME212 = document.getElementById('212').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL212", JSON.stringify(suma1));
        localStorage.setItem("valores212", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME212 = document.getElementById('valor-entrada212').value;
        arrayValues212 = INPUT_TOTAL_INCOME212;  // mandar al localStorage
        localStorage.setItem("valores212", JSON.stringify(arrayValues212));  // modificar total productos
        _arrayValues212 = JSON.parse(localStorage.getItem("valores212"));
        TOTAL_INCOME212 = document.getElementById('212').innerText = `${arrayValues212}` // mandar al localStorage
        localStorage.setItem("TOTAL212", JSON.stringify(INPUT_TOTAL_INCOME212));
    }
}
function disminuirValor212() {
    _arrayValues212 = JSON.parse(localStorage.getItem("TOTAL212"));
    suma212 = _arrayValues212;
    if (arrayValues212 != ' ' && arrayValues212 > 0) {
        INPUT_TOTAL_INCOME212 = document.getElementById('valor-entrada212').value;
        var arrayUnico = INPUT_TOTAL_INCOME212;  //  llamar del localStorage
        _arrayValues212 = JSON.parse(localStorage.getItem("TOTAL212"));  //  modificar
        let suma1 = parseInt(_arrayValues212) - parseInt(arrayUnico);
        TOTAL_INCOME212 = document.getElementById('212').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL212", JSON.stringify(suma1));
        localStorage.setItem("valores212", JSON.stringify(suma1));
    }
}
// 214
var INPUT_TOTAL_INCOME213;
var _arrayValues213;
var arrayValues213 = JSON.parse(localStorage.getItem("valores213")) || [];
var suma213 = JSON.parse(localStorage.getItem("TOTAL213"));
var TOTAL_INCOME213 = document.getElementById('213').innerText = `${suma213}`;
var elem = document.getElementById('valor-entrada213');
var alert213 = JSON.parse(localStorage.getItem("TOTAL213"));
if (alert213 < 1) {
    alert(` ! ALERTA !    ART. 603      ${alert213} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor213(); }
}
function agregarValor213() {
    if (arrayValues213 != ' ' && arrayValues213 > 0) {
        INPUT_TOTAL_INCOME213 = document.getElementById('valor-entrada213').value;
        var arrayUnico = INPUT_TOTAL_INCOME213;  //  llamar del localStorage
        _arrayValues213 = JSON.parse(localStorage.getItem("TOTAL213"));  //  modificar
        let suma1 = parseInt(_arrayValues213) + parseInt(arrayUnico);
        TOTAL_INCOME213 = document.getElementById('213').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL213", JSON.stringify(suma1));
        localStorage.setItem("valores213", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME213 = document.getElementById('valor-entrada213').value;
        arrayValues213 = INPUT_TOTAL_INCOME213;  // mandar al localStorage
        localStorage.setItem("valores213", JSON.stringify(arrayValues213));  // modificar total productos
        _arrayValues213 = JSON.parse(localStorage.getItem("valores213"));
        TOTAL_INCOME213 = document.getElementById('213').innerText = `${arrayValues213}` // mandar al localStorage
        localStorage.setItem("TOTAL213", JSON.stringify(INPUT_TOTAL_INCOME213));
    }
}
function disminuirValor213() {
    _arrayValues213 = JSON.parse(localStorage.getItem("TOTAL213"));
    suma213 = _arrayValues213;
    if (arrayValues213 != ' ' && arrayValues213 > 0) {
        INPUT_TOTAL_INCOME213 = document.getElementById('valor-entrada213').value;
        var arrayUnico = INPUT_TOTAL_INCOME213;  //  llamar del localStorage
        _arrayValues213 = JSON.parse(localStorage.getItem("TOTAL213"));  //  modificar
        let suma1 = parseInt(_arrayValues213) - parseInt(arrayUnico);
        TOTAL_INCOME213 = document.getElementById('213').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL213", JSON.stringify(suma1));
        localStorage.setItem("valores213", JSON.stringify(suma1));
    }
}
// 215
var INPUT_TOTAL_INCOME214;
var _arrayValues214;
var arrayValues214 = JSON.parse(localStorage.getItem("valores214")) || [];
var suma214 = JSON.parse(localStorage.getItem("TOTAL214"));
var TOTAL_INCOME214 = document.getElementById('214').innerText = `${suma214}`;
var elem = document.getElementById('valor-entrada214');
var alert214 = JSON.parse(localStorage.getItem("TOTAL214"));
if (alert214 < 1) {
    alert(` ! ALERTA !    ART. 604      ${alert214} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor214(); }
}
function agregarValor214() {
    if (arrayValues214 != ' ' && arrayValues214 > 0) {
        INPUT_TOTAL_INCOME214 = document.getElementById('valor-entrada214').value;
        var arrayUnico = INPUT_TOTAL_INCOME214;  //  llamar del localStorage
        _arrayValues214 = JSON.parse(localStorage.getItem("TOTAL214"));  //  modificar
        let suma1 = parseInt(_arrayValues214) + parseInt(arrayUnico);
        TOTAL_INCOME214 = document.getElementById('214').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL214", JSON.stringify(suma1));
        localStorage.setItem("valores214", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME214 = document.getElementById('valor-entrada214').value;
        arrayValues214 = INPUT_TOTAL_INCOME214;  // mandar al localStorage
        localStorage.setItem("valores214", JSON.stringify(arrayValues214));  // modificar total productos
        _arrayValues214 = JSON.parse(localStorage.getItem("valores214"));
        TOTAL_INCOME214 = document.getElementById('214').innerText = `${arrayValues214}` // mandar al localStorage
        localStorage.setItem("TOTAL214", JSON.stringify(INPUT_TOTAL_INCOME214));
    }
}
function disminuirValor214() {
    _arrayValues214 = JSON.parse(localStorage.getItem("TOTAL214"));
    suma214 = _arrayValues214;
    if (arrayValues214 != ' ' && arrayValues214 > 0) {
        INPUT_TOTAL_INCOME214 = document.getElementById('valor-entrada214').value;
        var arrayUnico = INPUT_TOTAL_INCOME214;  //  llamar del localStorage
        _arrayValues214 = JSON.parse(localStorage.getItem("TOTAL214"));  //  modificar
        let suma1 = parseInt(_arrayValues214) - parseInt(arrayUnico);
        TOTAL_INCOME214 = document.getElementById('214').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL214", JSON.stringify(suma1));
        localStorage.setItem("valores214", JSON.stringify(suma1));
    }
}
// 216
var INPUT_TOTAL_INCOME215;
var _arrayValues215;
var arrayValues215 = JSON.parse(localStorage.getItem("valores215")) || [];
var suma215 = JSON.parse(localStorage.getItem("TOTAL215"));
var TOTAL_INCOME215 = document.getElementById('215').innerText = `${suma215}`;
var elem = document.getElementById('valor-entrada215');
var alert215 = JSON.parse(localStorage.getItem("TOTAL215"));
if (alert215 < 1) {
    alert(` ! ALERTA !    ART. 605      ${alert215} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor215(); }
}
function agregarValor215() {
    if (arrayValues215 != ' ' && arrayValues215 > 0) {
        INPUT_TOTAL_INCOME215 = document.getElementById('valor-entrada215').value;
        var arrayUnico = INPUT_TOTAL_INCOME215;  //  llamar del localStorage
        _arrayValues215 = JSON.parse(localStorage.getItem("TOTAL215"));  //  modificar
        let suma1 = parseInt(_arrayValues215) + parseInt(arrayUnico);
        TOTAL_INCOME215 = document.getElementById('215').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL215", JSON.stringify(suma1));
        localStorage.setItem("valores215", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME215 = document.getElementById('valor-entrada215').value;
        arrayValues215 = INPUT_TOTAL_INCOME215;  // mandar al localStorage
        localStorage.setItem("valores215", JSON.stringify(arrayValues215));  // modificar total productos
        _arrayValues215 = JSON.parse(localStorage.getItem("valores215"));
        TOTAL_INCOME215 = document.getElementById('215').innerText = `${arrayValues215}` // mandar al localStorage
        localStorage.setItem("TOTAL215", JSON.stringify(INPUT_TOTAL_INCOME215));
    }
}
function disminuirValor215() {
    _arrayValues215 = JSON.parse(localStorage.getItem("TOTAL215"));
    suma215 = _arrayValues215;
    if (arrayValues215 != ' ' && arrayValues215 > 0) {
        INPUT_TOTAL_INCOME215 = document.getElementById('valor-entrada215').value;
        var arrayUnico = INPUT_TOTAL_INCOME215;  //  llamar del localStorage
        _arrayValues215 = JSON.parse(localStorage.getItem("TOTAL215"));  //  modificar
        let suma1 = parseInt(_arrayValues215) - parseInt(arrayUnico);
        TOTAL_INCOME215 = document.getElementById('215').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL215", JSON.stringify(suma1));
        localStorage.setItem("valores215", JSON.stringify(suma1));
    }
}
// 217
var INPUT_TOTAL_INCOME216;
var _arrayValues216;
var arrayValues216 = JSON.parse(localStorage.getItem("valores216")) || [];
var suma216 = JSON.parse(localStorage.getItem("TOTAL216"));
var TOTAL_INCOME216 = document.getElementById('216').innerText = `${suma216}`;
var elem = document.getElementById('valor-entrada216');
var alert216 = JSON.parse(localStorage.getItem("TOTAL216"));
if (alert216 < 1) {
    alert(` ! ALERTA !    ART. 606      ${alert216} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor216(); }
}
function agregarValor216() {
    if (arrayValues216 != ' ' && arrayValues216 > 0) {
        INPUT_TOTAL_INCOME216 = document.getElementById('valor-entrada216').value;
        var arrayUnico = INPUT_TOTAL_INCOME216;  //  llamar del localStorage
        _arrayValues216 = JSON.parse(localStorage.getItem("TOTAL216"));  //  modificar
        let suma1 = parseInt(_arrayValues216) + parseInt(arrayUnico);
        TOTAL_INCOME216 = document.getElementById('216').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL216", JSON.stringify(suma1));
        localStorage.setItem("valores216", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME216 = document.getElementById('valor-entrada216').value;
        arrayValues216 = INPUT_TOTAL_INCOME216;  // mandar al localStorage
        localStorage.setItem("valores216", JSON.stringify(arrayValues216));  // modificar total productos
        _arrayValues216 = JSON.parse(localStorage.getItem("valores216"));
        TOTAL_INCOME216 = document.getElementById('216').innerText = `${arrayValues216}` // mandar al localStorage
        localStorage.setItem("TOTAL216", JSON.stringify(INPUT_TOTAL_INCOME216));
    }
}
function disminuirValor216() {
    _arrayValues216 = JSON.parse(localStorage.getItem("TOTAL216"));
    suma216 = _arrayValues216;
    if (arrayValues216 != ' ' && arrayValues216 > 0) {
        INPUT_TOTAL_INCOME216 = document.getElementById('valor-entrada216').value;
        var arrayUnico = INPUT_TOTAL_INCOME216;  //  llamar del localStorage
        _arrayValues216 = JSON.parse(localStorage.getItem("TOTAL216"));  //  modificar
        let suma1 = parseInt(_arrayValues216) - parseInt(arrayUnico);
        TOTAL_INCOME216 = document.getElementById('216').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL216", JSON.stringify(suma1));
        localStorage.setItem("valores216", JSON.stringify(suma1));
    }
}
// 218
var INPUT_TOTAL_INCOME217;
var _arrayValues217;
var arrayValues217 = JSON.parse(localStorage.getItem("valores217")) || [];
var suma217 = JSON.parse(localStorage.getItem("TOTAL217"));
var TOTAL_INCOME217 = document.getElementById('217').innerText = `${suma217}`;
var elem = document.getElementById('valor-entrada217');
var alert217 = JSON.parse(localStorage.getItem("TOTAL217"));
if (alert217 < 1) {
    alert(` ! ALERTA !    ART. 607      ${alert217} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor217(); }
}
function agregarValor217() {
    if (arrayValues217 != ' ' && arrayValues217 > 0) {
        INPUT_TOTAL_INCOME217 = document.getElementById('valor-entrada217').value;
        var arrayUnico = INPUT_TOTAL_INCOME217;  //  llamar del localStorage
        _arrayValues217 = JSON.parse(localStorage.getItem("TOTAL217"));  //  modificar
        let suma1 = parseInt(_arrayValues217) + parseInt(arrayUnico);
        TOTAL_INCOME217 = document.getElementById('217').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL217", JSON.stringify(suma1));
        localStorage.setItem("valores217", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME217 = document.getElementById('valor-entrada217').value;
        arrayValues217 = INPUT_TOTAL_INCOME217;  // mandar al localStorage
        localStorage.setItem("valores217", JSON.stringify(arrayValues217));  // modificar total productos
        _arrayValues217 = JSON.parse(localStorage.getItem("valores217"));
        TOTAL_INCOME217 = document.getElementById('217').innerText = `${arrayValues217}` // mandar al localStorage
        localStorage.setItem("TOTAL217", JSON.stringify(INPUT_TOTAL_INCOME217));
    }
}
function disminuirValor217() {
    _arrayValues217 = JSON.parse(localStorage.getItem("TOTAL217"));
    suma217 = _arrayValues217;
    if (arrayValues217 != ' ' && arrayValues217 > 0) {
        INPUT_TOTAL_INCOME217 = document.getElementById('valor-entrada217').value;
        var arrayUnico = INPUT_TOTAL_INCOME217;  //  llamar del localStorage
        _arrayValues217 = JSON.parse(localStorage.getItem("TOTAL217"));  //  modificar
        let suma1 = parseInt(_arrayValues217) - parseInt(arrayUnico);
        TOTAL_INCOME217 = document.getElementById('217').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL217", JSON.stringify(suma1));
        localStorage.setItem("valores217", JSON.stringify(suma1));
    }
}
// 219
var INPUT_TOTAL_INCOME218;
var _arrayValues218;
var arrayValues218 = JSON.parse(localStorage.getItem("valores218")) || [];
var suma218 = JSON.parse(localStorage.getItem("TOTAL218"));
var TOTAL_INCOME218 = document.getElementById('218').innerText = `${suma218}`;
var elem = document.getElementById('valor-entrada218');
var alert218 = JSON.parse(localStorage.getItem("TOTAL218"));
if (alert218 < 1) {
    alert(` ! ALERTA !    ART. 608      ${alert218} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor218(); }
}
function agregarValor218() {
    if (arrayValues218 != ' ' && arrayValues218 > 0) {
        INPUT_TOTAL_INCOME218 = document.getElementById('valor-entrada218').value;
        var arrayUnico = INPUT_TOTAL_INCOME218;  //  llamar del localStorage
        _arrayValues218 = JSON.parse(localStorage.getItem("TOTAL218"));  //  modificar
        let suma1 = parseInt(_arrayValues218) + parseInt(arrayUnico);
        TOTAL_INCOME218 = document.getElementById('218').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL218", JSON.stringify(suma1));
        localStorage.setItem("valores218", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME218 = document.getElementById('valor-entrada218').value;
        arrayValues218 = INPUT_TOTAL_INCOME218;  // mandar al localStorage
        localStorage.setItem("valores218", JSON.stringify(arrayValues218));  // modificar total productos
        _arrayValues218 = JSON.parse(localStorage.getItem("valores218"));
        TOTAL_INCOME218 = document.getElementById('218').innerText = `${arrayValues218}` // mandar al localStorage
        localStorage.setItem("TOTAL218", JSON.stringify(INPUT_TOTAL_INCOME218));
    }
}
function disminuirValor218() {
    _arrayValues218 = JSON.parse(localStorage.getItem("TOTAL218"));
    suma218 = _arrayValues218;
    if (arrayValues218 != ' ' && arrayValues218 > 0) {
        INPUT_TOTAL_INCOME218 = document.getElementById('valor-entrada218').value;
        var arrayUnico = INPUT_TOTAL_INCOME218;  //  llamar del localStorage
        _arrayValues218 = JSON.parse(localStorage.getItem("TOTAL218"));  //  modificar
        let suma1 = parseInt(_arrayValues218) - parseInt(arrayUnico);
        TOTAL_INCOME218 = document.getElementById('218').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL218", JSON.stringify(suma1));
        localStorage.setItem("valores218", JSON.stringify(suma1));
    }
}
// 220
var INPUT_TOTAL_INCOME219;
var _arrayValues219;
var arrayValues219 = JSON.parse(localStorage.getItem("valores219")) || [];
var suma219 = JSON.parse(localStorage.getItem("TOTAL219"));
var TOTAL_INCOME219 = document.getElementById('219').innerText = `${suma219}`;
var elem = document.getElementById('valor-entrada219');
var alert219 = JSON.parse(localStorage.getItem("TOTAL219"));
if (alert219 < 1) {
    alert(` ! ALERTA !    ART. 609      ${alert219} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor219(); }
}
function agregarValor219() {
    if (arrayValues219 != ' ' && arrayValues219 > 0) {
        INPUT_TOTAL_INCOME219 = document.getElementById('valor-entrada219').value;
        var arrayUnico = INPUT_TOTAL_INCOME219;  //  llamar del localStorage
        _arrayValues219 = JSON.parse(localStorage.getItem("TOTAL219"));  //  modificar
        let suma1 = parseInt(_arrayValues219) + parseInt(arrayUnico);
        TOTAL_INCOME219 = document.getElementById('219').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL219", JSON.stringify(suma1));
        localStorage.setItem("valores219", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME219 = document.getElementById('valor-entrada219').value;
        arrayValues219 = INPUT_TOTAL_INCOME219;  // mandar al localStorage
        localStorage.setItem("valores219", JSON.stringify(arrayValues219));  // modificar total productos
        _arrayValues219 = JSON.parse(localStorage.getItem("valores219"));
        TOTAL_INCOME219 = document.getElementById('219').innerText = `${arrayValues219}` // mandar al localStorage
        localStorage.setItem("TOTAL219", JSON.stringify(INPUT_TOTAL_INCOME219));
    }
}
function disminuirValor219() {
    _arrayValues219 = JSON.parse(localStorage.getItem("TOTAL219"));
    suma219 = _arrayValues219;
    if (arrayValues219 != ' ' && arrayValues219 > 0) {
        INPUT_TOTAL_INCOME219 = document.getElementById('valor-entrada219').value;
        var arrayUnico = INPUT_TOTAL_INCOME219;  //  llamar del localStorage
        _arrayValues219 = JSON.parse(localStorage.getItem("TOTAL219"));  //  modificar
        let suma1 = parseInt(_arrayValues219) - parseInt(arrayUnico);
        TOTAL_INCOME219 = document.getElementById('219').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL219", JSON.stringify(suma1));
        localStorage.setItem("valores219", JSON.stringify(suma1));
    }
}
// 221
var INPUT_TOTAL_INCOME220;
var _arrayValues220;
var arrayValues220 = JSON.parse(localStorage.getItem("valores220")) || [];
var suma220 = JSON.parse(localStorage.getItem("TOTAL220"));
var TOTAL_INCOME220 = document.getElementById('220').innerText = `${suma220}`;
var elem = document.getElementById('valor-entrada220');
var alert220 = JSON.parse(localStorage.getItem("TOTAL220"));
if (alert220 < 1) {
    alert(` ! ALERTA !    ART. 610      ${alert220} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor220(); }
}
function agregarValor220() {
    if (arrayValues220 != ' ' && arrayValues220 > 0) {
        INPUT_TOTAL_INCOME220 = document.getElementById('valor-entrada220').value;
        var arrayUnico = INPUT_TOTAL_INCOME220;  //  llamar del localStorage
        _arrayValues220 = JSON.parse(localStorage.getItem("TOTAL220"));  //  modificar
        let suma1 = parseInt(_arrayValues220) + parseInt(arrayUnico);
        TOTAL_INCOME220 = document.getElementById('220').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL220", JSON.stringify(suma1));
        localStorage.setItem("valores220", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME220 = document.getElementById('valor-entrada220').value;
        arrayValues220 = INPUT_TOTAL_INCOME220;  // mandar al localStorage
        localStorage.setItem("valores220", JSON.stringify(arrayValues220));  // modificar total productos
        _arrayValues220 = JSON.parse(localStorage.getItem("valores220"));
        TOTAL_INCOME220 = document.getElementById('220').innerText = `${arrayValues220}` // mandar al localStorage
        localStorage.setItem("TOTAL220", JSON.stringify(INPUT_TOTAL_INCOME220));
    }
}
function disminuirValor220() {
    _arrayValues220 = JSON.parse(localStorage.getItem("TOTAL220"));
    suma220 = _arrayValues220;
    if (arrayValues220 != ' ' && arrayValues220 > 0) {
        INPUT_TOTAL_INCOME220 = document.getElementById('valor-entrada220').value;
        var arrayUnico = INPUT_TOTAL_INCOME220;  //  llamar del localStorage
        _arrayValues220 = JSON.parse(localStorage.getItem("TOTAL220"));  //  modificar
        let suma1 = parseInt(_arrayValues220) - parseInt(arrayUnico);
        TOTAL_INCOME220 = document.getElementById('220').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL220", JSON.stringify(suma1));
        localStorage.setItem("valores220", JSON.stringify(suma1));
    }
}
// 222
var INPUT_TOTAL_INCOME221;
var _arrayValues221;
var arrayValues221 = JSON.parse(localStorage.getItem("valores221")) || [];
var suma221 = JSON.parse(localStorage.getItem("TOTAL221"));
var TOTAL_INCOME221 = document.getElementById('221').innerText = `${suma221}`;
var elem = document.getElementById('valor-entrada221');
var alert221 = JSON.parse(localStorage.getItem("TOTAL221"));
if (alert221 < 1) {
    alert(` ! ALERTA !    ANILLO GEL N1      ${alert221} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor221(); }
}
function agregarValor221() {
    if (arrayValues221 != ' ' && arrayValues221 > 0) {
        INPUT_TOTAL_INCOME221 = document.getElementById('valor-entrada221').value;
        var arrayUnico = INPUT_TOTAL_INCOME221;  //  llamar del localStorage
        _arrayValues221 = JSON.parse(localStorage.getItem("TOTAL221"));  //  modificar
        let suma1 = parseInt(_arrayValues221) + parseInt(arrayUnico);
        TOTAL_INCOME221 = document.getElementById('221').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL221", JSON.stringify(suma1));
        localStorage.setItem("valores221", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME221 = document.getElementById('valor-entrada221').value;
        arrayValues221 = INPUT_TOTAL_INCOME221;  // mandar al localStorage
        localStorage.setItem("valores221", JSON.stringify(arrayValues221));  // modificar total productos
        _arrayValues221 = JSON.parse(localStorage.getItem("valores221"));
        TOTAL_INCOME221 = document.getElementById('221').innerText = `${arrayValues221}` // mandar al localStorage
        localStorage.setItem("TOTAL221", JSON.stringify(INPUT_TOTAL_INCOME221));
    }
}
function disminuirValor221() {
    _arrayValues221 = JSON.parse(localStorage.getItem("TOTAL221"));
    suma221 = _arrayValues221;
    if (arrayValues221 != ' ' && arrayValues221 > 0) {
        INPUT_TOTAL_INCOME221 = document.getElementById('valor-entrada221').value;
        var arrayUnico = INPUT_TOTAL_INCOME221;  //  llamar del localStorage
        _arrayValues221 = JSON.parse(localStorage.getItem("TOTAL221"));  //  modificar
        let suma1 = parseInt(_arrayValues221) - parseInt(arrayUnico);
        TOTAL_INCOME221 = document.getElementById('221').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL221", JSON.stringify(suma1));
        localStorage.setItem("valores221", JSON.stringify(suma1));
    }
}
// 223
var INPUT_TOTAL_INCOME222;
var _arrayValues222;
var arrayValues222 = JSON.parse(localStorage.getItem("valores222")) || [];
var suma222 = JSON.parse(localStorage.getItem("TOTAL222"));
var TOTAL_INCOME222 = document.getElementById('222').innerText = `${suma222}`;
var elem = document.getElementById('valor-entrada222');
var alert222 = JSON.parse(localStorage.getItem("TOTAL222"));
if (alert222 < 1) {
    alert(` ! ALERTA !    ANILLO GEL N2      ${alert222} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor222(); }
}
function agregarValor222() {
    if (arrayValues222 != ' ' && arrayValues222 > 0) {
        INPUT_TOTAL_INCOME222 = document.getElementById('valor-entrada222').value;
        var arrayUnico = INPUT_TOTAL_INCOME222;  //  llamar del localStorage
        _arrayValues222 = JSON.parse(localStorage.getItem("TOTAL222"));  //  modificar
        let suma1 = parseInt(_arrayValues222) + parseInt(arrayUnico);
        TOTAL_INCOME222 = document.getElementById('222').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL222", JSON.stringify(suma1));
        localStorage.setItem("valores222", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME222 = document.getElementById('valor-entrada222').value;
        arrayValues222 = INPUT_TOTAL_INCOME222;  // mandar al localStorage
        localStorage.setItem("valores222", JSON.stringify(arrayValues222));  // modificar total productos
        _arrayValues222 = JSON.parse(localStorage.getItem("valores222"));
        TOTAL_INCOME222 = document.getElementById('222').innerText = `${arrayValues222}` // mandar al localStorage
        localStorage.setItem("TOTAL222", JSON.stringify(INPUT_TOTAL_INCOME222));
    }
}
function disminuirValor222() {
    _arrayValues222 = JSON.parse(localStorage.getItem("TOTAL222"));
    suma222 = _arrayValues222;
    if (arrayValues222 != ' ' && arrayValues222 > 0) {
        INPUT_TOTAL_INCOME222 = document.getElementById('valor-entrada222').value;
        var arrayUnico = INPUT_TOTAL_INCOME222;  //  llamar del localStorage
        _arrayValues222 = JSON.parse(localStorage.getItem("TOTAL222"));  //  modificar
        let suma1 = parseInt(_arrayValues222) - parseInt(arrayUnico);
        TOTAL_INCOME222 = document.getElementById('222').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL222", JSON.stringify(suma1));
        localStorage.setItem("valores222", JSON.stringify(suma1));
    }
}
// 224
var INPUT_TOTAL_INCOME223;
var _arrayValues223;
var arrayValues223 = JSON.parse(localStorage.getItem("valores223")) || [];
var suma223 = JSON.parse(localStorage.getItem("TOTAL223"));
var TOTAL_INCOME223 = document.getElementById('223').innerText = `${suma223}`;
var elem = document.getElementById('valor-entrada223');
var alert223 = JSON.parse(localStorage.getItem("TOTAL223"));
if (alert223 < 1) {
    alert(` ! ALERTA !    ART. 2304      ${alert223} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor223(); }
}
function agregarValor223() {
    if (arrayValues223 != ' ' && arrayValues223 > 0) {
        INPUT_TOTAL_INCOME223 = document.getElementById('valor-entrada223').value;
        var arrayUnico = INPUT_TOTAL_INCOME223;  //  llamar del localStorage
        _arrayValues223 = JSON.parse(localStorage.getItem("TOTAL223"));  //  modificar
        let suma1 = parseInt(_arrayValues223) + parseInt(arrayUnico);
        TOTAL_INCOME223 = document.getElementById('223').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL223", JSON.stringify(suma1));
        localStorage.setItem("valores223", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME223 = document.getElementById('valor-entrada223').value;
        arrayValues223 = INPUT_TOTAL_INCOME223;  // mandar al localStorage
        localStorage.setItem("valores223", JSON.stringify(arrayValues223));  // modificar total productos
        _arrayValues223 = JSON.parse(localStorage.getItem("valores223"));
        TOTAL_INCOME223 = document.getElementById('223').innerText = `${arrayValues223}` // mandar al localStorage
        localStorage.setItem("TOTAL223", JSON.stringify(INPUT_TOTAL_INCOME223));
    }
}
function disminuirValor223() {
    _arrayValues223 = JSON.parse(localStorage.getItem("TOTAL223"));
    suma223 = _arrayValues223;
    if (arrayValues223 != ' ' && arrayValues223 > 0) {
        INPUT_TOTAL_INCOME223 = document.getElementById('valor-entrada223').value;
        var arrayUnico = INPUT_TOTAL_INCOME223;  //  llamar del localStorage
        _arrayValues223 = JSON.parse(localStorage.getItem("TOTAL223"));  //  modificar
        let suma1 = parseInt(_arrayValues223) - parseInt(arrayUnico);
        TOTAL_INCOME223 = document.getElementById('223').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL223", JSON.stringify(suma1));
        localStorage.setItem("valores223", JSON.stringify(suma1));
    }
}
// 225
var INPUT_TOTAL_INCOME224;
var _arrayValues224;
var arrayValues224 = JSON.parse(localStorage.getItem("valores224")) || [];
var suma224 = JSON.parse(localStorage.getItem("TOTAL224"));
var TOTAL_INCOME224 = document.getElementById('224').innerText = `${suma224}`;
var elem = document.getElementById('valor-entrada224');
var alert224 = JSON.parse(localStorage.getItem("TOTAL224"));
if (alert224 < 1) {
    alert(` ! ALERTA !    ART. 2295      ${alert224} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor224(); }
}
function agregarValor224() {
    if (arrayValues224 != ' ' && arrayValues224 > 0) {
        INPUT_TOTAL_INCOME224 = document.getElementById('valor-entrada224').value;
        var arrayUnico = INPUT_TOTAL_INCOME224;  //  llamar del localStorage
        _arrayValues224 = JSON.parse(localStorage.getItem("TOTAL224"));  //  modificar
        let suma1 = parseInt(_arrayValues224) + parseInt(arrayUnico);
        TOTAL_INCOME224 = document.getElementById('224').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL224", JSON.stringify(suma1));
        localStorage.setItem("valores224", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME224 = document.getElementById('valor-entrada224').value;
        arrayValues224 = INPUT_TOTAL_INCOME224;  // mandar al localStorage
        localStorage.setItem("valores224", JSON.stringify(arrayValues224));  // modificar total productos
        _arrayValues224 = JSON.parse(localStorage.getItem("valores224"));
        TOTAL_INCOME224 = document.getElementById('224').innerText = `${arrayValues224}` // mandar al localStorage
        localStorage.setItem("TOTAL224", JSON.stringify(INPUT_TOTAL_INCOME224));
    }
}
function disminuirValor224() {
    _arrayValues224 = JSON.parse(localStorage.getItem("TOTAL224"));
    suma224 = _arrayValues224;
    if (arrayValues224 != ' ' && arrayValues224 > 0) {
        INPUT_TOTAL_INCOME224 = document.getElementById('valor-entrada224').value;
        var arrayUnico = INPUT_TOTAL_INCOME224;  //  llamar del localStorage
        _arrayValues224 = JSON.parse(localStorage.getItem("TOTAL224"));  //  modificar
        let suma1 = parseInt(_arrayValues224) - parseInt(arrayUnico);
        TOTAL_INCOME224 = document.getElementById('224').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL224", JSON.stringify(suma1));
        localStorage.setItem("valores224", JSON.stringify(suma1));
    }
}
// 225
var INPUT_TOTAL_INCOME225;
var _arrayValues225;
var arrayValues225 = JSON.parse(localStorage.getItem("valores225")) || [];
var suma225 = JSON.parse(localStorage.getItem("TOTAL225"));
var TOTAL_INCOME225 = document.getElementById('225').innerText = `${suma225}`;
var elem = document.getElementById('valor-entrada225');
var alert225 = JSON.parse(localStorage.getItem("TOTAL225"));
if (alert225 < 1) {
    alert(` ! ALERTA !    ART. 1142      ${alert225} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor225(); }
}
function agregarValor225() {
    if (arrayValues225 != ' ' && arrayValues225 > 0) {
        INPUT_TOTAL_INCOME225 = document.getElementById('valor-entrada225').value;
        var arrayUnico = INPUT_TOTAL_INCOME225;  //  llamar del localStorage
        _arrayValues225 = JSON.parse(localStorage.getItem("TOTAL225"));  //  modificar
        let suma1 = parseInt(_arrayValues225) + parseInt(arrayUnico);
        TOTAL_INCOME225 = document.getElementById('225').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL225", JSON.stringify(suma1));
        localStorage.setItem("valores225", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME225 = document.getElementById('valor-entrada225').value;
        arrayValues225 = INPUT_TOTAL_INCOME225;  // mandar al localStorage
        localStorage.setItem("valores225", JSON.stringify(arrayValues225));  // modificar total productos
        _arrayValues225 = JSON.parse(localStorage.getItem("valores225"));
        TOTAL_INCOME225 = document.getElementById('225').innerText = `${arrayValues225}` // mandar al localStorage
        localStorage.setItem("TOTAL225", JSON.stringify(INPUT_TOTAL_INCOME225));
    }
}
function disminuirValor225() {
    _arrayValues225 = JSON.parse(localStorage.getItem("TOTAL225"));
    suma225 = _arrayValues225;
    if (arrayValues225 != ' ' && arrayValues225 > 0) {
        INPUT_TOTAL_INCOME225 = document.getElementById('valor-entrada225').value;
        var arrayUnico = INPUT_TOTAL_INCOME225;  //  llamar del localStorage
        _arrayValues225 = JSON.parse(localStorage.getItem("TOTAL225"));  //  modificar
        let suma1 = parseInt(_arrayValues225) - parseInt(arrayUnico);
        TOTAL_INCOME225 = document.getElementById('225').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL225", JSON.stringify(suma1));
        localStorage.setItem("valores225", JSON.stringify(suma1));
    }
}
// 227
var INPUT_TOTAL_INCOME226;
var _arrayValues226;
var arrayValues226 = JSON.parse(localStorage.getItem("valores226")) || [];
var suma226 = JSON.parse(localStorage.getItem("TOTAL226"));
var TOTAL_INCOME226 = document.getElementById('226').innerText = `${suma226}`;
var elem = document.getElementById('valor-entrada226');
var alert226 = JSON.parse(localStorage.getItem("TOTAL226"));
if (alert226 < 1) {
    alert(` ! ALERTA !    ART. 611      ${alert226} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor226(); }
}
function agregarValor226() {
    if (arrayValues226 != ' ' && arrayValues226 > 0) {
        INPUT_TOTAL_INCOME226 = document.getElementById('valor-entrada226').value;
        var arrayUnico = INPUT_TOTAL_INCOME226;  //  llamar del localStorage
        _arrayValues226 = JSON.parse(localStorage.getItem("TOTAL226"));  //  modificar
        let suma1 = parseInt(_arrayValues226) + parseInt(arrayUnico);
        TOTAL_INCOME226 = document.getElementById('226').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL226", JSON.stringify(suma1));
        localStorage.setItem("valores226", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME226 = document.getElementById('valor-entrada226').value;
        arrayValues226 = INPUT_TOTAL_INCOME226;  // mandar al localStorage
        localStorage.setItem("valores226", JSON.stringify(arrayValues226));  // modificar total productos
        _arrayValues226 = JSON.parse(localStorage.getItem("valores226"));
        TOTAL_INCOME226 = document.getElementById('226').innerText = `${arrayValues226}` // mandar al localStorage
        localStorage.setItem("TOTAL226", JSON.stringify(INPUT_TOTAL_INCOME226));
    }
}
function disminuirValor226() {
    _arrayValues226 = JSON.parse(localStorage.getItem("TOTAL226"));
    suma226 = _arrayValues226;
    if (arrayValues226 != ' ' && arrayValues226 > 0) {
        INPUT_TOTAL_INCOME226 = document.getElementById('valor-entrada226').value;
        var arrayUnico = INPUT_TOTAL_INCOME226;  //  llamar del localStorage
        _arrayValues226 = JSON.parse(localStorage.getItem("TOTAL226"));  //  modificar
        let suma1 = parseInt(_arrayValues226) - parseInt(arrayUnico);
        TOTAL_INCOME226 = document.getElementById('226').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL226", JSON.stringify(suma1));
        localStorage.setItem("valores226", JSON.stringify(suma1));
    }
}
// 228
var INPUT_TOTAL_INCOME227;
var _arrayValues227;
var arrayValues227 = JSON.parse(localStorage.getItem("valores227")) || [];
var suma227 = JSON.parse(localStorage.getItem("TOTAL227"));
var TOTAL_INCOME227 = document.getElementById('227').innerText = `${suma227}`;
var elem = document.getElementById('valor-entrada227');
var alert227 = JSON.parse(localStorage.getItem("TOTAL227"));
if (alert227 < 1) {
    alert(` ! ALERTA !    ART. 612      ${alert227} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor227(); }
}
function agregarValor227() {
    if (arrayValues227 != ' ' && arrayValues227 > 0) {
        INPUT_TOTAL_INCOME227 = document.getElementById('valor-entrada227').value;
        var arrayUnico = INPUT_TOTAL_INCOME227;  //  llamar del localStorage
        _arrayValues227 = JSON.parse(localStorage.getItem("TOTAL227"));  //  modificar
        let suma1 = parseInt(_arrayValues227) + parseInt(arrayUnico);
        TOTAL_INCOME227 = document.getElementById('227').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL227", JSON.stringify(suma1));
        localStorage.setItem("valores227", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME227 = document.getElementById('valor-entrada227').value;
        arrayValues227 = INPUT_TOTAL_INCOME227;  // mandar al localStorage
        localStorage.setItem("valores227", JSON.stringify(arrayValues227));  // modificar total productos
        _arrayValues227 = JSON.parse(localStorage.getItem("valores227"));
        TOTAL_INCOME227 = document.getElementById('227').innerText = `${arrayValues227}` // mandar al localStorage
        localStorage.setItem("TOTAL227", JSON.stringify(INPUT_TOTAL_INCOME227));
    }
}
function disminuirValor227() {
    _arrayValues227 = JSON.parse(localStorage.getItem("TOTAL227"));
    suma227 = _arrayValues227;
    if (arrayValues227 != ' ' && arrayValues227 > 0) {
        INPUT_TOTAL_INCOME227 = document.getElementById('valor-entrada227').value;
        var arrayUnico = INPUT_TOTAL_INCOME227;  //  llamar del localStorage
        _arrayValues227 = JSON.parse(localStorage.getItem("TOTAL227"));  //  modificar
        let suma1 = parseInt(_arrayValues227) - parseInt(arrayUnico);
        TOTAL_INCOME227 = document.getElementById('227').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL227", JSON.stringify(suma1));
        localStorage.setItem("valores227", JSON.stringify(suma1));
    }
}
// 229
var INPUT_TOTAL_INCOME228;
var _arrayValues228;
var arrayValues228 = JSON.parse(localStorage.getItem("valores228")) || [];
var suma228 = JSON.parse(localStorage.getItem("TOTAL228"));
var TOTAL_INCOME228 = document.getElementById('228').innerText = `${suma228}`;
var elem = document.getElementById('valor-entrada228');
var alert228 = JSON.parse(localStorage.getItem("TOTAL228"));
if (alert228 < 1) {
    alert(` ! ALERTA !    ART. 613      ${alert228} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor228(); }
}
function agregarValor228() {
    if (arrayValues228 != ' ' && arrayValues228 > 0) {
        INPUT_TOTAL_INCOME228 = document.getElementById('valor-entrada228').value;
        var arrayUnico = INPUT_TOTAL_INCOME228;  //  llamar del localStorage
        _arrayValues228 = JSON.parse(localStorage.getItem("TOTAL228"));  //  modificar
        let suma1 = parseInt(_arrayValues228) + parseInt(arrayUnico);
        TOTAL_INCOME228 = document.getElementById('228').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL228", JSON.stringify(suma1));
        localStorage.setItem("valores228", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME228 = document.getElementById('valor-entrada228').value;
        arrayValues228 = INPUT_TOTAL_INCOME228;  // mandar al localStorage
        localStorage.setItem("valores228", JSON.stringify(arrayValues228));  // modificar total productos
        _arrayValues228 = JSON.parse(localStorage.getItem("valores228"));
        TOTAL_INCOME228 = document.getElementById('228').innerText = `${arrayValues228}` // mandar al localStorage
        localStorage.setItem("TOTAL228", JSON.stringify(INPUT_TOTAL_INCOME228));
    }
}
function disminuirValor228() {
    _arrayValues228 = JSON.parse(localStorage.getItem("TOTAL228"));
    suma228 = _arrayValues228;
    if (arrayValues228 != ' ' && arrayValues228 > 0) {
        INPUT_TOTAL_INCOME228 = document.getElementById('valor-entrada228').value;
        var arrayUnico = INPUT_TOTAL_INCOME228;  //  llamar del localStorage
        _arrayValues228 = JSON.parse(localStorage.getItem("TOTAL228"));  //  modificar
        let suma1 = parseInt(_arrayValues228) - parseInt(arrayUnico);
        TOTAL_INCOME228 = document.getElementById('228').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL228", JSON.stringify(suma1));
        localStorage.setItem("valores228", JSON.stringify(suma1));
    }
}
// 230
var INPUT_TOTAL_INCOME229;
var _arrayValues229;
var arrayValues229 = JSON.parse(localStorage.getItem("valores229")) || [];
var suma229 = JSON.parse(localStorage.getItem("TOTAL229"));
var TOTAL_INCOME229 = document.getElementById('229').innerText = `${suma229}`;
var elem = document.getElementById('valor-entrada229');
var alert229 = JSON.parse(localStorage.getItem("TOTAL229"));
if (alert229 < 1) {
    alert(` ! ALERTA !    ART. 614      ${alert229} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor229(); }
}
function agregarValor229() {
    if (arrayValues229 != ' ' && arrayValues229 > 0) {
        INPUT_TOTAL_INCOME229 = document.getElementById('valor-entrada229').value;
        var arrayUnico = INPUT_TOTAL_INCOME229;  //  llamar del localStorage
        _arrayValues229 = JSON.parse(localStorage.getItem("TOTAL229"));  //  modificar
        let suma1 = parseInt(_arrayValues229) + parseInt(arrayUnico);
        TOTAL_INCOME229 = document.getElementById('229').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL229", JSON.stringify(suma1));
        localStorage.setItem("valores229", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME229 = document.getElementById('valor-entrada229').value;
        arrayValues229 = INPUT_TOTAL_INCOME229;  // mandar al localStorage
        localStorage.setItem("valores229", JSON.stringify(arrayValues229));  // modificar total productos
        _arrayValues229 = JSON.parse(localStorage.getItem("valores229"));
        TOTAL_INCOME229 = document.getElementById('229').innerText = `${arrayValues229}` // mandar al localStorage
        localStorage.setItem("TOTAL229", JSON.stringify(INPUT_TOTAL_INCOME229));
    }
}
function disminuirValor229() {
    _arrayValues229 = JSON.parse(localStorage.getItem("TOTAL229"));
    suma229 = _arrayValues229;
    if (arrayValues229 != ' ' && arrayValues229 > 0) {
        INPUT_TOTAL_INCOME229 = document.getElementById('valor-entrada229').value;
        var arrayUnico = INPUT_TOTAL_INCOME229;  //  llamar del localStorage
        _arrayValues229 = JSON.parse(localStorage.getItem("TOTAL229"));  //  modificar
        let suma1 = parseInt(_arrayValues229) - parseInt(arrayUnico);
        TOTAL_INCOME229 = document.getElementById('229').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL229", JSON.stringify(suma1));
        localStorage.setItem("valores229", JSON.stringify(suma1));
    }
}
// 231
var INPUT_TOTAL_INCOME230;
var _arrayValues230;
var arrayValues230 = JSON.parse(localStorage.getItem("valores230")) || [];
var suma230 = JSON.parse(localStorage.getItem("TOTAL230"));
var TOTAL_INCOME230 = document.getElementById('230').innerText = `${suma230}`;
var elem = document.getElementById('valor-entrada230');
var alert230 = JSON.parse(localStorage.getItem("TOTAL230"));
if (alert230 < 1) {
    alert(` ! ALERTA !    TUBO GEL N1      ${alert230} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor230(); }
}
function agregarValor230() {
    if (arrayValues230 != ' ' && arrayValues230 > 0) {
        INPUT_TOTAL_INCOME230 = document.getElementById('valor-entrada230').value;
        var arrayUnico = INPUT_TOTAL_INCOME230;  //  llamar del localStorage
        _arrayValues230 = JSON.parse(localStorage.getItem("TOTAL230"));  //  modificar
        let suma1 = parseInt(_arrayValues230) + parseInt(arrayUnico);
        TOTAL_INCOME230 = document.getElementById('230').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL230", JSON.stringify(suma1));
        localStorage.setItem("valores230", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME230 = document.getElementById('valor-entrada230').value;
        arrayValues230 = INPUT_TOTAL_INCOME230;  // mandar al localStorage
        localStorage.setItem("valores230", JSON.stringify(arrayValues230));  // modificar total productos
        _arrayValues230 = JSON.parse(localStorage.getItem("valores230"));
        TOTAL_INCOME230 = document.getElementById('230').innerText = `${arrayValues230}` // mandar al localStorage
        localStorage.setItem("TOTAL230", JSON.stringify(INPUT_TOTAL_INCOME230));
    }
}
function disminuirValor230() {
    _arrayValues230 = JSON.parse(localStorage.getItem("TOTAL230"));
    suma230 = _arrayValues230;
    if (arrayValues230 != ' ' && arrayValues230 > 0) {
        INPUT_TOTAL_INCOME230 = document.getElementById('valor-entrada230').value;
        var arrayUnico = INPUT_TOTAL_INCOME230;  //  llamar del localStorage
        _arrayValues230 = JSON.parse(localStorage.getItem("TOTAL230"));  //  modificar
        let suma1 = parseInt(_arrayValues230) - parseInt(arrayUnico);
        TOTAL_INCOME230 = document.getElementById('230').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL230", JSON.stringify(suma1));
        localStorage.setItem("valores230", JSON.stringify(suma1));
    }
}
// 232
var INPUT_TOTAL_INCOME231;
var _arrayValues231;
var arrayValues231 = JSON.parse(localStorage.getItem("valores231")) || [];
var suma231 = JSON.parse(localStorage.getItem("TOTAL231"));
var TOTAL_INCOME231 = document.getElementById('231').innerText = `${suma231}`;
var elem = document.getElementById('valor-entrada231');
var alert231 = JSON.parse(localStorage.getItem("TOTAL231"));
if (alert231 < 1) {
    alert(` ! ALERTA !    TUBO GEL N2      ${alert231} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor231(); }
}
function agregarValor231() {
    if (arrayValues231 != ' ' && arrayValues231 > 0) {
        INPUT_TOTAL_INCOME231 = document.getElementById('valor-entrada231').value;
        var arrayUnico = INPUT_TOTAL_INCOME231;  //  llamar del localStorage
        _arrayValues231 = JSON.parse(localStorage.getItem("TOTAL231"));  //  modificar
        let suma1 = parseInt(_arrayValues231) + parseInt(arrayUnico);
        TOTAL_INCOME231 = document.getElementById('231').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL231", JSON.stringify(suma1));
        localStorage.setItem("valores231", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME231 = document.getElementById('valor-entrada231').value;
        arrayValues231 = INPUT_TOTAL_INCOME231;  // mandar al localStorage
        localStorage.setItem("valores231", JSON.stringify(arrayValues231));  // modificar total productos
        _arrayValues231 = JSON.parse(localStorage.getItem("valores231"));
        TOTAL_INCOME231 = document.getElementById('231').innerText = `${arrayValues231}` // mandar al localStorage
        localStorage.setItem("TOTAL231", JSON.stringify(INPUT_TOTAL_INCOME231));
    }
}
function disminuirValor231() {
    _arrayValues231 = JSON.parse(localStorage.getItem("TOTAL231"));
    suma231 = _arrayValues231;
    if (arrayValues231 != ' ' && arrayValues231 > 0) {
        INPUT_TOTAL_INCOME231 = document.getElementById('valor-entrada231').value;
        var arrayUnico = INPUT_TOTAL_INCOME231;  //  llamar del localStorage
        _arrayValues231 = JSON.parse(localStorage.getItem("TOTAL231"));  //  modificar
        let suma1 = parseInt(_arrayValues231) - parseInt(arrayUnico);
        TOTAL_INCOME231 = document.getElementById('231').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL231", JSON.stringify(suma1));
        localStorage.setItem("valores231", JSON.stringify(suma1));
    }
}
// 233
var INPUT_TOTAL_INCOME232;
var _arrayValues232;
var arrayValues232 = JSON.parse(localStorage.getItem("valores232")) || [];
var suma232 = JSON.parse(localStorage.getItem("TOTAL232"));
var TOTAL_INCOME232 = document.getElementById('232').innerText = `${suma232}`;
var elem = document.getElementById('valor-entrada232');
var alert232 = JSON.parse(localStorage.getItem("TOTAL232"));
if (alert232 < 1) {
    alert(` ! ALERTA !    TUBO FLEXOR      ${alert232} UNIDADES`);
}
elem.onkeyup = function (e) {
    if (e.keyCode == 13) { agregarValor232(); }
}
function agregarValor232() {
    if (arrayValues232 != ' ' && arrayValues232 > 0) {
        INPUT_TOTAL_INCOME232 = document.getElementById('valor-entrada232').value;
        var arrayUnico = INPUT_TOTAL_INCOME232;  //  llamar del localStorage
        _arrayValues232 = JSON.parse(localStorage.getItem("TOTAL232"));  //  modificar
        let suma1 = parseInt(_arrayValues232) + parseInt(arrayUnico);
        TOTAL_INCOME232 = document.getElementById('232').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL232", JSON.stringify(suma1));
        localStorage.setItem("valores232", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME232 = document.getElementById('valor-entrada232').value;
        arrayValues232 = INPUT_TOTAL_INCOME232;  // mandar al localStorage
        localStorage.setItem("valores232", JSON.stringify(arrayValues232));  // modificar total productos
        _arrayValues232 = JSON.parse(localStorage.getItem("valores232"));
        TOTAL_INCOME232 = document.getElementById('232').innerText = `${arrayValues232}` // mandar al localStorage
        localStorage.setItem("TOTAL232", JSON.stringify(INPUT_TOTAL_INCOME232));
    }
}
function disminuirValor232() {
    _arrayValues232 = JSON.parse(localStorage.getItem("TOTAL232"));
    suma232 = _arrayValues232;
    if (arrayValues232 != ' ' && arrayValues232 > 0) {
        INPUT_TOTAL_INCOME232 = document.getElementById('valor-entrada232').value;
        var arrayUnico = INPUT_TOTAL_INCOME232;  //  llamar del localStorage
        _arrayValues232 = JSON.parse(localStorage.getItem("TOTAL232"));  //  modificar
        let suma1 = parseInt(_arrayValues232) - parseInt(arrayUnico);
        TOTAL_INCOME232 = document.getElementById('232').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL232", JSON.stringify(suma1));
        localStorage.setItem("valores232", JSON.stringify(suma1));
    }
}
// 235
var INPUT_TOTAL_INCOME234;
var _arrayValues234;
var arrayValues234 = JSON.parse(localStorage.getItem("valores234")) || [];
var suma234 = JSON.parse(localStorage.getItem("TOTAL234"));
var TOTAL_INCOME234 = document.getElementById('234').innerText = `${suma234}`;
var elem = document.getElementById('valor-entrada234');
var alert234 = JSON.parse(localStorage.getItem("TOTAL234"));
if (alert234 < 1){
    alert(` ! ALERTA !     ART. 1506      ${alert234} UNIDADES`);
}
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor234();}}
function agregarValor234 () {
    if(arrayValues234 != ' ' && arrayValues234 > 0){
        INPUT_TOTAL_INCOME234 = document.getElementById('valor-entrada234').value;
        var arrayUnico = INPUT_TOTAL_INCOME234;  //  llamar del localStorage
        _arrayValues234 = JSON.parse(localStorage.getItem("TOTAL234"));  //  modificar
        let suma1 = parseInt(_arrayValues234) + parseInt(arrayUnico) ;
        TOTAL_INCOME234 = document.getElementById('234').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL234", JSON.stringify(suma1));
        localStorage.setItem("valores234", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME234 = document.getElementById('valor-entrada234').value;
        arrayValues234 = INPUT_TOTAL_INCOME234;  // mandar al localStorage
        localStorage.setItem("valores234", JSON.stringify(arrayValues234));  // modificar total productos
        _arrayValues234 = JSON.parse(localStorage.getItem("valores234"));
        TOTAL_INCOME234 = document.getElementById('234').innerText = `${arrayValues234}` // mandar al localStorage
         localStorage.setItem("TOTAL234", JSON.stringify(INPUT_TOTAL_INCOME234));  }   }
function disminuirValor234 () {
    _arrayValues234 = JSON.parse(localStorage.getItem("TOTAL234"));
    suma234 = _arrayValues234;
    if(arrayValues234 != ' ' && arrayValues234 > 0){
        INPUT_TOTAL_INCOME234 = document.getElementById('valor-entrada234').value;
        var arrayUnico = INPUT_TOTAL_INCOME234;  //  llamar del localStorage
        _arrayValues234 = JSON.parse(localStorage.getItem("TOTAL234"));  //  modificar
        let suma1 = parseInt(_arrayValues234) - parseInt(arrayUnico) ;
        TOTAL_INCOME234 = document.getElementById('234').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL234", JSON.stringify(suma1));
        localStorage.setItem("valores234", JSON.stringify(suma1)); } }
// 236
var INPUT_TOTAL_INCOME235;
var _arrayValues235;
var arrayValues235 = JSON.parse(localStorage.getItem("valores235")) || [];
var suma235 = JSON.parse(localStorage.getItem("TOTAL235"));
var TOTAL_INCOME235 = document.getElementById('235').innerText = `${suma235}`;
var elem = document.getElementById('valor-entrada235');
var alert235 = JSON.parse(localStorage.getItem("TOTAL235"));
if (alert235 < 1){
    alert(` ! ALERTA !     ART. 1220      ${alert235} UNIDADES`);
}
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor235();}}
function agregarValor235 () {
    if(arrayValues235 != ' ' && arrayValues235 > 0){
        INPUT_TOTAL_INCOME235 = document.getElementById('valor-entrada235').value;
        var arrayUnico = INPUT_TOTAL_INCOME235;  //  llamar del localStorage
        _arrayValues235 = JSON.parse(localStorage.getItem("TOTAL235"));  //  modificar
        let suma1 = parseInt(_arrayValues235) + parseInt(arrayUnico) ;
        TOTAL_INCOME235 = document.getElementById('235').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL235", JSON.stringify(suma1));
        localStorage.setItem("valores235", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME235 = document.getElementById('valor-entrada235').value;
        arrayValues235 = INPUT_TOTAL_INCOME235;  // mandar al localStorage
        localStorage.setItem("valores235", JSON.stringify(arrayValues235));  // modificar total productos
        _arrayValues235 = JSON.parse(localStorage.getItem("valores235"));
        TOTAL_INCOME235 = document.getElementById('235').innerText = `${arrayValues235}` // mandar al localStorage
         localStorage.setItem("TOTAL235", JSON.stringify(INPUT_TOTAL_INCOME235));  }   }
function disminuirValor235 () {
    _arrayValues235 = JSON.parse(localStorage.getItem("TOTAL235"));
    suma235 = _arrayValues235;
    if(arrayValues235 != ' ' && arrayValues235 > 0){
        INPUT_TOTAL_INCOME235 = document.getElementById('valor-entrada235').value;
        var arrayUnico = INPUT_TOTAL_INCOME235;  //  llamar del localStorage
        _arrayValues235 = JSON.parse(localStorage.getItem("TOTAL235"));  //  modificar
        let suma1 = parseInt(_arrayValues235) - parseInt(arrayUnico) ;
        TOTAL_INCOME235 = document.getElementById('235').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL235", JSON.stringify(suma1));
        localStorage.setItem("valores235", JSON.stringify(suma1)); } }
// 237
var INPUT_TOTAL_INCOME236;
var _arrayValues236;
var arrayValues236 = JSON.parse(localStorage.getItem("valores236")) || [];
var suma236 = JSON.parse(localStorage.getItem("TOTAL236"));
var TOTAL_INCOME236 = document.getElementById('236').innerText = `${suma236}`;
var elem = document.getElementById('valor-entrada236');
var alert236 = JSON.parse(localStorage.getItem("TOTAL236"));
if (alert236 < 1){
    alert(` ! ALERTA !     ART. 2003      ${alert236} UNIDADES`);
}
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor236();}}
function agregarValor236 () {
    if(arrayValues236 != ' ' && arrayValues236 > 0){
        INPUT_TOTAL_INCOME236 = document.getElementById('valor-entrada236').value;
        var arrayUnico = INPUT_TOTAL_INCOME236;  //  llamar del localStorage
        _arrayValues236 = JSON.parse(localStorage.getItem("TOTAL236"));  //  modificar
        let suma1 = parseInt(_arrayValues236) + parseInt(arrayUnico) ;
        TOTAL_INCOME236 = document.getElementById('236').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL236", JSON.stringify(suma1));
        localStorage.setItem("valores236", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME236 = document.getElementById('valor-entrada236').value;
        arrayValues236 = INPUT_TOTAL_INCOME236;  // mandar al localStorage
        localStorage.setItem("valores236", JSON.stringify(arrayValues236));  // modificar total productos
        _arrayValues236 = JSON.parse(localStorage.getItem("valores236"));
        TOTAL_INCOME236 = document.getElementById('236').innerText = `${arrayValues236}` // mandar al localStorage
         localStorage.setItem("TOTAL236", JSON.stringify(INPUT_TOTAL_INCOME236));  }   }
function disminuirValor236 () {
    _arrayValues236 = JSON.parse(localStorage.getItem("TOTAL236"));
    suma236 = _arrayValues236;
    if(arrayValues236 != ' ' && arrayValues236 > 0){
        INPUT_TOTAL_INCOME236 = document.getElementById('valor-entrada236').value;
        var arrayUnico = INPUT_TOTAL_INCOME236;  //  llamar del localStorage
        _arrayValues236 = JSON.parse(localStorage.getItem("TOTAL236"));  //  modificar
        let suma1 = parseInt(_arrayValues236) - parseInt(arrayUnico) ;
        TOTAL_INCOME236 = document.getElementById('236').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL236", JSON.stringify(suma1));
        localStorage.setItem("valores236", JSON.stringify(suma1)); } }
// 238
var INPUT_TOTAL_INCOME237;
var _arrayValues237;
var arrayValues237 = JSON.parse(localStorage.getItem("valores237")) || [];
var suma237 = JSON.parse(localStorage.getItem("TOTAL237"));
var TOTAL_INCOME237 = document.getElementById('237').innerText = `${suma237}`;
var elem = document.getElementById('valor-entrada237');
var alert237 = JSON.parse(localStorage.getItem("TOTAL237"));
if (alert237 < 1){
    alert(` ! ALERTA !     ART. 1511      ${alert237} UNIDADES`);
}
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor237();}}
function agregarValor237 () {
    if(arrayValues237 != ' ' && arrayValues237 > 0){
        INPUT_TOTAL_INCOME237 = document.getElementById('valor-entrada237').value;
        var arrayUnico = INPUT_TOTAL_INCOME237;  //  llamar del localStorage
        _arrayValues237 = JSON.parse(localStorage.getItem("TOTAL237"));  //  modificar
        let suma1 = parseInt(_arrayValues237) + parseInt(arrayUnico) ;
        TOTAL_INCOME237 = document.getElementById('237').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL237", JSON.stringify(suma1));
        localStorage.setItem("valores237", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME237 = document.getElementById('valor-entrada237').value;
        arrayValues237 = INPUT_TOTAL_INCOME237;  // mandar al localStorage
        localStorage.setItem("valores237", JSON.stringify(arrayValues237));  // modificar total productos
        _arrayValues237 = JSON.parse(localStorage.getItem("valores237"));
        TOTAL_INCOME237 = document.getElementById('237').innerText = `${arrayValues237}` // mandar al localStorage
         localStorage.setItem("TOTAL237", JSON.stringify(INPUT_TOTAL_INCOME237));  }   }
function disminuirValor237 () {
    _arrayValues237 = JSON.parse(localStorage.getItem("TOTAL237"));
    suma237 = _arrayValues237;
    if(arrayValues237 != ' ' && arrayValues237 > 0){
        INPUT_TOTAL_INCOME237 = document.getElementById('valor-entrada237').value;
        var arrayUnico = INPUT_TOTAL_INCOME237;  //  llamar del localStorage
        _arrayValues237 = JSON.parse(localStorage.getItem("TOTAL237"));  //  modificar
        let suma1 = parseInt(_arrayValues237) - parseInt(arrayUnico) ;
        TOTAL_INCOME237 = document.getElementById('237').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL237", JSON.stringify(suma1));
        localStorage.setItem("valores237", JSON.stringify(suma1)); } }
// 239
var INPUT_TOTAL_INCOME238;
var _arrayValues238;
var arrayValues238 = JSON.parse(localStorage.getItem("valores238")) || [];
var suma238 = JSON.parse(localStorage.getItem("TOTAL238"));
var TOTAL_INCOME238 = document.getElementById('238').innerText = `${suma238}`;
var elem = document.getElementById('valor-entrada238');
var alert238 = JSON.parse(localStorage.getItem("TOTAL238"));
if (alert238 < 1){
    alert(` ! ALERTA !     ART. 1602      ${alert238} UNIDADES`);
}
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor238();}}
function agregarValor238 () {
    if(arrayValues238 != ' ' && arrayValues238 > 0){
        INPUT_TOTAL_INCOME238 = document.getElementById('valor-entrada238').value;
        var arrayUnico = INPUT_TOTAL_INCOME238;  //  llamar del localStorage
        _arrayValues238 = JSON.parse(localStorage.getItem("TOTAL238"));  //  modificar
        let suma1 = parseInt(_arrayValues238) + parseInt(arrayUnico) ;
        TOTAL_INCOME238 = document.getElementById('238').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL238", JSON.stringify(suma1));
        localStorage.setItem("valores238", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME238 = document.getElementById('valor-entrada238').value;
        arrayValues238 = INPUT_TOTAL_INCOME238;  // mandar al localStorage
        localStorage.setItem("valores238", JSON.stringify(arrayValues238));  // modificar total productos
        _arrayValues238 = JSON.parse(localStorage.getItem("valores238"));
        TOTAL_INCOME238 = document.getElementById('238').innerText = `${arrayValues238}` // mandar al localStorage
         localStorage.setItem("TOTAL238", JSON.stringify(INPUT_TOTAL_INCOME238));  }   }
function disminuirValor238 () {
    _arrayValues238 = JSON.parse(localStorage.getItem("TOTAL238"));
    suma238 = _arrayValues238;
    if(arrayValues238 != ' ' && arrayValues238 > 0){
        INPUT_TOTAL_INCOME238 = document.getElementById('valor-entrada238').value;
        var arrayUnico = INPUT_TOTAL_INCOME238;  //  llamar del localStorage
        _arrayValues238 = JSON.parse(localStorage.getItem("TOTAL238"));  //  modificar
        let suma1 = parseInt(_arrayValues238) - parseInt(arrayUnico) ;
        TOTAL_INCOME238 = document.getElementById('238').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL238", JSON.stringify(suma1));
        localStorage.setItem("valores238", JSON.stringify(suma1)); } }
// 240
var INPUT_TOTAL_INCOME239;
var _arrayValues239;
var arrayValues239 = JSON.parse(localStorage.getItem("valores239")) || [];
var suma239 = JSON.parse(localStorage.getItem("TOTAL239"));
var TOTAL_INCOME239 = document.getElementById('239').innerText = `${suma239}`;
var elem = document.getElementById('valor-entrada239');
var alert239 = JSON.parse(localStorage.getItem("TOTAL239"));
if (alert239 < 1){
    alert(` ! ALERTA !     ART. 1525      ${alert239} UNIDADES`);
}
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor239();}}
function agregarValor239 () {
    if(arrayValues239 != ' ' && arrayValues239 > 0){
        INPUT_TOTAL_INCOME239 = document.getElementById('valor-entrada239').value;
        var arrayUnico = INPUT_TOTAL_INCOME239;  //  llamar del localStorage
        _arrayValues239 = JSON.parse(localStorage.getItem("TOTAL239"));  //  modificar
        let suma1 = parseInt(_arrayValues239) + parseInt(arrayUnico) ;
        TOTAL_INCOME239 = document.getElementById('239').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL239", JSON.stringify(suma1));
        localStorage.setItem("valores239", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME239 = document.getElementById('valor-entrada239').value;
        arrayValues239 = INPUT_TOTAL_INCOME239;  // mandar al localStorage
        localStorage.setItem("valores239", JSON.stringify(arrayValues239));  // modificar total productos
        _arrayValues239 = JSON.parse(localStorage.getItem("valores239"));
        TOTAL_INCOME239 = document.getElementById('239').innerText = `${arrayValues239}` // mandar al localStorage
         localStorage.setItem("TOTAL239", JSON.stringify(INPUT_TOTAL_INCOME239));  }   }
function disminuirValor239 () {
    _arrayValues239 = JSON.parse(localStorage.getItem("TOTAL239"));
    suma239 = _arrayValues239;
    if(arrayValues239 != ' ' && arrayValues239 > 0){
        INPUT_TOTAL_INCOME239 = document.getElementById('valor-entrada239').value;
        var arrayUnico = INPUT_TOTAL_INCOME239;  //  llamar del localStorage
        _arrayValues239 = JSON.parse(localStorage.getItem("TOTAL239"));  //  modificar
        let suma1 = parseInt(_arrayValues239) - parseInt(arrayUnico) ;
        TOTAL_INCOME239 = document.getElementById('239').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL239", JSON.stringify(suma1));
        localStorage.setItem("valores239", JSON.stringify(suma1)); } }
// 241
var INPUT_TOTAL_INCOME240;
var _arrayValues240;
var arrayValues240 = JSON.parse(localStorage.getItem("valores240")) || [];
var suma240 = JSON.parse(localStorage.getItem("TOTAL240"));
var TOTAL_INCOME240 = document.getElementById('240').innerText = `${suma240}`;
var elem = document.getElementById('valor-entrada240');
var alert240 = JSON.parse(localStorage.getItem("TOTAL240"));
if (alert240 < 1){
    alert(` ! ALERTA !     ART. 7015      ${alert240} UNIDADES`);
}
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor240();}}
function agregarValor240 () {
    if(arrayValues240 != ' ' && arrayValues240 > 0){
        INPUT_TOTAL_INCOME240 = document.getElementById('valor-entrada240').value;
        var arrayUnico = INPUT_TOTAL_INCOME240;  //  llamar del localStorage
        _arrayValues240 = JSON.parse(localStorage.getItem("TOTAL240"));  //  modificar
        let suma1 = parseInt(_arrayValues240) + parseInt(arrayUnico) ;
        TOTAL_INCOME240 = document.getElementById('240').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL240", JSON.stringify(suma1));
        localStorage.setItem("valores240", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME240 = document.getElementById('valor-entrada240').value;
        arrayValues240 = INPUT_TOTAL_INCOME240;  // mandar al localStorage
        localStorage.setItem("valores240", JSON.stringify(arrayValues240));  // modificar total productos
        _arrayValues240 = JSON.parse(localStorage.getItem("valores240"));
        TOTAL_INCOME240 = document.getElementById('240').innerText = `${arrayValues240}` // mandar al localStorage
         localStorage.setItem("TOTAL240", JSON.stringify(INPUT_TOTAL_INCOME240));  }   }
function disminuirValor240 () {
    _arrayValues240 = JSON.parse(localStorage.getItem("TOTAL240"));
    suma240 = _arrayValues240;
    if(arrayValues240 != ' ' && arrayValues240 > 0){
        INPUT_TOTAL_INCOME240 = document.getElementById('valor-entrada240').value;
        var arrayUnico = INPUT_TOTAL_INCOME240;  //  llamar del localStorage
        _arrayValues240 = JSON.parse(localStorage.getItem("TOTAL240"));  //  modificar
        let suma1 = parseInt(_arrayValues240) - parseInt(arrayUnico) ;
        TOTAL_INCOME240 = document.getElementById('240').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL240", JSON.stringify(suma1));
        localStorage.setItem("valores240", JSON.stringify(suma1)); } }
// 242
var INPUT_TOTAL_INCOME241;
var _arrayValues241;
var arrayValues241 = JSON.parse(localStorage.getItem("valores241")) || [];
var suma241 = JSON.parse(localStorage.getItem("TOTAL241"));
var TOTAL_INCOME241 = document.getElementById('241').innerText = `${suma241}`;
var elem = document.getElementById('valor-entrada241');
var alert241 = JSON.parse(localStorage.getItem("TOTAL241"));
if (alert241 < 1){
    alert(` ! ALERTA !     ART. 1603     ${alert241} UNIDADES`);
}
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor241();}}
function agregarValor241 () {
    if(arrayValues241 != ' ' && arrayValues241 > 0){
        INPUT_TOTAL_INCOME241 = document.getElementById('valor-entrada241').value;
        var arrayUnico = INPUT_TOTAL_INCOME241;  //  llamar del localStorage
        _arrayValues241 = JSON.parse(localStorage.getItem("TOTAL241"));  //  modificar
        let suma1 = parseInt(_arrayValues241) + parseInt(arrayUnico) ;
        TOTAL_INCOME241 = document.getElementById('241').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL241", JSON.stringify(suma1));
        localStorage.setItem("valores241", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME241 = document.getElementById('valor-entrada241').value;
        arrayValues241 = INPUT_TOTAL_INCOME241;  // mandar al localStorage
        localStorage.setItem("valores241", JSON.stringify(arrayValues241));  // modificar total productos
        _arrayValues241 = JSON.parse(localStorage.getItem("valores241"));
        TOTAL_INCOME241 = document.getElementById('241').innerText = `${arrayValues241}` // mandar al localStorage
         localStorage.setItem("TOTAL241", JSON.stringify(INPUT_TOTAL_INCOME241));  }   }
function disminuirValor241 () {
    _arrayValues241 = JSON.parse(localStorage.getItem("TOTAL241"));
    suma241 = _arrayValues241;
    if(arrayValues241 != ' ' && arrayValues241 > 0){
        INPUT_TOTAL_INCOME241 = document.getElementById('valor-entrada241').value;
        var arrayUnico = INPUT_TOTAL_INCOME241;  //  llamar del localStorage
        _arrayValues241 = JSON.parse(localStorage.getItem("TOTAL241"));  //  modificar
        let suma1 = parseInt(_arrayValues241) - parseInt(arrayUnico) ;
        TOTAL_INCOME241 = document.getElementById('241').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL241", JSON.stringify(suma1));
        localStorage.setItem("valores241", JSON.stringify(suma1)); } }
// 243
var INPUT_TOTAL_INCOME242;
var _arrayValues242;
var arrayValues242 = JSON.parse(localStorage.getItem("valores242")) || [];
var suma242 = JSON.parse(localStorage.getItem("TOTAL242"));
var TOTAL_INCOME242 = document.getElementById('242').innerText = `${suma242}`;
var elem = document.getElementById('valor-entrada242');
var alert242 = JSON.parse(localStorage.getItem("TOTAL242"));
if (alert242 < 1){
    alert(` ! ALERTA !     ART. 1510      ${alert242} UNIDADES`);
}
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor242();}}
function agregarValor242 () {
    if(arrayValues242 != ' ' && arrayValues242 > 0){
        INPUT_TOTAL_INCOME242 = document.getElementById('valor-entrada242').value;
        var arrayUnico = INPUT_TOTAL_INCOME242;  //  llamar del localStorage
        _arrayValues242 = JSON.parse(localStorage.getItem("TOTAL242"));  //  modificar
        let suma1 = parseInt(_arrayValues242) + parseInt(arrayUnico) ;
        TOTAL_INCOME242 = document.getElementById('242').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL242", JSON.stringify(suma1));
        localStorage.setItem("valores242", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME242 = document.getElementById('valor-entrada242').value;
        arrayValues242 = INPUT_TOTAL_INCOME242;  // mandar al localStorage
        localStorage.setItem("valores242", JSON.stringify(arrayValues242));  // modificar total productos
        _arrayValues242 = JSON.parse(localStorage.getItem("valores242"));
        TOTAL_INCOME242 = document.getElementById('242').innerText = `${arrayValues242}` // mandar al localStorage
         localStorage.setItem("TOTAL242", JSON.stringify(INPUT_TOTAL_INCOME242));  }   }
function disminuirValor242 () {
    _arrayValues242 = JSON.parse(localStorage.getItem("TOTAL242"));
    suma242 = _arrayValues242;
    if(arrayValues242 != ' ' && arrayValues242 > 0){
        INPUT_TOTAL_INCOME242 = document.getElementById('valor-entrada242').value;
        var arrayUnico = INPUT_TOTAL_INCOME242;  //  llamar del localStorage
        _arrayValues242 = JSON.parse(localStorage.getItem("TOTAL242"));  //  modificar
        let suma1 = parseInt(_arrayValues242) - parseInt(arrayUnico) ;
        TOTAL_INCOME242 = document.getElementById('242').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL242", JSON.stringify(suma1));
        localStorage.setItem("valores242", JSON.stringify(suma1)); } }
// 244
var INPUT_TOTAL_INCOME243;
var _arrayValues243;
var arrayValues243 = JSON.parse(localStorage.getItem("valores243")) || [];
var suma243 = JSON.parse(localStorage.getItem("TOTAL243"));
var TOTAL_INCOME243 = document.getElementById('243').innerText = `${suma243}`;
var elem = document.getElementById('valor-entrada243');
var alert243 = JSON.parse(localStorage.getItem("TOTAL243"));
if (alert243 < 1){
    alert(` ! ALERTA !     ART. 1508      ${alert243} UNIDADES`);
}
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor243();}}
function agregarValor243 () {
    if(arrayValues243 != ' ' && arrayValues243 > 0){
        INPUT_TOTAL_INCOME243 = document.getElementById('valor-entrada243').value;
        var arrayUnico = INPUT_TOTAL_INCOME243;  //  llamar del localStorage
        _arrayValues243 = JSON.parse(localStorage.getItem("TOTAL243"));  //  modificar
        let suma1 = parseInt(_arrayValues243) + parseInt(arrayUnico) ;
        TOTAL_INCOME243 = document.getElementById('243').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL243", JSON.stringify(suma1));
        localStorage.setItem("valores243", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME243 = document.getElementById('valor-entrada243').value;
        arrayValues243 = INPUT_TOTAL_INCOME243;  // mandar al localStorage
        localStorage.setItem("valores243", JSON.stringify(arrayValues243));  // modificar total productos
        _arrayValues243 = JSON.parse(localStorage.getItem("valores243"));
        TOTAL_INCOME243 = document.getElementById('243').innerText = `${arrayValues243}` // mandar al localStorage
         localStorage.setItem("TOTAL243", JSON.stringify(INPUT_TOTAL_INCOME243));  }   }
function disminuirValor243 () {
    _arrayValues243 = JSON.parse(localStorage.getItem("TOTAL243"));
    suma243 = _arrayValues243;
    if(arrayValues243 != ' ' && arrayValues243 > 0){
        INPUT_TOTAL_INCOME243 = document.getElementById('valor-entrada243').value;
        var arrayUnico = INPUT_TOTAL_INCOME243;  //  llamar del localStorage
        _arrayValues243 = JSON.parse(localStorage.getItem("TOTAL243"));  //  modificar
        let suma1 = parseInt(_arrayValues243) - parseInt(arrayUnico) ;
        TOTAL_INCOME243 = document.getElementById('243').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL243", JSON.stringify(suma1));
        localStorage.setItem("valores243", JSON.stringify(suma1)); } }
// 245
var INPUT_TOTAL_INCOME244;
var _arrayValues244;
var arrayValues244 = JSON.parse(localStorage.getItem("valores244")) || [];
var suma244 = JSON.parse(localStorage.getItem("TOTAL244"));
var TOTAL_INCOME244 = document.getElementById('244').innerText = `${suma244}`;
var elem = document.getElementById('valor-entrada244');
var alert244 = JSON.parse(localStorage.getItem("TOTAL244"));
if (alert244 < 1){
    alert(` ! ALERTA !     ART. 1608      ${alert244} UNIDADES`);
}
elem.onkeyup = function(e){
if(e.keyCode == 13){agregarValor244();}}
function agregarValor244 () {
    if(arrayValues244 != ' ' && arrayValues244 > 0){
        INPUT_TOTAL_INCOME244 = document.getElementById('valor-entrada244').value;
        var arrayUnico = INPUT_TOTAL_INCOME244;  //  llamar del localStorage
        _arrayValues244 = JSON.parse(localStorage.getItem("TOTAL244"));  //  modificar
        let suma1 = parseInt(_arrayValues244) + parseInt(arrayUnico) ;
        TOTAL_INCOME244 = document.getElementById('244').innerText = `${suma1}`;  // mandar al localStorage
        localStorage.setItem("TOTAL244", JSON.stringify(suma1));
        localStorage.setItem("valores244", JSON.stringify(suma1));
    } else {
        INPUT_TOTAL_INCOME244 = document.getElementById('valor-entrada244').value;
        arrayValues244 = INPUT_TOTAL_INCOME244;  // mandar al localStorage
        localStorage.setItem("valores244", JSON.stringify(arrayValues244));  // modificar total productos
        _arrayValues244 = JSON.parse(localStorage.getItem("valores244"));
        TOTAL_INCOME244 = document.getElementById('244').innerText = `${arrayValues244}` // mandar al localStorage
         localStorage.setItem("TOTAL244", JSON.stringify(INPUT_TOTAL_INCOME244));  }   }
function disminuirValor244 () {
    _arrayValues244 = JSON.parse(localStorage.getItem("TOTAL244"));
    suma244 = _arrayValues244;
    if(arrayValues244 != ' ' && arrayValues244 > 0){
        INPUT_TOTAL_INCOME244 = document.getElementById('valor-entrada244').value;
        var arrayUnico = INPUT_TOTAL_INCOME244;  //  llamar del localStorage
        _arrayValues244 = JSON.parse(localStorage.getItem("TOTAL244"));  //  modificar
        let suma1 = parseInt(_arrayValues244) - parseInt(arrayUnico) ;
        TOTAL_INCOME244 = document.getElementById('244').innerText = `${suma1}`  // mandar al localStorage
        localStorage.setItem("TOTAL244", JSON.stringify(suma1));
        localStorage.setItem("valores244", JSON.stringify(suma1)); } }


const productos = [
    { nombre: 'ART 504', valor: suma150, idValor: '150', function: 'agregarValor150()', function1: 'disminuirValor150()', entrada: "valor-entrada150" },
    { nombre: 'ART 1101', valor: suma151, idValor: '151', function: 'agregarValor151()', function1: 'disminuirValor151()', entrada: "valor-entrada151" },
    { nombre: 'ART 1128', valor: suma152, idValor: '152', function: 'agregarValor152()', function1: 'disminuirValor152()', entrada: "valor-entrada152" },
    { nombre: 'ART 1102', valor: suma153, idValor: '153', function: 'agregarValor153()', function1: 'disminuirValor153()', entrada: "valor-entrada153" },
    { nombre: 'ART 1149', valor: suma154, idValor: '154', function: 'agregarValor154()', function1: 'disminuirValor154()', entrada: "valor-entrada154" },
    { nombre: 'ART 1103', valor: suma155, idValor: '155', function: 'agregarValor155()', function1: 'disminuirValor155()', entrada: "valor-entrada155" },
    { nombre: 'ART 1137', valor: suma156, idValor: '156', function: 'agregarValor156()', function1: 'disminuirValor156()', entrada: "valor-entrada156" },
    { nombre: 'ART 1250', valor: suma157, idValor: '157', function: 'agregarValor157()', function1: 'disminuirValor157()', entrada: "valor-entrada157" },
    { nombre: 'ART 1270', valor: suma158, idValor: '158', function: 'agregarValor158()', function1: 'disminuirValor158()', entrada: "valor-entrada158" },
    { nombre: 'ART 1281', valor: suma159, idValor: '159', function: 'agregarValor159()', function1: 'disminuirValor159()', entrada: "valor-entrada159" },
    { nombre: 'ART 1500', valor: suma160, idValor: '160', function: 'agregarValor160()', function1: 'disminuirValor160()', entrada: "valor-entrada160" },
    { nombre: 'ART 1501', valor: suma161, idValor: '161', function: 'agregarValor161()', function1: 'disminuirValor161()', entrada: "valor-entrada161" },
    { nombre: 'ART 1552', valor: suma162, idValor: '162', function: 'agregarValor162()', function1: 'disminuirValor162()', entrada: "valor-entrada162" },
    { nombre: 'ART 1553', valor: suma163, idValor: '163', function: 'agregarValor163()', function1: 'disminuirValor163()', entrada: "valor-entrada163" },
    { nombre: 'ART 1554', valor: suma164, idValor: '164', function: 'agregarValor164()', function1: 'disminuirValor164()', entrada: "valor-entrada164" },
    { nombre: 'ART 1594', valor: suma165, idValor: '165', function: 'agregarValor165()', function1: 'disminuirValor165()', entrada: "valor-entrada165" },
    { nombre: 'ART 1599', valor: suma166, idValor: '166', function: 'agregarValor166()', function1: 'disminuirValor166()', entrada: "valor-entrada166" },
    { nombre: 'ART 1600', valor: suma167, idValor: '167', function: 'agregarValor167()', function1: 'disminuirValor167()', entrada: "valor-entrada167" },
    { nombre: 'ART 2252', valor: suma168, idValor: '168', function: 'agregarValor168()', function1: 'disminuirValor168()', entrada: "valor-entrada168" },
    { nombre: 'ART 2253', valor: suma169, idValor: '169', function: 'agregarValor169()', function1: 'disminuirValor169()', entrada: "valor-entrada169" },
    { nombre: 'ART 2254', valor: suma170, idValor: '170', function: 'agregarValor170()', function1: 'disminuirValor170()', entrada: "valor-entrada170" },
    { nombre: 'ART 2260', valor: suma171, idValor: '171', function: 'agregarValor171()', function1: 'disminuirValor171()', entrada: "valor-entrada171" },
    { nombre: 'ART 2261', valor: suma172, idValor: '172', function: 'agregarValor172()', function1: 'disminuirValor172()', entrada: "valor-entrada172" },
    { nombre: 'ART 2262', valor: suma173, idValor: '173', function: 'agregarValor173()', function1: 'disminuirValor173()', entrada: "valor-entrada173" },
    { nombre: 'ART 2263', valor: suma174, idValor: '174', function: 'agregarValor174()', function1: 'disminuirValor174()', entrada: "valor-entrada174" },
    { nombre: 'ART 2265', valor: suma175, idValor: '175', function: 'agregarValor175()', function1: 'disminuirValor175()', entrada: "valor-entrada175" },
    { nombre: 'ART 2266', valor: suma176, idValor: '176', function: 'agregarValor176()', function1: 'disminuirValor176()', entrada: "valor-entrada176" },
    { nombre: 'ART 2267', valor: suma177, idValor: '177', function: 'agregarValor177()', function1: 'disminuirValor177()', entrada: "valor-entrada177" },
    { nombre: 'ART 2269', valor: suma178, idValor: '178', function: 'agregarValor178()', function1: 'disminuirValor178()', entrada: "valor-entrada178" },
    { nombre: 'ART 2270', valor: suma179, idValor: '179', function: 'agregarValor179()', function1: 'disminuirValor179()', entrada: "valor-entrada179" },
    { nombre: 'ART 2271', valor: suma180, idValor: '180', function: 'agregarValor180()', function1: 'disminuirValor180()', entrada: "valor-entrada180" },
    { nombre: 'ART 2272', valor: suma181, idValor: '181', function: 'agregarValor181()', function1: 'disminuirValor181()', entrada: "valor-entrada181" },
    { nombre: 'ART 2280', valor: suma182, idValor: '182', function: 'agregarValor182()', function1: 'disminuirValor182()', entrada: "valor-entrada182" },
    { nombre: 'ART 2281', valor: suma183, idValor: '183', function: 'agregarValor183()', function1: 'disminuirValor183()', entrada: "valor-entrada183" },
    { nombre: 'ART 2286', valor: suma184, idValor: '184', function: 'agregarValor184()', function1: 'disminuirValor184()', entrada: "valor-entrada184" },
    { nombre: 'ART 2287', valor: suma185, idValor: '185', function: 'agregarValor185()', function1: 'disminuirValor185()', entrada: "valor-entrada185" },
    { nombre: 'ART 2288', valor: suma186, idValor: '186', function: 'agregarValor186()', function1: 'disminuirValor186()', entrada: "valor-entrada186" },
    { nombre: 'ART 2289', valor: suma187, idValor: '187', function: 'agregarValor187()', function1: 'disminuirValor187()', entrada: "valor-entrada187" },
    { nombre: 'ART 2310', valor: suma188, idValor: '188', function: 'agregarValor188()', function1: 'disminuirValor188()', entrada: "valor-entrada188" },
    { nombre: 'ART 2311', valor: suma189, idValor: '189', function: 'agregarValor189()', function1: 'disminuirValor189()', entrada: "valor-entrada189" },
    { nombre: 'ART 2312', valor: suma190, idValor: '190', function: 'agregarValor190()', function1: 'disminuirValor190()', entrada: "valor-entrada190" },
    { nombre: 'ART 4222', valor: suma191, idValor: '191', function: 'agregarValor191()', function1: 'disminuirValor191()', entrada: "valor-entrada191" },
    { nombre: 'ART 4015', valor: suma192, idValor: '192', function: 'agregarValor192()', function1: 'disminuirValor192()', entrada: "valor-entrada192" },
    { nombre: 'ART 4025', valor: suma193, idValor: '193', function: 'agregarValor193()', function1: 'disminuirValor193()', entrada: "valor-entrada193" },
    { nombre: 'ART 4030', valor: suma194, idValor: '194', function: 'agregarValor194()', function1: 'disminuirValor194()', entrada: "valor-entrada194" },
    { nombre: 'ART 4035', valor: suma195, idValor: '195', function: 'agregarValor195()', function1: 'disminuirValor195()', entrada: "valor-entrada195" },
    { nombre: 'ART 4045', valor: suma196, idValor: '196', function: 'agregarValor196()', function1: 'disminuirValor196()', entrada: "valor-entrada196" },
    { nombre: 'ART 4050', valor: suma197, idValor: '197', function: 'agregarValor197()', function1: 'disminuirValor197()', entrada: "valor-entrada197" },
    { nombre: 'ART 4055', valor: suma198, idValor: '198', function: 'agregarValor198()', function1: 'disminuirValor198()', entrada: "valor-entrada198" },
    { nombre: 'ART 4056', valor: suma199, idValor: '199', function: 'agregarValor199()', function1: 'disminuirValor199()', entrada: "valor-entrada199" },
    { nombre: 'ART 4057', valor: suma200, idValor: '200', function: 'agregarValor200()', function1: 'disminuirValor200()', entrada: "valor-entrada200" },
    { nombre: 'ART 4058', valor: suma201, idValor: '201', function: 'agregarValor201()', function1: 'disminuirValor201()', entrada: "valor-entrada201" },
    { nombre: 'ART 5025', valor: suma202, idValor: '202', function: 'agregarValor202()', function1: 'disminuirValor202()', entrada: "valor-entrada202" },
    { nombre: 'ART 5030', valor: suma203, idValor: '203', function: 'agregarValor203()', function1: 'disminuirValor203()', entrada: "valor-entrada203" },
    { nombre: 'ART 5035', valor: suma204, idValor: '204', function: 'agregarValor204()', function1: 'disminuirValor204()', entrada: "valor-entrada204" },
    { nombre: 'ART 5050', valor: suma205, idValor: '205', function: 'agregarValor205()', function1: 'disminuirValor205()', entrada: "valor-entrada205" },
    { nombre: 'ART 5070', valor: suma206, idValor: '206', function: 'agregarValor206()', function1: 'disminuirValor206()', entrada: "valor-entrada206" },
    { nombre: 'ART 6005', valor: suma207, idValor: '207', function: 'agregarValor207()', function1: 'disminuirValor207()', entrada: "valor-entrada207" },
    { nombre: 'ART 6010', valor: suma208, idValor: '208', function: 'agregarValor208()', function1: 'disminuirValor208()', entrada: "valor-entrada208" },
    { nombre: 'ART 6015', valor: suma209, idValor: '209', function: 'agregarValor209()', function1: 'disminuirValor209()', entrada: "valor-entrada209" },
    { nombre: 'ART 8001', valor: suma210, idValor: '210', function: 'agregarValor210()', function1: 'disminuirValor210()', entrada: "valor-entrada210" },
    { nombre: 'ART 601', valor: suma211, idValor: '211', function: 'agregarValor211()', function1: 'disminuirValor211()', entrada: "valor-entrada211" },
    { nombre: 'ART 602', valor: suma212, idValor: '212', function: 'agregarValor212()', function1: 'disminuirValor212()', entrada: "valor-entrada212" },
    { nombre: 'ART 603', valor: suma213, idValor: '213', function: 'agregarValor213()', function1: 'disminuirValor213()', entrada: "valor-entrada213" },
    { nombre: 'ART 604', valor: suma214, idValor: '214', function: 'agregarValor214()', function1: 'disminuirValor214()', entrada: "valor-entrada214" },
    { nombre: 'ART 605', valor: suma215, idValor: '215', function: 'agregarValor215()', function1: 'disminuirValor215()', entrada: "valor-entrada215" },
    { nombre: 'ART 606', valor: suma216, idValor: '216', function: 'agregarValor216()', function1: 'disminuirValor216()', entrada: "valor-entrada216" },
    { nombre: 'ART 607', valor: suma217, idValor: '217', function: 'agregarValor217()', function1: 'disminuirValor217()', entrada: "valor-entrada217" },
    { nombre: 'ART 608', valor: suma218, idValor: '218', function: 'agregarValor218()', function1: 'disminuirValor218()', entrada: "valor-entrada218" },
    { nombre: 'ART 609', valor: suma219, idValor: '219', function: 'agregarValor219()', function1: 'disminuirValor219()', entrada: "valor-entrada219" },
    { nombre: 'ART 610', valor: suma220, idValor: '220', function: 'agregarValor220()', function1: 'disminuirValor220()', entrada: "valor-entrada220" },
    { nombre: 'ART ANILLO GEL N1', valor: suma221, idValor: '221', function: 'agregarValor221()', function1: 'disminuirValor221()', entrada: "valor-entrada221" },
    { nombre: 'ART ANILLO GEL N2', valor: suma222, idValor: '222', function: 'agregarValor222()', function1: 'disminuirValor222()', entrada: "valor-entrada222" },
    { nombre: 'ART 2304', valor: suma223, idValor: '223', function: 'agregarValor223()', function1: 'disminuirValor223()', entrada: "valor-entrada223" },
    { nombre: 'ART 2305', valor: suma225, idValor: '224', function: 'agregarValor225()', function1: 'disminuirValor225()', entrada: "valor-entrada225" },
    { nombre: 'ART 1142', valor: suma225, idValor: '225', function: 'agregarValor225()', function1: 'disminuirValor225()', entrada: "valor-entrada225" },
    { nombre: 'ART 611', valor: suma226, idValor: '226', function: 'agregarValor226()', function1: 'disminuirValor226()', entrada: "valor-entrada226" },
    { nombre: 'ART 612', valor: suma227, idValor: '227', function: 'agregarValor227()', function1: 'disminuirValor227()', entrada: "valor-entrada227" },
    { nombre: 'ART 613', valor: suma228, idValor: '228', function: 'agregarValor228()', function1: 'disminuirValor228()', entrada: "valor-entrada228" },
    { nombre: 'ART 614', valor: suma229, idValor: '229', function: 'agregarValor229()', function1: 'disminuirValor229()', entrada: "valor-entrada229" },
    { nombre: 'ART TUBO GEL N1', valor: suma230, idValor: '230', function: 'agregarValor230()', function1: 'disminuirValor230()', entrada: "valor-entrada230" },
    { nombre: 'ART TUBO GEL N2', valor: suma231, idValor: '231', function: 'agregarValor231()', function1: 'disminuirValor231()', entrada: "valor-entrada231" },
    { nombre: 'ACOLCHADO SEPARADOR', valor: suma232, idValor: '233', function: 'agregarValor233()', function1: 'disminuirValor233()', entrada: "valor-entrada233" },
    { nombre: 'ART TUBO FLEXOR', valor: suma232, idValor: '232', function: 'agregarValor232()', function1: 'disminuirValor232()', entrada: "valor-entrada232" },
    {nombre:'ART 1506',valor:suma234,idValor:'234',function:'agregarValor234()',function1:'disminuirValor234()',entrada: "valor-entrada234"},
    {nombre:'ART 1220',valor:suma235,idValor:'235',function:'agregarValor235()',function1:'disminuirValor235()',entrada: "valor-entrada235"},
    {nombre:'ART 2003',valor:suma236,idValor:'236',function:'agregarValor236()',function1:'disminuirValor236()',entrada: "valor-entrada236"},
    {nombre:'ART 1511',valor:suma237,idValor:'237',function:'agregarValor237()',function1:'disminuirValor237()',entrada: "valor-entrada237"},
    {nombre:'ART 1602',valor:suma238,idValor:'238',function:'agregarValor238()',function1:'disminuirValor238()',entrada: "valor-entrada238"},
    {nombre:'ART 1525',valor:suma239,idValor:'239',function:'agregarValor239()',function1:'disminuirValor239()',entrada: "valor-entrada239"},
    {nombre:'ART 7015',valor:suma240,idValor:'240',function:'agregarValor240()',function1:'disminuirValor240()',entrada: "valor-entrada240"},
    {nombre:'ART 1603',valor:suma241,idValor:'241',function:'agregarValor241()',function1:'disminuirValor241()',entrada: "valor-entrada241"},
    {nombre:'ART 1510',valor:suma242,idValor:'242',function:'agregarValor242()',function1:'disminuirValor242()',entrada: "valor-entrada242"},
    {nombre:'ART 1508',valor:suma243,idValor:'243',function:'agregarValor243()',function1:'disminuirValor243()',entrada: "valor-entrada243"},
    {nombre:'ART 1608',valor:suma244,idValor:'244',function:'agregarValor244()',function1:'disminuirValor244()',entrada: "valor-entrada244"},

]



var input = document.querySelector('#inputSearch');
var boton = document.querySelector('#boton');
var changeSearch = document.querySelector('#changeResult');
var filtrar = () => {
    changeSearch.innerHTML = '';
    var textoSearch = input.value.toLowerCase();
    for (let producto of productos) {
        let nombre = producto.nombre.toLowerCase();
        let valorTotal = producto.valor
        let id = producto.idValor
        let func = producto.function
        let func1 = producto.function1
        let entry = producto.entrada
        if (nombre.indexOf(textoSearch) !== -1) {
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
    }
}
boton.addEventListener('click', filtrar);
input.addEventListener('keyup', filtrar);