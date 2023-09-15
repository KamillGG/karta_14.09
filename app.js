function zdj(id){
    console.log(id)
    
    document.getElementById('tilt').classList.add('slide-out-elliptic-top-bck')
    setTimeout(()=>{
        document.getElementById('tilt').classList.remove('slide-out-elliptic-top-bck')
        document.getElementById('tilt').classList.add('slide-in-elliptic-top-fwd')
        setTimeout(()=>{
            document.getElementById('tilt').classList.remove('slide-in-elliptic-top-fwd')
        },700)
        if(id==1){
            document.getElementById('ajemdzi').src="mountains.jpg"
            document.getElementById('backIMG').src="mountains.jpg"
            document.getElementById('child').style.color = "white"
        }
        else if(id==2){
            document.getElementById('ajemdzi').src="2.avif"
            document.getElementById('backIMG').src="2.avif"
            document.getElementById('child').style.color = "white"
        }
        else{
            document.getElementById('ajemdzi').src="angryBirds.jpg"
            document.getElementById('backIMG').src="angryBirds.jpg"
            document.getElementById('child').style.color = "black"
        }
    },700)
}
function pzdr(){
    const numer = document.getElementById("numerki").value
    // var realLength =  countReal()
    if(isFinite(numer)==true){
        const textValue = document.getElementById('cardNumber')
    
    textValue.innerHTML = numer
    var newStr= ''
    for(let i=0;i<=15;i++){
        if(numer[i]!=undefined){
            newStr += numer[i]
        if((i+1)%3==0 && (i+1)!=15){
            newStr+=" "
        }
        }
        else{
            newStr+="X"
            if((i+1)%3==0 && (i+1)!=15){
                newStr+=" "
            }
        }
    }
    
    textValue.innerHTML = newStr
}
else{
    var newtext =''
    for(let i=0;i<=numer.length-1;i++){
        console.log(newtext)
        if(isFinite(numer[i])==true){
            newtext += numer[i]
        }
    }
    document.getElementById('numerki').value = newtext       
}
}
function countReal(){
}
function imie(){
    document.getElementById('imieh3').innerHTML = document.getElementById('imie').value
}
function dejta(){
    document.getElementById('dejtah3').innerHTML = `${document.getElementById('dataw').value.substring(2,4)}/${document.getElementById('dataw').value.substring(5,7)}`
}
/* Store the element in el */
let el = document.getElementById('tilt')

/* Get the height and width of the element */
const height = el.clientHeight
const width = el.clientWidth

/*
  * Add a listener for mousemove event
  * Which will trigger function 'handleMove'
  * On mousemove
  */
el.addEventListener('mousemove', handleMove)

/* Define function a */
function handleMove(e) {
  /*
    * Get position of mouse cursor
    * With respect to the element
    * On mouseover
    */
  /* Store the x position */
  const xVal = e.layerX
  /* Store the y position */
  const yVal = e.layerY
  
  /*
    * Calculate rotation valuee along the Y-axis
    * Here the multiplier 20 is to
    * Control the rotation
    * You can change the value and see the results
    */
  const yRotation = 20 * ((xVal - width / 2) / width)
  
  /* Calculate the rotation along the X-axis */
  const xRotation = -20 * ((yVal - height / 2) / height)
  
  /* Generate string for CSS transform property */
  const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  
  /* Apply the calculated transformation */
  el.style.transform = string
}

/* Add listener for mouseout event, remove the rotation */
el.addEventListener('mouseout', function() {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

/* Add listener for mousedown event, to simulate click */
// el.addEventListener('mousedown', function() {
//   el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
// })

// /* Add listener for mouseup, simulate release of mouse click */
// el.addEventListener('mouseup', function() {
//   el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
// })
document.getElementById('tilt').addEventListener('mousedown',()=>{
    document.getElementById('tilt').classList.remove('slit-in-vertical')
    document.getElementById('tilt').classList.add('slit-out-vertical')
    setTimeout(()=>{
        document.getElementById('back').classList.add('slit-in-vertical')
    document.getElementById('back').style.zIndex = "20"
    },450)
})
document.getElementById('back').addEventListener('mouseup',()=>{
    console.log('ok')
    
    document.getElementById('back').classList.remove('slit-in-vertical')
    document.getElementById('back').classList.add('slit-out-vertical')
    setTimeout(()=>{
        
    document.getElementById('tilt').classList.remove('slit-out-vertical')
        document.getElementById('tilt').classList.add('slit-in-vertical')
    document.getElementById('back').style.zIndex = "-20"
    setTimeout(()=>{
        document.getElementById('tilt').classList.remove('slit-in-vertical')
    },450)
    },450)
})