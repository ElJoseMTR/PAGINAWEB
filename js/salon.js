function verificar(){
    var usuario = document.getElementById('search').value;
        if (usuario === 'salon 4') {
            mapa.style.display = 'none'; 
            searchImage.src = '../css/soledad.png'; // Ruta correcta de la imagen
            imageContainer.style.display = 'block'; // Mostrar el contenedor de la imagen
        }else if (usuario == 'mapa'){
            mapa.style.display = 'block';
            imageContainer.style.display = 'none';
        }
        else {
            alert('No se encontró ninguna imagen para esta búsqueda.');
        }



    }

    
