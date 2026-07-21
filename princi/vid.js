document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('mi-video');
    /const videoId = video.dataset.videoId; // Suponiendo que tienes un atributo de datos para el ID del video

    if (video) {
        // Evento de inicio de reproducción
        video.addEventListener('play', () => {
            // Llama a la función que enviará los datos al backend
            sendVideoActivity(videoId, 'play');
        });

        // Evento de finalización de reproducción
        video.addEventListener('ended', () => {
            sendVideoActivity(videoId, 'ended');
        });

        // Evento de pausa
        video.addEventListener('pause', () => {
            sendVideoActivity(videoId, 'pause');
        });
    }
});


async function sendVideoActivity(videoId, action) {
    try {
        const response = await fetch('/api/video/activity', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Incluye un token si el usuario está autenticado
                'Authorization': `Bearer ${userToken}` 
            },
            body: JSON.stringify({
                videoId: videoId,
                action: action,
                // Puedes añadir más datos aquí si lo necesitas
            })
        });

        if (!response.ok) {
            throw new Error('No se pudo registrar la actividad del video.');
        }

        console.log(`Actividad de video registrada: ${action}`);
    } catch (error) {
        console.error('Error al enviar la actividad del video:', error);
    }
}


