
//try catch
async function buscarAlgo () {
  try {
    const resposta = await fetch("url")
    const data = await resposta.json()  //converte para objeto
    console.log(data)
  } catch (erro) {
      console.error(erro)
  }
}

//.then() .catch()
fetch("url")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(erro => console.error(erro))




