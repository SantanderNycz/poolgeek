document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector(".formulario");
  const cardsContainer = document.querySelector(".cards__container");

  if (!formulario) {
    console.error("Formulário não encontrado!");
    return;
  }

  formulario
    .querySelector(".botoes--guardar")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Evita o envio do formulário

      // Captura os valores dos campos do formulário
      const nome = formulario.querySelector(
        'input[placeholder="Nome..."]'
      ).value;
      const valor = formulario.querySelector(
        'input[placeholder="Valor..."]'
      ).value;
      const imagem = formulario.querySelector(
        'input[placeholder="Imagem..."]'
      ).value;

      // Valida se os campos estão preenchidos
      if (!nome || !valor || !imagem) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      // Cria um novo card de produto
      const novoCard = document.createElement("div");
      novoCard.classList.add("card");

      novoCard.innerHTML = `
          <img class="box__card" src="${imagem}" alt="${nome}">
          <h3 class="img__nome">${nome}</h3>
          <div class="preco">
              <p>$${valor}</p>
          </div>
          <img class="lixeira" src="./assets/lixeira.png" alt="lixeira" height="32px" width="32px">
      `;

      // Adiciona o novo card ao container de cards
      cardsContainer.appendChild(novoCard);

      // Limpa os campos do formulário
      formulario.reset();
    });

  // Função para remover um produto ao clicar na lixeira
  cardsContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("lixeira")) {
      const card = event.target.closest(".card");
      if (card) {
        card.remove(); // Remove o card do DOM
      }
    }
  });
});
