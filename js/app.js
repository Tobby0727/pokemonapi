function buscar() {
  document.getElementById("contenido").innerHTML = ''
  valor = document.getElementById("pokemon").value
  cadena = ""
  //conexion a la api o ruta
  url = "https://pokeapi.co/api/v2/pokemon/" + valor
  fetch(url)
    .then(response => response.json())
    .then(data => visualizar(data))
    .catch(error => console.log(error))
  const visualizar = (data => {
    console.log(data)
    cadena = `Nombre: ${data.name} `
    cadena += `<img src=${data.sprites.front_default} width="300" height="300"></img>`
    cadena += `<img src=${data.sprites.front_shiny} width="300" height="300"></img>`
    document.getElementById("contenido").innerHTML = cadena

  })
}
