// Sample video data
const videos = [
    {
        id: '1',
        title: 'La Guerra Fría: Orígenes y Consecuencias',
        description: 'Un análisis profundo de los orígenes de la Guerra Fría y sus consecuencias en el mundo contemporáneo.',
        thumbnail: 'https://via.placeholder.com/300x180/1a1a1a/c1272d?text=Guerra+Fría',
        link: 'https://www.youtube.com/watch?v=video1'
    },
    {
        id: '2',
        title: 'Geopolítica de Oriente Medio',
        description: 'Exploramos los conflictos y alianzas en Oriente Medio y su impacto en la política global.',
        thumbnail: 'https://via.placeholder.com/300x180/1a1a1a/c1272d?text=Oriente+Medio',
        link: 'https://www.youtube.com/watch?v=video2'
    },
    {
        id: '3',
        title: 'La Unión Europea: Desafíos Actuales',
        description: 'Analizamos los principales desafíos que enfrenta la Unión Europea en el siglo XXI.',
        thumbnail: 'https://via.placeholder.com/300x180/1a1a1a/c1272d?text=Unión+Europea',
        link: 'https://www.youtube.com/watch?v=video3'
    },
    {
        id: '4',
        title: 'China y el Nuevo Orden Mundial',
        description: '¿Cómo está China reconfigurando el orden económico y político global?',
        thumbnail: 'https://via.placeholder.com/300x180/1a1a1a/c1272d?text=China',
        link: 'https://www.youtube.com/watch?v=video4'
    },
    {
        id: '5',
        title: 'Ciberseguridad y Ciberconflicto',
        description: 'Una mirada a las nuevas formas de conflicto en el ciberespacio y sus implicaciones.',
        thumbnail: 'https://via.placeholder.com/300x180/1a1a1a/c1272d?text=Ciberseguridad',
        link: 'https://www.youtube.com/watch?v=video5'
    },
    {
        id: '6',
        title: 'Crisis Energéticas Globales',
        description: 'Examinamos las causas y consecuencias de las crisis energéticas en el contexto global.',
        thumbnail: 'https://via.placeholder.com/300x180/1a1a1a/c1272d?text=Energía',
        link: 'https://www.youtube.com/watch?v=video6'
    }
];

// Function to render videos
function renderVideos() {
    const videoContainer = document.querySelector('.video-container');
    videoContainer.innerHTML = '';

    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.className = 'video';
        videoElement.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <div class="title">${video.title}</div>
            <div class="description">${video.description}</div>
            <div class="video-actions">
                <a href="${video.link}" target="_blank" class="cta-button video-button">Ver más</a>
            </div>
        `;
        videoContainer.appendChild(videoElement);
    });
}

// Initial render
renderVideos();