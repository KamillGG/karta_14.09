function zdj(id){
    console.log(id)
    if(id==1){
        document.getElementById('ajemdzi').src="mountains.jpg"
    }
    else if(id==2){
        document.getElementById('ajemdzi').src="2.avif"
    }
    else{
        document.getElementById('ajemdzi').src="angryBirds.jpg"
    }
}
function pzdr(){
    const numer = document.getElementById("numerki").value
    document.getElementById("cardNumber").innerHTML = numer

    const textValue = document.getElementById('cardNumber')
    const tekst =textValue.textContent
    console.log(tekst)
    let nowyTekst = ''
    if(textValue.length<=13){
        if(tekst.length<=13){
            for (let i = 0; i < tekst.length; i++) {
               
                nowyTekst += tekst[i];
                
                if ((i + 1) % 3 === 0 && i !== tekst.length - 1) {
                    if(nowyTekst.length<=13){
                    nowyTekst += ' ';}
                }
                
              
            }
            }
            textValue.textContent = nowyTekst;

}
}

function imie(){
    document.getElementById('imieh3').innerHTML = document.getElementById('imie').value
}
function dejta(){
    document.getElementById('dejtah3').innerHTML = `${document.getElementById('dataw').value.substring(2,4)}/${document.getElementById('dataw').value.substring(5,7)}`
}