<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Evento Mágico - Invitaciones que tus amigos recordarán</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Google Fonts: Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Feather Icons -->
    <script src="https://unpkg.com/feather-icons"></script>

    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
        html {
            scroll-behavior: smooth;
        }
        .hero-gradient {
            background: linear-gradient(180deg, #fff1f2 0%, #ffffff 100%);
        }
    </style>
</head>
<body class="bg-white text-gray-800">

    <!-- Contenedor Principal -->
    <div class="container mx-auto">

        <!-- Barra de Navegación -->
        <header class="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
            <div class="container mx-auto px-6 py-4 flex justify-between items-center">
                <!-- Logo -->
                <a href="#" class="text-2xl font-bold text-gray-900 flex items-center">
                    <span class="bg-rose-500 text-white rounded-md p-2 mr-2">
                        <i data-feather="star" class="w-6 h-6"></i>
                    </span>
                    Evento Mágico
                </a>
                
                <!-- Menú de Navegación (Desktop) -->
                <nav class="hidden md:flex items-center space-x-6">
                    <a href="#benefits" class="text-gray-600 hover:text-rose-500 transition duration-300">Beneficios</a>
                    <a href="#testimonials" class="text-gray-600 hover:text-rose-500 transition duration-300">Testimonios</a>
                    <a href="#offer" class="text-gray-600 hover:text-rose-500 transition duration-300">Planes</a>
                    <a href="#faq" class="text-gray-600 hover:text-rose-500 transition duration-300">FAQ</a>
                </nav>

                <!-- Botón de Acción (Desktop) -->
                <a href="#offer" class="hidden md:block bg-rose-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-rose-600 transition duration-300 shadow-md">
                    Crear mi Tarjeta
                </a>
            </div>
        </header>

        <!-- Sección Hero -->
        <main class="pt-24 hero-gradient">
            <section class="text-center py-16 px-6">
                <!-- Headline (Hook) -->
                <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                    La invitación que tus amigos van a <span class="text-rose-500">guardar para siempre.</span>
                </h1>
                <!-- Subheadline Emocional -->
                <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                    No es solo una tarjeta, es una experiencia que vive antes, durante y después de tu evento.
                </p>
                
                <!-- Botón de CTA claro -->
                <a href="#offer" class="bg-rose-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-rose-600 transition duration-300 shadow-lg transform hover:scale-105 inline-block text-lg">
                    ¡Quiero mi tarjeta mágica! 🎉
                </a>

                <!-- Imagen de ejemplo interactivo -->
                <div class="mt-12 mx-auto max-w-sm">
                    <div class="bg-white p-4 rounded-3xl shadow-2xl border border-gray-200">
                         <img src="https://placehold.co/400x800/f43f5e/FFFFFF?text=Nuestra%20Boda%0A%0A%0A%0AAna%20%26%20Luis%0A%0A25.10.2025" 
                         alt="Ejemplo de una tarjeta de invitación de boda digital en un teléfono" 
                         class="rounded-2xl"
                         onerror="this.onerror=null;this.src='https://placehold.co/400x800/e0e0e0/333333?text=Imagen+no+disponible';">
                    </div>
                </div>
            </section>
        </main>

        <!-- Sección de Beneficios -->
        <section id="benefits" class="py-20 px-6 bg-white">
            <div class="max-w-4xl mx-auto">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Una experiencia completa en un solo link</h2>
                </div>
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="flex items-start space-x-4">
                        <div class="bg-rose-100 text-rose-500 rounded-lg p-3"><i data-feather="music" class="w-6 h-6"></i></div>
                        <div>
                            <h3 class="font-semibold text-lg">Agrega tu canción favorita</h3>
                            <p class="text-gray-600">Crea el ambiente perfecto desde el momento en que tus invitados abren la invitación.</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-4">
                        <div class="bg-rose-100 text-rose-500 rounded-lg p-3"><i data-feather="check-square" class="w-6 h-6"></i></div>
                        <div>
                            <h3 class="font-semibold text-lg">Confirmación de asistencia fácil</h3>
                            <p class="text-gray-600">Integramos un formulario de Google para que sepas quién viene sin complicaciones.</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-4">
                        <div class="bg-rose-100 text-rose-500 rounded-lg p-3"><i data-feather="camera" class="w-6 h-6"></i></div>
                        <div>
                            <h3 class="font-semibold text-lg">Tus fotos en un solo lugar</h3>
                            <p class="text-gray-600">Tus invitados pueden subir las fotos de la fiesta a una galería compartida y privada.</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-4">
                        <div class="bg-rose-100 text-rose-500 rounded-lg p-3"><i data-feather="edit-3" class="w-6 h-6"></i></div>
                        <div>
                            <h3 class="font-semibold text-lg">Diseño único para cada evento</h3>
                            <p class="text-gray-600">Nos aseguramos de que tu tarjeta refleje tu estilo y el de tu celebración.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Sección de Testimonios -->
        <section id="testimonials" class="py-20 px-6 bg-gray-50">
            <div class="max-w-4xl mx-auto text-center">
                <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                    <img src="https://placehold.co/100x100/ffe4e6/be123c?text=Ana" 
                         alt="Foto de un cliente satisfecho" 
                         class="w-24 h-24 rounded-full mx-auto mb-4"
                         onerror="this.onerror=null;this.src='https://placehold.co/100x100/e0e0e0/333333?text=Foto';">
                    <blockquote class="text-xl text-gray-700 italic mb-6">
                        “Cuando mis invitados vieron esto... ¡todos querían uno para su fiesta! Fue el tema de conversación. La mejor decisión que tomé.”
                    </blockquote>
                    <p class="font-semibold text-gray-900">Ana Morales</p>
                    <p class="text-gray-500">Anfitriona del Mejor Cumpleaños del Año</p>
                </div>
            </div>
        </section>

        <!-- Oferta Grand Slam -->
        <section id="offer" class="py-20 px-6 bg-white">
             <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Elige tu Tarjeta Mágica</h2>
                <p class="text-lg text-gray-600 mt-2">Tenemos el plan perfecto para que tu evento sea inolvidable.</p>
            </div>
            <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <!-- Oferta básica -->
                <div class="border border-gray-200 rounded-xl p-8 flex flex-col text-center">
                    <h3 class="text-2xl font-semibold text-gray-900">Tarjeta Digital</h3>
                    <p class="text-gray-600 mt-2 mb-4">La invitación interactiva perfecta.</p>
                    <p class="text-5xl font-bold my-4">$25</p>
                    <a href="#" class="w-full mt-auto text-center bg-gray-200 text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-300 transition duration-300">
                        Crear mi tarjeta
                    </a>
                </div>
                <!-- Oferta premium -->
                <div class="border-2 border-rose-500 rounded-xl p-8 flex flex-col relative shadow-2xl text-center">
                    <span class="absolute top-0 -translate-y-1/2 bg-rose-500 text-white text-sm font-semibold px-3 py-1 rounded-full left-1/2 -translate-x-1/2">Más Popular</span>
                    <h3 class="text-2xl font-semibold text-gray-900">Experiencia Completa</h3>
                    <p class="text-gray-600 mt-2 mb-4">Tarjeta + video + fotos y más.</p>
                    <p class="text-5xl font-bold my-4">$97</p>
                    <a href="#" class="w-full mt-auto text-center bg-rose-500 text-white font-semibold py-3 rounded-lg hover:bg-rose-600 transition duration-300">
                        Quiero la experiencia
                    </a>
                </div>
            </div>
            <!-- Urgencia / Escasez -->
            <div class="text-center mt-12 max-w-2xl mx-auto">
                <div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md" role="alert">
                  <p class="font-bold">¡Atención!</p>
                  <p>Solo aceptamos <span class="font-extrabold">10 proyectos por semana</span> para asegurar máxima calidad.</p>
                  <p class="mt-2">Reserva hoy y recibe un <span class="font-extrabold">diseño express de 24 horas gratis.</span></p>
                </div>
            </div>
        </section>
        
        <!-- Sección FAQ -->
        <section id="faq" class="py-20 px-6 bg-gray-50">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
                <div class="space-y-4">
                    <div>
                        <h3 class="font-semibold text-lg">¿Y si no me gusta el diseño?</h3>
                        <p class="text-gray-600 mt-1">¡No hay problema! Tienes hasta 2 rondas de revisión con nuestro diseñador para asegurarnos de que ames el resultado final. Tu satisfacción es nuestra prioridad.</p>
                    </div>
                    <div class="border-t border-gray-200 pt-4">
                        <h3 class="font-semibold text-lg">¿Cómo se comparten las fotos después?</h3>
                        <p class="text-gray-600 mt-1">Tu invitación incluye un enlace a una galería privada y protegida con contraseña. Tú y tus invitados podrán subir y descargar todas las fotos del evento desde cualquier dispositivo.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Garantía -->
        <section id="guarantee" class="py-16 px-6 bg-rose-900 text-white">
            <div class="max-w-3xl mx-auto text-center">
                <i data-feather="shield" class="w-12 h-12 mx-auto mb-4"></i>
                <h2 class="text-2xl font-bold mb-2">Nuestra Garantía de Felicidad</h2>
                <p class="text-lg text-rose-200">"Si no te dicen que es la mejor tarjeta que han recibido, te devolvemos el dinero. Así de seguros estamos."</p>
            </div>
        </section>


        <!-- Footer -->
        <footer class="bg-gray-900 text-white py-12 px-6">
            <div class="max-w-6xl mx-auto text-center">
                <h4 class="text-xl font-bold mb-2">Evento Mágico</h4>
                <p class="text-gray-400 mb-4">Creando recuerdos inolvidables.</p>
                <a href="#offer" class="bg-rose-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-rose-600 transition duration-300 shadow-lg transform hover:scale-105 inline-block">
                    ¡Quiero mi tarjeta mágica! 🎉
                </a>
                <div class="mt-8 border-t border-gray-800 pt-8 text-gray-500">
                    <p>&copy; 2024 Evento Mágico. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>

    </div>

    <script>
        feather.replace();
    </script>
</body>
</html>
