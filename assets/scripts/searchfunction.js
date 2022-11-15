const compass = ['first', 'second', 'third'];
const north = document.getElementById('locationsearchn');
const central = document.getElementById('locationsearchc');
const south = document.getElementById('locationsearchs');
    for (let i = 0; i < compass.length; i++);
    if (north != null){
        const locationsearchn = document.getElementById('locationsearchn');
        locationsearchn.addEventListener('keyup', e => {
            let currentValue = e.target.value.toLowerCase();
            let places = document.querySelectorAll('h3.nvntitle');
            places.forEach(place => {
                if (place.textContent.toLowerCase().includes(currentValue)) {
                    place.parentNode.parentNode.style.display = 'block';
                } else {
                    place.parentNode.parentNode.style.display = 'none';
                }
            });
        });
    } else if (central != null){
        const locationsearchc = document.getElementById('locationsearchc');
        locationsearchc.addEventListener('keyup', e => {
            let currentValue = e.target.value.toLowerCase();
            let places = document.querySelectorAll('h3.cvntitle');
            places.forEach(place => {
                if (place.textContent.toLowerCase().includes(currentValue)) {
                    place.parentNode.parentNode.style.display = 'block';
                } else {
                    place.parentNode.parentNode.style.display = 'none';
                }
            });
        });
    } else if (south != null){
        const locationsearchs = document.getElementById('locationsearchs');
        locationsearchs.addEventListener('keyup', e => {
            let currentValue = e.target.value.toLowerCase();
            let places = document.querySelectorAll('h3.svntitle');
            places.forEach(place => {
                if (place.textContent.toLowerCase().includes(currentValue)) {
                    place.parentNode.parentNode.style.display = 'block';
                } else {
                    place.parentNode.parentNode.style.display = 'none';
                }
            });
        });
    } 
