function converter()
{
    var cotDolar, vr, vd /*vr - valor em reais | vd - valor em dolar */
    cotDolar=document.getElementById("cotacaoDolar").value
    vr=document.getElementById("valorReais").value
    if(cotDolar=="" || vr=="")
    {
        alert("Os campos não podem ficar vazios.")
    }
    else
    {
        vd=parseFloat(cotDolar)*parseFloat(vr)
        document.getElementById("conversao").innerHTML=`A conversão do valor de real para dólar é: ${vd}`
    }
}