const frases = [
  {
    texto: "Un buen servicio comienza cuando decides escuchar de verdad.",
    categoria: "Atención al cliente"
  },
  {
    texto: "Tu actitud también forma parte del servicio que entregas.",
    categoria: "Actitud"
  },
  {
    texto: "El cliente puede olvidar tus palabras, pero recordará cómo lo hiciste sentir.",
    categoria: "Experiencia"
  },
  {
    texto: "Resolver un problema es bueno. Hacer que el cliente se sienta acompañado es excelente.",
    categoria: "Servicio"
  },
  {
    texto: "Escuchar también es una forma de servir.",
    categoria: "Comunicación"
  },
  {
    texto: "Cada cliente es una oportunidad para demostrar tu profesionalismo.",
    categoria: "Profesionalismo"
  },
  {
    texto: "La paciencia transforma una conversación difícil en una oportunidad.",
    categoria: "Paciencia"
  },
  {
    texto: "No atiendas solamente una necesidad; construye una experiencia.",
    categoria: "Experiencia"
  },
  {
    texto: "Una sonrisa puede ser pequeña, pero su impacto en el servicio puede ser enorme.",
    categoria: "Actitud"
  },
  {
    texto: "La excelencia no es hacer más; es hacer mejor lo que ya haces.",
    categoria: "Excelencia"
  },
  {
    texto: "Cuando entiendes al cliente, dejas de venderle y empiezas a ayudarlo.",
    categoria: "Empatía"
  },
  {
    texto: "Cada problema tiene una solución cuando existe disposición para escuchar y actuar.",
    categoria: "Resolución"
  },
  {
    texto: "Tu trabajo habla de ti incluso cuando tú no estás hablando.",
    categoria: "Profesionalismo"
  },
  {
    texto: "Un cliente satisfecho recuerda el producto; uno sorprendido recuerda la experiencia.",
    categoria: "Experiencia"
  },
  {
    texto: "La empatía convierte una atención correcta en una atención memorable.",
    categoria: "Empatía"
  },
  {
    texto: "No preguntes solamente qué necesita el cliente; descubre qué espera.",
    categoria: "Comunicación"
  },
  {
    texto: "La confianza se construye con pequeñas acciones repetidas correctamente.",
    categoria: "Confianza"
  },
  {
    texto: "Tu forma de responder puede cambiar completamente el resultado de una conversación.",
    categoria: "Comunicación"
  },
  {
    texto: "Los grandes servicios empiezan con personas que se toman en serio a otras personas.",
    categoria: "Servicio"
  },
  {
    texto: "Haz que cada persona que atiendas sienta que su tiempo importa.",
    categoria: "Respeto"
  },
  {
    texto: "La calidad se nota cuando haces lo correcto incluso cuando nadie está mirando.",
    categoria: "Integridad"
  },
  {
    texto: "Una buena experiencia no ocurre por casualidad: se diseña con intención.",
    categoria: "Experiencia"
  },
  {
    texto: "Tu voz comunica mucho antes de que termines tu primera frase.",
    categoria: "Comunicación"
  },
  {
    texto: "El respeto nunca pasa de moda y siempre mejora el servicio.",
    categoria: "Respeto"
  },
  {
    texto: "La diferencia entre atender y conectar está en cuánto te importa comprender.",
    categoria: "Conexión"
  },
  {
    texto: "Un buen profesional no busca tener la razón; busca resolver.",
    categoria: "Profesionalismo"
  },
  {
    texto: "Cuando el cliente tiene un problema, tu actitud puede convertirse en parte de la solución.",
    categoria: "Actitud"
  },
  {
    texto: "La confianza del cliente se gana respuesta tras respuesta.",
    categoria: "Confianza"
  },
  {
    texto: "Servir bien es hacer sentir a la otra persona que no está sola frente a su problema.",
    categoria: "Servicio"
  },
  {
    texto: "Cada conversación es una oportunidad para dejar una buena impresión.",
    categoria: "Comunicación"
  }
];

const fraseElement = document.getElementById("frase");
const categoriaElement = document.getElementById("categoria");
const boton = document.getElementById("nuevaFrase");

let ultima = -1;

function mostrarFrase() {
  let indice;

  do {
    indice = Math.floor(Math.random() * frases.length);
  } while (frases.length > 1 && indice === ultima);

  ultima = indice;

  fraseElement.style.animation = "none";
  categoriaElement.style.opacity = "0";

  // Fuerza al navegador a reiniciar la animación.
  void fraseElement.offsetWidth;

  fraseElement.textContent = `“${frases[indice].texto}”`;
  categoriaElement.textContent = frases[indice].categoria;

  fraseElement.style.animation = "appear .55s ease both";

  setTimeout(() => {
    categoriaElement.style.transition = "opacity .5s ease";
    categoriaElement.style.opacity = "1";
  }, 180);
}

boton.addEventListener("click", mostrarFrase);

// Cada vez que alguien escanea el QR y abre la página,
// recibe automáticamente una frase.
mostrarFrase();
