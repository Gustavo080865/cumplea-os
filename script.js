const paginas = [
  `Mi amor,

Hoy no es un día cualquiera. Hoy el mundo celebra el nacimiento de una mujer maravillosa, valiente, dulce y única: tú.

Tal vez a ti no te emocione mucho tu cumpleaños… pero a mí me llena de felicidad saber que existes, que estás en este mundo, y que tengo el privilegio de caminar a tu lado.`,

  `Gracias por cada sonrisa, cada abrazo, cada palabra bonita, por tus silencios llenos de amor, y por mostrarme lo que significa amar de verdad.

Este día no se trata solo de festejar tu edad, sino de celebrar tu existencia. Porque tú eres mi regalo diario, mi suerte infinita, mi calma y mi locura.`,

  `Eres la razón por la que creo que los sueños sí se cumplen. Si la vida me diera mil oportunidades, en todas volvería a elegirte.

Hoy quiero llenarte de amor, de alegría, de besos, de palabras que te abracen el alma… porque mereces todo lo bonito que la vida pueda darte.`,

  `Nunca olvides lo especial que eres. No por lo que haces o dices, sino por lo que eres: auténtica, fuerte, tierna, luminosa.

Espero que este cumpleaños marque el inicio de un año lleno de cosas hermosas, de logros, de paz interior y de momentos inolvidables. Yo quiero estar en todos ellos, contigo.`,

  `Feliz cumpleaños, mi vida.

Que este día esté lleno de amor, el mismo amor que yo siento por ti, multiplicado por mil. Eres mi todo, mi siempre, mi lugar seguro. 

Te amo con todo lo que soy. Hoy, mañana y siempre. 💖

– Gustavo`
];

let paginaActual = 0;

function mostrarPagina() {
  const contenedor = document.getElementById('pagina');
  contenedor.textContent = paginas[paginaActual];
}

function siguientePagina() {
  if (paginaActual < paginas.length - 1) {
    paginaActual++;
    mostrarPagina();
  }
}

function anteriorPagina() {
  if (paginaActual > 0) {
    paginaActual--;
    mostrarPagina();
  }
}

// Inicializar
mostrarPagina();
