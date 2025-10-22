/* ============================================
   DATOS DE LOS PROYECTOS
   Aquí se definen todos los proyectos del colegio
   ============================================ */
const proyectos = [
    {
        id: 1,
        nombre: "EcoDepto",
        descripcion: "Instalación de paneles solares para autoabastecimiento energético del colegio, reduciendo la huella de carbono.",
        imagen: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
        url: "https://ecodepto.netlify.app/" // Edita esta URL con la página del proyecto
    },
    {
        id: 2,
        nombre: "Tiro al blanco Digital",
        descripcion: "Aplicación móvil desarrollada por estudiantes para gestionar asistencias, calificaciones y comunicación entre docentes y alumnos.",
        imagen: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
        url: "proyecto-app-gestion.html"
    },
    {
        id: 3,
        nombre: "Libreta Digital",
        descripcion: "Sistema automatizado de riego y monitoreo de cultivos con sensores IoT y análisis de datos en tiempo real.",
        imagen: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&h=400&fit=crop",
        url: "proyecto-huerta-inteligente.html"
    },
    {
        id: 4,
        nombre: "Sistema Gestor de Biblioteca",
        descripcion: "Desarrollo de un robot programable para enseñar fundamentos de robótica y programación a estudiantes de nivel inicial.",
        imagen: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
        url: "proyecto-robot-educativo.html"
    },
    {
        id: 5,
        nombre: "Reciclaje Tecnológico",
        descripcion: "Programa de recolección y reutilización de residuos electrónicos, transformándolos en nuevos dispositivos funcionales.",
        imagen: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop",
        url: "proyecto-reciclaje-tecnologico.html"
    },
    {
        id: 6,
        nombre: "Portal Web Institucional",
        descripcion: "Plataforma web moderna y responsiva para la comunicación institucional y difusión de actividades del colegio.",
        imagen: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        url: "proyecto-portal-web.html"
    }
];

/* ============================================
   FUNCIÓN: Renderizar tarjetas de proyectos
   Genera dinámicamente el HTML de las tarjetas
   ============================================ */
function renderizarProyectos() {
    // Obtiene el contenedor donde se mostrarán las tarjetas
    const contenedor = document.getElementById('projectsGrid');
    
    // Limpia el contenedor antes de agregar nuevos elementos
    contenedor.innerHTML = '';
    
    // Itera sobre cada proyecto y crea su tarjeta
    proyectos.forEach((proyecto) => {
        // Crea el elemento article para la tarjeta
        const tarjeta = document.createElement('article');
        tarjeta.className = 'project-card';
        
        // Define el contenido HTML de la tarjeta
        tarjeta.innerHTML = `
            <div class="project-image">
                <img src="${proyecto.imagen}" alt="${proyecto.nombre}">
            </div>
            <div class="project-content">
                <h3 class="project-title">${proyecto.nombre}</h3>
                <p class="project-description">${proyecto.descripcion}</p>
            </div>
        `;
        
        // Agrega evento click para redirigir a la página del proyecto
        tarjeta.addEventListener('click', () => {
            window.location.href = proyecto.url;
        });
        
        // Agrega la tarjeta al contenedor
        contenedor.appendChild(tarjeta);
    });
}

/* ============================================
   FUNCIÓN: Menú móvil (hamburguesa)
   Controla la apertura y cierre del menú
   ============================================ */
function inicializarMenuMovil() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    
    // Evento click en el botón hamburguesa
    menuToggle.addEventListener('click', () => {
        // Alterna la clase 'active' para mostrar/ocultar el menú
        nav.classList.toggle('active');
        
        // Anima el botón hamburguesa (transforma en X)
        menuToggle.classList.toggle('active');
    });
    
    // Cierra el menú al hacer click en un enlace
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

/* ============================================
   FUNCIÓN: Header con efecto al hacer scroll
   Cambia el estilo del header al desplazarse
   ============================================ */
function efectoScrollHeader() {
    const header = document.getElementById('header');
    
    // Evento que se dispara al hacer scroll en la página
    window.addEventListener('scroll', () => {
        // Si el usuario ha hecho scroll más de 50px
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/* ============================================
   FUNCIÓN: Animación de aparición al scroll
   Las secciones aparecen gradualmente al entrar
   en el viewport (área visible)
   ============================================ */
function animacionAlScroll() {
    // Observador de intersección para detectar elementos visibles
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si el elemento es visible
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Se activa cuando el 10% del elemento es visible
    });
    
    // Observa todas las secciones principales
    const secciones = document.querySelectorAll('.projects-section, .contact-section');
    secciones.forEach(seccion => {
        observer.observe(seccion);
    });
}

/* ============================================
   FUNCIÓN: Scroll suave personalizado
   Mejora la experiencia de navegación por anclas
   ============================================ */
function scrollSuave() {
    // Selecciona todos los enlaces que apuntan a anclas (#)
    const enlaces = document.querySelectorAll('a[href^="#"]');
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Obtiene el destino del enlace
            const destino = document.querySelector(enlace.getAttribute('href'));
            
            if (destino) {
                // Calcula la posición considerando el header fijo
                const offsetTop = destino.offsetTop - 80;
                
                // Realiza el scroll suave
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ============================================
   FUNCIÓN: Efecto parallax en el hero
   Crea un efecto de profundidad al hacer scroll
   ============================================ */
function efectoParallax() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        // Mueve el contenido del hero más lento que el scroll
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
}

/* ============================================
   FUNCIÓN: Inicialización al cargar la página
   Se ejecuta cuando el DOM está completamente cargado
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    // Renderiza las tarjetas de proyectos
    renderizarProyectos();
    
    // Inicializa el menú móvil
    inicializarMenuMovil();
    
    // Activa el efecto de scroll en el header
    efectoScrollHeader();
    
    // Activa las animaciones al hacer scroll
    animacionAlScroll();
    
    // Activa el scroll suave
    scrollSuave();
    
    // Activa el efecto parallax
    efectoParallax();
    
    // Mensaje en consola (opcional, para debugging)
    console.log('✅ EPET N°7 - Sitio web cargado correctamente');
    console.log(`📊 Total de proyectos: ${proyectos.length}`);
});

/* ============================================
   FUNCIÓN ADICIONAL: Manejo de errores de imágenes
   Si una imagen falla al cargar, muestra un placeholder
   ============================================ */
window.addEventListener('load', () => {
    const imagenes = document.querySelectorAll('.project-image img');
    
    imagenes.forEach(img => {
        img.addEventListener('error', function() {
            // Imagen de respaldo si falla la carga
            this.src = 'https://via.placeholder.com/600x400/4a9d6f/ffffff?text=EPET+N7';
        });
    });
});
// ...existing code...

// Función para manejar el efecto de scroll
function handleScroll() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Agregar el evento de scroll
window.addEventListener('scroll', handleScroll);
function handleScroll() {
    const header = document.getElementById('header');
    const scrolled = window.scrollY > 50;
    
    if (scrolled) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Agregar el evento de scroll
window.addEventListener('scroll', handleScroll);

// Asegurarnos que el subtítulo esté oculto al inicio
document.addEventListener('DOMContentLoaded', () => {
    handleScroll(); // Esto establecerá el estado inicial correcto
});