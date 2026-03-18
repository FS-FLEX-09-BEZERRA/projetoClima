//----------------------------------------------------------------
// FORMAS DE CHAMAR O FETCH
//try catch
// async function buscarAlgo () {
//   try {
//     const resposta = await fetch("url")
//     const data = await resposta.json()  //converte para objeto
//     console.log(data)
//   } catch (erro) {
//       console.error(erro)
//   }
// }

//.then() .catch()
// fetch("url")
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(erro => console.error(erro))

//-------------------------------------------------
//FORMAS DE USAR ADDEVENTLISTENER

// const form = document.querySelector("#form")
//evento submit quando for formulário
// form.addEventListener("submit", () => {

// })

// // evento clique quando for no botão
// button.addEventListener("click", () => {

// })

//--------------------------------------------------

async function buscarClimaCidade(event) {
  event.preventDefault()
  const cidade = document.getElementById("cidade").value
  const loading = document.getElementById("loading")
  try {
    if (!cidade) {
      console.log("cidade é obrigatório")
      return
    }
    loading.classList.remove("hidden")
    const APIkey = "22239c8a61c9640117c190e171a86ae2"
    const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${APIkey}&units=metric&lang=pt_br`)
    const dados = await resposta.json()
    mostrarDados(dados)
    console.log(dados)
    loading.classList.add("hidden")
  } catch (error) {
    console.error(error)
  }
}

function mostrarDados(dados) {
  const resultado = document.getElementById("resultado")

  resultado.innerHTML = `
  <h2 class="text-xl font-bold">${dados.name}</h2>
  <img alt="icone clima" class="mx-auto" src="https://openweathermap.org/payload/api/media/file/${dados.weather[0].icon}.png">
  <p>${dados.weather[0].description}</p>
  <span>${parseInt(dados.main.temp)}ºC</span>
  <div class="flex justify-between px-10">
    <span>${parseInt(dados.main.feels_like)}ºC</span>
    <span>${dados.main.humidity}%</span>
  </div>
  `
}
