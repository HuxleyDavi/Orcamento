document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function (){

    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML=`Prazo: ${prazo} semanas`
    atualizarPreco()
})

function atualizarPreco(){

    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    let preco = qtde * 100
    if (temJS) preco *= 1.1
    const incluiLayout = document.querySelector("#layout-sim").checked
    if (incluiLayout) preco += 500
    const prazo = document.querySelector("#prazo").value
    let taxaUrgencia = 1 - prazo*0.1;
    preco *= 1 + taxaUrgencia

    document.querySelector("#preco").innerHTML = `Total: R$ ${preco.toFixed(2)}`
}
