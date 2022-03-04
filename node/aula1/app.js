const { default: axios } = require("axios")
const mod1 = require(`./mod1`)
console.log(mod1)

axios(`http://liuizn.42web.io/teste.json`)
    .then(response => console.log(response.data))
    .catch(e => console.log(e));
    var teste= `teste`