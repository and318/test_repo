function validar() {


    //rut
    var rut = document.getElementById("rut").value;

    //nombres
    var nombres = document.getElementById("nombres").value;


    //apellidos
    var apellidos = document.getElementById("apellidos").value;
    var edad = document.getElementById("edad").value;


    //email
    var email = document.getElementById("email").value;
    var mail = /^\w+[@]\w+\.\D{2,3}$/;

    function validarMail() {
        if (email.match(mail)) {
            alert("si");
        }
        else {
            var error = document.getElementById("email").value;
            error.classList.add("error");
            alert("no funka");
        };
    }
    alert(validarMail);


    var especialidad = document.getElementById("especialidad").value;
    var fecha = document.getElementById("fecha").value;
    var hora = document.getElementById("hora").value;






    // teléfono

    var fono = /^[+]\d{2}\s\d\s\d{8}$/;
    console.log("fono =>", fono.test("+56 9 95941389"));


    //email

    var mail = /^\w+[@]\w+\.\D{2,3}$/;
    console.log("mail =>", mail.test("hola@and318.com"));



    var boton = document.getElementById("enviar").addEventListener("click", function () {
        

    });
}