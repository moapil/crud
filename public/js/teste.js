const endpoint = 'http://localhost:3000/grafic'

let qtde_array = []
let nome_array = []

fetch(endpoint, {

    method: "GET",
    heeaders: {
        'Content-Type':'application/json',
    }
})
.then(resposta => resposta.json())
console.log(resposta)