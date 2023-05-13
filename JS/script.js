
/* Botones Contacto */
const checkbox = document.querySelector('.my-form input[type="checkbox"]');
const btns = document.querySelectorAll(".my-form button");

checkbox.addEventListener("change", function() 
{
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
}
);

console.log(document.getElementById('correo').value);

document.getElementById('myElement').innerHTML = document.getElementById('correo').value;

function alertCookie(){
  console.log("Hola mundo");
}



// const boton_enviar = document.querySelector('#back');
// boton_enviar.addEventListener('click', () => {
//   alert('¡Hola mundo!');
// });

// const boton_limpiar = document.querySelector('#btn-entrar');
// boton_limpiar.addEventListener('click', () => {

//   function confirmar() {
//     if (confirm("¿Está seguro de que desea continuar?")) {
//       // Código si el usuario presiona "Aceptar"
//     } else {
//       // Código si el usuario presiona "Cancelar"
//     }
//   }

// });


    // EVENTOS

    var x = document.cookie;
    document.cookie = "username=René Veloso";





    // document.getElementById('.btn-entrar').onclick = function() {
    //   window.location.href = "./index.html";
    // };