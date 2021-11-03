



var input = document.querySelector('#inputSearch');
var boton = document.querySelector('#boton');
var changeSearch = document.querySelector('#changeResult');

var filtrar = () => {
    console.log(input.value)
}

boton.addEventListener('click',filtrar);