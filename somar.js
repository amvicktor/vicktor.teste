const prompt=require('prompt-sync')();
let n1=prompt('Digite o 1° número: ');
let n2=prompt("Digite o 2° número: ");
let num1=parseInt(n1);
let num2=parseInt(n2);
console.log(num1+num2);
if((isNaN(num1)) || (isNaN(num2))){
    console.log("Entrada invalida.Digite um número");
 
}else{
    let soma=n1 + n2;
}
