const h1 = document.querySelector('h1');
const form = document.querySelector('#form'); 
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', sumarInputValues)

function sumarInputValues(event) {
  // console.log({event});
  // event.preventDefault();
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}






//Estas son de otras clase donde se cambian los atributos y de paso tambien hacemos cosas de htl directamente dentro de un archivo javascript
//console.log(input.value);

// console.log({
//     h1,
//     p,
//     Parrafito,
//     pid,
//     input,

// });

//h1.innerHTML = 'Patito <br> Feo';
//h1.innerText = 'Patito <br> Feo';
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');

//h1.classList.add('rojo');
//h1.classList.remove('Verde');
//h1.classList.toggle('rojo'); para que tanto se agregue como que no se agregue, cada vez que se active
//h1.classList.contains('rojo'); true o false dependiendo de la clase que le estemos preguntando



//const img = document.createElement('img');
//img.setAttribute('src', 'https://static.wikia.nocookie.net/doblaje/images/8/8d/One_Piece.png/revision/latest/scale-to-width-down/1000?cb=20190727212440&path-prefix=es');
//console.log(img);

//pid.innerHTML=" ";
//pid.append(img);