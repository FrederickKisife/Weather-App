const cityForm = document.querySelector("form");

cityForm.addEventListener("submit", e =>{
    // prevent default 
    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update the ui with new city

})