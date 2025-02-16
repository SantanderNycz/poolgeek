import { conectaApi } from "./conectaAPI.js";
import { apagarCard } from "./apagaCard.js";

const lista = document.querySelector("[data-lista]");

/* id adicionado como argumento, para o attributo customizado data-id para armazenar o id do objeto associado ao card*/
function constroiCard(imagem, nome, valor, id) {
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute(
    "data-id",
    id
  ); /* adicionado attributo para armazenar o id do card */
  card.innerHTML = ` <div class="imagem">
        <img src="${imagem}" alt="">
        <h4>${nome}</h4>
    </div>

    <div class="frame2">
        <p>$ ${valor}</p>
            <img id="lixo" src="images/lixeira.png">
</div>
    `;
  const lixeira = card.querySelector("#lixo");
  lixeira.addEventListener("click", async () => {
    const id = card.getAttribute("data-id");
    card.remove();
    await apagarCard(id); //chama a função apagar card
  });

  return card;
}

async function listaFotos() {
  const listaApi = await conectaApi.listaFotos();
  listaApi.forEach((elemento) =>
    lista.appendChild(
      constroiCard(elemento.imagem, elemento.nome, elemento.valor, elemento.id)
    )
  );
}
listaFotos();
