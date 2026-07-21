// Asegúrate de que este código se ejecute después de que el DOM esté completamente cargado.
document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('mi-video');

    if (videoElement) {
        // Evento: Reproducir el video
        videoElement.addEventListener('play', () => {
            console.log('Video reproducido. Enviando datos...');
            sendActivity('play');
        });

        // Evento: Pausar el video
        videoElement.addEventListener('pause', () => {
            console.log('Video pausado. Enviando datos...');
            sendActivity('pause');
        });
    }

    // Función para enviar los datos al servidor
    function sendActivity(action) {
        // Enviar una solicitud al servidor con los datos de la actividad
        fetch('/api/log-video-activity', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Si usas tokens de autenticación (JWT, etc.), inclúyelo aquí
                // 'Authorization': 'Bearer ' + userToken
            },
            body: JSON.stringify({
                userId: 'ID_DEL_USUARIO_LOGUEADO', // Obtén el ID del usuario de la sesión
                videoId: 'ID_DEL_VIDEO',          // ID único para el video
                action: action,                   // 'play' o 'pause'
                timestamp: new Date().toISOString() // Hora exacta del evento
            })
        })
        .then(response => {
            if (!response.ok) {
                console.error('Error al registrar la actividad:', response.statusText);
            }
            // Opcional: manejar la respuesta del servidor si es necesario
        })
        .catch(error => {
            console.error('Error de red:', error);
        });
    }
});


