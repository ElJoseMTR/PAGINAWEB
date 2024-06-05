function verificar(){

    var usuario = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;


        fetch('../json/datos.json')
        .then(response => response.json())
        .then(usuarios => {
            // Verificar usuario y contraseña en el archivo JSON
            const usuarioValido = usuarios.find(u => u.usuario === usuario && u.password === password);
            if (usuarioValido) {
                alert("¡Inicio de sesión exitoso!");
               
                window.location.href = "../html/principio1.html";
            } else {
                alert("Usuario o contraseña incorrectos.");
            }
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
    }