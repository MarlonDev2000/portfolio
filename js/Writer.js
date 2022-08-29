function Writer(e){
  const textoArray = e.innerHTML.split('');
  e.innerHTML = ' ';
  textoArray.forEach(function(letra, i){   
    setTimeout(() => {
      e.innerHTML += letra;
    }, 250 * i)
  });
}
const titulo = document.querySelector('.home-text--span');
Writer(titulo);

