<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Evento Mágico - Invitaciones que tus amigos recordarán</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <script src="https://unpkg.com/feather-icons"></script>
  <style>
    body { font-family: 'Inter', sans-serif; }
    html { scroll-behavior: smooth; }
    .hero-gradient { background: linear-gradient(180deg, #fff1f2 0%, #ffffff 100%); }
  </style>
</head>
<body class="bg-white text-gray-800">
  <div class="container mx-auto">
    <header class="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" class="text-2xl font-bold text-gray-900 flex items-center">
          <span class="bg-rose-500 text-white rounded-md p-2 mr-2"><i data-feather="star"></i></span>
          Evento Mágico
        </a>
        <nav class="hidden md:flex items-center space-x-6">
          <a href="#benefits" class="text-gray-600 hover:text-rose-500">Beneficios</a>
          <a href="#testimonials" class="text-gray-600 hover:text-rose-500">Testimonios</a>
          <a href="#offer" class="text-gray-600 hover:text-rose-500">Planes</a>
          <a href="#faq" class="text-gray-600 hover:text-rose-500">FAQ</a>
        </nav>
        <a href="#offer" class="hidden md:block bg-rose-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-rose-600 shadow-md">
          Crear mi Tarjeta
        </a>
      </div>
    </header>

    <main class="pt-24 hero-gradient text-center py-16 px-6">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-4">
        La invitación que tus amigos van a <span class="text-rose-500">guardar para siempre.</span>
      </h1>
      <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        No es solo una tarjeta, es una experiencia que vive antes, durante y después de tu evento.
      </p>
      <a href="#offer" class="bg-rose-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-rose-600 shadow-lg transform hover:scale-105 inline-block text-lg">
        ¡Quiero mi tarjeta mágica! 🎉
      </a>
      <div class="mt-12 mx-auto max-w-sm">
        <div class="bg-white p-4 rounded-3xl shadow-2xl border border-gray-200">
          <img src="https://placehold.co/400x800/f43f5e/FFFFFF?text=Ejemplo+de+tarjeta" alt="Ejemplo" class="rounded-2xl"/>
        </div>
      </div>
    </main>

    <section id="benefits" class="py-20 px-6 bg-white">
      <!-- beneficios aquí... -->
    </section>

    <section id="testimonials" class="py-20 px-6 bg-gray-50">
      <!-- testimonios aquí... -->
    </section>

    <section id="offer" class="py-20 px-6 bg-white">
      <!-- planes aquí... -->
      <!-- FORMULARIO EMBEBIDO -->
      <div class="mt-12 max-w-xl mx-auto">
        <h2 class="text-2xl font-semibold text-center mb-4">Déjanos tus datos y te contactamos:</h2>
        <iframe src="https://docs.google.com/forms/d/e/FORM_ID_HERE/viewform?embedded=true"
                width="100%" height="520" frameborder="0" marginheight="0" marginwidth="0" class="rounded-lg shadow-lg">
          Cargando…
        </iframe>
      </div>
    </section>

    <section id="faq" class="py-20 px-6 bg-gray-50">
      <!-- faq aquí... -->
    </section>

    <section id="guarantee" class="py-16 px-6 bg-rose-900 text-white">
      <!-- garantía aquí... -->
    </section>

    <!-- Sección de Galería Drive Embebida -->
    <section class="py-16 px-6 bg-white">
      <h3 class="text-3xl text-center font-semibold mb-6">Galería de Fotos del Evento</h3>
      <div class="max-w-3xl mx-auto">
        <iframe src="https://drive.google.com/embeddedfolderview?id=TU_ID_DE_CARPETA#grid"
                style="width:100%; height:600px; border:0;" allowfullscreen loading="lazy"
                class="rounded-xl shadow-lg"></iframe>
        <p class="text-center text-gray-600 mt-4">Las fotos estarán disponibles por 30 días.</p>
      </div>
    </section>

    <footer class="bg-gray-900 text-white py-12 px-6">
      <div class="max-w-6xl mx-auto text-center">
        <h4 class="text-xl font-bold mb-2">Evento Mágico</h4>
        <p class="text-gray-400 mb-4">Creando recuerdos inolvidables.</p>
        <a href="#offer" class="bg-rose-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-rose-600 shadow-lg">¡Quiero mi tarjeta mágica! 🎉</a>
        <div class="mt-8 border-t border-gray-800 pt-8 text-gray-500">
          <p>&copy; 2025 Evento Mágico. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>

  <!-- Botón flotante de WhatsApp -->
  <a href="https://wa.me/593999999999?text=Hola!%20Estoy%20interesado%20en%20crear%20mi%20tarjeta%20mágica"
     class="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
     target="_blank" rel="noopener noreferrer">
    <i class="fa fa-whatsapp"></i>
  </a>

  <script>
    feather.replace();
  </script>
</body>
</html>
