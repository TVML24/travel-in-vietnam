const linkfood = document.getElementById('link-food');
const linkplace = document.getElementById('link-place');
const absenceimage = document.getElementById('absence');
const placeimage = document.getElementById('nplace');
const absenceimagetwo = document.getElementById('absence-two');
const foodimage = document.getElementById('nfood');
    
linkplace.addEventListener('mouseover', e => { 
        absenceimage.style.display = "none";
        placeimage.style.display = "inline";  
})
linkplace.addEventListener('mouseout', e => { 
    absenceimage.style.display = "inline";
    placeimage.style.display = "none";  
})
linkfood.addEventListener('mouseover', e => {
    absenceimagetwo.style.display = "none";
    foodimage.style.display = "inline";  
})
linkfood.addEventListener('mouseout', e => {
    absenceimagetwo.style.display = "inline";
    foodimage.style.display = "none";  
})
