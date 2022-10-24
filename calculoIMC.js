function calcularIMC() {
  let altura = parseFloat(document.getElementById("altura").value);
  let peso = parseFloat(document.getElementById("peso").value);
  let imc = peso / (altura * altura);
  let imcResult = "";
  if (imc < 18.5) {
    imcResult = "abaixo do normal";
  } else if (imc >= 18.5 && imc < 25) {
    imcResult = "normal";
  } else if (imc >= 25 && imc < 30) {
    imcResult = "sobrepeso";
  } else if (imc >= 30 && imc < 40) {
    imcResult = "obesidade";
  } else {
    imcResult = "obesidade grave";
  }
  document.getElementById("resultado").innerHTML = "Seu IMC é: " + imc;
  document.getElementById("descricaoResultado").innerHTML = "Seu IMC indica que " +
    "seu peso está " + imcResult;
}

function limpar() {
  document.getElementById("altura").value = 0;
  document.getElementById("peso").value = 0;
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("descricaoResultado").innerHTML = "";

}