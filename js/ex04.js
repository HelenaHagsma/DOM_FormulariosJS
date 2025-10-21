function calcular()
{
    var pa=[]
    var primeirovalor, razao, termos, r 
    primeirovalor=parseFloat(document.getElementById("primeirovalor").value)
    razao=parseFloat(document.getElementById("razao").value)
    termos=parseFloat(document.getElementById("termos").value)

    if(primeirovalor==""|| razao==""|| termos=="")
    {
        alert("Os campos precisam ser preenchidos!")
    }
    else
    {
        for(i=0; i<=termos; i++)
        {
            r= primeirovalor + i * razao //fórmula da PA
            pa.push(r)
        }
    
    document.getElementById("resultado").innerHTML=`A sequência da PA é: ${pa.join(", ")}` /*SEQUÊNCIA DA PA SEPARADA POR VÍRGULAS */
    }
}