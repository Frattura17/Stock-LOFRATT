const productos = [
    {nombre: 'Ciclofusion Nat chico'},{nombre: 'Cero Grams 1000ml.'},
    {nombre: 'Deport Plus'},{nombre: 'Cero Grams 500ml.'},
    {nombre: 'Epiderblan'},{nombre: 'Cero Grams 250ml.'},
    {nombre: 'Bandeja Posapie'},{nombre: 'Cerobac Forte chica'}
]



var input = document.querySelector('#inputSearch');
var boton = document.querySelector('#boton');
var changeSearch = document.querySelector('#changeResult');

var filtrar = () => {
    changeSearch.innerHTML = '';
    var textoSearch = input.value.toLowerCase();

    for(let producto of productos) {
        let nombre = producto.nombre.toLowerCase();
        if(nombre.indexOf(textoSearch) !== -1) {
            changeSearch.innerHTML += `<div class="card col-3 m-4" style="width: 18rem;" id="div-contenedor" value="000">
            <div class="card-body" >
             <img src="" class="card-img-top img-js" alt="...">
              <h5 class="text-center nombre" id="div-producto" value="ciclofusion">${producto.nombre}</h5>
            </div>
            <div class="mt-3 mb-3" id="div-incomes">
                 <ul class="list-group list-group-flush" id="div">
                   <li class="list-group-item text-center cantidad-total" id="000">Cantidad total ${producto.valor}</li>
                 </ul>
               <hr class="m-3 mt-0">
              <button class="btn btn-outline-success m-2 ingreso mt-0" id="ingreso" onclick="agregarValor()">Ingreso</button>
              <input class="input valor-entrada" id="valor-entrada">
              <button href="#" class="btn btn-outline-danger m-2 venta mt-0" id="venta" onclick="disminuirValor()">Venta</button>
            </div>
          </div>` 
        }
    }
}

boton.addEventListener('click',filtrar);
input.addEventListener('keyup',filtrar);