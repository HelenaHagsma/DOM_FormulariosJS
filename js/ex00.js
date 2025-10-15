//função soma//////
function somar()
{
    var v1, v2, r
    v1=document.getElementById("primeirovalor").value //busca o elemento no html pelo id, o .value pega o valor do que foi digitado no input, e não a caixa de texto inteira
    v2=document.getElementById("segundovalor").value 
    if(v1=="" || v2== "") //condição para que o usuário não deixe os campos vazios
    {
        alert("Os campos devem ser preenchidos.")
    }
    else
    {
        r=parseFloat(v1)+parseFloat(v2) // parseFloat transforma a string da caixa de texto input para um valor numérico
        document.getElementById("resultadosoma").innerHTML=`O resultado da soma é: ${r}`
    }
}
//função subtração//////
function subtrair()
{
    var v1, v2, r
    v1=document.getElementById("primeirovalor").value
    v2=document.getElementById("segundovalor").value
    if(v1=="" || v2=="")
    {
        alert("Os campos devem ser preenchidos.")
    }
    else{
        r=parseFloat(v1)-parseFloat(v2)
        document.getElementById("resultadosubtração").innerHTML=`O resultado da subtração é: ${r}`
    }
}
//função multiplicação//////
function multiplicar()
{
    var v1, v2, r
    v1=document.getElementById("primeirovalor").value
    v2=document.getElementById("segundovalor").value
    if(v1=="" || v2=="")
    {
        alert("Os campos devem ser preenchidos.")
    }
    else
    {
        r=parseFloat(v1)*parseFloat(v2)
        document.getElementById("resultadomultiplicação").innerHTML=`O resultado da multiplicação é: ${r}`
    }
}
//função divisão//////
function dividir()
{
    var v1, v2, r 
    v1=document.getElementById("primeirovalor").value
    v2=document.getElementById("segundovalor").value
    if(v1=="" || v2=="0")
    {
        alert("Os campos devem ser preenchidos e o segundo elemento não pode ser igual a zero.")
    }
    else
    {
        r=parseFloat(v1)/parseFloat(v2)
        document.getElementById("resultadodivisão").innerHTML=`O resultado da divisão é: ${r}`
    }
}