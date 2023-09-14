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
    const textValue = document.getElementById('cardNumber')
    textValue.innerHTML = numer
    var newStr= ''
    for(let i=0;i<=numer.length-1;i++){
        newStr += numer[i]
        if((i+1)%4==0){
            newStr+=" "
        }
    }
    textValue.innerHTML = newStr

}

function imie(){
    document.getElementById('imieh3').innerHTML = document.getElementById('imie').value
}
function dejta(){
    document.getElementById('dejtah3').innerHTML = `${document.getElementById('dataw').value.substring(2,4)}/${document.getElementById('dataw').value.substring(5,7)}`
}