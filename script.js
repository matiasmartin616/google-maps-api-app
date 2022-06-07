//Ejercicio 1
async function obtenerUsers() {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => (arrayUsers = json));
      console.log("array users");
      console.log(arrayUsers);

    const mapa = new Map();
    arrayUsers.forEach((element) => {
      mapa.set(element.username, element.address.geo);
      
    return mapa;
    });
  }
  console.log("EJERCICIO 1: ");

  //Ejercicio 2
  console.log(
    "EJERCICIO 2 - URL generada: https://maps.googleapis.com/maps/api/js?key=AIzaSyB7AhavSIKdHXy8aTenvv9pEzYzG5sz-DU&callback=initMap"
  );
  //Ejercicio 3 y ejercicio 4
 function load() 
{
    const mapaUsers = obtenerUsers();
    console.log(mapaUsers);
    let mapDiv = document.getElementById("map");
    let centrarMapa = new google.maps.LatLng(-10.397, 150.644);
    const mapOptions = 
    {
        zoom: 8,
        center:centrarMapa
    };
    //generar mapa
    let map = new google.maps.Map(mapDiv, mapOptions);
   
    //añadir markers
   mapaUsers.forEach((user)=>{
    let marker = new google.maps.Marker({  
        position: new google.maps.LatLng(parseFloat(user.lng), parseFloat(user.lat)),
        map: map
    })})
   
}