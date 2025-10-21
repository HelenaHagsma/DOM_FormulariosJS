function calcular()
{
    var p, a, r, arredondamento
    p=document.getElementById("peso").value 
    a=document.getElementById("altura").value 
    if(p==""|| a==""){
        alert("Os campos não podem ficar vazios!")
    }
    else
    {
        r=parseFloat(p)/(parseFloat(a)**2)//calculo IMC
        arredondamento= r.toFixed(2)
        document.getElementById("resultado").innerHTML=`O seu índice de massa corporal é: ${arredondamento}`
    }
    //------------------------------------------------------------
     if(r<18.5) //peso abaixo do esperado
    {
        document.getElementById("feedback").innerHTML=`Abaixo do peso!`
        feedback.style.color= "#00BFFF"
    }

    if(r>18.5 && r<24.99) //peso normal
    {
        document.getElementById("feedback").innerHTML=`Peso normal.`
        feedback.style.color= "#00FF00"
    }

    if(r>25 && r<29.99) //acima do peso
    {
        document.getElementById("feedback").innerHTML=`Acima do peso!`
        feedback.style.color= "yellow"
    }

    if(r>30) //obesidade
    {
        document.getElementById("feedback").innerHTML=`Obesidade mórbida!`
        feedback.style.color= "red"
    }
}

   