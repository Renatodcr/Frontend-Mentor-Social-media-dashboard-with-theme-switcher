function animaNumeros() {
  const numeros = document.querySelectorAll('[data-numero]');

  numeros.forEach((numero) => {
    const total = +numero.innerText;
    const inscremento = Math.floor(total / 100);

    let start = 0;
    const timer = setInterval(() => {
      start += inscremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 30 * Math.random());

  });
}
animaNumeros();

function temas() {
  const classAtivo = document.querySelectorAll('.ativo');
  const btn = document.querySelector('.button');

  function mudarTema(e) {
    e.preventDefault();
    classAtivo.forEach((item) => {
      item.classList.toggle('ativo');
    });
    animaNumeros();
  }

  btn.addEventListener('click', mudarTema);
}
temas();
