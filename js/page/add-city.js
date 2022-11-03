function validarCities() {
    var ciudad = localStorage.getItem("CITIES");

}
if (!ifExist && cities != "") {
    Result.classlist.remove("alert-warning");
    Result.classlist.remove("alert-danger");
    old_cities.push(cities);
    Result.classlist.add("alert-success");
    Result.innerText = "ciudad agregada correctamente";
}
else if (cities == "") {
    Result.classlist.remove("alert-warning");
    Result.classlist.remove("alert-success");
    Result.classlist.remove("alert-danger");
    Result.innerText = "Complete los campos";
}
else if (ifExist){
    Result.classlist.remove("alert-danger");
    Result.classlist.remove("alert-success");
    Result.classlist.add("alert-warning");
    Result.innerText = "La ciudad ya se encuentra registrada";
}


$(document).ready(function () {
    $('#boton-guardar').click(function () {
       
        var ciudad = document.getElementById("cities").value;

        /*Guardando los datos en el LocalStorage*/
        sessionStorage.setItem("Cities", cities);
        /*Limpiando los campos o inputs*/
        document.getElementById("cities").value = "";
    });

    fetch("api.openweathermap.org/data/2.5/weather?q={nombreciudad}&appid={clave API}&units=metric&lang=es")
        .then((Response) => {
            console.log(Response)
        }).catch((error) => {
            console.log(error);
        });
    fetch("api.openweathermap.org/data/2.5/weather?q=Rosario&appid=3936d0749fdc3124c6566ed26XXXXX&units=metric&lang=es")
        .then((Response) => {
            console.log(Response)
        }).catch((error) => {
            console.log(error);
        });




    function getCitiesFromLocalStorage() {
        let ciudad = localStorage.getItem("CITIES");
        if (cities) {
            cities = JSON.parse(cities);
        } else {
            cities = [];
        }
        return cities;
    }
    function addNewCityToLocalStorage(newCity) {
        let ciudad = getCitiesFromLocalStorage();
        cities.push(newCity);
        localStorage.setItem(“cities”, JSON.stringify(cities));
    }


