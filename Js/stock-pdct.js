var TOTAL_INCOME = console.log(document.getElementById('div-incomes'));
var INGRESO = console.log(document.getElementById('div-incomes'));
var VENTA = console.log(document.getElementById('div-incomes'));
var INPUT_TOTAL_INCOME = console.log(document.getElementById('div-incomes'));
var arrayValues = JSON.parse(localStorage.getItem("valores")) || [];
console.log(arrayValues)
var _arrayValues;
var suma;

suma = JSON.parse(localStorage.getItem("TOTAL"));
TOTAL_INCOME = document.getElementById('cantidad-total').innerText = `Cantidad total ${suma}`
 


function agregarValor () {
    _arrayValues = JSON.parse(localStorage.getItem("TOTAL"));
    console.log(_arrayValues)
    suma = _arrayValues;
    if(arrayValues != ' ' && arrayValues > 0){
        
        INPUT_TOTAL_INCOME = document.getElementById('valor-entrada').value;
        var arrayUnico = INPUT_TOTAL_INCOME

        //  mandar al localStorage
        // localStorage.setItem("valores", JSON.stringify(arrayValues));

        _arrayValues = JSON.parse(localStorage.getItem("TOTAL"));
        console.log(_arrayValues)
        //  modificar
        let _suma1;
        let suma1 = parseInt(_arrayValues) + parseInt(arrayUnico) ;
        TOTAL_INCOME = document.getElementById('cantidad-total').innerText = `Cantidad total ${suma1}`
        
        // mandar al localStorage
        localStorage.setItem("TOTAL", JSON.stringify(suma1));
        localStorage.setItem("valores", JSON.stringify(suma1));

        console.log(suma1, 'desde if suma')
        
        _arrayValues = JSON.parse(localStorage.getItem("TOTAL"));
        console.log(_arrayValues)
        
    } else {
        
        INPUT_TOTAL_INCOME = document.getElementById('valor-entrada').value;
        arrayValues = INPUT_TOTAL_INCOME;

        // mandar al localStorage
        localStorage.setItem("valores", JSON.stringify(arrayValues));

        // modificar total productos
        _arrayValues = JSON.parse(localStorage.getItem("valores"));
        TOTAL_INCOME = document.getElementById('cantidad-total').innerText = `Cantidad total ${arrayValues}`

         // mandar al localStorage
         localStorage.setItem("TOTAL", JSON.stringify(INPUT_TOTAL_INCOME));

        console.log(_arrayValues,'array primer valor')
        

    }
    
}

function disminuirValor () {
    _arrayValues = JSON.parse(localStorage.getItem("TOTAL"));
    console.log(_arrayValues)
    suma = _arrayValues;
    if(arrayValues != ' ' && arrayValues > 0){
        
        INPUT_TOTAL_INCOME = document.getElementById('valor-entrada').value;
        var arrayUnico = INPUT_TOTAL_INCOME

        //  mandar al localStorage
        // localStorage.setItem("valores", JSON.stringify(arrayValues));

        _arrayValues = JSON.parse(localStorage.getItem("TOTAL"));
        console.log(_arrayValues)
        //  modificar
        let _suma1;
        let suma1 = parseInt(_arrayValues) - parseInt(arrayUnico) ;
        TOTAL_INCOME = document.getElementById('cantidad-total').innerText = `Cantidad total ${suma1}`
        
        // mandar al localStorage
        localStorage.setItem("TOTAL", JSON.stringify(suma1));
        localStorage.setItem("valores", JSON.stringify(suma1));

        console.log(suma1, 'desde if suma')
        
        _arrayValues = JSON.parse(localStorage.getItem("TOTAL"));
        console.log(_arrayValues)
        
    // } else {
        
    //     INPUT_TOTAL_INCOME = document.getElementById('valor-entrada').value;
    //     arrayValues = INPUT_TOTAL_INCOME;

    //     // mandar al localStorage
    //     localStorage.setItem("valores", JSON.stringify(arrayValues));

    //     // modificar total productos
    //     _arrayValues = JSON.parse(localStorage.getItem("valores"));
    //     TOTAL_INCOME = document.getElementById('cantidad-total').innerText = `Cantidad total ${arrayValues}`

    //      // mandar al localStorage
    //      localStorage.setItem("TOTAL", JSON.stringify(INPUT_TOTAL_INCOME));

    //     console.log(_arrayValues,'array primer valor')
        

     }
    
}
// if(arrayValues.length > 1) {

    
//     console.log('entro segundo valor')
    
//     // mandar al localStorage
//     localStorage.setItem("valores", JSON.stringify(arrayValues));
//     _arrayValues = JSON.parse(localStorage.getItem("valores"));
//     // modificar
//     let _suma1;
//     let suma1 = parseInt(_arrayValues[1]) + parseInt(_arrayValues[0]) ;
//     TOTAL_INCOME = document.getElementById('cantidad-total').innerText = `Cantidad total ${suma1}`
    
//     // mandar al localStorage
//     localStorage.setItem("TOTAL", JSON.stringify(suma1));
//     _suma1 = JSON.parse(localStorage.getItem("TOTAL"));
//     console.log(_suma1, 'desde if suma')

//     _arrayValues.pop();
      
// }
// if(TOTAL_INCOME = suma) {
//     _arrayValues = suma
   
//     let _suma2;
//     let suma2 = parseInt(_arrayValues) + parseInt(arrayValues.pop()) ;
//     TOTAL_INCOME = document.getElementById('cantidad-total').innerText = `Cantidad total ${suma2}`
//     console.log(_arrayValues, arrayValues, 'desde suma 2')
    
//     // mandar al localStorage
//     localStorage.setItem("TOTAL", JSON.stringify(suma2));
//     _suma2 = JSON.parse(localStorage.getItem("TOTAL"));
//     // modificar
//      // localStorage.removeItem("valores");
//     //  arrayValues = localStorage.setItem("valores", JSON.stringify(suma2));
     
//  }        
