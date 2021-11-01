// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })
// function permissAccess () {
//     document.getElementById('access').disabled=false
// }
let arrayAccess = ['Frattura Emmanuel', 'Adriana Lopez'];
let ValueUser;
let ValueUser1;
let ValueUser2;


function permissAccess() {

    ValueUser1 = document.getElementById("apellido").value;
    ValueUser2 = document.getElementById("nombre").value;
    ValueUser =  ValueUser1 + ' ' + ValueUser2;

    let localUsers = localStorage.setItem('usuarios',JSON.stringify(arrayAccess));

    if(ValueUser != ' ') {
            console.log('desde window')
            validarAccess();
    } else {
        window.alert('Usuario no registrado')
    }
}
function validarAccess (nombre) {

    localUsers = JSON.parse(localStorage.getItem('usuarios')) || [];
    let accesoA = false;
    
    for(var i = 0;i < arrayAccess.length ; i++){
        if(ValueUser == arrayAccess[i]){
            accesoA = true;
            console.log('desde for if')
        }
        if(accesoA = true){
            window.location.href = '/ingreso.html'
        }
    }


    console.log(localUsers)
    console.log(arrayAccess)
}


