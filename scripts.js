/* ============================================
   DATOS DE LOS PROYECTOS
   Aquí se definen todos los proyectos del colegio
   ============================================ */
const proyectos = [
    {
        id: 1,
        nombre: "EcoDepto",
        descripcion: "Este proyecto es un sistema de riego inteligente para jardines verticales en terrazas y balcones de edificios utilizando el agua de condensación de los aires acondicionados. Diseñado para entornos dónde el espacio es limitado, para optimizar el uso del agua y promover la jardinería urbana.",
        imagen: "/images/EcoDeptoLogo.jpeg",
        url: "https://ecodepto.netlify.app/" // Edita esta URL con la página del proyecto
    },
    {
        id: 2,
        nombre: "Tiro al blanco Digital",
        descripcion: "Este proyecto trata de un Juego clásico de tiro al blanco tecnológicamente mejorado, de la mano de algunos componentes electrónicos, un par de cables y mucha creatividad.",
        imagen: "images/Codigo.jpg",
        url: ""
    },
    {
        id: 3,
        nombre: "Libreta Virtual",
        descripcion: "Este proyecto es una aplicación web que funciona como una libreta virtual. Es una herramienta digital creada para facilitar el registro y visualización de notas escolares. Permite a alumnos, preceptores y directivos acceder fácilmente a la información académica.",
        imagen: "images/Codigo.jpg",
        url: ""
    },
    {
        id: 4,
        nombre: "Sistema Gestor de Biblioteca",
        descripcion: "Este proyecto es una plataforma web diseñada para gestionar de manera eficiente los recursos y actividades de una biblioteca escolar, facilitando el préstamo y devolución de libros, así como la administración de usuarios y catálogos.",
        imagen: "/images/Biblioteca-1.png",
        url: "https://bibliotmunicipaljardin.netlify.app"
    },
    {
        id: 5,
        nombre: "Proyecto Re Copado",
        descripcion: "bla bla bla",
        imagen: "images/Codigo.jpg",
        url: ""
    },
    {
        id: 6,
        nombre: "Proyecto Re Copado",
        descripcion: "bla bla bla",
        imagen: "images/Codigo.jpg",
        url: ""
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
            window.open(proyecto.url, '_blank');
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