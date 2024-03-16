/*Para fazer a lógica do menu, de aparecer e sumir quando clicado, vamos usar uma classe que me diga se o menu está aberto ou fechado, essa classe vai posicionar o menu no local correto, quando não tiver essa classe ele ficará oculto mudando a propriedade right para fora da tela e quando tiver ele aparece colocando a propriedade right para zero, usando o TOGGLE no JavaScript.

O toggle é um elemento de interface que permite alternar entre dois estados, geralmente representados por um botão que pode ser clicado para ativar ou desativar uma determinada funcionalidade.
*/

document.querySelector('.hamburguer').addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);