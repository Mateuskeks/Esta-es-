const entrada = document.getElementById('entrada');
const p = document.getElementById('radio');
const btn = document.getElementById('btn');
const rdsalva = document.getElementById('rdslv')
let rad = [];

function arr(ra) {
  
  rad.unshift(parseInt(ra));
  rdsalva.innerHTML += `Estação: ${ra}  ` + '<br>';
  console.log(rad);
  
}

btn.addEventListener("click", () => {
  const radio = entrada.value;
  p.innerHTML = `Sua estação é: ${radio}`;
  
  arr(radio);
});


